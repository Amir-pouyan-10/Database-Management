import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BookOpen, Clock, RotateCcw } from "lucide-react";
import { mockBooks } from "../data/mockBooks";
import { useNavigate } from "react-router";

export function MyBooks() {
  const navigate = useNavigate();
  const borrowedBooks = mockBooks.slice(0, 3);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Books</h1>
        <p className="text-gray-600 mt-1">Manage your borrowed books and reservations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Currently Borrowed</CardTitle>
          <CardDescription>You have {borrowedBooks.length} books checked out</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {borrowedBooks.map((book, index) => (
              <div
                key={book.id}
                className="flex gap-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/book/${book.id}`)}
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="size-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{book.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{book.author}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="size-4 text-orange-600" />
                      <span className="text-gray-600">
                        Due: {new Date(2026, 1, 25 + index).toLocaleDateString()}
                      </span>
                    </div>
                    <Badge variant="outline">
                      {7 - index * 2} days left
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <RotateCcw className="size-4" />
                    Renew
                  </Button>
                  <Button variant="outline" size="sm">
                    Return
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reservations</CardTitle>
          <CardDescription>Books you've reserved</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <BookOpen className="size-12 mx-auto mb-2 text-gray-400" />
            <p>No active reservations</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
