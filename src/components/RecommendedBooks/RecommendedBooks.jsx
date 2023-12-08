import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import axios from 'axios';

const RecommendedBooks = ({ recommendedBooks }) => {
    const [recommendedBooksData, setRecommendedBooksData] = useState([]);
  
    useEffect(() => {
      const fetchRecommendedBooksData = async () => {
        try {
          const bookDetailsPromises = recommendedBooks.map(async (bookId) => {
            const response = await axios.get(`http://43.205.231.10:5000/api/books/${bookId}`);
            return response.data.data.book;
          });
  
          const booksData = await Promise.all(bookDetailsPromises);
          setRecommendedBooksData(booksData);
        } catch (error) {
          console.error('Error fetching recommended books data:', error);
        }
      };
  
      fetchRecommendedBooksData();
    }, [recommendedBooks]);
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {recommendedBooksData.map((book, index) => (
          <Link to={`/book/${book.book_id}`} key={book.book_id || index}>
            <Card
              imageUrl={book.cover_page}
              rating={book.book_average_rating} 
              bookId={book.book_id}
            />
          </Link>
        ))}
      </div>
    );
  };
  
  export default RecommendedBooks;