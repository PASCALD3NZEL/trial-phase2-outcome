import React, { useState } from 'react';

function AddBookForm({ onAddBook }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    coverImageUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...formData,
      status: 'Available',
      ownerId: 'user1' // Hardcoded for now
    };
    onAddBook(newBook);
    setFormData({ title: '', author: '', genre: '', coverImageUrl: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="coverImageUrl"
        placeholder="Cover Image URL"
        value={formData.coverImageUrl}
        onChange={handleChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;