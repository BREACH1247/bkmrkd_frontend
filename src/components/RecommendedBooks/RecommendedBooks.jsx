import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import axios from 'axios';

const RecommendedBooks = ({ recommendedBooks }) => {
  const [bookDetails, setBookDetails] = useState([]);
  
   useEffect(() => {
      const fetchBookDetails = async () => {
        try {
          const detailsPromises = recommendedBooks.map(async (bookId) => {
            const response = await axios.get(`http://43.205.231.10:5000/api/books/${bookId}`);
            return response.data.data.book;
          });
  
          const details = await Promise.all(detailsPromises);
  
          setBookDetails(details);
        } catch (error) {
          console.error('Error fetching book details:', error);
        }
      };
  
      fetchBookDetails();
    }, [recommendedBooks]);

    useEffect(() => {
      if(bookDetails) {
        console.log(bookDetails);
      }
    }, [bookDetails])

    const handleCardClick = () => {
      window.location.reload();
    };
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {bookDetails.map((book, index) => (
          <Link to={`/book/${book.book_id}`} key={book.book_id || index} onClick={handleCardClick}>
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