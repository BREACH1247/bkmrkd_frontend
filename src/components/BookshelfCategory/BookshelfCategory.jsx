import React, { useEffect, useState } from "react";
import pages from "../../assets/pages.png";
import cluster2 from "../../assets/cluster2.png";
import notes from "../../assets/notes.png";
import lock from "../../assets/lock.png";
import { useParams } from 'react-router-dom';
import axios from 'axios'


const BookshelfCategory = () => {
  const { bookshelfid } = useParams();
  console.log(bookshelfid)
  const [newdata,setNewdata] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get(
			  `http://43.205.231.10:5000/api/bookshelves?page=1`
			);
			setNewdata(response.data.data.bookshelves);
			console.log(newdata);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	  
		fetchData();
	  }, []);
  const Bookshelf = [
    { name: "Bookshelf1", bookCount: 25 },
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

  const slicedTags = tags.slice(0, 5);
  const [showMore, setShowMore] = useState(false);
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const StackText = ({ bookshelf, bookCount }) => (
    <div className="flex flex-col items-center justify-center mt-2 mb-2" >
      <div style={{ fontFamily: "Roboto Mono", fontWeight: 700, fontSize: "36px" }}>
        {bookshelf}
      </div>
      <div className="flex items-center" style={{ fontFamily: "Noto Sans", fontWeight: 600, fontSize: "20px" }}>
        {bookCount} books
        <img src={lock} alt="Locked" className="w-4 h-4 ml-2" />
      </div>
    </div>
  );

  return (
    <div className="mt-4">
      {Bookshelf.map((bookshelf, index) => (
        <div key={index}>
          <StackText
            bookshelf={bookshelf.name}
            bookCount={bookshelf.bookCount}
          />
          <div className="flex justify-center flex-wrap mt-6">
            <img
              src={pages}
              alt="pages"
              className="hover:scale-105 hover:cursor-pointer transition-transform transform"
            />
            <img
              src={cluster2}
              alt="cluster"
              className="hover:scale-105 mx-2 hover:cursor-pointer transition-transform transform"
            />
            <img
              src={notes}
              alt="notes"
              className="hover:scale-105 hover:cursor-pointer transition-transform transform"
            />
          </div>
          <div className="flex justify-center flex-wrap mt-4">
            {slicedTags.slice(0, 3).map((tag, index) => (
              <div
                key={index}
                className={`rounded-full px-8 py-2 p-1 m-1 border border-gray-700 ${getRandomColor()}`}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex justify-center flex-wrap">
            {slicedTags.slice(3, 5).map((tag, index) => (
              <div
                key={index}
                className={`rounded-full px-8 py-2 p-1 m-1 border border-gray-700 ${getRandomColor()}`}
              >
                {tag}
              </div>
            ))}
          
        
          {tags && tags.length > 5 && !showMore && (
            <div className="flex justify-center flex-wrap">
              <div
                className={`tag-box rounded-full px-4 py-2 p-1 m-1 border border-gray-700 ${getRandomColor()} cursor-pointer`}
                title={tags.slice(5).join(", ")}
                onClick={() => setShowMore(!showMore)}
                
              >
                +{tags.length - 5}
              </div>
            </div>
          )}
        </div>
          {showMore && (
            <div className="flex justify-center flex-wrap">
              {tags.slice(5).map((tag, index) => (
                <div
                  key={index}
                  className={`tag-box rounded-full px-4 py-2 p-1 m-1 border border-gray-700 ${getRandomColor()} `}
                >
                  {tag}
                </div>
              ))}
            </div>
            
          )}
          
        </div>
      ))}
    </div>
  );
};

export default BookshelfCategory;
