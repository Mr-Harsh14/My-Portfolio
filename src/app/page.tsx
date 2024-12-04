'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { FaGithub, FaLinkedin, FaCode, FaMapMarkerAlt, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <AnimatedSection className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent dark:from-primary/10" />
            
            {/* Animated background shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto pt-32 pb-16">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative inline-block"
              >
                <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                  Available for Opportunities
                </span>
              </motion.div>

              <motion.h1 
                className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="hero-gradient inline-block mb-4">Computer Science Student</span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl text-gray-700 dark:text-gray-300 mt-4 block">
                  Turning Ideas into Reality
                </span>
              </motion.h1>

              <motion.p 
                className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm a passionate Computer Science student from the UK, focused on creating
                innovative solutions and learning cutting-edge technologies.
              </motion.p>

              <motion.div 
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link 
                  href="#projects" 
                  className="btn-primary shadow-lg hover:shadow-primary/25 transition-all px-8 py-3 text-base"
                >
                  View Projects
                </Link>
                <Link 
                  href="#contact" 
                  className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium shadow-lg hover:shadow-primary/25 text-base"
                >
                  Contact Me
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="mt-10 flex justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
              </motion.div>

              {/* Scroll Down Indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.5
                }}
              >
                <FaArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-12">
              <motion.p 
                className="text-primary font-medium mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                My Journey
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
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
                className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 space-y-4"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-4">
                  {[
                    { emoji: '🎓', text: 'Studying Computer Science' },
                    { emoji: '💻', text: 'Full-stack Developer' },
                    { emoji: '🌱', text: 'Always learning new technologies' },
                    { emoji: '🤝', text: 'Open to collaboration' }
                  ].map((fact, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-2xl">{fact.emoji}</span>
                      <span>{fact.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/50" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-12">
              <motion.p 
                className="text-primary font-medium mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                What I Do
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Skills & Technologies
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend Development",
                  skills: "React, Next.js, TypeScript, Tailwind CSS",
                  delay: 0
                },
                {
                  title: "Backend Development",
                  skills: "Node.js, Python, Java, SQL",
                  delay: 0.2
                },
                {
                  title: "Tools & Technologies",
                  skills: "Git, Docker, AWS, Linux",
                  delay: 0.4
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: category.delay }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.skills}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="section-padding relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-white dark:to-gray-900" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />
          </div>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-12">
              <motion.p 
                className="text-primary font-medium mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                My Work
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Featured Projects
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((_, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20 overflow-hidden group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Project Name</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Description of your amazing project goes here. Explain what problem
                      it solves and what technologies you used.
                    </p>
                    <div className="flex gap-4">
                      <Link href="#" className="text-primary hover:text-blue-600 transition-colors">
                        <FaGithub className="w-6 h-6" />
                      </Link>
                      <Link href="#" className="text-primary hover:text-blue-600 transition-colors">
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
        <AnimatedSection id="contact" className="section-padding relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-white/50 dark:to-gray-900/50" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />
          </div>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              <motion.p 
                className="text-primary font-medium mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Contact Me
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get In Touch
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </motion.p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-start">
              {/* Contact Info */}
              <motion.div 
                className="md:col-span-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-8">Let's Connect</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <FaEnvelope className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">your.email@example.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700/50">
                  <h4 className="font-medium mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      className="bg-white dark:bg-gray-800 p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      className="bg-white dark:bg-gray-800 p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <div className="md:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
} 