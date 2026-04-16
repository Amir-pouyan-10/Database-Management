import { useParams, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Globe,
  Building,
  Star,
  BookMarked,
  Share2,
  Heart
} from "lucide-react";
import { mockBooks } from "../data/mockBooks";
import { useState } from "react";

export function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBorrowed, setIsBorrowed] = useState(false);

  const book = mockBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900">Book not found</h2>
          <Button className="mt-4" onClick={() => navigate("/search")}>
            Back to Search
          </Button>
        </div>
      </div>
    );
  }

  const handleBorrow = () => {
    setIsBorrowed(true);
    // In a real app, this would make an API call
  };

  return (
    <div className="p-6 space-y-6">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="gap-2"
        onClick={() => navigate("/search")}
      >
        <ArrowLeft className="size-4" />
        Back to Search
      </Button>

      {/* Book Details */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Book Cover */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden sticky top-24">
            <div className="aspect-[3/4] relative">
              <img
                src={book.coverImage}
                alt={book.title}
                className="size-full object-cover"
              />
            </div>
            <CardContent className="p-6 space-y-3">
              <Button
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700"
                disabled={book.available === 0 || isBorrowed}
                onClick={handleBorrow}
              >
                {isBorrowed
                  ? "Borrowed Successfully"
                  : book.available > 0
                  ? "Borrow This Book"
                  : "Not Available"}
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="gap-2">
                  <Heart className="size-4" />
                  Save
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="size-4" />
                  Share
                </Button>
              </div>
              {isBorrowed && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">
                    Due Date: March 3, 2026
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    You can renew this book up to 2 times
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Book Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title and Rating */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
              <Badge
                variant={book.available > 0 ? "default" : "destructive"}
                className={`text-sm ${
                  book.available > 0
                    ? "bg-green-500 hover:bg-green-600"
                    : ""
                }`}
              >
                {book.available > 0
                  ? `${book.available} of ${book.total} Available`
                  : "Not Available"}
              </Badge>
            </div>
            <p className="text-xl text-gray-600 mb-4">{book.author}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-5 ${
                      i < Math.floor(book.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">{book.rating}</span>
              <span className="text-gray-500">({book.reviews} reviews)</span>
            </div>
          </div>

          <Separator />

          {/* Book Details Grid */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Book Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <BookOpen className="size-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">ISBN</p>
                    <p className="font-medium text-gray-900">{book.isbn}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <BookMarked className="size-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-medium text-gray-900">{book.category}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Building className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Publisher</p>
                    <p className="font-medium text-gray-900">{book.publisher}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Calendar className="size-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Published Year</p>
                    <p className="font-medium text-gray-900">{book.publishedYear}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <BookOpen className="size-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pages</p>
                    <p className="font-medium text-gray-900">{book.pages}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pink-50 rounded-lg">
                    <Globe className="size-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Language</p>
                    <p className="font-medium text-gray-900">{book.language}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{book.description}</p>
            </CardContent>
          </Card>

          {/* Reviews Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Reader Reviews</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                      AS
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Alice Smith</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="size-3 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Excellent resource for understanding algorithms. Clear explanations and great examples throughout.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">2 weeks ago</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                      MJ
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Michael Johnson</p>
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="size-3 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                        <Star className="size-3 text-gray-300" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    A must-read for computer science students. Very comprehensive but can be challenging for beginners.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">1 month ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Books */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Similar Books</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {mockBooks
                  .filter((b) => b.category === book.category && b.id !== book.id)
                  .slice(0, 4)
                  .map((relatedBook) => (
                    <div
                      key={relatedBook.id}
                      className="cursor-pointer group"
                      onClick={() => navigate(`/book/${relatedBook.id}`)}
                    >
                      <div className="aspect-[3/4] rounded-lg overflow-hidden mb-2">
                        <img
                          src={relatedBook.coverImage}
                          alt={relatedBook.title}
                          className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                        {relatedBook.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-1">
                        {relatedBook.author}
                      </p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
