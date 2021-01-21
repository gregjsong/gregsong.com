import React from 'react';
import './Home.scss';


const Home = () => {
  return (
    <div className='home-wrapper' id='home'>
      <div className='home-text'>
        <h2 className='home-text-title'>Hi, my name is Greg.</h2>
        <h3 className='home-text-writeup'> I'm an aspiring web developer from Vancouver. I am currently focused on developing my front end skills, but wish to transition into full stack eventually.
        </h3>
      </div>
    </div>
  )
}

export default Home;