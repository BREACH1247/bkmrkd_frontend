import React, { useState } from 'react';
import PropTypes from 'prop-types';
import page from '../../assets/page.png';
import note from '../../assets/note.png';
import account from '../../assets/account.png';
import book from '../../assets/book.png';
import bookshelf from '../../assets/bookshelf.png';
import Dropdown from './Dropdown';

const Navbar = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <nav className="">
      <div className="max-w-full grid grid-cols-1 md:grid-cols-[auto,1fr,auto] md:gap-4 items-center justify-between mx-auto py-4 my-1">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-auto text-4xl font-bold whitespace-nowrap dark:text-black">
            bkmrk'd
          </span>
        </a>
        <div className="md:hidden flex items-center">
          <a
            type="button"
            title="Search"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="inline-block md:hidden text-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-lg text-sm p-2.5 relative"
          >
            <svg
              className={`w-5 h-5 text-yellow-700 ${isOpen ? 'hidden md:inline-block' : 'md:hidden'}`}
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
            <span className="sr-only">Search Button</span>
          </a>
          <a
            type="button"
            title="Open main menu"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="inline-block md:hidden text-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-lg text-sm p-2.5 relative"
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
            <div className="md:hidden absolute top-full right-0 mt-2 w-56" style={{ backgroundColor: '#ece4c9' }}>
              <Dropdown isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} name={name} />
            </div>
            )}
          </a>
          

        </div>
        <div className="relative">
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
              <span className="sr-only">Search bar</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-md text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-black dark:border-yellow-600 dark:placeholder-yellow-600 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="Search..."
            />
          </div>
        <div className="flex items-center space-x-4 md:space-x-0">
          <a
            href="#"
            title="Journal Page"
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold py-2 px-9 rounded-lg flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
          >
            <img src={page} alt="" className="mr-2 h-5 w-5" />
            Journal Page
          </a>
          <a
            href="#"
            title="Books"
            className="hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
          >
            <img src={book} alt="" className="h-8 w-8" />
          </a>
          <a
            href="#"
            title="Notes"
            className="hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
          >
            <img src={note} alt="" className="h-8 w-8" />
          </a>
          <a
            href="/library"
            title="Bookshelf"
            className="hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
          >
            <img src={bookshelf} alt="" className="h-8 w-8" />
          </a>

          <div className="relative inline-block text-left">
            <a
              href="#"
              title="Account"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
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
  );
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
