import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CardGrid from '../components/CardGrid'
import Genre from '../components/Category/Category'

const Bookshelf = () => {
	return (
		<div className="container max-w-7xl mx-auto">
			<Navbar />
            <Genre />
			<div className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2.5px] mb-8 my-4"></div>
			<CardGrid />
		</div>
	)
}

export default Bookshelf
