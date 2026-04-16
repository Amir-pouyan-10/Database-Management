from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import or_

from .db import Base, engine, get_db
from .models import Member, Book, Checkout
from .schemas import *
from .security import hash_password, verify_password

Base.metadata.create_all(bind=engine)

app = FastAPI(title="LibraryDb Backend API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/api/members")
def create_member(payload: MemberCreate, db: Session = Depends(get_db)):
    existing = db.query(Member).filter(Member.email == payload.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already exists")
    m = Member(
        first_name=payload.first_name,
        last_name=payload.last_name,
        email=payload.email,
        password=hash_password(payload.password),
        phone=payload.phone,
        member_type=payload.member_type
    )
    db.add(m)
    db.commit()
    return {"message": "Member created"}

@app.post("/api/auth/login")
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(Member).filter(Member.email == payload.email).first()
    if not user or not verify_password(payload.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"member_id": user.member_id, "member_type": user.member_type}

@app.get("/api/books")
def list_books(db: Session = Depends(get_db)):
    return db.query(Book).all()

@app.get("/api/books/search")
def search_books(q: str, db: Session = Depends(get_db)):
    like = f"%{q}%"
    return db.query(Book).filter(
        or_(Book.title.like(like),
            Book.author.like(like),
            Book.category.like(like),
            Book.ISBN.like(like))
    ).all()

@app.post("/api/checkouts/borrow")
def borrow_book(payload: BorrowRequest, db: Session = Depends(get_db)):
    book = db.query(Book).filter(Book.book_id == payload.book_id).first()
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    if book.status != "Available":
        raise HTTPException(status_code=400, detail="Book already issued")
    checkout = Checkout(
        member_id=payload.member_id,
        book_id=payload.book_id,
        date_borrowed=payload.date_borrowed,
        date_due=payload.date_due
    )
    book.status = "Issued"
    db.add(checkout)
    db.commit()
    return {"message": "Book borrowed successfully"}

@app.post("/api/checkouts/return")
def return_book(payload: ReturnRequest, db: Session = Depends(get_db)):
    checkout = db.query(Checkout).filter(Checkout.checkout_id == payload.checkout_id).first()
    if not checkout:
        raise HTTPException(status_code=404, detail="Checkout not found")
    checkout.date_returned = payload.date_returned
    book = db.query(Book).filter(Book.book_id == checkout.book_id).first()
    book.status = "Available"
    db.commit()
    return {"message": "Book returned successfully"}
