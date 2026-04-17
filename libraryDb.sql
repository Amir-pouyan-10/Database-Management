-- Creates the database for the library management system,
-- the tables for members, books, and checkouts, and
-- inserts entries for members and books

CREATE DATABASE IF NOT EXISTS LibraryDb;

USE LibraryDb;

-- password should be hashed in the backend
CREATE TABLE IF NOT EXISTS members(
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    member_type ENUM('Admin', 'Faculty', 'Student', 'Guest') DEFAULT 'Guest'
);

CREATE TABLE IF NOT EXISTS books(
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    cover_image VARCHAR(255),
    status ENUM('Available', 'Issued') DEFAULT 'Available'
);

CREATE TABLE IF NOT EXISTS checkOuts(
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


-- in books table add page count
-- remove status and replace it with total copies and copies available
alter table books add page_count int;
alter table books drop column status;
alter table books add copies_total int;
alter table books add copies_available int;

-- update existing records with data for new columns
update books set page_count = 276, copies_total = 4, copies_available = 4, category = 'Fiction'
where book_id = 1;
update books set page_count = 338, copies_total = 2, copies_available = 2
where book_id = 2;
update books set page_count = 273, copies_total = 1, copies_available = 1
where book_id = 3;
update books set page_count = 444, copies_total = 2, copies_available = 2
where book_id = 4;
update books set page_count = 320, copies_total = 3, copies_available = 3
where book_id = 5;
update books set page_count = 468, copies_total = 4, copies_available = 4
where book_id = 6;
update books set page_count = 228, copies_total = 5, copies_available = 5
where book_id = 7;
update books set page_count = 528, copies_total = 3, copies_available = 3
where book_id = 8;
update books set page_count = 244, copies_total = 2, copies_available = 2
where book_id = 9;
update books set page_count = 337, copies_total = 2, copies_available = 2
where book_id = 10;

-- Also changed password for the first inserted user
update members set password = '982239'
where member_id = 1;

-- Add more books
INSERT INTO books(ISBN, title, author, category, cover_image, page_count, copies_total, copies_available)
VALUES
('9788184834581', 'Steve Jobs', 'Walter Issacson', 'Not Available', 'http://books.google.com/books/content?id=KxlKBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 767, 6, 6),
('9781616893507', 'Thinking with Type', 'Ellen Lupton', 'Design', 'http://books.google.com/books/content?id=Ve9DAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 226, 2, 2),
('9781479196456', 'Think and Grow Rich', 'Napoleon Hll', 'Self-Help', 'http://books.google.com/books/content?id=FFCNMgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 222, 4, 4),
('9780674257696', 'A Theory of Justice', 'John Rawls', 'Philosophy', 'http://books.google.com/books/content?id=BkP2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 624, 5, 5),
('9781481444422', 'City of Heavenly Fire', 'Cassandra Clare', 'Juvenile Fiction', 'http://books.google.com/books/content?id=hf1wCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 768, 2, 2),
('9780062286710', 'Eat to Live Cookbook','Joel Fuhrman', 'Health & Fitness','http://books.google.com/books/content?id=sSu2O1cK77gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 399, 3, 3),
('9780739326749', 'The Da Vinci Code', 'Dan Brown', 'Fiction', 'http://books.google.com/books/content?id=B5VdguEufEcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 754, 2, 2),
('9781724819055', 'War and Peace', 'Leo Tolstoy', 'Not Available','http://books.google.com/books/content?id=OInSugEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 828, 1, 1),
('9781119557678', 'Python All-in-One For Dummies','John C. Shovic', 'Computers','http://books.google.com/books/content?id=C62SDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 707, 4, 4),
('9781593279929', 'Automate the Boring Stuff with Python, 2nd Edition', 'Al Sweigart"', 'Computers', 'http://books.google.com/books/content?id=TVz6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 593, 3, 3);

-- Add more users
INSERT INTO members(first_name, last_name, email, password, phone, member_type) 
VALUES
('James', 'Johnson', 'jjohnsonm@mtsu.edu', '098123', '6151634467', 'Faculty');
INSERT INTO members(first_name, last_name, email, password, phone, member_type) 
VALUES
('John', 'Smith', 'jsmith@mtsu.edu', '482341', '6151234577', 'Student');
INSERT INTO members(first_name, last_name, email, password, phone, member_type) 
VALUES
('Jane', 'Doe', 'jdoe@mtsu.edu', '345320', '6152234597', 'Guest');















