
import React from 'react';
import { motion, } from 'framer-motion';
import { INDUSTRIES, SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import WhyUs from './whychoose-codevamp';
import Product from './products';
import CallToAction from './call-to-action';
import FutureFooter from './footer';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl sm:text-6xl font-extrabold leading-tight tracking-tighter mb-6">
          Codevamp Technologies
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db5627] via-{} to-[#db5627] glow-text">
            Engineering AI-Powered Futures
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-10">
          We design AI systems, SaaS platforms, and digital solutions that empower businesses worldwide.


        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              document
                .getElementById("sectors")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm sm:text-base">
            Explore our work <Icons.ArrowRight size={16} sm:size={20} />
          </button>

          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
          >
            Contact us
          </button>
        </div>
      </motion.div>
    </section>
  );
};
const IndustryCard: React.FC<{ industry: typeof INDUSTRIES[0], idx: number }> = ({ industry, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-1/2 group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl">
        <motion.img
          src={industry.image}
          alt={industry.name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-video object-cover brightness-50 group-hover:brightness-75 transition-all"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 sm:p-6 lg:p-8">
          <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] xs:text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase">
            Sector: {industry.name}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl xs:text-4xl sm:text-5xl lg:text-4xl font-bold mb-4 sm:mb-6">
          {industry.name}
        </h3>
        <p className="text-lg sm:text-xl lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
          {industry.impact}
        </p>
        <div className="flex gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#db5627]" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#db5627]/50" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#db5627]/20" />
        </div>
      </div>
    </motion.div>
  );
};

const SectorsSection: React.FC = () => {
  return (
    <section id="sectors" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 text-center">Our Work in <br /><span className="text-[#db5627]"> Engineering & AI</span></h2>
        {INDUSTRIES.map((ind, idx) => (
          <IndustryCard key={idx} industry={ind} idx={idx} />
        ))}
      </div>
    </section>
  );
};

const NeuralNetworkSection: React.FC = () => {
  return (
    <section id="intelligence" className="py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">About  <span className="text-[#db5627]">Us</span> </h2>
          <div className="flex justify-center mb-12">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#db5627] to-transparent" />
          </div>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-16">
            Codevamp Technologies is an innovation-first company specializing in AI-powered applications, SaaS products, and enterprise-grade software. We combine cutting-edge technology with bold design to build the future of digital transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Vision', desc: 'Bold, human-centric AI for every business.' },
              { label: 'Mission', desc: 'Deliver transformative AI systems with measurable impact.' },
              {
                label: 'Values', desc: 'Innovation, reliability, and design excellence.'
              }
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border border-[#db5627]/30 flex items-center justify-center mb-6 animate-pulse">
                  <div className="w-4 h-4 rounded-full bg-[#db5627] shadow-[0_0_20px_#db5627]" />
                </div>
                <h4 className="text-xl font-bold mb-2">{node.label}</h4>
                <p className="text-gray-500 text-sm">{node.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const Layout: React.FC = () => {
  return (
    <main className="relative z-10 bg-black/60">
      <Hero />
      <Product />
      <SectorsSection />
      <NeuralNetworkSection />
      <WhyUs />
      <CallToAction />
      <FutureFooter />
    </main>
  );
};

export default Layout;
