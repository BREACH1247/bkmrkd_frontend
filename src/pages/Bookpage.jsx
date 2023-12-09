import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar/Navbar";
import BookDescription from "../components/BookDescription/BookDescription";
import Reviews from "../components/Reviews/Reviews";
import RecommendedBooks from "../components/RecommendedBooks/RecommendedBooks";
import heart from "../assets/heart.png";
const BookPage = () => {
  const { bookId } = useParams();
  const [bookdata, setBookdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://43.205.231.10:4000/api/books/${bookId}`
        );

        setBookdata(response.data.data.book);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();
  }, [bookId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://139.59.24.234:8000/api/${bookId}`);
      const data = await response.json();
      // Log the initial response data

      if (data.data.recommended_books.length === 0) {
        await fetch("http://139.59.24.234:8000/api/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ book_id: bookId }),
        });
      }

      const intervalId = setInterval(async () => {
        const response = await fetch(`http://139.59.24.234:8000/api/${bookId}`);
        const updatedData = await response.json();
       // Log the updated response data

        if (updatedData.data.recommended_books.length > 0) {
          setRecommendedBooks(updatedData.data.recommended_books);
          clearInterval(intervalId);
        }
      }, 500);
    };

    fetchData();
  }, []); // Don't forget the dependency array!

  useEffect(() => {
    if (recommendedBooks.length > 0) {
      
      setLoading(false);
    }
  }, [recommendedBooks]);

  return (
    <div className="container max-w-7xl mx-auto">
      <Navbar />
      <BookDescription book={bookdata} />
      <hr className="my-4 border-black border-t-2" />
      {loading ? (
        <div className="flex justify-center items-center mt-4 mb-4">
          <div className=" border-t-4 border-yellow-500 rounded-full w-12 h-12 animate-spin mr-4"></div>
          <div className="font-medium animate-bounce">
            Loading Recommended Books . . .
          </div>
        </div>
      ) : (
        <RecommendedBooks recommendedBooks={recommendedBooks} />
      )}
      <Reviews bookId={bookId} />
      {/* <h2>Book Page for Book ID: {bookId}</h2> */}
      <br className="border-black border-t-2 mt-8" />
      <div className="flex items-center justify-center mt-4">
        <p className="mr-2 font-bold text-xl text-center pb-2">
          Made with love
        </p>
        <img src={heart} alt="heart" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default BookPage;
