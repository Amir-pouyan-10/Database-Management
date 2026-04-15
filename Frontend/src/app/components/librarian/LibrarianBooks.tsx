import { Link } from "react-router-dom";

export default function LibrarianBooks() {
  const books = [
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
    {
      id: 3,
      title: "Computer Networks",
      author: "Andrew Tanenbaum",
      category: "Networking",
      available: 2,
      total: 5,
      status: "Available",
    },
    {
      id: 4,
      title: "Software Engineering",
      author: "Ian Sommerville",
      category: "Software",
      available: 1,
      total: 4,
      status: "Low Stock",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Library Books</h1>

      <div className="flex gap-3 mb-6">
        <Link to="/librarian" className="px-4 py-2 bg-gray-200 rounded-lg">
          Dashboard
        </Link>
        <Link to="/librarian/checkouts" className="px-4 py-2 bg-gray-200 rounded-lg">
          Checkouts
        </Link>
        <Link to="/librarian/books" className="px-4 py-2 bg-gray-200 rounded-lg">
          Books
        </Link>
      </div>

      <p className="text-gray-600 mb-6">
        Search and monitor book availability in the library.
      </p>

      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <input
          type="text"
          placeholder="Search books by title, author, or category..."
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-sm font-semibold text-gray-600">Title</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Author</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Category</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Available</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Total</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-b last:border-b-0">
                <td className="py-3 text-gray-800">{book.title}</td>
                <td className="py-3 text-gray-800">{book.author}</td>
                <td className="py-3 text-gray-800">{book.category}</td>
                <td className="py-3 text-gray-800">{book.available}</td>
                <td className="py-3 text-gray-800">{book.total}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      book.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : book.status === "Low Stock"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}