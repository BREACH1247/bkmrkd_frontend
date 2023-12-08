import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import axios from 'axios';
import Cookies from 'js-cookie';

const RecommendedBooks = ({ recommendedBooks }) => {
    const [recommendedBooksData, setRecommendedBooksData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let token = Cookies.get('jwt')

				let config = {
					method: 'get',
					maxBodyLength: Infinity,
					url: `http://43.205.231.10:5000/api/books/search?q=${recommendedBooks}`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}

				const response = await axios(config)
        setRecommendedBooksData(response.data.data.books);
        } catch (error) {
          console.error('Error fetching recommended books data:', error);
        }
      };
  
      fetchData();
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