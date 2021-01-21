import React from 'react';
import './Portfolio.scss';

import gcImg from '../../assets/img/generic-company.png';
import gregSongImg from '../../assets/img/greg-song.png';
import restTestImg from '../../assets/img/rest-test.png';
import Button from '../Button';

const Portfolio = () => {
  const portfolio = {
    genericCompany: {
      img: gcImg,
      title: 'GenericCompany',
      writeUp: 'A simple website for a fake business.',
      alt: 'GenericCompany homepage',
      url: 'https://gc-landing-page.firebaseapp.com/',
      githubUrl: 'https://github.com/gregjsong/gc-landing-page'
    },
    gregSongPage: {
      img: gregSongImg,
      title: 'gregsong.com',
      writeUp: 'My personal website as a developer.',
      alt: 'Greg Song homepage',
      url: 'https://gregsong.com',
      githubUrl: 'https://github.com/gregjsong/gregsong.com'
    },
    restTest: {
      img: restTestImg,
      title: 'Bench Rest Test',
      writeUp: `An exercise in using REST APIs and transforming data.`,
      alt: 'Bench Rest Test',
      url: 'https://rest-test-9f7aa.web.app',
      githubUrl: 'https://github.com/gregjsong/rest-test'
    }
  }

  const slides = (object) => {
    const arr = Object.values(object);
    return arr.map((obj) => {
      return (
        <div className='portfolio-slide'>
          <img
            src={obj.img}
            alt={obj.alt} />
          <div className='slide-text'>
            <h5>{obj.title}</h5>
            <p>{obj.writeUp}</p>
            <div className='slide-text-button'>
              <Button
                href={obj.url}
                target='_blank'
              >View Page</Button>
              <Button
                filled
                href={obj.githubUrl}
                target='_blank'
              >GitHub</Button>
            </div>
          </div>
        </div >
      )
    })
  }

  return (
    <div className='portfolio-container' id='portfolio'>
      <h2>Portfolio</h2>
      {slides(portfolio)}
    </div>
  )
}

export default Portfolio