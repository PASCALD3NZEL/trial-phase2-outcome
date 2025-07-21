import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import RequestList from './components/RequestList';
import './App.css';

const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3001';

function App() {
  const [books, setBooks] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Fetch books on component mount
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(`${API_URL}/books`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setBooks(data);
        setError(null);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setError(`Failed to load books: ${error.message}`);
      })
      .finally(() => setLoading(false));
  }, []);

  // (Optional: Fetch requests here later)
  // useEffect(() => {
  //   fetch(`${API_URL}/requests`)
  //     .then(res => res.json())
  //     .then(data => setRequests(data))
  //     .catch(error => console.error("Error fetching requests:", error));
  // }, []);

  // --- CRUD Functions will go here ---
  const handleAddBook = (newBook) => {
    fetch(`${API_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
    .then(res => res.json())
    .then(addedBook => {
      setBooks(prevBooks => [...prevBooks, addedBook]);
    })
    .catch(error => console.error("Error adding book:", error));
  };

  // Implement handleDeleteBook, handleUpdateBook, etc. here

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <nav className="navbar">
        <div className="nav-links">
          <NavLink to="/shelf" className={({ isActive }) => isActive ? "active" : ""}>My Shelf</NavLink>
          <NavLink to="/market" className={({ isActive }) => isActive ? "active" : ""}>Book Market</NavLink>
          <NavLink to="/requests" className={({ isActive }) => isActive ? "active" : ""}>Requests</NavLink>
        </div>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      <div className="container">
        {error && (
          <div className="error-message" style={{
            background: '#f8d7da',
            color: '#721c24',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            {error}
          </div>
        )}
        
        {loading && <div className="loading">Loading books...</div>}
        
        <Routes>
          <Route path="/shelf" element={
            <>
              <h2>My Books</h2>
              <AddBookForm onAddBook={handleAddBook} />
              <BookList books={books} type="shelf" />
            </>
          } />
          <Route path="/market" element={
            <>
              <h2>Book Market</h2>
              <BookList books={books} type="market" />
            </>
          } />
          <Route path="/requests" element={
            <>
              <h2>Exchange Requests</h2>
              <RequestList requests={requests} books={books} />
            </>
          } />
          <Route path="/" element={<p>Welcome to the Book Exchange Hub! Choose a section above.</p>} />
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h2>404 - Page Not Found</h2>
              <p>The page you're looking for doesn't exist.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
