'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/harshmaniya', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/harsh-maniya', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' }
  ]

  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <footer className="relative mt-20">
      {/* Gradient Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Final Year Computer Science Student
              <br />
              University of Westminster
              <br />
              Specialising in Web Development and Machine Learning
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-start">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/hazz.png"
                  alt="Harsh Maniya Logo"
                  fill
                  sizes="(max-width: 768px) 4rem, 4rem"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Harsh Maniya. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with{' '}
              <Link
                href="https://nextjs.org"
                target="_blank"
                className="text-primary hover:text-blue-600 transition-colors"
              >
                Next.js
              </Link>
              {' '}and{' '}
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                className="text-primary hover:text-blue-600 transition-colors"
              >
                Tailwind CSS
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 