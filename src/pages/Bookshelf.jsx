import React from 'react'
import add from '../assets/add.png'
import cluster from '../assets/cluster.png'
import search from '../assets/search.png'
import hand from '../assets/hand.png'
import BookshelfCards from '../components/BookshelfCards/BookshelfCards'

const Bookshelf = () => {
	return (
		<div>
			<div>
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
				<BookshelfCards />
			</div>
		</div>
	)
}

export default Bookshelf
