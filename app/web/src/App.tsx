import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          主页
        </Link>
      </header>
    </BrowserRouter>
  );
} 
