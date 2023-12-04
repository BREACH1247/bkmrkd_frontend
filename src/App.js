import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Library from './pages/Library'
import Bookshelf from './pages/Bookshelf'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/library' element={<Library />} />
        <Route path='/bookshelf' element={<Bookshelf />} />
        <Route path='*' element={() => 'ERROR 404 NOT FOUND'} />
      </Routes>
    </Router>
  )
}

export default App
