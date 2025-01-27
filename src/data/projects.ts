interface Project {
  title: string
  description: string
  technologies: string[]
  slug: string
  category: 'web' | 'ml'
  github?: string
  demo?: string
  features?: string[]
  challenges?: string
  learnings?: string
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. Features dark mode, animations, and optimised performance.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    slug: 'portfolio-website',
    category: 'web',
    github: 'https://github.com/Mr-Harsh14/My-Portfolio-v2',
    demo: 'https://harshmaniya.vercel.app',
    features: [
      'Responsive design with mobile-first approach',
      'Dark mode support with system preference detection',
      'Smooth animations and transitions using Framer Motion',
      'Contact form with email integration',
      'SEO optimized with Next.js 13 features'
    ],
    challenges: 'Implementing smooth animations while maintaining performance was a key challenge. I used Framer Motion with careful optimization to achieve fluid transitions without compromising load times.',
    learnings: 'This project helped me master Next.js 13 features, TypeScript type safety, and advanced Tailwind CSS techniques. I also learned about performance optimization and accessibility best practices.'
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with features like user authentication, product management, and secure payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    slug: 'ecommerce-platform',
    category: 'web',
    github: 'https://github.com/Mr-Harsh14/ecommerce-platform',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart functionality',
      'Secure payment processing',
      'Admin dashboard for product management'
    ],
    challenges: 'Implementing secure payment processing and real-time inventory management required careful consideration of edge cases and race conditions.',
    learnings: 'Gained deep understanding of e-commerce workflows, payment gateway integration, and security best practices.'
  },
  {
    title: 'Image Classification System',
    description: 'Deep learning model for image classification using TensorFlow. Achieved 95% accuracy on test dataset.',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    slug: 'image-classification',
    category: 'ml',
    github: 'https://github.com/Mr-Harsh14/image-classification',
    demo: 'https://imagemind.streamlit.app/',
    features: [
      'Custom CNN architecture',
      'Data augmentation pipeline',
      'Real-time inference capabilities',
      'Model performance analysis tools'
    ],
    challenges: 'Optimizing the model architecture to achieve high accuracy while maintaining reasonable inference times was a significant challenge.',
    learnings: 'Deepened understanding of CNN architectures, data preprocessing techniques, and model optimization strategies.'
  },
  {
    title: 'Sentiment Analysis Tool',
    description: 'NLP-based sentiment analysis tool for social media data. Uses advanced ML techniques for accurate sentiment prediction.',
    technologies: ['Python', 'NLTK', 'Scikit-learn'],
    slug: 'sentiment-analysis',
    category: 'ml',
    github: 'https://github.com/Mr-Harsh14/sentiment-analysis',
    features: [
      'Text preprocessing pipeline',
      'Multiple ML model implementations',
      'Real-time sentiment analysis',
      'Visualization of results'
    ],
    challenges: 'Handling various text formats and languages while maintaining accuracy was a major challenge that required sophisticated preprocessing techniques.',
    learnings: 'Enhanced knowledge of NLP techniques, text preprocessing, and machine learning model selection for text analysis tasks.'
  }
] 