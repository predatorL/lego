import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from '@entries/home';
import English from '@entries/english';
import Math from '@entries/math';
import Chemistry from '@entries/chemistry';
import Chinese from '@entries/chinese';


export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          主页
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/math" element={<Math />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/yuewen" element={<Chinese />} />
      </Routes>
    </BrowserRouter>
  );
} 
