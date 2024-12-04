'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <motion.div
      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-800/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="John Doe"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-800/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="john@example.com"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-800/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Hello, I'd like to talk about..."
            disabled={isSubmitting}
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl bg-primary text-white font-medium shadow-lg hover:shadow-primary/25
            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'} 
            transition-all duration-300`}
          whileHover={!isSubmitting ? { scale: 1.01 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50/50 dark:bg-green-900/20 backdrop-blur-sm text-green-600 dark:text-green-400 p-4 rounded-xl text-center"
          >
            Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50/50 dark:bg-red-900/20 backdrop-blur-sm text-red-600 dark:text-red-400 p-4 rounded-xl text-center"
          >
            {errorMessage}
          </motion.div>
        )}
      </form>
    </motion.div>
  )
} 