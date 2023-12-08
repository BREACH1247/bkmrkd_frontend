import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from '../components/Navbar/Navbar';
import BookDescription from '../components/BookDescription/BookDescription';
import Reviews from '../components/Reviews/Reviews';
import RecommendedBooks from '../components/RecommendedBooks/RecommendedBooks';

const BookPage = () => {
  const { bookId } = useParams();
  const [bookdata, setBookdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://43.205.231.10:5000/api/books/${bookId}`
        );
		
        setBookdata(response.data.data.book);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, [bookId]);

  useEffect(() => {
	const fetchRecommendedBooks = async () => {
	  try {
		let token = Cookies.get('jwt');
  
		let config = {
		  method: 'get',
		  maxBodyLength: Infinity,
		  url: `http://139.59.24.234:8000/api/${bookId}`,
		  
		  headers: {
			Authorization: `Bearer ${token}`,
		  },
		};
  
		const response = await axios(config);
  
		if (response.status === 200) {
		  setRecommendedBooks(response.data.data.recommended_books);
		  setLoading(false);
		  console.log(response.data.data.recommended_books);
		}
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	};
  
	fetchRecommendedBooks();
  }, [bookId]);

  return (
    <div className="container max-w-7xl mx-auto">
      <Navbar />
      <BookDescription book={bookdata} />
	  <hr className="my-4 border-black border-t-2" />
      {loading ? (
        <div className="flex justify-center items-center mt-4 mb-4">

        	<div className=" border-t-4 border-yellow-500 rounded-full w-12 h-12 animate-spin mr-4"></div>
			<div className="font-medium animate-bounce">Loading Recommended Books . . .</div>
		</div>
      ) : (
        <RecommendedBooks recommendedBooks={recommendedBooks} />
      )}
      <Reviews />
      <h2>Book Page for Book ID: {bookId}</h2>
    </div>
  );
};

export default BookPage;
