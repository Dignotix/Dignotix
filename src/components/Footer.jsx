import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/Dignotix/images/hero_logo_with_tagline.png" 
              alt="Dignotix logo" 
              className="h-10 w-auto mb-4 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-sm text-gray-400 mb-4">
              Making medical tests faster and cheaper. Portable, wearable, and smart diagnostic devices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/product" className="hover:text-primary-400 transition-colors">Product</Link></li>
              <li><Link to="/technology" className="hover:text-primary-400 transition-colors">Technology</Link></li>
              <li><Link to="/market" className="hover:text-primary-400 transition-colors">Market</Link></li>
              <li><Link to="/team" className="hover:text-primary-400 transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h3 className="text-white font-semibold mb-4">Investors</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/investors" className="hover:text-primary-400 transition-colors">Funding Ask</Link></li>
              <li><Link to="/milestones" className="hover:text-primary-400 transition-colors">Milestones</Link></li>
              <li><Link to="/business-model" className="hover:text-primary-400 transition-colors">Business Model</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            © {currentYear} Dignotix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
