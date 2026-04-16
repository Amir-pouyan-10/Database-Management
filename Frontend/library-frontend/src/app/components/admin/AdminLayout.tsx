import { Link, Outlet } from "react-router-dom";
import { LayoutDashboard, Book, Users, ClipboardList, Settings } from "lucide-react";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

        <nav className="flex flex-col gap-4">
          <Link to="/admin" className="flex items-center gap-2 hover:text-purple-400">
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <Link to="/admin/books" className="flex items-center gap-2 hover:text-purple-400">
            <Book size={18} /> Books
          </Link>

          <Link to="/admin/users" className="flex items-center gap-2 hover:text-purple-400">
            <Users size={18} /> Users
          </Link>

          <Link to="/admin/transactions" className="flex items-center gap-2 hover:text-purple-400">
            <ClipboardList size={18} /> Transactions
          </Link>

          <Link to="/admin/settings" className="flex items-center gap-2 hover:text-purple-400">
            <Settings size={18} /> Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}