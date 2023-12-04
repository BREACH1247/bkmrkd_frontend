import React from 'react'
import add from '../assets/add.png'
import cluster from '../assets/cluster.png'
import search from '../assets/search.png'
import hand from '../assets/hand.png'
import Navbar from '../components/Navbar/Navbar'
import Bookshelf from '../components/Bookshelf/Bookshelf'

const Library = () => {
	return (
		<div>
			<div className="container max-w-7xl mx-auto">
				<Navbar />
				<div className="flex justify-center">
					<img src={hand} alt="hand"></img>
				</div>
				<div>
					<div className="mt-8">
						<h1 className="text-3xl font-semibold text-gray-80 mb-4 text-center">
							Meghna's Bookshelf
						</h1>
						<div className="flex justify-center">
							<img
								src={add}
								alt="hand"
								className="hover:scale-105 hover:cursor-pointer transition-transform transform"
							></img>
							<img
								src={search}
								alt="hand"
								className="hover:scale-105 mx-4 hover:cursor-pointer transition-transform transform"
							></img>
							<img
								src={cluster}
								alt="hand"
								className="hover:scale-105 hover:cursor-pointer transition-transform transform"
							></img>
						</div>
					</div>
				</div>
				<Bookshelf />
			</div>
		</div>
	)
}

export default Library
