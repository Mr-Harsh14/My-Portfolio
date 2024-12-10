'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '@/lib/emailjs'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID!,
        EMAILJS_CONFIG.TEMPLATE_ID!,
        {
          from_name: formData.get('name'),
          to_name: 'Harsh Maniya',
          message: formData.get('message'),
          reply_to: formData.get('email'),
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
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
          name="email"
          required
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
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Your message..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 dark:text-green-400 text-sm mt-2">
          Message sent successfully! I'll get back to you soon.
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-600 dark:text-red-400 text-sm mt-2">
          Failed to send message. Please try again later.
        </p>
      )}
    </form>
  )
} 