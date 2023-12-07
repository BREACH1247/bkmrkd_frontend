import CardGrid from '../components/CardGrid'
import BookshelfCarousal from '../components/BookshelfCarousal/BookshelfCarousal'
import Slider from 'react-slick'
import Navbar from '../components/Navbar/Navbar'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios';
import { useState,useEffect } from 'react'


let data = [
	{
		id: 1,
		title: 'Best of Murakami',
	},
	{
		id: 2,
		title: 'Best of Dostoevsky',
	},
	{
		id: 3,
		title: 'Best of Tolstoy',
	},
	{
		id: 4,
		title: 'Best of Kafka',
	},
	{
		id: 5,
		title: 'Best of Hemingway, Kafka',
	},
	{
		id: 6,
		title: 'Top 10 Books of 2020',
	},
	{
		id: 7,
		title: 'Top 10 Books of 2019',
	},
	{
		id: 8,
		title: 'Top 10 Books of 2018',
	},
	{
		id: 9,
		title: 'Top 10 Books of 2017',
	},
	{
		id: 10,
		title: 'Top 10 Books of 2016',
	},
]

const carouselConfig = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	centerMode: true,
	mobileFirst: true,
	variableWidth: true,
}

const Landing = () => {
	const [newdata,setNewdata] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get(
			  `http://43.205.231.10:5000/api/bookshelves?page=1`
			);
			setNewdata(response.data.data.bookshelves);
		  } catch (error) {
			console.error('Error fetching data:', error);
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
		</div>
	)
}

export default Landing
