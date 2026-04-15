import { useState } from "react";
import { Link } from "react-router-dom";

export default function LibrarianCheckouts() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      member: "John Smith",
      book: "Database Systems",
      status: "Borrowed",
      date: "Today",
    },
    {
      id: 2,
      member: "Sarah Lee",
      book: "Operating Systems",
      status: "Returned",
      date: "Today",
    },
    {
      id: 3,
      member: "Michael Brown",
      book: "Computer Networks",
      status: "Borrowed",
      date: "Yesterday",
    },
    {
      id: 4,
      member: "Emily Davis",
      book: "Software Engineering",
      status: "Overdue",
      date: "2 days ago",
    },
  ]);

  const handleIssue = (id: number) => {
    setTransactions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Borrowed" } : item
      )
    );
  };

  const handleReturn = (id: number) => {
    setTransactions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Returned" } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Manage Checkouts
      </h1>

      <div className="flex gap-3 mb-6">
        <Link to="/librarian" className="px-4 py-2 bg-gray-200 rounded-lg">
          Dashboard
        </Link>
        <Link
          to="/librarian/checkouts"
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          Checkouts
        </Link>
        <Link
          to="/librarian/books"
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          Books
        </Link>
      </div>

      <p className="text-gray-600 mb-6">
        Issue, return, and track book transactions.
      </p>

      <div className="bg-white rounded-xl shadow-sm border p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-sm font-semibold text-gray-600">
                Member
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Book
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Date
              </th>
              <th className="py-3 text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => (
              <tr key={item.id} className="border-b last:border-b-0">
                <td className="py-3 text-gray-800">{item.member}</td>
                <td className="py-3 text-gray-800">{item.book}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Borrowed"
                        ? "bg-blue-100 text-blue-700"
                        : item.status === "Returned"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 text-gray-500">{item.date}</td>
                <td className="py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleIssue(item.id)}
                      className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                    >
                      Issue
                    </button>
                    <button
                      onClick={() => handleReturn(item.id)}
                      className="px-3 py-1 rounded-md bg-green-100 text-green-700 hover:bg-green-200"
                    >
                      Return
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}