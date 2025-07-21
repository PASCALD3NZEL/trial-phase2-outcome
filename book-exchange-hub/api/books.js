// Create this file in /api/books.js
export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const books = [
    {
      "id": "b1",
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "genre": "Sci-Fi",
      "coverImageUrl": "https://covers.openlibrary.org/b/isbn/0345391802-M.jpg",
      "status": "Available",
      "ownerId": "user1"
    },
    {
      "id": "b2",
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Classic",
      "coverImageUrl": "https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg",
      "status": "Available",
      "ownerId": "user2"
    },
    {
      "id": "b3",
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "coverImageUrl": "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
      "status": "Available",
      "ownerId": "user1"
    }
  ];

  if (req.method === 'GET') {
    res.status(200).json(books);
  } else if (req.method === 'POST') {
    const newBook = { 
      ...req.body, 
      id: `b${Date.now()}`,
      ownerId: "user1"
    };
    res.status(201).json(newBook);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
