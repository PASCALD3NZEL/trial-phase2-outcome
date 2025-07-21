import React, { useEffect } from 'react';

function RequestList({ requests, books }) {
  useEffect(() => {
    console.log("Requests loaded:", requests);
  }, [requests]);

  const handleAccept = (requestId) => {
    console.log(`Accepting request: ${requestId}`);
  };

  const handleDecline = (requestId) => {
    console.log(`Declining request: ${requestId}`);
  };

  if (requests.length === 0) {
    return <p>No exchange requests at the moment.</p>;
  }

  return (
    <div className="request-list">
      {requests.map(request => {
        const book = books.find(b => b.id === request.bookId);
        if (!book) return null;

        return (
          <div key={request.id} className="request-card">
            <p><strong>{request.requesterId}</strong> wants to borrow <strong>"{book.title}"</strong> from <strong>{request.ownerId}</strong>.</p>
            <p>Status: {request.status}</p>
            {request.status === "Pending" && (
              <div className="actions">
                <button onClick={() => handleAccept(request.id)}>Accept</button>
                <button onClick={() => handleDecline(request.id)}>Decline</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RequestList;