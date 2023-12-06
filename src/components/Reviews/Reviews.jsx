// Reviews.jsx

import React from 'react';
import star from '../../assets/star.png';
import emptystar from '../../assets/emptystar.png';

const Reviews = () => {
  // Hardcoded array of reviews
  const reviews = [
    { name: 'John Doe', rating: 4, comment: 'Great book!' },
    { name: 'Jane Doe', rating: 5, comment: 'I loved it!' },
    // Add more reviews as needed
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Reviews</h2>
      <hr className="my-4 border-black border-t-2" />
      {reviews.map((review, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-bold">{review.name}</h3>
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < review.rating ? star : emptystar}
                alt="star"
                className="w-5 h-5 mr-1 cursor-pointer"
              />
            ))}
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;