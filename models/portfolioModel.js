const profile = {
  name: 'Pratham Prajapati',
  role: 'Backend Developer',
  location: 'Gujarat, India',
  email: 'pratham.prajapati2409@gmail.com',
  phone: '+91 94093 27965',
  github: 'https://github.com/pratham-9029',
  linkedin: '#',
  twitter: '#',
  avatar: '/images/profile.png',
  bio:
    'Aspiring Backend Developer with a strong focus on Node.js and server-side architecture. Proficient in building RESTful APIs using Express.js and managing databases with MongoDB. Strong foundation in Data Structures and Algorithms and C programming.',
};

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '1+', label: 'Years Experience' },
  { value: '100%', label: 'Learning Mindset' },
];

const techStack = [
  {
    title: 'Backend Roots',
    icon: 'fa-server',
    description: 'API design, routing, middleware, auth flows, and server-side rendering.',
    skills: ['Node.js', 'Express.js', 'EJS', 'REST APIs'],
    size: 'large',
  },
  {
    title: 'Data Layer',
    icon: 'fa-database',
    description: 'Comfortable modeling application data and connecting backend services to MongoDB.',
    skills: ['MongoDB', 'Mongoose', 'CRUD', 'Schema Design'],
    size: 'small',
  },
  {
    title: 'Frontend Craft',
    icon: 'fa-code',
    description: 'Clean responsive interfaces with semantic markup and modern CSS utilities.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    size: 'small',
  },
  {
    title: 'Problem Solving',
    icon: 'fa-diagram-project',
    description: 'A steady base in DSA and C helps me reason clearly through backend problems.',
    skills: ['DSA', 'C', 'Debugging', 'Algorithms'],
    size: 'wide',
  },
  {
    title: 'Workflow',
    icon: 'fa-terminal',
    description: 'Daily tools for building, shipping, and keeping code organized.',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux'],
    size: 'small',
  },
];

const projects = [
  {
    title: 'Snap Folio',
    description:
      'A responsive portfolio project focused on polished layout, section navigation, and Bootstrap-based UI composition.',
    image: '/images/img.png',
    technologies: ['HTML5', 'CSS3', 'Bootstrap'],
    liveUrl: 'https://pr-02-bt-port-folio.vercel.app/',
    sourceUrl: 'https://github.com/pratham-9029/PR-02-BT-PortFolio?tab=readme-ov-file',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather application with location-based forecasts and API-driven data rendering for real-time conditions.',
    image: '/images/img-3.png',
    technologies: ['JavaScript', 'API Integration', 'Responsive UI'],
    liveUrl: 'https://pr-10-weather-api-six.vercel.app/',
    sourceUrl: 'https://github.com/pratham-9029/PR-10-Weather-API',
  },
  {
    title: 'CineVerse',
    description:
      'A full-stack movie platform built with Node.js and Express.js for discovering films, ratings, details, and trailers.',
    image: '/images/image.png',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/pratham-9029/Node-PR-05-CineVerse.git',
  },
];

module.exports = {
  profile,
  stats,
  techStack,
  projects,
};
