export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  publisher: string;
  publishedYear: number;
  pages: number;
  language: string;
  available: number;
  total: number;
  description: string;
  coverImage: string;
  rating: number;
  reviews: number;
}

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson",
    isbn: "978-0262033848",
    category: "Computer Science",
    publisher: "MIT Press",
    publishedYear: 2009,
    pages: 1312,
    language: "English",
    available: 3,
    total: 5,
    description: "A comprehensive textbook covering all aspects of computer algorithms. This book is widely used as a textbook for algorithms courses at many universities and is commonly cited as a reference for algorithms in published papers.",
    coverImage: "https://images.unsplash.com/photo-1732304722020-be33345c00c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvbXB1dGVyJTIwYm9va3xlbnwxfHx8fDE3NzEzNTIwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 284
  },
  {
    id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    category: "Fiction",
    publisher: "Scribner",
    publishedYear: 1925,
    pages: 180,
    language: "English",
    available: 5,
    total: 8,
    description: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when, The New York Times remarked, 'gin was the national drink and sex the national obsession.'",
    coverImage: "https://images.unsplash.com/photo-1752243731865-c2fa851af7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9uJTIwbm92ZWx8ZW58MXx8fHwxNzcxMzE2ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 542
  },
  {
    id: "3",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    isbn: "978-0062316097",
    category: "History",
    publisher: "Harper",
    publishedYear: 2015,
    pages: 443,
    language: "English",
    available: 2,
    total: 6,
    description: "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be 'human.'",
    coverImage: "https://images.unsplash.com/photo-1632038585992-fecf8a0cf59d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3J5JTIwYm9vayUyMHN0YWNrfGVufDF8fHx8MTc3MTM1MjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 891
  },
  {
    id: "4",
    title: "Physics for Scientists and Engineers",
    author: "Raymond A. Serway, John W. Jewett",
    isbn: "978-1133947271",
    category: "Science",
    publisher: "Cengage Learning",
    publishedYear: 2013,
    pages: 1552,
    language: "English",
    available: 4,
    total: 7,
    description: "Achieve success in your physics course by making the most of what this textbook has to offer. Learn how to effectively read an assigned physics chapter, identify key concepts, and approach problem-solving in a systematic way.",
    coverImage: "https://images.unsplash.com/photo-1725870475677-7dc91efe9f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwdGV4dGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NzEyOTg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.3,
    reviews: 156
  },
  {
    id: "5",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    isbn: "978-0132350884",
    category: "Computer Science",
    publisher: "Prentice Hall",
    publishedYear: 2008,
    pages: 464,
    language: "English",
    available: 1,
    total: 4,
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. This book will teach you how to write good code through examples and patterns.",
    coverImage: "https://images.unsplash.com/photo-1732304722020-be33345c00c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvbXB1dGVyJTIwYm9va3xlbnwxfHx8fDE3NzEzNTIwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 432
  },
  {
    id: "6",
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    category: "Fiction",
    publisher: "Signet Classic",
    publishedYear: 1949,
    pages: 328,
    language: "English",
    available: 0,
    total: 5,
    description: "Written in 1948, 1984 was George Orwell's chilling prophecy about the future. A novel set in a dystopian future where totalitarian rule has been established, eliminating most human freedoms.",
    coverImage: "https://images.unsplash.com/photo-1752243731865-c2fa851af7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9uJTIwbm92ZWx8ZW58MXx8fHwxNzcxMzE2ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 1245
  },
  {
    id: "7",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    isbn: "978-0553380163",
    category: "Science",
    publisher: "Bantam",
    publishedYear: 1988,
    pages: 256,
    language: "English",
    available: 3,
    total: 5,
    description: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking's book explores such profound questions as: How did the universe begin—and what made its start possible?",
    coverImage: "https://images.unsplash.com/photo-1725870475677-7dc91efe9f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwdGV4dGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NzEyOTg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.4,
    reviews: 678
  },
  {
    id: "8",
    title: "The Rise and Fall of the Roman Empire",
    author: "Edward Gibbon",
    isbn: "978-0140433937",
    category: "History",
    publisher: "Penguin Classics",
    publishedYear: 1776,
    pages: 3984,
    language: "English",
    available: 2,
    total: 3,
    description: "Gibbon's masterwork chronicles 1,300 years of history from the height of the Roman Empire through the fall of Byzantium. Considered one of the greatest history books ever written.",
    coverImage: "https://images.unsplash.com/photo-1632038585992-fecf8a0cf59d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3J5JTIwYm9vayUyMHN0YWNrfGVufDF8fHx8MTc3MTM1MjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 234
  }
];

export const categories = [
  "All Categories",
  "Computer Science",
  "Fiction",
  "History",
  "Science",
  "Mathematics",
  "Engineering",
  "Literature"
];
