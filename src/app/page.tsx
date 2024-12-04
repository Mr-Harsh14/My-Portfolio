'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <AnimatedSection className="section-padding flex flex-col items-center justify-center min-h-screen text-center pt-16">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="hero-gradient inline-block">Computer Science Student</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl text-gray-700 dark:text-gray-300 mt-4 block">
                Turning Ideas into Reality
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm a passionate Computer Science student from the UK, focused on creating
              innovative solutions and learning cutting-edge technologies.
            </motion.p>
            <motion.div 
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="#projects" className="btn-primary">
                View Projects
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I am currently pursuing my degree in Computer Science, where I'm developing
                  a strong foundation in software development, algorithms, and problem-solving.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  My passion lies in creating innovative solutions that make a positive impact.
                  I enjoy working with modern technologies and am always eager to learn new skills.
                </p>
              </motion.div>
              <motion.div
                className="space-y-4"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-semibold text-xl mb-2">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>🎓 Studying Computer Science</li>
                  <li>💻 Full-stack Developer</li>
                  <li>🌱 Always learning new technologies</li>
                  <li>🤝 Open to collaboration</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend",
                  skills: "React, Next.js, TypeScript, Tailwind CSS"
                },
                {
                  title: "Backend",
                  skills: "Node.js, Python, Java, SQL"
                },
                {
                  title: "Tools",
                  skills: "Git, Docker, AWS, Linux"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.skills}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((_, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Get In Touch
            </h2>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="w-8 h-8" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
} 