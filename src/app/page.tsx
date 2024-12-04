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
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary Blob */}
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mix-blend-multiply dark:mix-blend-plus-lighter blur-2xl opacity-50 dark:opacity-40 animate-blob" />
            
            {/* Secondary Blob */}
            <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-pink-400 to-yellow-500 dark:from-pink-400 dark:to-yellow-400 rounded-full mix-blend-multiply dark:mix-blend-plus-lighter blur-2xl opacity-50 dark:opacity-40 animate-blob animation-delay-2000" />
            
            {/* Tertiary Blob */}
            <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-gradient-to-t from-green-400 to-cyan-500 dark:from-green-400 dark:to-cyan-400 rounded-full mix-blend-multiply dark:mix-blend-plus-lighter blur-2xl opacity-50 dark:opacity-40 animate-blob animation-delay-4000" />

            {/* Additional Dark Mode Blobs for extra vibrancy */}
            <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full mix-blend-plus-lighter blur-2xl opacity-0 dark:opacity-40 animate-blob animation-delay-3000" />
            
            <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-gradient-to-l from-sky-400 to-emerald-400 rounded-full mix-blend-plus-lighter blur-2xl opacity-0 dark:opacity-40 animate-blob animation-delay-5000" />

            {/* Extra Dark Mode Accent Blobs */}
            <div className="absolute top-1/3 left-1/2 w-1/4 h-1/4 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full mix-blend-plus-lighter blur-2xl opacity-0 dark:opacity-40 animate-blob animation-delay-6000" />
            
            <div className="absolute bottom-1/2 right-1/4 w-1/4 h-1/4 bg-gradient-to-tl from-amber-400 to-lime-400 rounded-full mix-blend-plus-lighter blur-2xl opacity-0 dark:opacity-40 animate-blob animation-delay-7000" />
          </div>

          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/60 backdrop-blur-[1px]" />

          <div className="relative px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto pt-32 pb-16">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative inline-block"
              >
                <span className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-primary-light px-4 py-1.5 rounded-full text-sm font-medium">
                  Final Year Student at Westminster
                </span>
              </motion.div>

              <motion.h1 
                className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-primary to-purple-600 dark:from-blue-400 dark:via-primary-light dark:to-purple-400 inline-block mb-4 bg-clip-text text-transparent">
                  Hi, I'm Harsh Maniya
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl text-gray-700 dark:text-gray-50 mt-4 block">
                  Web Developer & ML Enthusiast
                </span>
              </motion.h1>

              <motion.p 
                className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                A final year Computer Science student at the University of Westminster,
                specialising in Web Development and Machine Learning. Passionate about
                creating innovative solutions using cutting-edge technologies.
              </motion.p>

              <motion.div
                className="mt-8 flex justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  href="#projects"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="#contact"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors border border-transparent dark:border-gray-700"
                >
                  Contact Me
                </Link>
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
              <span className="text-sm text-gray-500 dark:text-gray-300 mb-2">Scroll</span>
              <FaArrowDown className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="section-padding relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/5 to-transparent dark:via-gray-800/50" />
          </div>
          <div className="max-w-6xl mx-auto relative">
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
                className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white"
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
                className="lg:col-span-2 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">Background</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Currently in my final year at the University of Westminster, where I'm
                        developing expertise in both Web Development and Machine Learning. My
                        academic journey has equipped me with a strong foundation in software
                        development and problem-solving.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">What I Do</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        I specialise in creating modern web applications and exploring machine
                        learning solutions. My dual focus allows me to build innovative
                        applications that leverage both web technologies and AI capabilities.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">My Goals</h3>
                      <p className="text-gray-600 dark:text-gray-300">
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
                className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Quick Facts</h3>
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
                        <p className="text-xs text-gray-600 dark:text-gray-300">{fact.desc}</p>
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/5 to-transparent dark:via-gray-800/50" />
          </div>
          <div className="max-w-6xl mx-auto relative">
            {/* Content remains the same */}
            <div className="text-center mb-12">
              <motion.p 
                className="text-primary font-medium mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                My Expertise
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Technical Skills
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Web Development Skills */}
              <motion.div
                className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <span role="img" aria-label="web">🌐</span> Web Development
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 text-gray-900 dark:text-gray-100">Frontend Development</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'React.js', level: '90%' },
                        { name: 'Next.js', level: '85%' },
                        { name: 'TypeScript', level: '85%' },
                        { name: 'Tailwind CSS', level: '90%' },
                        { name: 'HTML5/CSS3', level: '95%' },
                        { name: 'JavaScript', level: '90%' }
                      ].map((skill) => (
                        <div key={skill.name} className="bg-gray-100 dark:bg-gray-700/90 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                            <span className="text-xs text-primary">{skill.level}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: skill.level }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Backend Development section with same styling */}
                  <div>
                    <h4 className="font-medium mb-3 text-gray-900 dark:text-gray-100">Backend Development</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'Node.js', level: '85%' },
                        { name: 'Express.js', level: '80%' },
                        { name: 'MongoDB', level: '85%' },
                        { name: 'RESTful APIs', level: '90%' }
                      ].map((skill) => (
                        <div key={skill.name} className="bg-gray-100 dark:bg-gray-700/90 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                            <span className="text-xs text-primary">{skill.level}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: skill.level }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Machine Learning Skills with matching styling */}
              <motion.div
                className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <span role="img" aria-label="ml">🤖</span> Machine Learning
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 text-gray-900 dark:text-gray-100">Core ML Skills</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'Python', level: '90%' },
                        { name: 'TensorFlow', level: '80%' },
                        { name: 'PyTorch', level: '75%' },
                        { name: 'Scikit-learn', level: '85%' },
                        { name: 'Pandas', level: '90%' },
                        { name: 'NumPy', level: '85%' }
                      ].map((skill) => (
                        <div key={skill.name} className="bg-gray-100 dark:bg-gray-700/90 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                            <span className="text-xs text-primary">{skill.level}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: skill.level }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-gray-900 dark:text-gray-100">ML Areas</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'Deep Learning', level: '80%' },
                        { name: 'Computer Vision', level: '75%' },
                        { name: 'Data Analysis', level: '85%' },
                        { name: 'NLP', level: '70%' }
                      ].map((skill) => (
                        <div key={skill.name} className="bg-gray-100 dark:bg-gray-700/90 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                            <span className="text-xs text-primary">{skill.level}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: skill.level }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="section-padding relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-gray-900/90" />
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
                className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Featured Projects
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Web Development Projects */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <span role="img" aria-label="web">🌐</span> Web Projects
                </h3>
                
                {/* Project Cards with enhanced contrast */}
                <div className="bg-white/90 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Personal Portfolio Website</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    A modern, responsive portfolio website built with Next.js 13, TypeScript, and Tailwind CSS.
                    Features dark mode, animations, and optimised performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">Tailwind CSS</span>
                  </div>
                </div>

                <div className="bg-white/90 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">E-commerce Platform</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Full-stack e-commerce solution with features like user authentication,
                    product management, and secure payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">MongoDB</span>
                  </div>
                </div>
              </motion.div>

              {/* Machine Learning Projects */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <span role="img" aria-label="ml">🤖</span> ML Projects
                </h3>
                
                {/* Project Cards with enhanced contrast */}
                <div className="bg-white/90 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Image Classification System</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Deep learning model for image classification using TensorFlow.
                    Achieved 95% accuracy on test dataset.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">TensorFlow</span>
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">OpenCV</span>
                  </div>
                </div>

                <div className="bg-white/90 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Sentiment Analysis Tool</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    NLP-based sentiment analysis tool for social media data.
                    Uses advanced ML techniques for accurate sentiment prediction.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">NLTK</span>
                    <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">Scikit-learn</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="section-padding relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/5 to-transparent dark:via-gray-800/50" />
          </div>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-12">
              <motion.p 
                className="text-primary font-medium mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.p>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Contact Me
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm always interested in hearing about new opportunities and exciting projects.
                    Feel free to reach out!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                        <FaEnvelope className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Email</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">your.email@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                        <FaLinkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">linkedin.com/in/harsh-maniya</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                        <FaGithub className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">GitHub</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">github.com/harshmaniya</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
} 