const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Request failed");
  }
  return res.json();
}

// ---- BOOKS ----
export function getBooks() {
  return request<any[]>("/api/books");
}

export function searchBooks(q: string) {
  return request<any[]>(`/api/books/search?q=${encodeURIComponent(q)}`);
}

// ---- CHECKOUT ----
export function borrowBook(payload: {
  member_id: number;
  book_id: number;
  date_borrowed: string;
  date_due: string;
}) {
  return request("/api/checkouts/borrow", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function returnBook(payload: { checkout_id: number; date_returned: string }) {
  return request("/api/checkouts/return", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
