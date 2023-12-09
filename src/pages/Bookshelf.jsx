// Bookshelf.jsx
import Navbar from "../components/Navbar/Navbar";
import BookshelfCategory from "../components/BookshelfCategory/BookshelfCategory";
import BookshelfGrid from "../components/BookshelfGrid";
import heart from "../assets/heart.png";

const Bookshelf = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <Navbar />
      <BookshelfCategory />
      <div className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2.5px] mb-8 my-4"></div>
      <BookshelfGrid />
      <br className="border-black border-t-2 mt-8"/>
      <div className="flex items-center justify-center mt-4">
        <p className="mr-2 font-bold text-xl text-center pb-2">
          Made with love
        </p>
        <img src={heart} alt="heart" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Bookshelf;
