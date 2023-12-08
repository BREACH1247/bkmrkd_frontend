import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Card from './Card'
import axios from 'axios'

const BookshelfGrid = () => {
	const { bookshelfid } = useParams()
	const [newdata, setNewdata] = useState([])
	const [page, setPage] = useState(1)

	useEffect(() => {
		const fetchData = async () => {
			try {
				let token = Cookies.get('jwt')

				let config = {
					method: 'get',
					maxBodyLength: Infinity,
					url: `http://43.205.231.10:5000/api/bookshelves/${bookshelfid}/books`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}

				const response = await axios(config)

				setNewdata(response.data.data.books)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [page])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleScroll = () => {
		const { scrollTop, clientHeight, scrollHeight } = document.documentElement

		if (scrollTop + clientHeight >= scrollHeight) {
			setPage((prev) => prev + 1)
		}
	}
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
			{newdata.map((card, index) => (
				<Card
					key={index}
					imageUrl={card.cover_page}
					rating={card.book_average_rating}
					bookId={card.book_id}
				/>
			))}
		</div>
	)
}

export default BookshelfGrid
