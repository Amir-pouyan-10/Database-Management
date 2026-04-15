import { Link, useNavigate } from "react-router-dom";
import { BookOpen, ClipboardList, RotateCcw, AlertTriangle } from "lucide-react";

export default function LibrarianDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const stats = [
    {
      title: "Books Available",
      value: "932",
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Active Checkouts",
      value: "313",
      icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Books Returned Today",
      value: "24",
      icon: <RotateCcw className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Overdue Books",
      value: "27",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    },
  ];

  const recentActivity = [
    { member: "John Smith", action: "Checked Out", book: "Database Systems", date: "Today" },
    { member: "Sarah Lee", action: "Returned", book: "Operating Systems", date: "Today" },
    { member: "Michael Brown", action: "Checked Out", book: "Computer Networks", date: "Yesterday" },
    { member: "Emily Davis", action: "Overdue", book: "Software Engineering", date: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header + Logout */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Librarian Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mb-6">
        <Link to="/librarian" className="px-4 py-2 bg-gray-300 rounded-lg">Dashboard</Link>
        <Link to="/librarian/checkouts" className="px-4 py-2 bg-gray-200 rounded-lg">Checkouts</Link>
        <Link to="/librarian/books" className="px-4 py-2 bg-gray-200 rounded-lg">Books</Link>
      </div>

      <p className="text-gray-600 mb-6">Overview of daily library operations.</p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-sm border p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h2>
            </div>
            <div>{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-sm font-semibold text-gray-600">Member</th>
                <th className="py-3 text-sm font-semibold text-gray-600">Action</th>
                <th className="py-3 text-sm font-semibold text-gray-600">Book</th>
                <th className="py-3 text-sm font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((item, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 text-gray-800">{item.member}</td>
                  <td className="py-3 text-gray-800">{item.action}</td>
                  <td className="py-3 text-gray-800">{item.book}</td>
                  <td className="py-3 text-gray-500">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}