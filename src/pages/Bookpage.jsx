// BookPage.jsx

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';

const BookPage = () => {
  const { bookId } = useParams();


  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://43.205.231.10:5000/api/books/${bookId}`
      );
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
   
    <div className="container max-w-7xl mx-auto">
       <Navbar />
      <h2>Book Page for Book ID: {bookId}</h2>
      
    </div>
  );
};

export default BookPage;