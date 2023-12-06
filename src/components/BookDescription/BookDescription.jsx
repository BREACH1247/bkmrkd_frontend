import React, { useState, useEffect } from "react";
import Card from "../Card";
import bookmark from "../../assets/bookmark.png";
import pages from "../../assets/pages.png";
import share from "../../assets/share.png";
import review from "../../assets/review.png";
import star from "../../assets/star.png";


const BookDescription = ({ book }) => {
    
  const [showMore, setShowMore] = useState(false);
  const [bookData, setBookData] = useState({
    imageUrl: "",
    title: "Book Title",
    author: "Author Name",
    rating: "Rating",
    tags: [
      "Romance",
      "Horror",
      "Fiction",
      "Mystery",
      "Adventure",
      "Sci-Fi",
      "Fantasy",
      "Thriller",
    ],
    description: "This is a description of the book.",
  });

  const colors = ["bg-yellow-400", "bg-red-400", "bg-green-500", "bg-blue-500"];

  const slicedTagsFirstLine = bookData.tags.slice(0, 3);
  const slicedTagsSecondLine = bookData.tags.slice(3, 5);
  const remainingTags = bookData.tags.slice(5);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }


  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <div className="max-w-[11rem] h-[18rem] overflow-hidden mb-2 relative">
          <Card imageUrl={bookData.imageUrl} />
            </div>
            <div className="flex w-full mb-2">
          <img
            src={bookmark}
            alt="bookmark"
            className="w-9 h-9 hover:scale-105 hover:cursor-pointer transition-transform transform"
            style={{ margin: "0 0.5rem" }}
          />
          <img
            src={pages}
            alt="pages"
            className="w-9 h-9 hover:scale-105 hover:cursor-pointer transition-transform transform"
            style={{ margin: "0 0.5rem" }}
          />
          <img
            src={share}
            alt="share"
            className="w-9 h-9 hover:scale-105 hover:cursor-pointer transition-transform transform"
            style={{ margin: "0 0.5rem" }}
          />
        </div>
        <button>
          <div className="bg-black rounded-lg px-6 py-1 text-yellow-400 font-sm">
            <img
              src={review}
              alt="review"
              className="w-5 h-5 inline-block mr-2"
            />
            rate and review
          </div>
        </button>
      </div>

      <div className="col-span-1 flex flex-col items-start ml-[-25rem]">
        <h2 className="text-3xl font-bold mb-1">
          {bookData.title}
          <em
            style={{ fontSize: "1.5rem" }}
            className="ml-6 font-medium italic inline-block"
          >
            Book Title Number
          </em>
        </h2>
        <p className="text-2xl font-medium mb-1">{bookData.author}</p>
        <div className="flex items-center">
          <p className="text-3xl font-semibold mr-3">{bookData.rating}</p>
          <img src={star} alt="star" className="w-5 h-5 mr-1" />
        </div>

        <div className="ml-0.5 mt-4 grid grid-cols-3 gap-2">
          {slicedTagsFirstLine.map((tag, index) => (
            <div
              key={index}
              className={`tag-box rounded-full px-12 py-2 border border-gray-700 ${getRandomColor()} cursor-pointer flex items-center justify-center text-sm`}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="ml-0.5 mt-2 grid grid-cols-3 gap-2">
          {slicedTagsSecondLine.map((tag, index) => (
            <div
              key={index}
              className={`tag-box rounded-full px-12 py-2 border border-gray-700 ${getRandomColor()} cursor-pointer flex items-center justify-center text-sm`}
            >
              {tag}
            </div>
          ))}
          {bookData.tags.length > 5 && !showMore && (
            <div
              className={`tag-box rounded-full px-4 py-2 border border-gray-700 ${getRandomColor()} cursor-pointer flex items-center justify-center text-sm`}
              title={remainingTags.join(", ")}
              onClick={() => setShowMore(!showMore)}
            >
              +{bookData.tags.length - 5}
            </div>
          )}
        </div>
        {showMore && (
          <div className="ml-0.5 mt-2 grid grid-cols-3 gap-2">
            {remainingTags.map((tag, index) => (
              <div
                key={index}
                className={`tag-box rounded-full px-12 py-2 border border-gray-700 ${getRandomColor()} cursor-pointer flex items-center justify-center text-sm`}
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        <div className="pt-4">
          <h2 className="text-2xl font-bold mt-8">Description</h2>
          <p className="mt-2">{bookData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
