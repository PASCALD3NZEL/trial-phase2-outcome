// Create this file in /api/books.js
export default function handler(req, res) {
  const books = [
    {
      "id": "b1",
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "genre": "Sci-Fi",
      "coverImageUrl": "https://covers.openlibrary.org/b/isbn/0345391802-M.jpg",
      "status": "Available",
      "ownerId": "user1"
    }
    // ... add your other books
  ];

  if (req.method === 'GET') {
    res.status(200).json(books);
  } else if (req.method === 'POST') {
    // Handle POST requests
    const newBook = { ...req.body, id: Date.now().toString() };
    res.status(201).json(newBook);
  }
}