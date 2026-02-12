import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Fingerprint, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Login from '../Pages/Login.jsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress((winScroll / height) * 100);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/About' },
    { name: 'Courses', path: '/Courses' },
    { name: 'Contact Us', path: '/Contact' },
  ];

  const liquidTransition = { type: 'spring', stiffness: 260, damping: 20 };

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 z-[110] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-8 ${
          isScrolled
            ? 'py-3 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-48 md:w-56"
            >
              <img
                src="/img/Ai_Scholars_png.png"
                alt="Logo"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-slate-100/50 backdrop-blur-md p-1 rounded-2xl border border-white/20">
            <LayoutGroup>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-6 py-2 text-sm font-bold transition-colors duration-300 z-10 ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-xl shadow-md z-[-1]"
                        transition={liquidTransition}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </LayoutGroup>
          </div>

          <div className="flex items-center gap-4">
            
            {/* ✅ Smooth Search Bar */}
            <div className="relative hidden xl:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />

              <motion.input
                type="text"
                placeholder="Search resources..."
                initial={{ width: 160 }}
                whileFocus={{ width: 260 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="bg-slate-100/80 border border-slate-200/50 rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white shadow-inner"
              />
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setLoginOpen(true)}
              className="group relative flex items-center gap-2 bg-slate-900 text-white px-7 py-2.5 rounded-xl font-bold text-sm overflow-hidden hover:bg-blue-600 transition-colors"
            >
              <Fingerprint size={18} />
              <span>Log In</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 bg-slate-100 text-slate-700 rounded-xl active:scale-90 transition-transform"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm lg:hidden z-[40]"
              />

              <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="fixed top-0 right-0 w-[300px] h-screen bg-white p-8 lg:hidden flex flex-col z-[50] shadow-2xl"
              >
                <div className="flex flex-col gap-6 mt-16">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-2xl font-bold text-slate-800 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </nav>

      <Login open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Header;
