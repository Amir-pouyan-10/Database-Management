import { Link } from "react-router-dom";

export default function AdminTransactions() {
  const transactions = [
    {
      id: 1,
      user: "John Smith",
      book: "Database Systems",
      type: "Borrow",
      date: "Today",
    },
    {
      id: 2,
      user: "Sarah Lee",
      book: "Operating Systems",
      type: "Return",
      date: "Today",
    },
    {
      id: 3,
      user: "Michael Brown",
      book: "Computer Networks",
      type: "Borrow",
      date: "Yesterday",
    },
    {
      id: 4,
      user: "Emily Davis",
      book: "Software Engineering",
      type: "Overdue",
      date: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="text-gray-600">Track all borrowing activity.</p>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <Link to="/admin" className="px-4 py-2 bg-gray-200 rounded-lg">Dashboard</Link>
        <Link to="/admin/books" className="px-4 py-2 bg-gray-200 rounded-lg">Books</Link>
        <Link to="/admin/users" className="px-4 py-2 bg-gray-200 rounded-lg">Users</Link>
        <Link to="/admin/transactions" className="px-4 py-2 bg-gray-200 rounded-lg">Transactions</Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-sm font-semibold text-gray-600">User</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Book</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Type</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b last:border-b-0">
                <td className="py-3">{t.user}</td>
                <td className="py-3">{t.book}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      t.type === "Borrow"
                        ? "bg-blue-100 text-blue-700"
                        : t.type === "Return"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>
                <td className="py-3 text-gray-500">{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}