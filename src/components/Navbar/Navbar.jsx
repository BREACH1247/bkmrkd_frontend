import React from "react";
import page from "../../assets/page.png";
import note from "../../assets/note.png";
import account from "../../assets/account.png";
import book from "../../assets/book.png";

const Navbar = () => {
  return (
    <nav class="">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-4xl font-semibold whitespace-nowrap dark:text-black">
            bkmrk'd
          </span>
        </a>
        <div class="flex md:order-1">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              class="w-5 h-5 text-yellow-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="relative hidden md:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-yellow-500 dark:text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block w-[500px] p-2 ps-10 text-sm text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-black dark:border-yellow-600 dark:placeholder-yellow-600 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-500 rounded-lg md:hidden hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:text-yellow-700 dark:hover:bg-yellow-400 dark:focus:ring-yellow-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <a href="#" class="ml-2 mr-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-9 rounded-lg flex items-center" >
            <img src={page} alt="" class="mr-2 h-5 w-5" />
            Journal Page
          </a>
          <button class="ml-2 text-white font-bold py-2 px-4 rounded flex items-center">
            <img src={book} alt="" class="h-6 w-6" />
          </button>
          <button class="ml-2 text-white font-bold py-2 px-4 rounded flex items-center">
            <img src={note} alt="" class="h-6 w-6" />
          </button>
          <button class="ml-2  text-white font-bold py-2 px-4 rounded flex items-center">
            <img src={account} alt="" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
