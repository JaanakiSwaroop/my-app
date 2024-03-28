import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Graph from './components/Graph';
import Crypto from './components/Crypto';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/crypto" element={<Crypto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
