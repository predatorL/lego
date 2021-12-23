import React from 'react';
import { Route, Routes } from "react-router-dom";
// views
import Home from './views/home';
import Translate from './views/translate';

function Entry() {
  return (
    <Routes>
    <Route path="/english">
      <Route path="" element={<Home />} />
      <Route path="/english/translate" element={<Translate />} />
    </Route>
    </Routes>
  );
}

export default Entry;
