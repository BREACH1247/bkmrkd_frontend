// BookPage.jsx

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import BookDescription from '../components/BookDescription/BookDescription';
import Reviews from '../components/Reviews/Reviews';

const BookPage = () => {
  const { bookId } = useParams();
  const [reviews, setReviews] = React.useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://43.205.231.10:5000/api/books/${bookId}`
      );
      console.log(response)
      setReviews(response.data.reviews);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
   
    <div className="container max-w-7xl mx-auto">
       <Navbar />
       <BookDescription />
       <Reviews reviews={reviews} /> 
      <h2>Book Page for Book ID: {bookId}</h2>
      
    </div>
  );
};

export default BookPage;