import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/product', label: 'Product' },
    { path: '/technology', label: 'Technology' },
    { path: '/market', label: 'Market' },
    { path: '/traction', label: 'Traction' },
    { path: '/business-model', label: 'Business Model' },
    { path: '/team', label: 'Team' },
    { path: '/milestones', label: 'Milestones' },
    { path: '/investors', label: 'Investors' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 focus-visible-ring rounded">
            <img 
              src="/Dignotix/images/hero_logo_with_tagline.png" 
              alt="Dignotix logo" 
              className="h-10 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors focus-visible-ring"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/demo" className="btn-outline text-sm px-4 py-2">
              Request Demo
            </Link>
            <Link to="/investors" className="btn-primary text-sm px-4 py-2">
              Investor Pitch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus-visible-ring"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-2">
                <Link to="/demo" className="btn-outline text-sm text-center" onClick={() => setIsMenuOpen(false)}>
                  Request Demo
                </Link>
                <Link to="/investors" className="btn-primary text-sm text-center" onClick={() => setIsMenuOpen(false)}>
                  Investor Pitch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
