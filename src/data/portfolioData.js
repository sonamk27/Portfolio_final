export const profile = {
  name: 'Sonam Korade',
  fullName: 'Sonam Rajesh Korade',
  roles: ['Full Stack Web Developer', 'AI/ML Enthusiast', 'SIH 2025 Finalist'],
  tagline: 'Transforming ideas into impactful solutions through code and intelligent systems.',
  bio: 'Final-year B.E. Information Technology student building full-stack applications, LLM-integrated systems, and computationally intensive engineering projects. Feel free to explore my work and connect with me below!',
  phone: '+91 8999695006',
  email: 'sonamkorade25@gmail.com',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  linktree: 'https://linktr.ee/',
  resume: '/Sonam_Korade_Resume.pdf',
};

export const achievements = [
  {
    icon: '🚀',
    title: 'SIH 2025 Finalist',
    org: 'Smart India Hackathon',
    date: 'Aug 2025 – Dec 2025',
    className: 'ach-1',
  },
  {
    icon: '💡',
    title: 'Ideathon Recognition',
    org: 'Walchand Institute of Technology',
    date: '2025',
    className: 'ach-2',
  },
  {
    icon: '🐍',
    title: 'Python Programming Certification',
    org: 'Infosys Springboard',
    date: 'Core Python · OOP · Data Structures',
    className: 'ach-3',
  },
  {
    icon: '🌐',
    title: 'Full Stack Web Development',
    org: 'MERN · Udemy',
    date: 'HTML5, CSS3, JS, React, Node, MongoDB',
    className: 'ach-4',
  },
];

export const education = [
  {
    icon: '🎓',
    date: '2023 – Pursuing (2027)',
    school: 'Walchand Institute of Technology, Solapur',
    degree: 'Bachelor of Technology in Information Technology',
    meta: 'CGPA: 8.95',
  },
  {
    icon: '📘',
    date: '2022 – 2023',
    school: 'Rajarshi Shahu College, Latur',
    degree: '12th Board (HSC)',
    meta: 'Percentage: 61%',
  },
];

export const projects = [
  {
    id: 'maitri',
    title: 'MAITRI – AI Assistant for Astronaut Well-Being',
    description:
      'An AI system that detects stress and fatigue from real-time facial expressions and voice tone, with a voice-activated mindfulness assistant and admin dashboard for monitoring vitals — selected as a Smart India Hackathon 2025 Finalist.',
    tags: ['Python', 'Computer Vision', 'REST API', 'React'],
    banner: 'maitri',
  },
  {
    id: 'viraat',
    title: 'Viraat – GPU-Accelerated Optimization Solver',
    description:
      'A sovereign mathematical solver built from scratch for LP, MILP and QP at industrial scale — modular architecture with presolve, simplex/interior-point methods, branch-and-bound and GPU acceleration for refinery scheduling and logistics.',
    tags: ['Sparse Linear Algebra', 'GPU Computing', 'Python'],
    banner: 'viraat',
  },
  {
    id: 'privacy-agent',
    title: 'Privacy-Preserving Visual Browser Agent',
    description:
      'A browser-based AI agent performing on-device visual perception — detecting and redacting faces, passwords and personal data client-side before sanitized context reaches a server-side LLM/VLM to plan clicks, scrolls and form actions.',
    tags: ['WebGPU', 'WebAssembly', 'ONNX Runtime', 'Transformers.js'],
    banner: 'privacy',
  },
  {
    id: 'ui-fixer',
    title: 'UI Fixer – Frontend UI Improvement Tool',
    description:
      'A responsive web app that detects and fixes UI inconsistencies, with reusable React components built using CSS Flexbox & Grid and WCAG accessibility compliance across all screen sizes. An automated audit engine scans pages for contrast issues and misaligned elements, offering one-click fix suggestions — reducing UI bug resolution time by ~40%.',
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Figma'],
    banner: 'ui-fixer',
  },
  {
    id: 'studymate',
    title: 'Studymate – AI Chat Dashboard',
    description:
      'An AI-driven student dashboard using LLMs and RAG for instant, context-aware academic Q&A with cited references, backed by a semantic embedding pipeline for fast vector similarity search. Includes session history and a progress tracker for students to bookmark concepts and monitor learning milestones, persisted in MongoDB.',
    tags: ['React.js', 'Node.js', 'Express.js', 'LLM APIs', 'RAG', 'MongoDB'],
    banner: 'studymate',
  },
];

export const skills = [
  { label: 'React', key: 'react' },
  { label: 'Node.js', key: 'nodejs' },
  { label: 'Express.js', key: 'express' },
  { label: 'JavaScript', key: 'javascript' },
  { label: 'HTML', key: 'html' },
  { label: 'CSS', key: 'css' },
  { label: 'Python', key: 'python' },
  { label: 'SQL', key: 'sql' },
  { label: 'Git', key: 'git' },
  { label: 'GitHub', key: 'github' },
  { label: 'Figma', key: 'figma' },
  { label: 'RAG / LLM', key: 'rag' },
];
