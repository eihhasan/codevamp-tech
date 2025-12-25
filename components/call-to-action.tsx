import React from "react";

export default function CallToAction() {
  return (
    <section className="py-24 overflow-hidden relative ">
      <div className="absolute inset-0 bg-copper/5 blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10 text-center ">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
          Ready to <span className="text-[#db582b]">Scale</span> your Business?
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Join the ranks of successful companies that have transformed their
          operations through our elite engineering and AI integration services.
        </p>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="border border-[#db5627] px-12 py-4 bg-copper text-white rounded-full font-bold text-lg hover:bg-copper-light transition-all shadow-xl shadow-copper/20"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </section>
  );
}
