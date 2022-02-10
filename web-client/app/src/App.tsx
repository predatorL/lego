import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  Home from '@entries/home';
import English, {RoutesConf as EnglishRoutes} from '@entries/english';
import Math from '@entries/math';
import Chemistry from '@entries/chemistry';
import Chinese from '@entries/chinese';
import {RouteChild} from '@common/types';

function getRoutes(routes: RouteChild[], basePath?: string) {
  return routes.map(({path, element} : RouteChild) => {
    const Component: any = element;
    return <Route path={`${basePath}${path}`} element={<Component />} />
  })
}

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
        <Route path={EnglishRoutes.path} element={<English />} >
            {getRoutes(EnglishRoutes.children, EnglishRoutes.path)}
        </Route>
        <Route path="/math" element={<Math />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/yuewen" element={<Chinese />} />
      </Routes>
    </BrowserRouter>
  );
} 
