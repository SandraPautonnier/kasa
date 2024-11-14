import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const maxStars = 5;

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : 'empty'}`}
        >
          <FontAwesomeIcon
        icon={faStar}
        />
        </span>
      ))}
    </div>
  );
};

export default Rating;
