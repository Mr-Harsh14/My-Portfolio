export type ProjectCategory = 'web' | 'ml' | 'applications'

export const categoryConfig: Record<
  ProjectCategory,
  { label: string; eyebrow: string; detail: string }
> = {
  web: { label: 'Web & Software', eyebrow: 'Web', detail: 'Software' },
  ml: { label: 'Machine Learning', eyebrow: 'ML', detail: 'Machine Learning' },
  applications: { label: 'Applications', eyebrow: 'Applications', detail: 'Applications' },
}

interface Project {
  title: string
  description: string
  technologies: string[]
  slug: string
  category: ProjectCategory
  status?: 'shipped' | 'in-progress'
  github?: string
  demo?: string
  features?: string[]
  challenges?: string
  learnings?: string
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a project showcase.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    slug: 'my-portfolio',
    category: 'web',
    github: 'https://github.com/Mr-Harsh14/My-Portfolio',
    demo: 'https://hazz.me',
    features: [
      'Responsive design with mobile-first approach',
      'Dark and light mode support',
      'Smooth animations and transitions using Framer Motion',
      'Project showcase and skills section',
      'Contact form with email integration',
    ],
    challenges:
      'Balancing rich animations with fast load times required careful use of Framer Motion and Next.js optimisations to keep the site feeling fluid without sacrificing performance.',
    learnings:
      'Strengthened my Next.js App Router workflow, TypeScript patterns, and Tailwind CSS design system skills while building a portfolio that doubles as a live demo of my front-end craft.',
  },
  {
    title: 'CricHub',
    description:
      'A local-first Next.js app for cricket captains to manage weekly Saturday admin — fixtures, squad, availability, XI selection, and WhatsApp messaging in one place.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'SQLite'],
    slug: 'crichub',
    category: 'web',
    github: 'https://github.com/Mr-Harsh14/CricHub',
    features: [
      'Fixture creation with home/away, ground, scorer, and umpire details',
      'Squad database with roles, wicketkeeper flags, and junior DOB tracking',
      'Availability collection through fixture-specific links',
      'XI selection with availability and junior warnings visible',
      'Copy/paste WhatsApp messages for availability, reminders, and match admin',
      'Match fee and expense tracking for umpires and scorers',
    ],
    challenges:
      'Modelling the many interlocking cricket admin workflows — availability, selection, messaging, and post-match tasks — into a coherent local-first data model took careful domain design.',
    learnings:
      'Learned to ship a focused MVP around real user pain points, using Prisma and SQLite for local-first persistence and Vitest for rule and message generation tests.',
  },
  {
    title: 'Math Master',
    description:
      'A comprehensive mathematics learning platform with role-based access control, interactive quizzes, and progress tracking for students and teachers.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    slug: 'mathmaster',
    category: 'web',
    github: 'https://github.com/Mr-Harsh14/MathMaster',
    demo: 'https://mathmaster1.vercel.app/',
    features: [
      'Students join classes with class codes and take quizzes',
      'Progress tracking, scores, and leaderboard competition',
      'Teachers create and manage classes and assessments',
      'Analytics and performance metrics for student monitoring',
      'Role-based access control for students and teachers',
    ],
    challenges:
      'Designing a dual-role experience where students and teachers see entirely different interfaces while sharing the same underlying data required thoughtful RBAC and navigation patterns.',
    learnings:
      'Gained experience building multi-role educational platforms with class management, quiz authoring, and real-time progress analytics.',
  },
  {
    title: 'PitGenius',
    description:
      'An F1 race strategy optimiser that uses machine learning to recommend pre-race pit stop and tyre strategies, then compares predictions against actual race outcomes.',
    technologies: ['Python', 'Machine Learning', 'Data Visualisation'],
    slug: 'pitgenius',
    category: 'ml',
    github: 'https://github.com/Mr-Harsh14/PitGenius',
    features: [
      'Pre-race strategy recommendations from qualifying positions and tyre allocations',
      'ML-powered pit stop and tyre choice optimisation',
      'Weather forecast integration for strategy planning',
      'Strategy quality evaluation and performance reports',
      'Interactive visualisations of predicted vs actual outcomes',
    ],
    challenges:
      'Combining historical race data, tyre degradation models, and weather forecasts into a single recommendation engine required careful feature engineering and validation against real race results.',
    learnings:
      'Deepened my understanding of applied ML for sports analytics, strategy optimisation, and building interpretable reports that compare model predictions to ground truth.',
  },
  {
    title: 'ImageMind',
    description:
      'A deep CNN image classifier trained on CIFAR-10, deployed as a Streamlit web app for real-time image classification with confidence scores and top-3 predictions.',
    technologies: ['Python', 'TensorFlow', 'Streamlit', 'CNN'],
    slug: 'imagemind',
    category: 'ml',
    github: 'https://github.com/Mr-Harsh14/ImageMind',
    demo: 'https://imagemind.streamlit.app/',
    features: [
      'Real-time image classification across 10 CIFAR-10 categories',
      'Confidence scores and top-3 predictions display',
      'Custom CNN architecture with data augmentation pipeline',
      'Modern, responsive Streamlit UI',
      'Mobile-friendly design for on-the-go inference',
    ],
    challenges:
      'Optimising the CNN architecture to achieve strong accuracy on CIFAR-10 while keeping inference fast enough for a real-time web demo was a key trade-off throughout development.',
    learnings:
      'Strengthened my end-to-end ML pipeline skills — from model training and evaluation through to deploying an interactive inference app with Streamlit.',
  },
  {
    title: 'Ideate',
    description:
      'A private application I am currently building. Details will be shared once it is ready to launch.',
    technologies: [],
    slug: 'ideate',
    category: 'applications',
    status: 'in-progress',
  },
]
