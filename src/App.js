import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Bookshelf from './pages/Bookshelf'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='*' element={() => 'ERROR 404 NOT FOUND'} />
        <Route path='/bookshelf' element={<Bookshelf/>} />
      </Routes>
    </Router>
  )
}

export default App
