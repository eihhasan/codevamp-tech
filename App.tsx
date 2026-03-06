
import React, { useEffect, Suspense } from 'react';
import Scene from './components/Scene';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import CustomCursor from './components/CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => (
  <motion.div
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-24 h-24 border-2 border-[#db5627] rounded-full flex items-center justify-center animate-spin"
    >
      <div className="w-4 h-4 bg-white rounded-full animate-ping" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-8 text-[#db5627] tracking-[0.3em] font-bold text-sm uppercase"
    >
      Synchronizing Neural Core
    </motion.div>
  </motion.div>
);

import ProductSuite from './components/ProductSuite';
import FutureFooter from './components/footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentView, setCurrentView] = React.useState<'home' | 'product'>('home');

  useEffect(() => {
    // Simulate initial loading for dramatic effect
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <CustomCursor />

      <div className="relative">
        <Navbar onNavigate={(view) => setCurrentView(view as any)} />
        {currentView === 'home' ? (
          <>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
            <Layout />
          </>
        ) : (
          <ProductSuite />
        )}
        <FutureFooter />
      </div>

      {/* Background grain noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default App;
