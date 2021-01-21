import React, { useState } from 'react';
import './SkillCarousel.scss'

import { Icon } from '@iconify/react';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import cards from '../SkillItems';

const SkillCarousel = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const skillsArr = Object.values(cards);
  const skillsItems = skillsArr.map(obj => (
    <Carousel.Item
      bsPrefix='carousel-item'
      key={obj.id}
    >
      <Card
        bsPrefix='card'>
        <Icon
          className='logo'
          icon={obj.icon}
          style={{
            color: `${obj.color}`,
            backgroundColor: `${obj.bgColor}`
          }} />
        <Card.Body
          bsPrefix='card-body'>
          <Card.Title
            bsPrefix='card-title'>
            {obj.title}
          </Card.Title>
          <Card.Text
            bsPrefix='card-text'>
            {obj.writeUp}
          </Card.Text>
        </Card.Body>
      </Card>
    </Carousel.Item>
  ));

  return (
    <div className='skill-carousel'>
      <h2>Skills</h2>
      <Carousel
        bsPrefix='carousel'
        interval={null}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {skillsItems}
      </Carousel>
    </div>
  )
}


export default SkillCarousel;