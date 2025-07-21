// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard'; // Will create this

function BookList({ books, type }) {
  const filteredBooks = books.filter(book => {
    if (type === "shelf") {
      // You'd add a filter here for books owned by the current logged-in user
      // For now, let's just show all or a subset
      return true; // Show all for demo
    } else if (type === "market") {
      return book.status === "Available"; // Only show available books in the market
    }
    return true;
  });

  if (filteredBooks.length === 0) {
    return <p>No books to display in this section.</p>;
  }

  return (
    <div className="book-list">
      {filteredBooks.map(book => (
        <BookCard key={book.id} book={book} type={type} />
      ))}
    </div>
  );
}

export default BookList;
