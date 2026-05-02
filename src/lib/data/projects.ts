export interface Project {
  name: string;
  description: string;
  type: string;
  link: string;
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    name: 'Filpride',
    description: 'Official company website for a Philippine petroleum leader',
    type: 'Website',
    link: 'https://sophistiqq.github.io/FilprideWebsite/',
    image: '/FilprideWebsite.png',
    color: 'bg-brutal-yellow'
  },
  {
    name: 'Ticketing System',
    description: 'Full-featured internal ticketing and support system',
    type: 'App',
    link: 'https://ticketing-frontend-j23v.onrender.com/login',
    image: '/Ticketing.png',
    color: 'bg-brutal-green'
  },
  {
    name: 'cdcs',
    description: 'Personal clipboard sharing platform for CLI and Phone',
    type: 'App',
    link: 'https://cdcs-clipboard.vercel.app',
    image: '/CDCS.png',
    color: 'bg-brutal-blue'
  },
  {
    name: 'knowbia',
    description: 'Website for our Final Project',
    type: 'Website',
    link: 'https://sophistiqq.github.io/Knowbia-Web/',
    image: '/Knowbia.png',
    color: 'bg-brutal-green'
  },
  {
    name: 'jobtrackr',
    description: 'Simple job tracker app',
    type: 'App',
    link: 'https://jobtrackr-nu.vercel.app/',
    image: '/JobTrackr.png',
    color: 'bg-brutal-pink'
  },
  {
    name: 'knowbia-pwa',
    description: 'The failed PWA for Knowbia',
    type: 'App',
    link: 'https://knowbia.vercel.app',
    image: '/Knowbia-PWA.png',
    color: 'bg-brutal-yellow'
  },
  {
    name: 'old-portfolio',
    description: 'Very outdated personal website',
    type: 'Website',
    link: 'https://rborromeo-portfolio.vercel.app/',
    image: '/Portfolio-v1.png',
    color: 'bg-brutal-blue'
  },
  {
    name: 'iTrack',
    description: 'Vehicle tracking platform',
    type: 'App',
    link: 'https://itrack-v1.vercel.app/',
    image: '/itrack.png',
    color: 'bg-brutal-pink'
  }
];
