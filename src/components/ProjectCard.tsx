'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  slug: string
  category: 'web' | 'ml'
}

export default function ProjectCard({ title, description, technologies, slug, category }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white/90 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Link
          href={`/projects/${slug}`}
          className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 transition-colors"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {category === 'web' ? '🌐 Web Project' : '🤖 ML Project'}
        </span>
      </div>
    </motion.div>
  )
} 