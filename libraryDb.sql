-- Creates the database for the library management system,
-- the tables for members, books, and checkouts, and
-- inserts entries for members and books

CREATE DATABASE IF NOT EXISTS LibraryDb;

USE LibraryDb;

CREATE TABLE members(
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    member_type ENUM('Admin', 'Faculty', 'Student', 'Guest') DEFAULT 'Guest'
);

CREATE TABLE books(
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    cover_image VARCHAR(255),
    status ENUM('Available', 'Issued') DEFAULT 'Available'
);

CREATE TABLE checkOuts(
    checkout_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL, 
    book_id INT NOT NULL,
    date_borrowed DATE NOT NULL, 
    date_due DATE NOT NULL,
    date_returned DATE,
    FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(book_id) ON DELETE CASCADE
);

INSERT INTO members(first_name, last_name, email, password, phone, member_type)
VALUES
('Fady', 'Sam', 'fsam@mtsu.edu', 'placeholder8454', '6151234567', 'Admin');

INSERT INTO books(ISBN, title, author, category, cover_image, status) -- google books api used for data
VALUES
('9781783190614', '1984', 'George Orwell', 'Drama', 'http://books.google.com/books/content?id=dFgbnwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'Available'),
('9780881030525', 'To Kill a Mockingbird', 'Harper Lee', 'Fiction', 'http://books.google.com/books/content?id=NeMtSAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Available'),
('9780425176511', 'The Murder of Roger Ackroyd','Agatha Christie','Fiction','http://books.google.com/books/content?id=_PlyYMKBjToC&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Available'),
('9780007149124', 'Tales from the Perilous Realm','John Ronald Reuel Tolkien','Fairy tales','http://books.google.com/books/content?id=Wla7NwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Available'),
('9780007149612', 'Breaking Open the Head','Daniel Pinchbeck','Hallucinogenic drugs','http://books.google.com/books/content?id=QIMaviqqoQoC&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Available'),
('9780007149827', 'The Yiddish Policemen''s Union','Michael Chabon','Fiction','http://books.google.com/books/content?id=-reD1g77BfsC&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Available'),
('9780007150304', 'Beware, Princess Elizabeth','Carolyn Meyer', 'Children''s stories','http://books.google.com/books/content?id=wPBpR4AFNJ0C&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Available'),
('9780007151240', 'The Family Way','Tony Parsons','Parenthood','http://books.google.com/books/content?id=dJEIxdYmnU8C&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Available'),
('9780007151677', 'Endless Night','Agatha Christie','Fiction','http://books.google.com/books/content?id=kY1wuNfgmFQC&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Available'),
('9780007153589', 'How to be Alone','Jonathan Franzen', 'Literary Collections','http://books.google.com/books/content?id=ozVWaXd9xvwC&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Available');