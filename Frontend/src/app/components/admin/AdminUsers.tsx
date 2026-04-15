import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  borrowedBooks: number;
};

const defaultUsers: User[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@university.edu",
    role: "Student",
    status: "Active",
    borrowedBooks: 2,
  },
  {
    id: 2,
    name: "Sarah Lee",
    email: "sarah.lee@university.edu",
    role: "Student",
    status: "Active",
    borrowedBooks: 1,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@university.edu",
    role: "Librarian",
    status: "Active",
    borrowedBooks: 0,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@university.edu",
    role: "Admin",
    status: "Inactive",
    borrowedBooks: 0,
  },
];

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [status, setStatus] = useState("Active");
  const [borrowedBooks, setBorrowedBooks] = useState("0");

  useEffect(() => {
    const savedUsers = localStorage.getItem("admin_users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      setUsers(defaultUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("admin_users", JSON.stringify(users));
  }, [users]);

  const handleAddUser = () => {
    if (!name || !email || !role || !status || borrowedBooks === "") {
      alert("Please fill in all fields.");
      return;
    }

    const borrowedBooksNum = Number(borrowedBooks);

    if (Number.isNaN(borrowedBooksNum) || borrowedBooksNum < 0) {
      alert("Borrowed Books must be a valid non-negative number.");
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      role,
      status,
      borrowedBooks: borrowedBooksNum,
    };

    setUsers((prev) => [...prev, newUser]);

    setName("");
    setEmail("");
    setRole("Student");
    setStatus("Active");
    setBorrowedBooks("0");
    setShowForm(false);
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.role} ${user.status}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          {showForm ? "Cancel" : "Add User"}
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        <Link to="/admin" className="px-4 py-2 bg-gray-200 rounded-lg">
          Dashboard
        </Link>
        <Link to="/admin/books" className="px-4 py-2 bg-gray-200 rounded-lg">
          Books
        </Link>
        <Link to="/admin/users" className="px-4 py-2 bg-gray-300 rounded-lg">
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
          <h2 className="text-xl font-semibold mb-4">Add New User</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded-lg px-4 py-3"
            >
              <option value="Student">Student</option>
              <option value="Librarian">Librarian</option>
              <option value="Admin">Admin</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-lg px-4 py-3"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <input
              type="number"
              placeholder="Borrowed Books"
              value={borrowedBooks}
              onChange={(e) => setBorrowedBooks(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />
          </div>

          <button
            onClick={handleAddUser}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Save User
          </button>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <input
          type="text"
          placeholder="Search users by name, email, role, or status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-sm font-semibold text-gray-600">Name</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Email</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Role</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Status</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Borrowed Books</th>
              <th className="py-3 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b last:border-b-0">
                <td className="py-3">{user.name}</td>
                <td className="py-3">{user.email}</td>
                <td className="py-3">{user.role}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3">{user.borrowedBooks}</td>
                <td className="py-3">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="px-3 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}