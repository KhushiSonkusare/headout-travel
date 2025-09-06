import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Your global styles

// Define Inter for body text and general UI
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // This makes it available as a CSS variable
});

// Define Playfair Display for headings and display text
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display', // This makes it available as a CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
