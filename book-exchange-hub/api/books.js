// /api/books.js
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const books = [
    {
      "id": "b1",
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "genre": "Sci-Fi",
      "coverImageUrl": "https://covers.openlibrary.org/b/isbn/0345391802-L.jpg",
      "status": "Available",
      "ownerId": "user1"
    },
    {
      "id": "b2",
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Classic",
      "coverImageUrl": "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
      "status": "Available",
      "ownerId": "user2"
    },
    {
      "id": "b3",
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "coverImageUrl": "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
      "status": "Available",
      "ownerId": "user1"
    },
    {
      "id": "b4",
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Classic",
      "coverImageUrl": "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
      "status": "Available",
      "ownerId": "user2"
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
