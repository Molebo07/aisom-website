'use client'

import Link from 'next/link'

const footerLinks = {
  solutions: [
    { name: 'Certara', href: '/products#certara' },
    { name: 'Forge', href: '/products#forge' },
  ],
  about: [
    { name: 'About', href: '/about' },
    { name: 'Our Ethos', href: '/ethos' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-aisom-gunmetal-900 text-white">
      <div className="container-max py-12 px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Aisom</h3>
            <p className="text-aisom-cool-200 leading-relaxed max-w-md text-sm">
              Strategic consulting meets intelligent software. Building solutions that drive measurable business impact.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-medium mb-4 text-sm">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-aisom-cool-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-medium mb-4 text-sm">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-aisom-cool-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-aisom-gunmetal-700 mt-8 pt-8 text-center">
          <p className="text-aisom-cool-400 text-sm">
            © 2025 Aisom. All rights reserved. Building intelligent solutions for strategic growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
