import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  available: number;
  total: number;
  status: string;
};

const defaultBooks: Book[] = [
  {
    id: 1,
    title: "Database Systems",
    author: "Ramez Elmasri",
    category: "Database",
    available: 4,
    total: 6,
    status: "Available",
  },
  {
    id: 2,
    title: "Operating Systems",
    author: "Abraham Silberschatz",
    category: "Systems",
    available: 0,
    total: 3,
    status: "Out of Stock",
  },
];

export default function AdminBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [available, setAvailable] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    const savedBooks = localStorage.getItem("admin_books");
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      setBooks(defaultBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("admin_books", JSON.stringify(books));
  }, [books]);

  const getStatus = (availableCopies: number) => {
    if (availableCopies <= 0) return "Out of Stock";
    if (availableCopies <= 2) return "Low Stock";
    return "Available";
  };

  const handleAddBook = () => {
    if (!title || !author || !category || !available || !total) {
      alert("Please fill in all fields.");
      return;
    }

    const availableNum = Number(available);
    const totalNum = Number(total);

    if (Number.isNaN(availableNum) || Number.isNaN(totalNum)) {
      alert("Available and Total must be numbers.");
      return;
    }

    if (availableNum < 0 || totalNum < 0) {
      alert("Numbers cannot be negative.");
      return;
    }

    if (availableNum > totalNum) {
      alert("Available copies cannot be greater than total copies.");
      return;
    }

    const newBook: Book = {
      id: Date.now(),
      title,
      author,
      category,
      available: availableNum,
      total: totalNum,
      status: getStatus(availableNum),
    };

    setBooks((prev) => [...prev, newBook]);

    setTitle("");
    setAuthor("");
    setCategory("");
    setAvailable("");
    setTotal("");
    setShowForm(false);
  };

  const handleDeleteBook = (id: number) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Manage Books</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          {showForm ? "Cancel" : "Add Book"}
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        <Link to="/admin" className="px-4 py-2 bg-gray-200 rounded-lg">
          Dashboard
        </Link>
        <Link to="/admin/books" className="px-4 py-2 bg-gray-300 rounded-lg">
          Books
        </Link>
        <Link to="/admin/users" className="px-4 py-2 bg-gray-200 rounded-lg">
          Users
        </Link>
        <Link
          to="/admin/transactions"
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          Transactions
        </Link>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Book</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="number"
              placeholder="Available Copies"
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="number"
              placeholder="Total Copies"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />
          </div>

          <button
            onClick={handleAddBook}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Save Book
          </button>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <input
          type="text"
          placeholder="Search books by title, author, or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-sm font-semibold text-gray-600">
                Title
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Author
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Category
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Available
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Total
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id} className="border-b last:border-b-0">
                <td className="py-3">{book.title}</td>
                <td className="py-3">{book.author}</td>
                <td className="py-3">{book.category}</td>
                <td className="py-3">{book.available}</td>
                <td className="py-3">{book.total}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      book.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : book.status === "Out of Stock"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>
                <td className="py-3">
                  <button
                    onClick={() => handleDeleteBook(book.id)}
                    className="px-3 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredBooks.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="py-6 text-center text-gray-500"
                >
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}