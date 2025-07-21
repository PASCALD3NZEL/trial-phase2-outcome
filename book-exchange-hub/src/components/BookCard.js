import React from 'react';

function BookCard({ book, type }) {
  const handleRequest = () => {
    console.log(`Requesting book: ${book.title} (ID: ${book.id})`);
  };

  const handleDelete = () => {
    console.log(`Deleting book: ${book.title} (ID: ${book.id})`);
  };

  return (
    <div className="book-card">
      <img src={book.coverImageUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Status: {book.status}</p>
      
      {type === "market" && book.status === "Available" && (
        <button onClick={handleRequest}>Request</button>
      )}
      {type === "shelf" && (
        <button onClick={handleDelete}>Delete</button>
      )}
    </div>
  );
}

export default BookCard;