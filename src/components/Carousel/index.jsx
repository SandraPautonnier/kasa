import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  return (
    <div className='container-carousel'>
        <button className='btn-left'>
            <FontAwesomeIcon
            icon={faChevronLeft}
            />
        </button>
        <button className='btn-right'>
            <FontAwesomeIcon
            icon={faChevronRight}
            />
        </button>
    </div>
  )
}

export default Carousel