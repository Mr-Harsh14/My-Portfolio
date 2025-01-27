'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { use } from 'react'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ProjectPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const project = projects.find(p => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white dark:bg-gray-900">
        <article className="max-w-4xl mx-auto px-4 py-16">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <FaGithub className="mr-2" />
                  View Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Project Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="bg-white/90 dark:bg-gray-800/95 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h2>Project Overview</h2>
              <p>{project.description}</p>

              {project.features && (
                <>
                  <h2>Key Features</h2>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.challenges && (
                <>
                  <h2>Technical Challenges</h2>
                  <p>{project.challenges}</p>
                </>
              )}

              {project.learnings && (
                <>
                  <h2>Key Learnings</h2>
                  <p>{project.learnings}</p>
                </>
              )}
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  )
} 