import React from 'react'
import add from '../assets/add.png'
import cluster from '../assets/cluster.png'
import search from '../assets/search.png'
import hand from '../assets/hand.png'
import heart from '../assets/heart.png'
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
						{localStorage.getItem('name').split(' ')[0]}'s Bookshelf
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
			<br className="border-black border-t-2 mt-8" />
      <div className="flex items-center justify-center mt-4">
        <p className="mr-2 font-bold text-xl text-center pb-2">
          Made with love
        </p>
        <img src={heart} alt="heart" className="w-8 h-8" />
      </div>
		</div>
	)
}

export default Library
