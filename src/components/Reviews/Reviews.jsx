import React, { useState, useEffect } from "react";
import axios from "axios";
import star from "../../assets/star.png";

const Reviews = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
     
      try {
        let config = {
          method: "get",
          maxBodyLength: Infinity,

          url: `http://43.205.231.10:4000/api/reviews/book/${bookId}`,
        };

        const response = await axios(config);

        setReviews(response.data.data.reviews);
        
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [bookId]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-8">Reviews</h2>
      <hr className="my-4 border-black border-t-2" />
      {reviews.length === 0 ? (
        <p className=" text-center font-semibold mt-4">
          No reviews available for this book.
        </p>
      ) : (
        reviews.map((review, index) => (
          <div key={review.id} className="mb-4">
            <div className="flex justify-between items-center">
              <p className="font-bold mb-2 text-3xl">{review.user.name}</p>
              <p>{new Date(review.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-2 text-2xl">
                {review.rating}
                <img src={star} alt="star" className="ml-2 w-6 h-6 mb-2" />
              </div>
            </div>
            <p className="text-xl">{review.content}</p>
            {index !== reviews.length - 1 && <hr className="mt-4 border-gray-700"/>}
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
