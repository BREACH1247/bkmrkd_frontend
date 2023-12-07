import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Library from './pages/Library'
import Bookshelf from './pages/Bookshelf'
import BookPage from './pages/Bookpage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/library' element={<Library />} />
        <Route path='/bookshelf' element={<Bookshelf/>} />
        <Route path='/bookshelf/:bookshelfid' element={<Bookshelf />} />
        <Route path='/books/:bookId' element={<BookPage/>}/>
        <Route path='*' element={() => 'ERROR 404 NOT FOUND'} />
      </Routes>
    </Router>
  )
}

export default App
