// EDIT THIS FILE. The site reads all visible content from here.
// Leave a URL as '' and the UI hides that link or button.
// Never add GitHub, demo, or CV links until the files actually exist.

export const profile = {
  name: 'FIKADU GUYE',
  title: 'Aspiring Full-Stack Developer | AI Enthusiast',
  intro:
    'I build useful web applications with React, Node.js and PHP, and I use AI tools to learn faster while still understanding every line I ship.',
  email: 'fikaduguye0545@gmail.com',
  github: 'https://github.com/FIKEG1',
  linkedin: '',
  cvUrl: '/Fikadu_Guye_Resume.pdf',
  location: 'Ethiopia',
  availability: 'Open to junior roles, remote work, and freelance projects',
  photo: '/me.webp',
  photoAlt: 'Portrait of FIKADU GUYE',
}

export const about = [
  'I am a software developer who learns by building. I am drawn to clear problem-solving, practical web technologies, and AI-assisted development that still demands real understanding of the code.',
  'My work so far includes PHP and MySQL systems for real workflows, a Prolog expert system for technical support, and a React, Node.js and Python platform for job matching that I continue to develop.',
  'I care about clean structure, readable code, and tools people can actually use. I work well with others, ask precise questions, and treat AI assistants as a way to move faster — not as a substitute for ownership.',
]

// level: 1 Learning, 2 Comfortable, 3 Confident. Update as you grow.
export const skillLevels = {
  1: 'Learning',
  2: 'Comfortable',
  3: 'Confident',
}

export const skills = [
  {
    group: 'Frontend',
    items: [
      ['HTML', 3],
      ['CSS', 3],
      ['JavaScript', 2],
      ['React.js', 2],
    ],
  },
  {
    group: 'Backend',
    items: [
      ['Node.js', 2],
      ['Express.js', 2],
      ['PHP', 2],
    ],
  },
  {
    group: 'Databases',
    items: [
      ['MySQL', 2],
      ['MongoDB', 2],
    ],
  },
  {
    group: 'Languages',
    items: [
      ['Java', 2],
      ['C++', 2],
      ['Python', 2],
    ],
  },
  {
    group: 'Tools',
    items: [
      ['Git', 2],
      ['GitHub', 2],
      ['VS Code', 3],
      ['Postman', 2],
    ],
  },
  {
    group: 'AI development',
    items: [
      ['AI-assisted coding', 2],
      ['API integration', 2],
      ['Machine-learning fundamentals', 1],
    ],
  },
]

export const projects = [
  {
    title: 'AURA Smart Commerce',
    summary:
      'A demo storefront with intent search, personalized recommendations, a shopping assistant, cart discounts, and a simulated checkout.',
    image: '/aura-shop.svg',
    imageAlt: 'AURA smart commerce storefront with gold and teal product cards on a dark background',
    imageFit: 'contain',
    status: 'Built',
    stack: ['React.js', 'React Router', 'localStorage'],
    built: [
      'Product catalog with category filters',
      'Intent search (gifts, budgets, setups)',
      'Personalized recommendations from views, saved items, and bag contents',
      'Shopping assistant that shortlists products',
      'Cart with bundle discount and free-shipping threshold',
      'Simulated checkout and local order history',
    ],
    planned: [],
    github: 'https://github.com/FIKEG1/my-portfolio/tree/main/portfolio/src/shop',
    demo: '/aura',
  },
  {
    title: 'Intelligent Job Matching and Recruitment Automation Platform',
    summary:
      'A recruitment platform that scores and ranks candidates against job requirements and supports the hiring workflow from application to decision.',
    image: '/ketari-project.webp',
    imageAlt: 'Ketari recruitment platform landing page with the headline "Hire better. Build stronger teams." beside a preview of the candidate matching dashboard',
    imageFit: 'contain',
    status: 'In progress',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python (Flask)'],
    // Each line below describes what the code in the -recruitai repo does today.
    built: [
      'Resume upload with PDF and DOCX text extraction',
      'Keyword-based skill extraction from resume text',
      'Weighted job matching on skills, education, experience and location',
      'Candidate ranking with match reasons and skill gaps',
      'Hiring workflow: screening, shortlisting, interview scheduling and decisions',
      'AI chat assistant using OpenAI or Gemini, with a local fallback',
    ],
    planned: [], // add upcoming features here, e.g. model-based matching
    github: 'https://github.com/FIKEG1/-recruitai',
    demo: '',
  },
  {
    title: 'Health Center Management System',
    summary:
      'A healthcare administration web application with role-based access for day-to-day clinic operations.',
    image: '/health-center-project.webp',
    imageAlt: 'Health Center website homepage featuring appointment and location buttons',
    status: 'Built',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    built: ['Healthcare administration workflows', 'Role-based functionality'],
    planned: [],
    github: 'https://github.com/FIKEG1/Health_center2',
    demo: '',
  },
  {
    title: 'Online Quiz System',
    summary:
      'A web-based assessment system with questions, user accounts, and an administration area.',
    image: '/online-quiz-project.webp',
    imageAlt: 'Online Quiz homepage featuring a challenge-yourself headline and quiz graphic',
    status: 'Built',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    built: ['Online assessments', 'Question management', 'User accounts', 'Administration'],
    planned: [],
    // The ONLINE-QUIZ-APP repo on GitHub is still empty. Push the code there, then set:
    // github: 'https://github.com/FIKEG1/ONLINE-QUIZ-APP',
    github: '',
    demo: '',
  },
  {
    title: 'Smart IT Technical Support Expert System',
    summary:
      'A rule-based troubleshooting assistant for common hardware, networking, software, and security issues.',
    image: '/smart-it-support-project.webp',
    imageAlt: 'Smart IT Support expert system dashboard showing troubleshooting categories and diagnostic cards',
    imageFit: 'contain',
    status: 'Built',
    stack: ['SWI-Prolog'],
    built: [
      'Hardware troubleshooting rules',
      'Networking troubleshooting rules',
      'Software troubleshooting rules',
      'Security troubleshooting rules',
    ],
    planned: [],
    github: 'https://github.com/FIKEG1/smart-it-technical-support',
    demo: '',
  },
]

// Keep only verified items. Delete any row you cannot confirm.
export const journey = [
  {
    when: 'Jul — Aug 2026',
    what: 'Software Development Intern',
    where: 'Sidama Innovation and Technology Agency (SITA), Hawassa',
    note: 'Tested software before launch, built mobile applications for iOS and Android, worked in Java, C++ and Python, and documented each development phase.',
  },
  {
    when: 'Jul 2026',
    what: 'BSc in Information Science',
    where: 'Jimma University, Jimma, Ethiopia',
    note: 'Designed and built web applications through academic projects, teamwork, and hackathon participation.',
  },
  {
    when: '2024 — present',
    what: 'Independent software development',
    where: 'Self-directed',
    note: 'Built and refined practical projects across web applications, tooling, and AI-assisted workflows.',
  },
  {
    when: '2023 — present',
    what: 'Portfolio and learning projects',
    where: 'Personal work',
    note: 'Continued study through hands-on builds in React, Node.js, PHP, MySQL, and Python.',
  },
]

// Shown publicly as "What I am learning next".
// Add status: 'In progress' or status: 'Completed' to an item to show a badge on it.
// Items without a status are shown as plain goals. Only mark Completed when it is true.
export const learningPlan = {
  certificates: [
    {
      id: 'responsive-web-design',
      name: 'freeCodeCamp Responsive Web Design',
      focus: 'Practice semantic HTML, accessible interfaces, and responsive CSS.',
      provider: 'freeCodeCamp',
      resource: 'https://www.freecodecamp.org/learn/',
    },
    {
      id: 'javascript-algorithms',
      name: 'freeCodeCamp JavaScript Algorithms and Data Structures',
      focus: 'Build fluency in JavaScript fundamentals, algorithms, and problem solving.',
      provider: 'freeCodeCamp',
      resource: 'https://www.freecodecamp.org/learn/',
    },
    {
      id: 'backend-apis',
      name: 'freeCodeCamp Back End Development and APIs',
      focus: 'Learn server-side JavaScript, APIs, and backend project practices.',
      provider: 'freeCodeCamp',
      resource: 'https://www.freecodecamp.org/learn/',
    },
    {
      id: 'mongodb-learning',
      name: 'MongoDB University learning paths',
      focus: 'Practice data modeling, querying, and application development with MongoDB.',
      provider: 'MongoDB University',
      resource: 'https://learn.mongodb.com/',
    },
    {
      id: 'postman-api-fundamentals',
      name: 'Postman API Fundamentals Student Expert',
      focus: 'Build practical confidence designing, testing, and documenting APIs.',
      provider: 'Postman Academy',
      resource: 'https://academy.postman.com/path/postman-api-fundamentals-student-expert',
    },
  ],
  skills: [
    {
      id: 'typescript',
      name: 'TypeScript',
      focus: 'Add type safety to React and Node.js applications.',
      resource: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    },
    {
      id: 'automated-testing',
      name: 'Automated testing',
      focus: 'Practice unit and API tests to catch regressions.',
      resource: 'https://vitest.dev/guide/',
    },
    {
      id: 'web-accessibility',
      name: 'Web accessibility',
      focus: 'Make interfaces more usable with semantic HTML, keyboard support, and accessible patterns.',
      resource: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
    },
    {
      id: 'api-security',
      name: 'API security fundamentals',
      focus: 'Learn authentication, authorization, and input validation.',
      resource: 'https://cheatsheetseries.owasp.org/',
    },
    {
      id: 'deployment-cicd',
      name: 'Deployment and CI/CD',
      focus: 'Deploy projects and automate checks with a repeatable workflow.',
      resource: 'https://docs.github.com/en/actions/get-started/quickstart',
    },
    {
      id: 'database-modeling',
      name: 'Database modeling',
      focus: 'Choose document structures and indexes that fit application queries.',
      resource: 'https://www.mongodb.com/docs/manual/data-modeling/',
    },
    {
      id: 'docker-basics',
      name: 'Docker fundamentals',
      focus: 'Package applications and their dependencies for consistent development and deployment.',
      resource: 'https://docs.docker.com/get-started/',
    },
  ],
}

export const services = [
  {
    title: 'Responsive website development',
    detail: 'Mobile-first sites with clear layout, accessible markup, and fast load times.',
  },
  {
    title: 'Frontend development',
    detail: 'React interfaces built from reusable components and maintainable CSS.',
  },
  {
    title: 'Basic full-stack applications',
    detail: 'Node.js or PHP backends with a database behind a practical user interface.',
  },
  {
    title: 'Database design and integration',
    detail: 'MySQL or MongoDB schemas that match the data and the application flow.',
  },
  {
    title: 'Maintenance and bug fixing',
    detail: 'Careful fixes, small features, and improvements to existing websites.',
  },
]

export const nav = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]
