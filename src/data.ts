export const profile = {
  name: 'Raj Lathiya',
  monogram: 'RL',
  title: 'Data Analyst & Full Stack Developer',
  location: 'Mumbai, India',
  degree: 'B.Tech in Information Technology',
  degreeNote: 'AI & ML Honours',
  tagline:
    'I build data-driven automation, AI/ML systems, and end-to-end web solutions — turning raw data into decisions and ideas into shipped products.',
  intro:
    "I'm an Information Technology engineer (Honours in AI & ML) with a CGPA of 9.65/10. I work across data analysis, automation, and full-stack development — from scraping and Playwright automation to Flask tools that convert invoices into bank-ready files, and AI surveillance systems built on YOLO and deep learning.",
  email: 'rajlathiya1912@gmail.com',
  phone: '+91 90829 93748',
  github: 'https://github.com/rajlathiya0',
  linkedin: 'https://www.linkedin.com/in/raj-lathiya',
  photo: './raj.jpeg',
  avatar: './profile.jpg',
  resume: './Raj_Lathiya_Resume.pdf',
  stats: [
    { value: '9.65', label: 'CGPA / 10' },
    { value: '11+', label: 'Projects Built' },
    { value: '3', label: 'Internships' },
    { value: 'AI/ML', label: 'B.Tech Honours' },
  ],
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  current?: boolean
  points: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Mirraw',
    role: 'Data Analyst',
    period: '22 Apr 2026 — Present',
    location: 'Mumbai, India',
    current: true,
    points: [
      'Automated a product-matching pipeline with Playwright & Patchright — scraping competitor catalogues to detect identical and visually similar products at scale.',
      'Shipped a Flask tool powered by PyMuPDF and Gemini 2.5 Flash that converts invoice PDFs into bank-ready payment files, cutting manual data entry for the accounting team.',
      'Built a data-mapping pipeline that reformats Mirraw\'s catalogue into other marketplaces\' listing formats for cross-platform publishing.',
      'Analyzed refund and wallet spend using Python visualization libraries to surface cost trends and actionable insights for finance.',
      'Designed a self-serve vendor portal in Flask for fetching product details, streamlining reordering and payments.',
    ],
  },
  {
    company: 'The Hobby Tribe',
    role: 'Full Stack Developer Intern',
    period: '25 Jul 2025 — 25 Aug 2026',
    location: 'Mumbai, India',
    points: [
      'Developed dynamic, user-friendly pages with EJS, improving overall UX and frontend responsiveness.',
      'Built interactive engagement features such as a Stress-O-Meter and Streaks Plan to boost retention.',
      'Designed an Explore Page where users could post, like, comment, and share hobby content — fostering a community-driven platform.',
      'Worked across frontend and backend layers for seamless integration and smooth functionality.',
    ],
  },
  {
    company: 'Bot2Do Technologies',
    role: 'Backend Developer Intern',
    period: '17 Jun 2024 — 17 Sep 2024',
    location: 'Mumbai, India',
    points: [
      'Contributed to backend architecture and features on the ScaleSecure project using Node.js.',
      'Designed and maintained scalable RESTful APIs, adding new endpoints for evolving business needs.',
      'Optimized database queries and backend logic to reduce latency and ensure efficient data handling.',
      'Debugged, tested, and improved existing services for reliability and smooth frontend integration.',
    ],
  },
]

export type Project = {
  title: string
  period: string
  category: string
  description: string
  features: string[]
  tech: string[]
  image: string
  accent: string
}

export const projects: Project[] = [
  {
    title: 'Invoice → Payment File Automation',
    period: 'Mirraw · 2026',
    category: 'Automation · GenAI',
    description:
      'End-to-end Flask tool that converts invoice PDFs into bank-ready payment files, built to simplify the accounting team\'s workflow.',
    features: [
      'Parses invoice PDFs with PyMuPDF and structures line items',
      'Uses Gemini 2.5 Flash to extract and normalize payment data',
      'Generates bank-ready output files for direct upload',
    ],
    tech: ['Flask', 'PyMuPDF', 'Gemini 2.5', 'Python'],
    image: './projects/invoice.svg',
    accent: '#5ba3c9',
  },
  {
    title: 'Product Scraping & Similarity Engine',
    period: 'Mirraw · 2026',
    category: 'Data · Automation',
    description:
      'Scraping automation that captures product images and finds identical & similar products across external e-commerce platforms, storing their data.',
    features: [
      'Playwright & Patchright driven stealth scraping',
      'Image-based similarity search across competitor sites',
      'Structured storage of matched product information',
    ],
    tech: ['Playwright', 'Patchright', 'Python', 'Scraping'],
    image: './projects/scraper.svg',
    accent: '#4a9ec4',
  },
  {
    title: 'Real-Time Violence Detection',
    period: 'Mar 2025 — Apr 2025',
    category: 'AI / Deep Learning',
    description:
      'AI surveillance system that detects and reports violent incidents in real-time from live video, with geospatial incident mapping. 1st place — Final Year Project.',
    features: [
      'YOLOv5 for fast, accurate detection from live streams',
      'Dashboard with camera number, location & timestamp',
      'OpenStreetMap incident map + real-time threat alerts',
    ],
    tech: ['Flask', 'YOLOv5', 'OpenCV', 'Python'],
    image: './projects/violence.jpg',
    accent: '#8fb9d1',
  },
  {
    title: 'Woman Safety Analytics',
    period: 'Jul 2024 — Nov 2024',
    category: 'AI / Computer Vision',
    description:
      "AI solution that enhances women's safety by identifying potential threats in real-time through intelligent surveillance.",
    features: [
      'Conv2D deep-learning model to detect violent actions',
      'Haar cascade gender classification in real time',
      'Context alerts (e.g. lone woman at night) for public spaces',
    ],
    tech: ['OpenCV', 'TensorFlow', 'Keras', 'Conv2D'],
    image: './projects/safety.jpg',
    accent: '#5ba3c9',
  },
  {
    title: 'ML Admin Dashboard',
    period: 'Feb 2024 — May 2024',
    category: 'Full Stack · ML',
    description:
      'A modern admin dashboard powered by machine learning for predictive analytics, with interactive KPI visualization.',
    features: [
      'Linear Regression forecasts next-year revenue',
      'Real-time KPI dashboards for sales & growth',
      'Smart filtering + CSV/PDF exportable reports',
    ],
    tech: ['React', 'Express', 'MongoDB', 'Material UI'],
    image: './projects/dashboard.jpg',
    accent: '#4a9ec4',
  },
  {
    title: 'Stock Market Prediction',
    period: 'Jan 2024 — Feb 2024',
    category: 'Deep Learning',
    description:
      'A predictive system that forecasts stock prices using deep learning with real-time, interactive visualization.',
    features: [
      'LSTM networks capture long-term price dependencies',
      'Moving-average smoothing to reduce noise',
      'Streamlit interface for ticker input & trend lines',
    ],
    tech: ['LSTM', 'Streamlit', 'Python', 'Keras'],
    image: './projects/stock.jpg',
    accent: '#5ba3c9',
  },
  {
    title: 'Orebi — E-commerce Store',
    period: 'Jul 2023 — Aug 2023',
    category: 'Frontend',
    description:
      'A feature-complete e-commerce experience with modern shopping functionality and a fully responsive UI.',
    features: [
      'Add-to-cart, wishlist, billing & checkout flows',
      'Secure payment gateway for real-time transactions',
      'Product listing, search & filter mechanisms',
    ],
    tech: ['React', 'Redux', 'Tailwind', 'JavaScript'],
    image: './projects/orebi.svg',
    accent: '#4a9ec4',
  },
  {
    title: 'Bug Database Management',
    period: 'Aug 2022 — Oct 2022',
    category: 'Desktop App',
    description:
      'A desktop solution for tracking and resolving software bugs throughout the development cycle.',
    features: [
      'Report, track, assign & resolve bugs within teams',
      'Priority classification, status updates & assignment',
      'Java GUI with MySQL/SQLite persistence',
    ],
    tech: ['Java', 'Swing', 'MySQL', 'SQLite'],
    image: './projects/bug.svg',
    accent: '#8fb9d1',
  },
]

export type SkillGroup = {
  title: string
  skills: { name: string; icon: string }[]
}

// devicon slugs -> CDN path built in component
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'python/python-original' },
      { name: 'Java', icon: 'java/java-original' },
      { name: 'JavaScript', icon: 'javascript/javascript-original' },
      { name: 'TypeScript', icon: 'typescript/typescript-original' },
      { name: 'HTML5', icon: 'html5/html5-original' },
      { name: 'CSS3', icon: 'css3/css3-original' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: 'react/react-original' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'Express', icon: 'express/express-original' },
      { name: 'Flask', icon: 'flask/flask-original' },
      { name: 'TensorFlow', icon: 'tensorflow/tensorflow-original' },
      { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original' },
    ],
  },
  {
    title: 'Data & AI/ML',
    skills: [
      { name: 'OpenCV', icon: 'opencv/opencv-original' },
      { name: 'Keras', icon: 'keras/keras-original' },
      { name: 'NumPy', icon: 'numpy/numpy-original' },
      { name: 'Pandas', icon: 'pandas/pandas-original' },
      { name: 'Streamlit', icon: 'streamlit/streamlit-original' },
      { name: 'Jupyter', icon: 'jupyter/jupyter-original' },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', icon: 'mysql/mysql-original' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
      { name: 'Docker', icon: 'docker/docker-original' },
      { name: 'Git', icon: 'git/git-original' },
      { name: 'GitLab', icon: 'gitlab/gitlab-original' },
      { name: 'Figma', icon: 'figma/figma-original' },
    ],
  },
]

export const education = [
  {
    school: 'Shah & Anchor Kutchhi Engineering College — University of Mumbai',
    degree: 'B.Tech Information Technology (Honours in AI & ML)',
    period: '2021 — 2025',
    detail: 'CGPA 9.65 / 10 · Silver Medalist (1st Year)',
  },
  {
    school: 'S. K. Somaiya Vinay Mandir Jr. College',
    degree: 'HSC — Vocational Science (Computers)',
    period: '2019 — 2021',
    detail: '89.33%',
  },
]

export const certificates = [
  'Data Analytics Essentials',
  'TensorFlow for AI: Neural Network Representation',
  'Python',
  'Git Training',
  'Ethical Hacking',
  'Database Design',
  'Software Engineering & Agile Development',
  'Networking Essentials',
  'Blockchain Fundamentals',
  'PHP & MySQL',
]

export const achievements = [
  {
    title: '1st Place — Final Year Project',
    detail: 'Real-Time Violence Detection presentation.',
  },
  {
    title: 'Silver Medalist',
    detail: '1st Year B.Tech Information Technology.',
  },
  {
    title: 'Speaker — NextgenAI',
    detail: 'Learn.Build.Excel by ACM-SAKEC (2025).',
  },
  {
    title: 'Admin Head — IIC 7.0',
    detail: 'Institution Innovation Council & Social Media Co-Head, CSI & IIC 6.0.',
  },
  {
    title: 'Languages',
    detail: 'English C1 (IELTS 7.0) · German A1 (Goethe).',
  },
  {
    title: 'Sports',
    detail: '2nd place Kabaddi (2023, 2024) & Cricket (2025), Olympus Intercollegiate.',
  },
]
