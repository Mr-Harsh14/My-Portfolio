'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'span'
  once?: boolean
}

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion()
  const Comp: any = motion[as]

  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Comp>
  )
}
