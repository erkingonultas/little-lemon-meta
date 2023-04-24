import React from 'react';
import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      {/* <Route path="/booking" element={<BookingPage />}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
