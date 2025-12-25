import React from "react";
const WHY_US = [
    {
        title: "Innovation",
        description: "Future-focused solutions with real impact.",
        icon: "🤖",
    },
    {
        title: "Scalability",
        description: "Architected for growth and reliability.",
        icon: "🔐",
    },
    {
        title: "AI Expertise",
        description: "Deep ML/AI systems and agentic apps.",
        icon: "⚡",
    },
    {
        title: "End-to-End Delivery",
        description: "From strategy to production and beyond.",
        icon: "🚀",
    },
];

export default function WhyUs() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="bg-gradient-to-br from-copper/10 to-transparent border border-[#333] rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden relative">
                    {/* Background blur effect - smaller on mobile */}
                    <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-copper/5 rounded-full blur-[50px] sm:blur-[70px] lg:blur-[100px] -translate-y-1/3 sm:-translate-y-1/2 translate-x-1/3 sm:translate-x-1/2"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 lg:mb-8">
                                Why Industry Leaders Choose{" "}
                                <span className="text-[#db582b]">Codevamp</span>
                            </h2>

                            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                                We don't just ship features; we engineer competitive advantages.
                                Our methodology combines extreme transparency with high-velocity
                                engineering.
                            </p>

                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    "Proprietary CI/CD Pipelines",
                                    "Automated QA Testing",
                                    "Post-launch Support",
                                    "Cloud Optimization",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-copper/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-copper"></div>
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium text-gray-300">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Feature Cards */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                            {WHY_US.map((feature, i) => (
                                <div
                                    key={i}
                                    className="glass p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-copper/20 transition-all h-full flex flex-col"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-copper/10 rounded-lg sm:rounded-xl flex items-center justify-center text-copper mb-3 sm:mb-4 flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed flex-grow">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
