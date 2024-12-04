'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="section-padding flex flex-col items-center justify-center min-h-screen text-center pt-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="hero-gradient inline-block">Computer Science Student</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl text-gray-700 dark:text-gray-300 mt-4 block">
                Turning Ideas into Reality
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              I'm a passionate Computer Science student from the UK, focused on creating
              innovative solutions and learning cutting-edge technologies.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="#projects" className="btn-primary">
                View Projects
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I am currently pursuing my degree in Computer Science, where I'm developing
                  a strong foundation in software development, algorithms, and problem-solving.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  My passion lies in creating innovative solutions that make a positive impact.
                  I enjoy working with modern technologies and am always eager to learn new skills.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-xl mb-2">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>🎓 Studying Computer Science</li>
                  <li>💻 Full-stack Developer</li>
                  <li>🌱 Always learning new technologies</li>
                  <li>🤝 Open to collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Node.js, Python, Java, SQL
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Git, Docker, AWS, Linux
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project Card 1 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Description of your amazing project goes here. Explain what problem
                    it solves and what technologies you used.
                  </p>
                  <div className="flex gap-4">
                    <Link href="#" className="text-primary hover:text-blue-600">
                      <FaGithub className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-primary hover:text-blue-600">
                      <FaCode className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Project Card 2 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Description of your amazing project goes here. Explain what problem
                    it solves and what technologies you used.
                  </p>
                  <div className="flex gap-4">
                    <Link href="#" className="text-primary hover:text-blue-600">
                      <FaGithub className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-primary hover:text-blue-600">
                      <FaCode className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Get In Touch
            </h2>
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="flex justify-center gap-6">
                <Link 
                  href="https://github.com" 
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <FaGithub className="w-8 h-8" />
                </Link>
                <Link 
                  href="https://linkedin.com" 
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <FaLinkedin className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 