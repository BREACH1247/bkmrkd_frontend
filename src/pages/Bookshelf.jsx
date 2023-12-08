// Bookshelf.jsx
import Navbar from '../components/Navbar/Navbar'
import BookshelfCategory from '../components/BookshelfCategory/BookshelfCategory'
import BookshelfGrid from '../components/BookshelfGrid'

const Bookshelf = () => {

    return (
        <div className="container max-w-7xl mx-auto">
            <Navbar />
            <BookshelfCategory />
            <div className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2.5px] mb-8 my-4"></div>
            <BookshelfGrid/>
        </div>
    )
}

export default Bookshelf