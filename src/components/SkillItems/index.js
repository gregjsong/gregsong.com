import html5Icon from '@iconify-icons/simple-icons/html5';
import css3Icon from '@iconify-icons/simple-icons/css3';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import reactIcon from '@iconify-icons/simple-icons/react';
import reduxIcon from '@iconify-icons/simple-icons/redux';
import npmIcon from '@iconify-icons/simple-icons/npm';
import gitIcon from '@iconify-icons/simple-icons/git';
import sassIcon from '@iconify-icons/simple-icons/sass';

const cards = {
  html: {
    title: 'HTML5',
    icon: html5Icon,
    id: 'html',
    color: '#FFF',
    bgColor: '#f06529'
  },
  css: {
    title: 'CSS3',
    icon: css3Icon,
    id: 'css',
    color: '#FFF',
    bgColor: '#2965f1'
  },
  sass: {
    title: 'Sass',
    icon: sassIcon,
    id: 'sass',
    color: '#FFF',
    bgColor: '#CD6799'
  },
  javascript: {
    title: 'JavaScript',
    icon: javascriptIcon,
    id: 'javascript',
    color: '#F0DB4F',
    bgColor: '#323330'
  },
  react: {
    title: 'React',
    icon: reactIcon,
    id: 'react',
    color: '#1F232A',
    bgColor: '#61DBFB'
  },
  redux: {
    title: 'Redux',
    icon: reduxIcon,
    id: 'redux',
    color: '#FFF',
    bgColor: '#764abc'
  },
  npm: {
    title: 'NPM',
    icon: npmIcon,
    id: 'npm',
    color: '#FFF',
    bgColor: '#CC3534'
  },
  git: {
    title: 'Git',
    icon: gitIcon,
    id: 'git',
    color: '#FFF',
    bgColor: '#F1502F'
  }
}

export default cards