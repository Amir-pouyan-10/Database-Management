import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { DashboardLayout } from "./components/DashboardLayout";
import { Dashboard } from "./components/Dashboard";
import { BookSearch } from "./components/BookSearch";
import { BookDetails } from "./components/BookDetails";
import { MyBooks } from "./components/MyBooks";
import { HistoryPage } from "./components/HistoryPage";
import { SettingsPage } from "./components/SettingsPage";

import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminBooks from "./components/admin/AdminBooks";
import AdminUsers from "./components/admin/AdminUsers";
import AdminTransactions from "./components/admin/AdminTransactions";
import LibrarianDashboard from "./components/librarian/LibrarianDashboard";
import LibrarianCheckouts from "./components/librarian/LibrarianCheckouts";
import LibrarianBooks from "./components/librarian/LibrarianBooks";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        
        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/search"
          element={
            <DashboardLayout>
              <BookSearch />
            </DashboardLayout>
          }
        />
        <Route
          path="/book/:id"
          element={
            <DashboardLayout>
              <BookDetails />
            </DashboardLayout>
          }
        />
        <Route
          path="/my-books"
          element={
            <DashboardLayout>
              <MyBooks />
            </DashboardLayout>
          }
        />
        <Route
          path="/history"
          element={
            <DashboardLayout>
              <HistoryPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DashboardLayout>
              <SettingsPage />
            </DashboardLayout>
          }
        />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/books" element={<AdminBooks />} />
        <Route path="/admin/transactions" element={<AdminTransactions />} />
        <Route path="/librarian" element={<LibrarianDashboard />} />
        <Route path="/librarian/checkouts" element={<LibrarianCheckouts />} />
        <Route path="/librarian/books" element={<LibrarianBooks />} />
        
        {/* Redirect any unknown routes to login */}
        <Route path="/test-admin" element={<div className="p-10 text-3xl font-bold">TEST ADMIN PAGE</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
