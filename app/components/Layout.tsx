import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User, Search, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from './ui/moving-border';
import { ChatWidget } from './ChatWidget';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (pathname !== '/') {
       window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Corporate DNA', path: '/corporate' },
    { name: 'Technology Hub', path: '/technology' },
    { name: 'Product Solutions', path: '/products' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="https://lh3.googleusercontent.com/d/1ZQEVbhZmCMuym2pnF9vGq6Zxx4GTAzHK" 
              alt="Huachen Materials Science"
              className="h-16 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* 32 Years Badge */}
          <div className="hidden lg:flex items-center ml-1 mr-auto pl-3 border-l border-slate-200">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center" style={{ width: '42px', height: '42px' }}>
                <svg viewBox="0 0 42 42" className="absolute inset-0 w-full h-full">
                  <circle cx="21" cy="21" r="19" fill="none" stroke="#cd7f32" strokeWidth="1.5" strokeDasharray="3 2" />
                </svg>
                <span className="text-[#003366] relative" style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1 }}>32</span>
              </div>
              <div className="flex flex-col" style={{ lineHeight: 1.2 }}>
                <span className="text-[#003366] uppercase" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.05em' }}>Years</span>
                <span className="text-slate-400 uppercase" style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.03em' }}>Industry Exp.</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-wider font-medium hover:text-[#cd7f32] transition-colors relative py-2",
                  pathname === link.path ? "text-[#003366]" : "text-slate-600"
                )}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#cd7f32]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Utilities */}
          <div className="hidden lg:flex items-center space-x-8 ml-8">
            <Link to="/portal" className="text-slate-600 hover:text-[#cd7f32] flex items-center gap-2 text-sm font-medium">
              <User className="w-5 h-5" />
              <span>Portal</span>
            </Link>
            <div className="flex items-center gap-2 border-l border-slate-200 pl-8">
              <Button
                as="a"
                href="https://www.facebook.com/people/Susie-Sun/pfbid0ohUs4drUduLgBHXfsUKXVyzLX9fMbkbEuNuAqRkp8siUEQY6Nb7yFEC9VBbJn8zel/"
                target="_blank"
                rel="noopener noreferrer"
                borderRadius="9999px"
                containerClassName="w-10 h-10 p-[1px]"
                className="bg-white text-slate-400 hover:text-[#cd7f32] border-transparent"
                borderClassName="bg-[radial-gradient(#cd7f32_40%,transparent_60%)]"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                as="a"
                href="https://www.tiktok.com/@sunny_sun045"
                target="_blank"
                rel="noopener noreferrer"
                borderRadius="9999px"
                containerClassName="w-10 h-10 p-[1px]"
                className="bg-white text-slate-400 hover:text-[#cd7f32] border-transparent"
                borderClassName="bg-[radial-gradient(#cd7f32_40%,transparent_60%)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </Button>
              <Button
                as="a"
                href="https://www.instagram.com/huachennewmaterials/"
                target="_blank"
                rel="noopener noreferrer"
                borderRadius="9999px"
                containerClassName="w-10 h-10 p-[1px]"
                className="bg-white text-slate-400 hover:text-[#cd7f32] border-transparent"
                borderClassName="bg-[radial-gradient(#cd7f32_40%,transparent_60%)]"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/in/%E5%BE%B7%E6%96%87-%E6%9B%B9-477a123ab/"
                target="_blank"
                rel="noopener noreferrer"
                borderRadius="9999px"
                containerClassName="w-10 h-10 p-[1px]"
                className="bg-white text-slate-400 hover:text-[#cd7f32] border-transparent"
                borderClassName="bg-[radial-gradient(#cd7f32_40%,transparent_60%)]"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif font-bold text-[#003366]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-slate-200 my-4" />
              <Link to="/portal" className="flex items-center gap-3 text-lg font-medium text-slate-600">
                <User className="w-5 h-5" /> Distributor Portal
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <ChatWidget />

      {/* Footer */}
      <footer className="bg-[#003366] text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                 <div className="w-8 h-8 bg-white text-[#003366] flex items-center justify-center font-serif text-xl font-bold rounded-sm">
                  H
                </div>
                <span className="text-2xl font-serif font-bold tracking-wide">HUACHEN</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Redefining textile engineering with curtain coating precision. 
                Sustainable, durable, and aesthetically superior shading solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/people/Susie-Sun/pfbid0ohUs4drUduLgBHXfsUKXVyzLX9fMbkbEuNuAqRkp8siUEQY6Nb7yFEC9VBbJn8zel/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#cd7f32] transition-colors"><Facebook className="w-5 h-5"/></a>
                <a href="https://www.tiktok.com/@sunny_sun045" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#cd7f32] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/huachennewmaterials/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#cd7f32] transition-colors"><Instagram className="w-5 h-5"/></a>
                <a href="https://www.linkedin.com/in/%E5%BE%B7%E6%96%87-%E6%9B%B9-477a123ab/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#cd7f32] transition-colors"><Linkedin className="w-5 h-5"/></a>
              </div>
            </div>

            <div>
              <h4 className="text-[#cd7f32] font-medium tracking-widest uppercase text-xs mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li><Link to="/corporate" className="hover:text-white transition-colors">Our Heritage</Link></li>
                <li><Link to="/technology" className="hover:text-white transition-colors">Curtain Coating</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Product Catalog</Link></li>
                <li><Link to="/portal" className="hover:text-white transition-colors">Distributor Portal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#cd7f32] font-medium tracking-widest uppercase text-xs mb-6">Products</h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li><Link to="/products?cat=roman" className="hover:text-white transition-colors">Roman Blinds</Link></li>
                <li><Link to="/products?cat=roller" className="hover:text-white transition-colors">Roller Blinds</Link></li>
                <li><Link to="/products?cat=blackout" className="hover:text-white transition-colors">Blackout Lining</Link></li>
                <li><Link to="/products?cat=sunshade" className="hover:text-white transition-colors">Sunshade Fabric</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#cd7f32] font-medium tracking-widest uppercase text-xs mb-6">Global HQ</h4>
              <address className="not-italic text-sm text-slate-300 space-y-4">
                <p>No. 93, Miaohe Road, Yunhe Street,<br/>Linping District, Hangzhou, China</p>
                <p>+86 15869007713</p>
                <p>Info@hczr.com</p>
                <div className="pt-4">
                   <button className="border border-white/20 hover:bg-white hover:text-[#003366] text-white px-6 py-2 text-sm transition-all">
                    Contact Us
                   </button>
                </div>
              </address>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>&copy; 2024 Huachen Textile Co. Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};