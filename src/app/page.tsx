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
                  Final Year Student at Westminster
                </span>
              </motion.div>

              <motion.h1 
                className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="hero-gradient inline-block mb-4">Hi, I'm Harsh Maniya</span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl text-gray-700 dark:text-gray-300 mt-4 block">
                  Web Developer & ML Enthusiast
                </span>
              </motion.h1>

              <motion.p 
                className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                A final year Computer Science student at the University of Westminster,
                specialising in Web Development and Machine Learning. Passionate about
                creating innovative solutions using cutting-edge technologies.
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
                  View My Work
                </Link>
                <Link 
                  href="#contact" 
                  className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium shadow-lg hover:shadow-primary/25 text-base"
                >
                  Get in Touch
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
                  href="https://github.com/harshmaniya"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/harsh-maniya"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: [0.4, 1, 0.4],
                y: [0, 8, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="flex flex-col items-center"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll</span>
              <FaArrowDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="section-padding relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />
          </div>
          <div className="max-w-6xl mx-auto relative">
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.p 
                className="text-primary font-medium mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                My Journey
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Main Content */}
              <motion.div
                className="lg:col-span-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">Background</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Currently in my final year at the University of Westminster, where I'm
                        developing expertise in both Web Development and Machine Learning. My
                        academic journey has equipped me with a strong foundation in software
                        development and problem-solving.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">What I Do</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        I specialise in creating modern web applications and exploring machine
                        learning solutions. My dual focus allows me to build innovative
                        applications that leverage both web technologies and AI capabilities.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">My Goals</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        As I approach graduation, I'm keen to apply my expertise in Web Development
                        and Machine Learning to create impactful solutions. I'm particularly
                        interested in projects that combine both disciplines.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Facts */}
              <motion.div
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  {[
                    { 
                      emoji: '🎓', 
                      text: 'Final Year Student', 
                      desc: 'University of Westminster' 
                    },
                    { 
                      emoji: '💻', 
                      text: 'Web Developer', 
                      desc: 'Modern web technologies' 
                    },
                    { 
                      emoji: '🤖', 
                      text: 'ML Enthusiast', 
                      desc: 'AI & Machine Learning' 
                    },
                    { 
                      emoji: '🌱', 
                      text: 'Continuous Learner', 
                      desc: 'Always exploring new tech' 
                    }
                  ].map((fact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                        <span className="text-xl">{fact.emoji}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{fact.text}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{fact.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="section-padding relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/50" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />
          </div>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-12">
              <motion.p 
                className="text-primary font-medium mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                What I Work With
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Skills & Technologies
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                I work with a variety of technologies across the full stack development spectrum
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend Development",
                  skills: [
                    { name: "React & Next.js", level: 90 },
                    { name: "TypeScript", level: 85 },
                    { name: "Tailwind CSS", level: 90 },
                    { name: "HTML/CSS", level: 95 },
                  ],
                  bgClass: "bg-blue-500/10 dark:bg-blue-500/20"
                },
                {
                  title: "Backend Development",
                  skills: [
                    { name: "Node.js", level: 85 },
                    { name: "Python", level: 80 },
                    { name: "SQL", level: 85 },
                    { name: "RESTful APIs", level: 90 },
                  ],
                  bgClass: "bg-green-500/10 dark:bg-green-500/20"
                },
                {
                  title: "Tools & Technologies",
                  skills: [
                    { name: "Git & GitHub", level: 90 },
                    { name: "Docker", level: 75 },
                    { name: "AWS", level: 70 },
                    { name: "Linux", level: 80 },
                  ],
                  bgClass: "bg-purple-500/10 dark:bg-purple-500/20"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  className={`backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20 ${category.bgClass}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.1) }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/20 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary dark:bg-primary/80 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Additional skills include: Jest, GraphQL, MongoDB, Redis, CI/CD, and more.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="section-padding relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />
          </div>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-12">
              <motion.p 
                className="text-primary font-medium mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                My Work
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Featured Projects
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Here are some of my recent projects that showcase my skills and experience
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI-Powered Task Manager",
                  description: "A smart task management application that uses AI to prioritize and categorize tasks. Built with Next.js, TypeScript, and OpenAI API.",
                  image: "/project1.jpg",
                  tags: ["Next.js", "TypeScript", "AI", "Tailwind"],
                  links: {
                    github: "https://github.com",
                    live: "https://demo.com"
                  }
                },
                {
                  title: "E-Learning Platform",
                  description: "A comprehensive learning management system with real-time collaboration features and interactive content delivery.",
                  image: "/project2.jpg",
                  tags: ["React", "Node.js", "MongoDB", "WebRTC"],
                  links: {
                    github: "https://github.com",
                    live: "https://demo.com"
                  }
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="p-6">
                    <div className="flex flex-col h-full">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaCode className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Projects */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="https://github.com"
                target="_blank"
                className="inline-flex items-center gap-2 text-primary hover:text-blue-600 transition-colors"
              >
                <span>View More Projects on GitHub</span>
                <FaGithub className="w-5 h-5" />
              </Link>
            </motion.div>
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