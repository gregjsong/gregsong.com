import React, { useState } from 'react';
import './SkillGrid.scss';

import { Icon } from '@iconify/react'

import cards from '../SkillItems';


const SkillGrid = () => {

  const skillsArr = Object.values(cards);
  const skillItems = skillsArr.map(obj => {
    return (
      <div className='skill-card'>
        <Icon
          icon={obj.icon}
          style={{
            backgroundColor: obj.bgColor,
            color: obj.color
          }}
          className='skill-icon'
        />
        <p className='hover-animation' >
          {obj.title}
        </p>
      </div>
    )
  })

  return (
    <div
      className='skill-grid-container'
      id='skills'>
      <h2>Skills</h2>
      <div className='skill-grid'>
        {skillItems}
      </div>
      <div className='hexagon'></div>
    </div>
  );
}

export default SkillGrid;