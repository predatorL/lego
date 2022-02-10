import React from 'react';
import { Link } from "react-router-dom";
import {RoutesConf} from '@entries/english';

const Entrys = [
  {
    label: '中英互译',
    path: '/translate'
  },
  {
    label: '听写',
    path: '/dictation'
  },
  {
    label: '遣词造句',
    path: '/phrasing'
  },
  {
    label: '完形填空',
    path: '/gapFilling'
  },
  {
    label: '阅读理解',
    path: '/readingComprehension'
  },
]

function View(): JSX.Element {
  return (
    <div className="Entry">
      <ul>
        {
          Entrys.map((item, i) => <li key={i}><Link to={`${RoutesConf.path}${item.path}`}>{item.label}</Link></li>)
        }
      </ul>
    </div>
  );
}

export default View;
