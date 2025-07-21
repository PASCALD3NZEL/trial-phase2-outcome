import React, { useState } from 'react';

function BookCard({ book, type }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  return (
    <div className="book-card">
      <div className="book-image-container">
        {imageLoading && !imageError && (
          <div className="image-placeholder">Loading...</div>
        )}
        {imageError ? (
          <div className="image-fallback">
            <span style={{ fontSize: '4rem' }}>📚</span>
          </div>
        ) : (
          <img
            src={book.coverImageUrl}
            alt={`Cover of ${book.title}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        )}
      </div>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Status:</strong> {book.status}</p>
      {type === "market" && (
        <button className="request-btn">Request Book</button>
      )}
    </div>
  );
}

export default BookCard;
