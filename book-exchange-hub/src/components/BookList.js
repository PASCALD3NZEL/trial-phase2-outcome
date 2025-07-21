import React from 'react';
import BookCard from './BookCard';

function BookList({ books, type }) {
  const filteredBooks = books.filter(book => {
    if (type === "shelf") {
      return true; // Show all for demo
    } else if (type === "market") {
      return book.status === "Available";
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