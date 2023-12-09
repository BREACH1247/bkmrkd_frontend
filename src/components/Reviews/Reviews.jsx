import React, {useState} from 'react';
import star from '../../assets/star.png';

const Reviews = ({ reviews }) => {
  const [reviewsData, setReviewsData] = useState([]);
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Reviews</h2>
      <hr className="my-4 border-black border-t-2" />
      {reviewsData.map((reviews) => (
        <div key={reviews.id} className="mb-4">
          <div className="flex items-center">
            <p className="font-medium">{reviews.name}</p>
            <div className="mr-2">
              {reviews.rating}
              <img src={star} alt="star" className="w-5 h-5 mr-1" />
            </div>
          </div>
          <p>{reviews.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;