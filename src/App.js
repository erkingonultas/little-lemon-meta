import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.js';
import BookingPage from './components/BookingPage.js';
import ConformationPage from './components/BookingForm/conformationPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/conformation" element={<ConformationPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
