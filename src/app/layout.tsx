import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aisom - Strategic Consulting & Intelligent Software',
  description: 'Aisom combines strategic consulting and intelligent software to help organizations operate seamlessly and grow to their full potential.',
  keywords: 'strategic consulting, intelligent software, business solutions, compliance automation, workflow optimization',
  authors: [{ name: 'Aisom' }],
  openGraph: {
    title: 'Aisom - Strategic Consulting & Intelligent Software',
    description: 'Aisom combines strategic consulting and intelligent software to help organizations operate seamlessly and grow to their full potential.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
