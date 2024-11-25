import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

  if (pictures.length === 1) {
    return (
        <div>
          <img className='only-img' src={pictures[0]} alt="image du logement" />
        </div>
    )
  }  
    

  return (
    <div className='container-carousel'>
        <button onClick={goToPrevious} className='btn-left'>
            <FontAwesomeIcon
            icon={faChevronLeft}
            />
        </button>
        <div className="carousel-track-container">
          <div className='carousel-track' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {pictures.map((picture, index) => (
              <img key={index} className="carousel-img" src={picture} alt="image du logement" />
            ))}
          </div>
        </div>
        <button onClick={goToNext} className='btn-right'>
            <FontAwesomeIcon
            icon={faChevronRight}
            />
        </button>
        <div className="carousel-indicators">
        <span>{`${currentIndex +1}`}/{`${pictures.length}`}</span>
      </div>
    </div>
  )
}

export default Carousel