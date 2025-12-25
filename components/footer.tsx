import React from "react";
import * as Icons from "lucide-react";

export default function FutureFooter() {
    return (
        <footer id="contact" className="py-16 sm:py-20 md:py-32 lg:py-40 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-32 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 tracking-tight leading-tight sm:leading-none">
                            Initialize <br />The <span className="text-[#db5627]">Ascent.</span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 lg:mb-16 font-light">
                            Join the elite entities already utilizing Codevamp's living
                            architectures. The window for early adoption is narrowing.
                        </p>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white cursor-pointer transition-colors group">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center group-hover:bg-[#db5627]/20 transition-all flex-shrink-0">
                                    <Icons.Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase break-all sm:break-normal">
                                    support@codevamp.tech
                                </span>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white cursor-pointer transition-colors group">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center group-hover:bg-[#db5627]/20 transition-all flex-shrink-0">
                                    <Icons.Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase break-all sm:break-normal">
                                    @codevamptech
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Contact Form */}
                    <div className="relative group w-full">
                        <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#db5627] to-[#442119] rounded-2xl sm:rounded-3xl lg:rounded-[3rem] opacity-20 blur-xl sm:blur-2xl group-hover:opacity-30 transition-opacity" />
                        <div className="glass p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] relative z-10 w-full">
                            <form className="space-y-6 sm:space-y-8">
                                <div className="space-y-2 sm:space-y-3">
                                    <label className="text-[9px] xs:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-500">
                                        Entity Identifier
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Designation"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 outline-none focus:border-[#db5627] transition-all text-xs sm:text-sm font-medium placeholder:text-gray-600"
                                    />
                                </div>

                                <div className="space-y-2 sm:space-y-3">
                                    <label className="text-[9px] xs:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-500">
                                        Node Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Contact Email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 outline-none focus:border-[#db5627] transition-all text-xs sm:text-sm font-medium placeholder:text-gray-600"
                                    />
                                </div>

                                <div className="space-y-2 sm:space-y-3">
                                    <label className="text-[9px] xs:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-500">
                                        Transmission Intent
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Describe the desired evolution..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 outline-none focus:border-[#db5627] transition-all text-xs sm:text-sm font-medium resize-none placeholder:text-gray-600 min-h-[80px] sm:min-h-[100px]"
                                    />
                                </div>

                                <button className="w-full bg-[#db5627] text-white font-extrabold py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl hover:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(219,86,39,0.3)] sm:shadow-[0_20px_40px_rgba(219,86,39,0.3)] tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                                    EXECUTE ASCENT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 sm:mt-24 lg:mt-40 pt-8 sm:pt-12 lg:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-[9px] xs:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase text-gray-600 font-bold">
                    <div className="text-center md:text-left order-2 md:order-1">
                        © 2024 Codevamp Technologies
                    </div>
                    <div className="flex gap-6 sm:gap-8 lg:gap-12 order-1 md:order-2">
                        <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
                            Legal Override
                        </a>
                        <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
                            Privacy Protocols
                        </a>
                    </div>
                    <div className="text-[#db5627] text-center md:text-right order-3 whitespace-nowrap">
                        System Status: Active
                    </div>
                </div>
            </div>
        </footer>
    );
}