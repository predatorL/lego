import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '@entries/home';
import English from '@entries/english';
import Math from '@entries/math';
import Hemistry from '@entries/chemistry';
import Chinese from '@entries/chinese';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/math" element={<Math />} />
        <Route path="/chemistry" element={<Hemistry />} />
        <Route path="/yuewen" element={<Chinese />} />
      </Routes>
    </BrowserRouter>
  );
} 
