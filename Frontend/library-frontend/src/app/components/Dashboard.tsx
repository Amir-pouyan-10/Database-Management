import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, Clock, CheckCircle, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";
import { mockBooks } from "../data/mockBooks";

export function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      icon: BookOpen,
      label: "Books Borrowed",
      value: "12",
      change: "+2 this month",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      label: "Due Soon",
      value: "3",
      change: "Return by Feb 20",
      color: "bg-orange-500"
    },
    {
      icon: CheckCircle,
      label: "Returned",
      value: "45",
      change: "All time",
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      label: "Reading Goal",
      value: "75%",
      change: "30 of 40 books",
      color: "bg-purple-500"
    }
  ];

  const recentBooks = mockBooks.slice(0, 4);
  const recommendedBooks = mockBooks.slice(4, 8);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your library account today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Button
              variant="outline"
              className="h-auto flex-col gap-2 py-4"
              onClick={() => navigate("/search")}
            >
              <BookOpen className="size-6 text-indigo-600" />
              <span>Search Books</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4">
              <Clock className="size-6 text-orange-600" />
              <span>Renew Books</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4">
              <CheckCircle className="size-6 text-green-600" />
              <span>My Reservations</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4">
              <TrendingUp className="size-6 text-purple-600" />
              <span>Reading Progress</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Currently Reading */}
        <Card>
          <CardHeader>
            <CardTitle>Currently Reading</CardTitle>
            <CardDescription>Your borrowed books</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentBooks.map((book) => (
              <div
                key={book.id}
                className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => navigate(`/book/${book.id}`)}
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="size-16 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 truncate">{book.title}</h4>
                  <p className="text-sm text-gray-600 truncate">{book.author}</p>
                  <p className="text-xs text-orange-600 mt-1">Due: Feb 25, 2026</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommended for You */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>Based on your reading history</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendedBooks.map((book) => (
              <div
                key={book.id}
                className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => navigate(`/book/${book.id}`)}
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="size-16 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 truncate">{book.title}</h4>
                  <p className="text-sm text-gray-600 truncate">{book.author}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xs ${
                            i < Math.floor(book.rating) ? "text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({book.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your library transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
              <div className="size-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="size-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Returned "Clean Code"</p>
                <p className="text-sm text-gray-600">Feb 15, 2026 at 2:30 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
              <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BookOpen className="size-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Borrowed "Introduction to Algorithms"</p>
                <p className="text-sm text-gray-600">Feb 10, 2026 at 10:15 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
              <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Clock className="size-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Renewed "The Great Gatsby"</p>
                <p className="text-sm text-gray-600">Feb 8, 2026 at 4:45 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
