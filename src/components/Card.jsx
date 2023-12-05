// Card.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import star from '../assets/star.png';

const Card = ({ imageUrl, rating, bookId }) => {
  return (
    <Link to={`/books/${bookId}`} className="max-w-[14rem] rounded-xl overflow-hidden mb-6 transition-transform transform hover:scale-105 hover:cursor-pointer">
      <div>
        <img
          className="w-full h-[22rem] object-cover rounded-md"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="flex justify-between px-[5.7rem] py-2">
        <div className="font-bold text-md">{rating}</div>
        <div className="flex items-center">
          <img src={star} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
