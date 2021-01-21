import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  const items = ['Home', 'Portfolio', 'Skills'];

  const listItems = items.map(str =>
    <a href={`#${str.toLowerCase()}`}>{str}</a>
  )


  return (
    <div className={`NavBar-container`}>
      <div
        className='website-icon'>
        <h1 className='website-icon'>Greg Song</h1>
      </div>
      <div className='nav-items'>
        {listItems}
      </div>

    </div>
  )
};

export default NavBar;