import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Upload from './Pages/Upload/FileUpload';
import Users from './Pages/Users/Users';
import NavBar from './Components/navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
