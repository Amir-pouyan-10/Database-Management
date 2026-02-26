Library Management System

CSCI 4560 / 5560 – Database Management Systems
Spring 2026 – Semester Project

Team Members

Beshoy Azrak

Marco Osorio

Amir Pouyan

Karas Mikhael

Project Overview

The Library Management System (LMS) is a full-stack database-driven application designed to streamline and automate common library operations such as:

Searching for books

Borrowing and returning books

Managing member accounts

Tracking overdue books

Admin management and reporting

The system ensures data integrity, relational consistency, and optimized performance using MySQL and RESTful API architecture.

Project Objectives

Design a normalized relational database (3NF)

Implement primary and foreign key constraints

Enforce referential integrity

Prevent duplicate or invalid transactions

Use optimized SQL queries with JOIN, GROUP BY, and indexing

Connect frontend and backend to a MySQL database

System Architecture

Frontend (React JS)
⬇
Backend (FastAPI – Python)
⬇
Database (MySQL)

The system follows a RESTful API structure where the backend handles business logic and database transactions.

Database Schema
Members Table

member_id (Primary Key)

first_name

last_name

email (Indexed)

password

phone

member_type (ENUM: Admin, Faculty, Student, Guest)

Books Table

book_id (Primary Key)

isbn

title

author

category

cover_image

status (ENUM: Available, Issued)

Checkouts Table

checkout_id (Primary Key)

member_id (Foreign Key → members)

book_id (Foreign Key → books)

date_borrowed

date_due

date_returned

Database Integrity & Constraints

Primary Keys enforce uniqueness

Foreign Keys maintain referential integrity

ENUM types restrict invalid values

NOT NULL constraints prevent missing critical data

Transactions ensure ACID compliance

Indexing improves search performance

⚡ Example Advanced SQL Queries
1️ Overdue Books
SELECT m.first_name, m.last_name, b.title, c.date_due
FROM checkouts c
JOIN members m ON c.member_id = m.member_id
JOIN books b ON c.book_id = b.book_id
WHERE c.date_returned IS NULL
AND c.date_due < CURDATE();
2 Count Books Borrowed Per Member
SELECT m.member_id, m.first_name, COUNT(c.checkout_id) AS total_borrowed
FROM members m
LEFT JOIN checkouts c ON m.member_id = c.member_id
GROUP BY m.member_id;
3️ Index Optimization
CREATE INDEX idx_member_email ON members(email);

This improves login and search performance.

Backend Responsibilities (FastAPI)

Validate book availability before checkout

Ensure member exists before borrowing

Handle return transactions

Update book status automatically

Prevent duplicate checkouts

Process JSON API requests

Frontend Features (React)

Login Page (Authentication)

Dashboard Overview

Book Search Page

Book Details Page

Borrow / Return Actions

Admin Management Panel

Transaction History Page

🧪 Data Integrity Measures

Transactions prevent partial updates

ACID properties ensure safe operations

Status updates automatically reflect real-time availability

Validation prevents invalid user actions

How to Run the Project
1 Clone Repository
git clone https://github.com/Amir-pouyan-10/Database-Management.git
2 Setup MySQL

Import libraryDb.sql

Ensure MySQL server is running

3️ Backend Setup
pip install -r requirements.txt
uvicorn main:app --reload
4️ Frontend Setup
cd Frontend
npm install
npm start
Future Improvements

Add role-based access control

Add automated overdue notifications

Implement stored procedures

Add advanced reporting queries

Implement query performance analysis
