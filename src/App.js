import React from 'react';

import './App.scss';

import NavBar from './components/Navigation/NavBar';
import Home from './components/Home/Home';
import SkillCarousel from './components/SkillCarousel';
import SkillGrid from './components/SkillGrid';
import Portfolio from './components/Portfolio/Portfolio';



function App() {


  return (
    <div className="App">
      <NavBar />
      <Home />
      <Portfolio />
      <SkillGrid />
      {/* <SkillCarousel /> */}
    </div>
  );
}

export default App;
