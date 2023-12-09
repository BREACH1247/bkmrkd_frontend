import CardGrid from "../components/CardGrid";
import BookshelfCarousal from "../components/BookshelfCarousal/BookshelfCarousal";
import Slider from "react-slick";
import Navbar from "../components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useState, useEffect } from "react";
import heart from "../assets/heart.png";

const carouselConfig = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  mobileFirst: true,
  variableWidth: true,
};

const Landing = () => {
  const [newdata, setNewdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://43.205.231.10:4000/api/bookshelves?page=1`
        );
       
        setNewdata(response.data.data.bookshelves);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container max-w-7xl mx-auto">
      <Navbar />

      <Slider {...carouselConfig}>
        {newdata.map((item) => (
          <BookshelfCarousal key={item.id} details={item} />
        ))}
      </Slider>

      <div className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2.5px] mb-8 my-4"></div>

      <CardGrid />
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

export default Landing;
