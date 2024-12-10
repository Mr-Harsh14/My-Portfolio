'use client'

import { useState, useRef } from 'react'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (isSubmitting) return
    setIsSubmitting(true)
    setStatus('idle')

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        from_name: formData.get('from_name'),
        reply_to: formData.get('reply_to'),
        message: formData.get('message'),
      }

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Your name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="reply_to" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
          Email
        </label>
        <input
          type="email"
          id="reply_to"
          name="reply_to"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="your.email@example.com"
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : 'Send Message'}
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