// NAVIGATION
import { faAward, faHiking, faTent, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
// imgage
import Post1 from '../assets/post-9.jpg'
import Post2 from '../assets/post-10.jpg'
import Post3 from '../assets/post-11.jpg'
import Post4 from '../assets/post-12.jpg'

import Tour1 from '../assets/tourimage/tour-1.jpg'
import Tour2 from '../assets/tourimage/tour-2.jpg'
import Tour3 from '../assets/tourimage/tour-3.jpg'
import Tour4 from '../assets/tourimage/tour-4.jpg'
import Tour5 from '../assets/tourimage/tour-5.jpg'



export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '', key: 'how_hilink_work', label: 'Tours page' },
    { href: '', key: 'Destination', label: 'Destination' },
    { href: '', key: 'Pages ', label: 'Pages ' },
    { href: '', key: 'News ', label: 'News ' },
    { href: '', key: 'Contact ', label: 'Contact ' },
];

export const awards = [
    {
      icons: faHiking,
      title: 'Happy Traveler',
      start: '2500',
      end: '3500',
      sign: '+'
    },
    {
      icons: faTent,
      title: 'Tours success',
      start: '1050',
      end: '1650',
      sign: '+'
    },
    {
      icons: faUsersViewfinder,
      title: 'Positive Reviews',
      start: '25.5',
      end: '99',
      sign: '%'
    },
    {
      icons: faAward,
      title: 'Awards Winning',
      start: '20',
      end: '65',
      sign: 'K+'
    },  
];

export const tours = [
  {
      name: "Body of Water Near Mountain",
      price: "$299.00",
      location: "Main Street, Brooklyn, NY",
      image: Tour1
  },
  {
      name: "Yucatán Peninsula & Caribbeans",
      price: "$359.00",
      location: "Main Street, Brooklyn, NY",
      image: Tour2
  },
  {
      name: "Rainbow Mountain Red Valley",
      price: "$359.00",
      location: "Main Street, Brooklyn, NY",
      image: Tour3
  },
  {
      name: "Boathouse Neighborhood",
      price: "$359.00",
      location: "Main Street, Brooklyn, NY",
      image: Tour3,
  },
  {
      name: "Mykonos and Santorini Tour",
      price: "$359.00",
      location: "Main Street, Brooklyn, NY",
      image: Tour4,
  },
  {
      name: "Java & Bali One Life Adventures",
      price: "$359.00",
      location: "Main Street, Brooklyn, NY",
      image: Tour5,
  }
];

export const news = [
  {
    imagenews: Post1,
    catergory: 'Web Design',
    title: 'We design technology of innovation',
    describe: 'Pellentesque placerat eget euismod. Mauris tempor cursus dolor. Ut dolor elit, ullamcorper quis ornare, congue id orci diam.',
  },
  {
    imagenews: Post2,
    catergory: 'Technology',
    title: 'A quick solutions for daily problem',
    describe: 'Pellentesque placerat eget euismod. Mauris tempor cursus dolor. Ut dolor elit, ullamcorper quis ornare, congue id orci diam.',
  },
  {
    imagenews:Post3,
    catergory: 'Development',
    title: 'We’re delivering the best IT services',
    describe: 'Pellentesque placerat eget euismod. Mauris tempor cursus dolor. Ut dolor elit, ullamcorper quis ornare, congue id orci diam.',
  },
  {
    imagenews: Post4,
    catergory: 'Web Design',
    title: 'We believe in building lasting our business ',
    describe: 'Pellentesque placerat eget euismod. Mauris tempor cursus dolor. Ut dolor elit, ullamcorper quis ornare, congue id orci diam.',
  },
]
