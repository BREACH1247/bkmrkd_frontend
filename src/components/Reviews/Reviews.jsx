import React, { useState, useEffect } from "react";
import axios from "axios";
import star from "../../assets/star.png";

const Reviews = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      console.log(bookId);
      try {
        let config = {
          method: "get",
          maxBodyLength: Infinity,

          url: `http://43.205.231.10:4000/api/reviews/book/${bookId}`,
        };

        const response = await axios(config);

        setReviews(response.data.data.reviews);
        console.log(response.data.data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [bookId]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Reviews</h2>
      <hr className="my-4 border-black border-t-2" />
      {reviews.length === 0 ? (
        <p className=" text-center font-semibold mt-4">
          No reviews available for this book.
        </p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="mb-4">
            <div className="flex items-center">
              <p className="font-medium">{review.name}</p>
              <div className="flex items-center mr-2">
                <span className="mr-2 font-semibold">{review.rating}</span>
                <img src={star} alt="star" className="w-5 h-5" />
              </div>
            </div>
            <p>{review.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
