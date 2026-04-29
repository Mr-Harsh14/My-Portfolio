'use client'

import { useState, useRef } from 'react'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setStatus('success')
      formRef.current?.reset()
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <Field
        id="from_name"
        name="from_name"
        label="Your name"
        placeholder="Ada Lovelace"
        disabled={isSubmitting}
      />
      <Field
        id="reply_to"
        name="reply_to"
        type="email"
        label="Email"
        placeholder="ada@example.com"
        disabled={isSubmitting}
      />
      <div>
        <label htmlFor="message" className="eyebrow mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me a little about it…"
          disabled={isSubmitting}
          className="w-full resize-none rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg)] px-4 py-3 text-[15px] placeholder:text-muted focus:border-accent-deep focus:outline-none focus:ring-2 focus:ring-accent-deep/30 dark:focus:border-accent dark:focus:ring-accent/30"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--fg)] px-6 py-3 text-sm font-medium text-[color:var(--bg)] transition-all hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Spinner /> Sending…
          </>
        ) : (
          <>
            Send message
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      {status === 'success' && (
        <p className="rounded-2xl border border-accent-deep/30 bg-accent-soft/30 px-4 py-3 text-sm text-accent-deep dark:text-accent">
          Message sent. I'll be in touch soon — thanks for reaching out.
        </p>
      )}

      {status === 'error' && (
        <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  )
}

function Field({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  disabled,
}: {
  id: string
  name: string
  label: string
  type?: string
  placeholder?: string
  disabled?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-2 block">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg)] px-4 py-3 text-[15px] placeholder:text-muted focus:border-accent-deep focus:outline-none focus:ring-2 focus:ring-accent-deep/30 dark:focus:border-accent dark:focus:ring-accent/30"
      />
    </div>
  )
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}
