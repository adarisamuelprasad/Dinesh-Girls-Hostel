import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components2/Home';
import About from './components2/About';
import Contact from './components2/Contact';
import Nav from './components2/Nav';
import './App.css';


function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    
    </>
  );
}

export default App;
