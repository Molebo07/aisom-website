import Link from 'next/link'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Ethos', href: '/ethos' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-aisom-gunmetal-800 border-b border-aisom-gunmetal-700 shadow-sm">
      <nav className="container-max px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-semibold text-white hover:text-aisom-cool-200 transition-colors">
            Aisom
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-aisom-cool-200 hover:text-white transition-colors px-3 py-2 rounded hover:bg-aisom-gunmetal-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
