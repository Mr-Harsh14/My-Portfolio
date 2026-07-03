import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // hazz.me is the personal brand domain: its root serves the all-projects
      // page while the rest of the portfolio lives on harshmaniya.dev.
      {
        source: '/',
        has: [{ type: 'host', value: 'hazz.me' }],
        destination: '/projects',
      },
      {
        source: '/',
        has: [{ type: 'host', value: 'www.hazz.me' }],
        destination: '/projects',
      },
    ]
  },
}

export default nextConfig
