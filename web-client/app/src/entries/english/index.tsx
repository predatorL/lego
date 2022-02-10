import React from 'react';
import { Outlet } from "react-router-dom";
// utils
import {TRouteConf} from '@common/types';
// views
import Home from './views/home';
import Translate from './views/translate';

export const RoutesConf: TRouteConf = {
  path: '/english',
  name: 'english',
  label: '英语',
  children: [
    {
      path: '/',
      element: Home
    },
    {
      path: '/translate',
      element: Translate
    }
  ]
}
  
function Entry() {
  return (
    <div className='english'>
      <header>{RoutesConf.label || RoutesConf.name}</header>
      <Outlet />
    </div>
  );
}

export default Entry;
