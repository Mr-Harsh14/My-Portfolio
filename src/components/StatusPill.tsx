'use client'

interface StatusPillProps {
  label?: string
  available?: boolean
}

export default function StatusPill({
  label = 'Available for opportunities',
  available = true,
}: StatusPillProps) {
  return (
    <span className="pill">
      <span className="relative flex h-2 w-2 items-center justify-center">
        {available && (
          <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            available ? 'bg-accent' : 'bg-ink-400'
          }`}
        />
      </span>
      <span>{label}</span>
    </span>
  )
}
