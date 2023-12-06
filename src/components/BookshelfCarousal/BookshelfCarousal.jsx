import React from 'react';
import book from '../../assets/book.jpg';

const Bookshelf = ({ details }) => {
  return (
    <div className="relative w-full md:w-48 h-40 border-4 rounded-lg border-yellow-600 cursor-pointer font-poppins font-regular m-5 overflow-hidden grid">
      <img
        src={book}
        alt={details.title}
        className="w-full h-full object-cover blur-sm col-span-full"
      />
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <div className="text-gray-900 drop-shadow-md max-w-full max-h-full">
          <h3 className="text-md font-thin p-8">{details.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
