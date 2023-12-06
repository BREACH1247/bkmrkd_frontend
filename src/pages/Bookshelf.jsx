// Bookshelf.jsx
import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import CardGrid from '../components/CardGrid'
import BookshelfCategory from '../components/BookshelfCategory/BookshelfCategory'

const Bookshelf = () => {
    const [selectedBookshelf, setSelectedBookshelf] = useState(0);

    return (
        <div className="container max-w-7xl mx-auto">
            <Navbar />
            <BookshelfCategory selectedBookshelf={selectedBookshelf} setSelectedBookshelf={setSelectedBookshelf} />
            <div className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2.5px] mb-8 my-4"></div>
            <CardGrid />
        </div>
    )
}

export default Bookshelf