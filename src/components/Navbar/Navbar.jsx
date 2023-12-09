import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import page from "../../assets/page.png";
import note from "../../assets/note.png";
import account from "../../assets/account.png";
import book from "../../assets/book.png";
import bookshelf from "../../assets/bookshelf.png";
import Dropdown from "./Dropdown";

const Navbar = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchDropdown, setSearchDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = Cookies.get("jwt");

        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `http://43.205.231.10:4000/api/books/search?q=${searchQuery}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios(config);

        console.log(response.data.data.books);
        setSearchResults(response.data.data.books);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchQuery]);
  return (
    <nav className="">
      <div className="max-w-full grid grid-cols-[auto,1fr,auto] md:gap-4 items-center justify-between mx-auto py-4 my-1">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-auto text-4xl font-bold whitespace-nowrap dark:text-black">
            bkmrk'd
          </span>
        </a>
        <div className="md:hidden flex col-start-2 items-center justify-end">
          {/* Search button only appears in mobile view */}
          <a
            type="button"
            title="Search"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className=" text-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-lg text-sm p-2.5 relative cursor-pointer"
          >
            <svg
              className="w-5 h-5 text-yellow-700 md:hidden"
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
          {/* Hamburger Menu button only appears in mobile view */}
          <a
            type="button"
            title="Open main menu"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className=" text-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-lg text-sm p-2.5 relative cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-5 h-5 text-yellow-700 "
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
                className="md:hidden absolute top-full right-0 mt-2 w-56"
                style={{ backgroundColor: "#ece4c9" }}
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
        {/* Search Bar*/}

        <div className="md:flex hidden relative ml-28 mr-8">
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
          <form
            className="block w-full"
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery) {
                const book = searchResults.find(
                  (result) =>
                    result.title_without_series.toLowerCase() ===
                    searchQuery.toLowerCase()
                );
                if (book) {
                  setSearchDropdown(false);
                  navigate(`/books/${book.book_id}`);
                }
              }
            }}
          >
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-md border text-white border-yellow-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-stone-900 placeholder-yellow-600"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={() => setSearchDropdown(true)}
              onBlur={() => setTimeout(() => setSearchDropdown(false), 200)}
            />
          </form>
          {searchDropdown && (
            <div className="absolute top-full right-0 mt-2 w-full rounded-lg bg-white shadow-lg p-4 z-50">
              <ul>
                {searchResults.slice(0, 5).map((result) => (
                  <Link to={`/books/${result.book_id}`} key={result.book_id}>
                    <li className="p-2 hover:bg-gray-200 cursor-pointer">
                      {result.title_without_series}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {/* Journal Page*/}
          <a
            href="#"
            title="Journal Page"
            className="md:flex hidden bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold py-2 px-9 rounded-lg flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
          >
            <img src={page} alt="" className="mr-2 h-5 w-5" />
            Journal Page
          </a>
          {/* Books button*/}
          <a
            href="#"
            title="Books"
            className="md:flex hidden hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
          >
            <img src={book} alt="" className="h-8 w-8" />
          </a>
          {/* Note Button*/}
          <a
            href="#"
            title="Notes"
            className="md:flex hidden hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
          >
            <img src={note} alt="" className="h-8 w-8" />
          </a>
          {/* Bookshelf Button*/}
          <a
            href="/library"
            title="Bookshelf"
            className="md:flex hidden hover:bg-white hover:rounded-full font-bold py-2 px-4 rounded flex items-center transition-transform transform hover:scale-105 hover:cursor-pointer"
          >
            <img src={bookshelf} alt="" className="h-8 w-8" />
          </a>
          {/* Account Button */}
          <div className="relative inline-block text-left">
            <button
              title="Account" onClick={() => setIsOpen(!isOpen)}
              className="md:flex hidden hover:bg-white hover:rounded-full
              font-bold py-2 px-4 items-center transition-transform transform
              hover:scale-105 hover:cursor-pointer">
              <img src={account} alt="" className="h-8 w-8" />
            </button>
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
