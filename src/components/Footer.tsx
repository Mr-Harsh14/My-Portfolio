'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: FaLinkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: FaTwitter,
  },
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Computer Science Student
              <br />
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 