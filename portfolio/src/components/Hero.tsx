import { motion } from 'framer-motion';
import { Code2, Database, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Harsh Maniya
              <span className="block text-orange-600 dark:text-orange-400">Computer Science Student</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Passionate about building innovative solutions and exploring new technologies. 
              Currently focusing on web development and artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors dark:text-white"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="col-span-2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Full Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-300">React, Node.js, TypeScript</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Database className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Database Design</h3>
              <p className="text-gray-600 dark:text-gray-300">SQL, MongoDB</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Globe className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Cloud Services</h3>
              <p className="text-gray-600 dark:text-gray-300">AWS, Azure</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}