import bee from '../assets/projects/bee.png'
import weather from '../assets/projects/weather2.gif'
import gods from '../assets/projects/gods.png'
import buhjit from '../assets/projects/buhjit.png'
import ga from '../assets/companies/general-assembly-logo.png'
import tfl from '../assets/companies/tfl-logo.png'
import eclipse from '../assets/companies/eclipse-logo.png'
import step from '../assets/companies/step-logo.png'
import strathy from '../assets/companies/strathy-logo.png'

export const sectionHeadings = ['About', 'Technologies', 'Projects', 'Experience']

export const technologies = ['JavaScript', 'HTML5', 'CSS3', 'React', 'Node.js', 'MongoDB', 'Express', 'Django', 'PostgreSQL', 'Python', 'Git', 'Github', 'Sass', 'Bootstrap', 'Bulma', 'Heroku', 'Yarn', 'npm']

export const otherTechnologies = ['Illustrator', 'Photoshop', 'Xd', 'Slack', 'Figma', 'Trello']

export const projects = [
  {
    key: 'bee',
    name: 'American Were-Bee in London',
    description: 'A 7 day project to build a game based on a grid format. Built mostly using classes and array methods in JavaScript and styled with CSS. The game has a number of screens the user can interact with as well as the game play area. In the game there are multiple obstacles to avoid and means by which to score points.',
    repo: 'https://bit.ly/read-bee-dot-md',
    deployed: 'https://bit.ly/were-bee',
    image: bee,
  },
  {
    key: 'weather',
    name: 'World Weather App',
    description: 'Based on a hackathon style build, this project looked to quickly pull together a front end application consuming a public API. My partner and I chose a weather theme and pair-coded the app. The front end is built with React, SASS and Bulma.',
    repo: 'https://bit.ly/rained-me',
    deployed: 'https://bit.ly/world-weather-app-rk',
    image: weather,
  },
  {
    key: 'gods',
    name: 'Trust Pistis',
    description: 'Full-stack MERN app with CRUD functionality. Based on the TrustPilot website with a theme of Greek Gods. Co-built the backend with some later schema and request functionality added individually. Coded and styled the home and profile pages while giving support and guidance to colleagues with the coding of other components in the app.',
    repo: 'https://bit.ly/read-melete',
    deployed: 'https://bit.ly/trust-pistis',
    image: gods,
  },
  {
    key: 'buhjit',
    name: 'Buh-jit',
    description: 'Full-stack application built with Django, PostgreSQL, React and Node.js. A budget management application with a focus on the user. Uses a simple and intuitive interface allowing users to add, edit and delete transactions with a dashboard to display these.',
    repo: 'https://bit.ly/receipt-me',
    deployed: 'https://bit.ly/buh-jit',
    image: buhjit,
  }
]

export const experience = [
  {
    key: 'ga',
    company: 'General Assembly',
    title: 'Software Engineering Immersive',
    description: [
      'An intensive full time program to build and solidify software engineering knowledge  foundations.',
      'The program combines group and individual projects with practical lectures and labs in a fast-paced environment designed to mimic industry.'
    ],
    image: ga,
    date: 'May 2021 - Jul 2021',
  },
  {
    key: 'tfl',
    company: 'Transport for London',
    title: 'Product & Industrial Designer',
    description: [
      'Designed textiles and interior design components for 6 of London Underground’s Tube Lines covering over 40% of the network.',
      'Liaised with multifunctional teams to support the design and delivery of two new rolling stock projects - DLR and Deep Tube Upgrade Programme'
    ],
    image: tfl,
    date: 'Apr 2020 - May 2021',
  },
  {
    key: 'eclipse',
    company: 'Eclipse Blind Systems',
    title: 'Product Engineer',
    description: [
      'Product Expert for SMART and motorised components; product area driving gross revenue growth of +80% YoY.',
      'Project Manager for new roller hardware. Integrated project requiring collaboration with internal and external stakeholders and the board of directors to justify and manage project budget allocation.',
      'Senior member of the team responsible for supporting colleagues with design, CAD and legacy product knowledge.'
    ],
    image: eclipse,
    date: 'Jul 2018 - Mar 2020',
  },
  {
    key: 'step',
    company: 'STEP3D',
    title: 'Product Design Engineer',
    description: [
      'Design Lead and Project Manager responsible for taking projects from concept, to prototyping and manufacture.',
      'Created mechatronic prototypes and concept CAD for hydrogen vehicles.',
      'Built effective client relationships across industries ranging from medical devices to educational toys.'
    ],
    image: step,
    date: 'Mar 2017 - Jun 2018',
  },
  {
    key: 'strathclyde',
    company: 'University of Strathclyde',
    title: 'MEng Product Design Engineering with Distinction',
    description: [
    ],
    image: strathy,
    date: 'Sep 2012 - Jun 2017',
  }
]