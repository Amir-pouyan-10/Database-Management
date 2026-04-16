from pydantic import BaseModel
from typing import Optional
from datetime import date

class MemberCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    phone: str
    member_type: str = "Guest"

class LoginRequest(BaseModel):
    email: str
    password: str

class BookCreate(BaseModel):
    ISBN: str
    title: str
    author: str
    category: str
    cover_image: Optional[str] = None

class BorrowRequest(BaseModel):
    member_id: int
    book_id: int
    date_borrowed: date
    date_due: date

class ReturnRequest(BaseModel):
    checkout_id: int
    date_returned: date
