import React, { useState } from 'react'
import PropTypes from 'prop-types'
import page from '../../assets/page.png'
import note from '../../assets/note.png'
import account from '../../assets/account.png'
import book from '../../assets/book.png'
import library from '../../assets/library.png'
import Dropdown from './Dropdown'

const Navbar = ({ name }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [isSignedIn, setIsSignedIn] = useState(false)
	return (
		<nav className="">
			<div className="max-w-full flex flex-wrap items-center justify-between mx-auto py-4 my-1">
				<a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
					<span className="self-auto text-4xl font-bold whitespace-nowrap dark:text-black">
						bkmrk'd
					</span>
				</a>
				<div className="flex-row md: flex md:order-1">
					<a
						type="button"
						data-collapse-toggle="navbar-search"
						aria-controls="navbar-search"
						aria-expanded="false"
						className="md:hidden text-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-lg text-sm p-2.5 me-1"
					>
						<svg
							className="w-5 h-5 text-yellow-700"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
						<span className="sr-only">Search</span>
					</a>
					<div className="relative hidden md:block">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-yellow-500 dark:text-yellow-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
							<span className="sr-only">Search icon</span>
						</div>
						<input
							type="text"
							id="search-navbar"
							className="block w-[500px] p-2 ps-10 text-md text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-black dark:border-yellow-600 dark:placeholder-yellow-600 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
							placeholder="Search..."
						/>
					</div>

					<a
						type="button"
						data-collapse-toggle="navbar-search"
						aria-controls="navbar-search"
						aria-expanded="false"
						className="md:hidden text-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-lg text-sm p-2.5 me-1 relative"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg
							className="w-5 h-5 cursor-pointer"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
						<span className="sr-only">Open main menu</span>
						{isOpen && (
							<div
								className="absolute right-0 mt-2 w-56 "
								style={{ backgroundColor: '#ece4c9' }}
							>
								<Dropdown
									isSignedIn={isSignedIn}
									setIsSignedIn={setIsSignedIn}
									name={name}
								/>
							</div>
						)}
					</a>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-search"
				>
					<div className="relative mt-3 md:hidden">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="search-navbar"
							className="block w-full p-2 ps-10 text-sm text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-black dark:border-yellow-600 dark:placeholder-yellow-600 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
							placeholder="Search..."
						/>
					</div>
					<a
						href="#"
						className="ml-2 mr-2 bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold py-2 px-9 rounded-lg flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
					>
						<img src={page} alt="" className="mr-2 h-5 w-5" />
						Journal Page
					</a>
					<a
						href="#"
						className="ml-2 hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
					>
						<img src={book} alt="" className="h-8 w-8" />
					</a>
					<a
						href="#"
						className="ml-2  hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
					>
						<img src={note} alt="" className="h-8 w-8" />
					</a>
					<a
						href="/bookshelf"
						className="ml-2 hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
					>
						<img src={library} alt="" className="h-8 w-8" />
					</a>

					<div className="relative inline-block text-left">
						<a
							href="#"
							onClick={() => setIsOpen(!isOpen)}
							className="ml-2  hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
						>
							<img src={account} alt="" className="h-8 w-8" />
						</a>
						{isOpen && (
							<Dropdown
								isSignedIn={isSignedIn}
								setIsSignedIn={setIsSignedIn}
								name={name}
							/>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}
Navbar.propTypes = {
	name: PropTypes.string.isRequired,
}

export default Navbar
