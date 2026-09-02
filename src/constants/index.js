import { IMAGES } from './cloudinaryImages';

// Navigation Links
export const navlinkData = [
  { _id: 1001, title: 'Home', link: 'home' },
  { _id: 1006, title: 'Feature', link: 'feature' },
  { _id: 1002, title: 'Project', link: 'project' },
  { _id: 1003, title: 'Resume', link: 'resume' },
  { _id: 1005, title: 'Contact', link: 'contact' },
];

// Projects Data
export const projectsData = [
  {
    _id: 1,
    title: 'Shoe Collection E-Commerce Website',
    description:
      'A full-fledged e-commerce website, dedicated to showcasing a captivating shoe collection, with Next.js and Strapi as a Headless CMS',
    image: IMAGES.projects.shoeStore,
    technologies: ['Next.js', 'Strapi', 'Tailwind CSS'],
    projectLink: 'https://steptalk.vercel.app',
    gitLink: 'https://github.com/iitian360/store-frontend',
  },
  {
    _id: 2,
    title: 'Pizza Delivery Website - MoboPizza',
    description:
      'Developed MoboPizza, a responsive and user-friendly pizza delivery website built with React. Implemented features such as menu browsing, customizable pizza options, cart management',
    image: IMAGES.projects.pizza,
    technologies: ['React', 'Redux', 'Tailwind CSS'],
    projectLink: 'https://mobopizza.vercel.app',
    gitLink: 'https://github.com/iitian360/Pizza-delivery-app',
  },
  {
    _id: 3,
    title: 'YouTube Comment Analyzer',
    description:
      "It is a API based project build upon React.js, here one can analyse youtube video's comments, can see the distributions of comments and sentiment analysis.",
    image: IMAGES.projects.youtube,
    technologies: ['React', 'YouTube API', 'Chart.js'],
    projectLink: 'https://youtubeanalyser.vercel.app/',
    gitLink: 'https://github.com/iitian360/YouTubeApi-frontend',
  },
  {
    _id: 4,
    title: 'Weather Forecasting Application',
    description:
      'An application based on weather api which shows real time weather forecasting, with location and provide user to search functionality for any location weather.',
    image: IMAGES.projects.weather,
    technologies: ['React', 'Weather API', 'Tailwind CSS'],
    projectLink: '',
    gitLink: '',
  },
  {
    _id: 5,
    title: 'Event Management System',
    description: 'A comprehensive event management platform',
    image: IMAGES.projects.event,
    technologies: ['MERN', 'MongoDB', 'Express'],
    projectLink: '',
    gitLink: '',
  },
  {
    _id: 6,
    title: 'Contact Management App',
    description: 'Full-featured contact management application',
    image: IMAGES.projects.contact,
    technologies: ['React', 'Node.js', 'MongoDB'],
    projectLink: '',
    gitLink: '',
  },
  {
    _id: 7,
    title: 'Personal Portfolio',
    description: 'Modern portfolio website with Cloudinary integration',
    image: IMAGES.projects.portfolio,
    technologies: ['React', 'Tailwind CSS', 'Cloudinary'],
    projectLink: '',
    gitLink: '',
  },
  {
    _id: 8,
    title: 'Job Portal - Jobify',
    description: 'Job search and application platform',
    image: IMAGES.projects.jobify,
    technologies: ['MERN', 'Firebase', 'Tailwind CSS'],
    projectLink: '',
    gitLink: '',
  },
];

// Resume Tabs
export const resumeTabs = [
  { _id: 'education', label: 'Education', icon: '🎓' },
  { _id: 'skills', label: 'Professional Skills', icon: '💼' },
  { _id: 'achievement', label: 'Achievement', icon: '🏆' },
  { _id: 'experience', label: 'Experience', icon: '⚡' },
];

// Social Links
export const socialLinks = [
  {
    _id: 1,
    name: 'Facebook',
    icon: 'FaFacebookF',
    link: '#',
  },
  {
    _id: 2,
    name: 'LinkedIn',
    icon: 'FaLinkedinIn',
    link: '#',
  },
  {
    _id: 3,
    name: 'Instagram',
    icon: 'FaInstagram',
    link: '#',
  },
  {
    _id: 4,
    name: 'GitHub',
    icon: 'FaGithub',
    link: 'https://github.com/iitian360',
  },
];

// Contact Information
export const contactInfo = {
  phone: '+919793589037',
  email: 'your@email.com',
  address: 'India',
  availability: 'Available for freelance and full-time roles',
};