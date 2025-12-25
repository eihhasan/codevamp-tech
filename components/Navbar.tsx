import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-8 flex justify-between items-center pointer-events-none">
        {/* Logo - Responsive text size */}
        <a href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-extrabold tracking-tighter flex items-center gap-1 sm:gap-2 pointer-events-auto cursor-pointer"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#db5627] blur-[3px] sm:blur-[4px] absolute -z-10 animate-pulse" />
            <span className="text-white">Codevamp</span>
            <span className="text-[#db5627] mt-0.5 sm:mt-1 text-center text-sm sm:text-base">
              Technologies
            </span>
          </motion.div></a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 pointer-events-auto glass px-6 lg:px-8 py-2 lg:py-3 rounded-full">
          {NAV_ITEMS.map((item, idx) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-xs lg:text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block pointer-events-auto bg-[#db5627] text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-semibold hover:bg-[#ef7d54] transition-all hover:shadow-[0_0_20px_rgba(219,86,39,0.6)]"
        >
          Contact
        </motion.button>

        {/* Mobile Hamburger Menu */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden pointer-events-auto flex flex-col justify-center items-center w-10 h-10 relative z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
          />
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop - Fixed positioning */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            />

            {/* Mobile Menu Panel - Proper positioning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="md:hidden fixed top-20 left-4 right-4 z-50 pointer-events-auto overflow-hidden"
            >
              <div className="glass rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="flex flex-col">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-base font-medium text-gray-300 hover:text-white transition-all py-4 px-4 hover:bg-white/5 rounded-lg border-b border-white/5 last:border-b-0 active:scale-[0.98]"
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: NAV_ITEMS.length * 0.05 + 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-4 bg-gradient-to-r from-[#db5627] to-[#ef7d54] text-white px-6 py-3.5 rounded-full text-base font-semibold hover:shadow-[0_0_30px_rgba(219,86,39,0.7)] transition-all active:scale-[0.98]"
                  >
                    Liaison
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;