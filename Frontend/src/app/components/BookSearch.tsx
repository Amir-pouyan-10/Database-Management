import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search, Filter, BookOpen, Star, SlidersHorizontal } from "lucide-react";
import { mockBooks, categories } from "../data/mockBooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";


export function BookSearch() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");
  const [sortBy, setSortBy] = useState("title");

  // Get unique authors
  const authors = ["All Authors", ...Array.from(new Set(mockBooks.map(book => book.author)))];

  const filteredBooks = mockBooks
    .filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.isbn.includes(searchQuery);
      const matchesCategory =
        selectedCategory === "All Categories" || book.category === selectedCategory;
      const matchesAuthor =
        selectedAuthor === "All Authors" || book.author === selectedAuthor;
      return matchesSearch && matchesCategory && matchesAuthor;
    })
    .sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "author") return a.author.localeCompare(b.author);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.publishedYear - a.publishedYear;
      return 0;
    });

  return (
    <div className="min-h-full relative">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-6">
        {/* Hero Header Section */}
        <div className="text-center py-8 space-y-3">
          <h1 className="text-5xl font-bold text-gray-900">Explore Our Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse and search through {mockBooks.length}+ books across multiple categories
          </p>
        </div>

        {/* Search and Filters Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/95">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Main Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 size-6 text-indigo-600" />
                  <Input
                    placeholder="Search by title, author, ISBN, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-14 h-16 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-xl"
                  />
                  <Button 
                    size="lg" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-12 px-8 bg-indigo-600 hover:bg-indigo-700"
                  >
                    Search
                  </Button>
                </div>

                {/* Filter Options */}
                <div className="flex items-center gap-3">
                  <SlidersHorizontal className="size-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Filter by:</span>
                  <div className="flex flex-wrap gap-3 flex-1">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-[200px] h-11 border-2">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                      <SelectTrigger className="w-[200px] h-11 border-2">
                        <SelectValue placeholder="Author" />
                      </SelectTrigger>
                      <SelectContent>
                        {authors.map((author) => (
                          <SelectItem key={author} value={author}>
                            {author}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[200px] h-11 border-2">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="title">Title (A-Z)</SelectItem>
                        <SelectItem value="author">Author (A-Z)</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="year">Newest First</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button 
                      variant="outline" 
                      className="gap-2 h-11 border-2 hover:bg-gray-50"
                      onClick={() => {
                        setSelectedCategory("All Categories");
                        setSelectedAuthor("All Authors");
                        setSearchQuery("");
                      }}
                    >
                      <Filter className="size-4" />
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Results Count and View Options */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-gray-900">Search Results</h2>
              <Badge variant="secondary" className="text-base px-4 py-1">
                {filteredBooks.length} books found
              </Badge>
            </div>
          </div>

          {/* Book Grid */}
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <Card
                  key={book.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 shadow-lg bg-white"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant={book.available > 0 ? "default" : "destructive"}
                        className={`text-xs font-semibold shadow-lg ${
                          book.available > 0
                            ? "bg-green-500 hover:bg-green-600"
                            : ""
                        }`}
                      >
                        {book.available > 0 ? `${book.available} Available` : "Not Available"}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 line-clamp-2 min-h-[3rem] text-lg leading-tight group-hover:text-indigo-600 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-1 font-medium">{book.author}</p>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Badge variant="outline" className="text-xs font-medium">
                        {book.category}
                      </Badge>
                      <div className="flex items-center gap-1 ml-auto">
                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{book.rating}</span>
                        <span className="text-xs text-gray-500">({book.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500 pt-1 border-t border-gray-100">
                      <BookOpen className="size-3.5" />
                      <span>{book.pages} pages</span>
                      <span>•</span>
                      <span>{book.publishedYear}</span>
                    </div>

                    <Button
                      className="w-full mt-3 h-10 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                      onClick={() => navigate(`/book/${book.id}`)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* No Results */
            <Card className="shadow-xl border-0 bg-white/95">
              <CardContent className="text-center py-16">
                <div className="inline-flex items-center justify-center size-20 rounded-full bg-gray-100 mb-6">
                  <Search className="size-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No books found</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => {
                    setSelectedCategory("All Categories");
                    setSelectedAuthor("All Authors");
                    setSearchQuery("");
                  }}
                >
                  <Filter className="size-4" />
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}