import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (newReview.trim() === '') {
      return;
    }

    const review = {
      id: new Date().getTime(),
      text: newReview,
    };

    setReviews((prevReviews) => [...prevReviews, review]);
    localStorage.setItem('reviews', JSON.stringify([...reviews, review]));
    setNewReview('');
  };

  return (
    <div className="p-4">
      <h1 className="mb-4">Reviews</h1>
      <div>
        <form onSubmit={handleReviewSubmit}>
          <div className="mb-3">
            <label className="form-label">Add a Review:</label>
            <textarea
              className="form-control"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write your review..."
              rows="4"
            />
          </div>
          <button type="submit" className="btn btn-outline-secondary">Submit Review</button>
        </form>

        <div className="mt-4">
          <h3>All Reviews:</h3>
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            <ul className="list-group">
              {reviews.map((review) => (
                <li key={review.id} className="list-group-item">{review.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
