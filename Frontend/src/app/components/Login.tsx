import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BookOpen } from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden md:flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-600 rounded-xl">
              <BookOpen className="size-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">LibraryHub</h1>
              <p className="text-gray-600">University Library Management</p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1667273704095-66c1e361cfdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MTM0MDkwOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Library"
            className="rounded-2xl shadow-2xl"
          />
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">Access Thousands of Books</h2>
            <p className="text-gray-600">
              Browse, search, and borrow from our extensive collection of academic resources.
            </p>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md shadow-xl border-0">
            <CardHeader className="space-y-1">
              <div className="md:hidden flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-600 rounded-lg">
                  <BookOpen className="size-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">LibraryHub</CardTitle>
                </div>
              </div>
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="student@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="link" className="px-0 h-auto text-sm text-indigo-600">
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <Button type="submit" className="w-full h-11 bg-indigo-600 hover:bg-indigo-700">
                  Sign In
                </Button>
              </form>
              <div className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Button variant="link" className="px-1 text-indigo-600">
                  Register here
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
