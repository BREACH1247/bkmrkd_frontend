import React, { useState } from "react";
import Card from "../Card";
import bookmark from "../../assets/bookmark.png";
import pages from "../../assets/pages.png";
import share from "../../assets/share.png";
import review from "../../assets/review.png";
import star from "../../assets/star.png";

const BookDescription = () => {
  const stack = [
    [
      {
        imageUrl:
          "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg",
      },
    ],
  ];
  const tags = [
    "Romance",
    "Horror",
    "Fiction",
    "Mystery",
    "Adventure",
    "Sci-Fi",
    "Fantasy",
    "Thriller",
  ];
  const colors = ["bg-yellow-400", "bg-red-400", "bg-green-500", "bg-blue-500"];

  const slicedTagsFirstLine = tags.slice(0, 3);
  const slicedTagsSecondLine = tags.slice(3, 5);
  const remainingTags = tags.slice(5);
  const [showMore, setShowMore] = useState(false);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Book cover and actions */}
      <div className="col-span-1">
        <div className="max-w-[11rem] h-[18rem] overflow-hidden mb-2 relative">
          <Card imageUrl={stack[0][0].imageUrl} />
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

      {/* Book details */}
      <div className="col-span-1 flex flex-col items-start ml-[-25rem]">
        <h2 className="text-3xl font-bold mb-1">
          Book Title
          <em
            style={{ fontSize: "1.5rem" }}
            className="ml-6 font-medium italic inline-block"
          >
            Book Title Number
          </em>
        </h2>
        <p className="text-2xl font-medium mb-1">Author Name</p>
        <div className="flex items-center">
          <p className="text-3xl font-semibold mr-3">Rating</p>
          <img src={star} alt="star" className="w-5 h-5 mr-1" />
        </div>

        {/* Display tags */}
        <div className="ml-0.5 mt-4 grid grid-cols-2 gap-2">
          {/* First line of tags */}
          {slicedTagsFirstLine.map((tag, index) => (
            <div
              key={index}
              className={`tag-box rounded-full px-12 py-2 border border-gray-700 ${getRandomColor()} cursor-pointer flex items-center justify-center text-sm`}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="ml-0.5 mt-2 grid grid-cols-2 gap-2">
          {/* Second line of tags */}
          {slicedTagsSecondLine.map((tag, index) => (
            <div
              key={index}
              className={`tag-box rounded-full px-12 py-2 border border-gray-700 ${getRandomColor()} cursor-pointer flex items-center justify-center text-xs`}
            >
              {tag}
            </div>
          ))}
          {/* + Tag */}
          {tags.length > 5 && (
            <div
              className={`tag-box rounded-full px-4 py-2 border border-gray-700 ${getRandomColor()} cursor-pointer flex items-center justify-center text-xs`}
              title={remainingTags.join(", ")}
              onClick={() => setShowMore(!showMore)}
            >
              +{tags.length - 5}
            </div>
          )}
        </div>
        {/* Show more tags */}
        {showMore && (
          <div className="ml-0.5 mt-2 grid grid-cols-2 gap-2">
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

        {/* Description */}
        <div className="pt-4">
          <h2 className="text-2xl font-bold mt-8">Description</h2>
          <p className="mt-2">This is a description of the book.</p>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
