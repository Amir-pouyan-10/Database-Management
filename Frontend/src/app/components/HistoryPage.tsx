import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, BookOpen, Clock } from "lucide-react";
import { mockBooks } from "../data/mockBooks";
import { useNavigate } from "react-router";

export function HistoryPage() {
  const navigate = useNavigate();
  const historyItems = mockBooks.slice(4, 8);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Borrowing History</h1>
        <p className="text-gray-600 mt-1">View your past transactions and activity</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your borrowing history for the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {historyItems.map((book, index) => {
              const types = ["returned", "borrowed", "renewed", "returned"];
              const type = types[index % types.length];
              const icons = {
                returned: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
                borrowed: { icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" },
                renewed: { icon: Clock, color: "text-purple-600", bg: "bg-purple-100" }
              };
              const config = icons[type as keyof typeof icons];
              const Icon = config.icon;

              return (
                <div
                  key={book.id}
                  className="flex gap-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate(`/book/${book.id}`)}
                >
                  <div className={`size-12 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`size-6 ${config.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{book.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{book.author}</p>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(2026, 1, 15 - index * 3).toLocaleDateString()} at{" "}
                      {`${10 + index}:${(index * 15) % 60}`.padEnd(5, "0")} AM
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
