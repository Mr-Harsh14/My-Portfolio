'use client'

import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: 'slow' | 'normal'
  reverse?: boolean
  className?: string
  pauseOnHover?: boolean
}

export default function Marquee({
  children,
  speed = 'normal',
  reverse = false,
  className = '',
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div className={`group flex w-full overflow-hidden mask-fade-edges ${className}`}>
      <div
        className={`flex shrink-0 items-center gap-12 pr-12 ${
          speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'
        } ${reverse ? '[animation-direction:reverse]' : ''} ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        }`}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
