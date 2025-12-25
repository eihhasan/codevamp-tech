import React from 'react';

export default function Product() {
    return (
        <section id="products" className="py-24 bg-dark-soft/30">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-copper font-bold tracking-widest uppercase text-sm">Solutions</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 mt-4 mb-6">
                        AI <span className="text-[#db582b]">Capabilities </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Production-ready AI features built for real-world scale, security, and measurable outcomes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1: Autonomous Agents */}
                    <div
                        className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-copper/30 transition-all duration-500 copper-glow"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-copper/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        <div className="relative z-10">
                            <div className="mb-6 p-4 bg-dark-soft rounded-2xl inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-copper" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-copper transition-colors">Autonomous Agents</h3>
                            <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                Task-driven agents that plan, act, and learn.
                            </p>
                            <a href="#contact" className="text-xs font-bold text-copper flex items-center gap-2 group/btn">
                                LEARN MORE
                                <span className="w-6 h-[2px] bg-copper/30 group-hover/btn:w-10 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Vision + OCR */}
                    <div
                        className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-copper/30 transition-all duration-500 copper-glow"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-copper/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        <div className="relative z-10">
                            <div className="mb-6 p-4 bg-dark-soft rounded-2xl inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-copper" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-copper transition-colors">Vision + OCR</h3>
                            <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                Understand images, docs, and invoices at scale.
                            </p>
                            <a href="#contact" className="text-xs font-bold text-copper flex items-center gap-2 group/btn">
                                LEARN MORE
                                <span className="w-6 h-[2px] bg-copper/30 group-hover/btn:w-10 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>

                    {/* Card 3: RAG + Knowledge */}
                    <div
                        className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-copper/30 transition-all duration-500 copper-glow"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-copper/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        <div className="relative z-10">
                            <div className="mb-6 p-4 bg-dark-soft rounded-2xl inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-copper" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-copper transition-colors">RAG + Knowledge</h3>
                            <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                Search and ground outputs in your private data.
                            </p>
                            <a href="#contact" className="text-xs font-bold text-copper flex items-center gap-2 group/btn">
                                LEARN MORE
                                <span className="w-6 h-[2px] bg-copper/30 group-hover/btn:w-10 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>

                    {/* Card 4: NLAutomation */}
                    <div
                        className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-copper/30 transition-all duration-500 copper-glow"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-copper/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        <div className="relative z-10">
                            <div className="mb-6 p-4 bg-dark-soft rounded-2xl inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-copper" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-copper transition-colors">NLAutomation</h3>
                            <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                Automate workflows using natural language.
                            </p>
                            <a href="#contact" className="text-xs font-bold text-copper flex items-center gap-2 group/btn">
                                LEARN MORE
                                <span className="w-6 h-[2px] bg-copper/30 group-hover/btn:w-10 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>

                    {/* Card 5: Predictive Analytics */}
                    <div
                        className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-copper/30 transition-all duration-500 copper-glow"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-copper/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        <div className="relative z-10">
                            <div className="mb-6 p-4 bg-dark-soft rounded-2xl inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-copper" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-copper transition-colors">Predictive Analytics</h3>
                            <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                Forecast KPIs and detect anomalies.
                            </p>
                            <a href="#contact" className="text-xs font-bold text-copper flex items-center gap-2 group/btn">
                                LEARN MORE
                                <span className="w-6 h-[2px] bg-copper/30 group-hover/btn:w-10 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>

                    {/* Card 6: Enterprise Security */}
                    <div
                        className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-copper/30 transition-all duration-500 copper-glow"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-copper/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        <div className="relative z-10">
                            <div className="mb-6 p-4 bg-dark-soft rounded-2xl inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-copper" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-copper transition-colors">Enterprise Security</h3>
                            <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                Role-based access, audit trails, and compliance.
                            </p>
                            <a href="#contact" className="text-xs font-bold text-copper flex items-center gap-2 group/btn">
                                LEARN MORE
                                <span className="w-6 h-[2px] bg-copper/30 group-hover/btn:w-10 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
