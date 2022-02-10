import React from 'react';
import { Link } from "react-router-dom";

function Entry() {
  return (
    <>
      <Link to="/english">
        英语
      </Link>
      <Link to="/chemistry">
        化学
      </Link>
      <Link to="/math">
        数学
      </Link>
      <Link to="/chinese">
        语文
      </Link>
    </>
  );
}

export default Entry;
