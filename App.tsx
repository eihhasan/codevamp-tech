
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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

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

      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      <div className="relative">
        <Navbar />
        <Layout />
      </div>

      {/* Scroll indicator */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 3 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-gray-500 font-bold">Scroll to Evolve</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#db5627] to-transparent" />
      </motion.div> */}

      {/* Background grain noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default App;
