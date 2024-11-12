import React from 'react';

const Rating = ({ rating }) => {
  const maxStars = 5;

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : 'empty'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
