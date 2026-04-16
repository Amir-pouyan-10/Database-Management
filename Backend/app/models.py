from sqlalchemy import Column, Integer, String, Enum, Date, ForeignKey
from sqlalchemy.orm import relationship
from .db import Base

class Member(Base):
    __tablename__ = "members"
    member_id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(30), nullable=False)
    last_name = Column(String(30), nullable=False)
    email = Column(String(50), nullable=False)
    password = Column(String(255), nullable=False)
    phone = Column(String(15), nullable=False)
    member_type = Column(Enum("Admin", "Faculty", "Student", "Guest"), default="Guest")
    checkouts = relationship("Checkout", back_populates="member")

class Book(Base):
    __tablename__ = "books"
    book_id = Column(Integer, primary_key=True, autoincrement=True)
    ISBN = Column(String(20), nullable=False)
    title = Column(String(255), nullable=False)
    author = Column(String(255), nullable=False)
    category = Column(String(100), nullable=False)
    cover_image = Column(String(255))
    status = Column(Enum("Available", "Issued"), default="Available")
    checkouts = relationship("Checkout", back_populates="book")

class Checkout(Base):
    __tablename__ = "checkOuts"
    checkout_id = Column(Integer, primary_key=True, autoincrement=True)
    member_id = Column(Integer, ForeignKey("members.member_id"))
    book_id = Column(Integer, ForeignKey("books.book_id"))
    date_borrowed = Column(Date, nullable=False)
    date_due = Column(Date, nullable=False)
    date_returned = Column(Date)
    member = relationship("Member", back_populates="checkouts")
    book = relationship("Book", back_populates="checkouts")
