'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  preventScroll?: boolean
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  id,
  preventScroll = false 
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: preventScroll ? "0px" : "-100px"
  })

  return (
    <motion.section
      ref={ref}
      initial={preventScroll ? false : { y: 50, opacity: 0 }}
      animate={preventScroll ? undefined : (isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 })}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  )
} 