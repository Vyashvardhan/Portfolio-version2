import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav/Nav';
import About from './about/About'

const App = () => {
  return (
    <Router className=''>
      <Nav />
      <Routes>
        <Route path="/" element = {About} />
      </Routes>
    </Router>
  )
}

export default App