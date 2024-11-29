import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            <img 
              src={isDark ? "/HM logoW.svg" : "/HM logo.svg"} 
              alt="Harsh Maniya" 
              className="w-20" 
            />
          </motion.div>
          
          <div className="flex items-center space-x-6">
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
            
            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:jane@example.com"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Mail size={20} />
              </motion.a>
              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}