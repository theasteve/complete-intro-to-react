import React from 'react';
import { Link } from 'react-router-dom'

const Landing = () => (
  <div className='landing'>
    <h1>Steven Aguilar</h1>
    <input type="text" placeholder="search"/>
    <Link to="/search">Or Browse All</Link>
  </div>
);

export default Landing;
