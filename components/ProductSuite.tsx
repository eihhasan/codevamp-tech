'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Zap, Users, DollarSign, Briefcase, Target, Gauge, TrendingUp, Cog, ListTodo, Lock, CheckCircle2, ChevronRight, Sparkles, ArrowLeft, Globe, ShieldCheck, FileText, LayoutDashboard, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
    {
        icon: Users,
        name: 'HRMS',
        title: 'Employee Management System',
        description: 'Manage employees, departments, attendance, and company records in a centralized system.',
        price: 200000,
        color: 'from-blue-500 to-indigo-600',
        glow: 'group-hover:shadow-blue-500/20',
    },
    {
        icon: TrendingUp,
        name: 'Payroll',
        title: 'Salary Management System',
        description: 'Automate salary calculations, payslips, deductions, and tax processing.',
        price: 200000,
        color: 'from-emerald-500 to-teal-600',
        glow: 'group-hover:shadow-emerald-500/20',
    },
    {
        icon: Briefcase,
        name: 'Karya',
        title: 'Project Management System',
        description: 'Track tasks, manage projects, and collaborate with teams efficiently.',
        price: 200000,
        color: 'from-violet-500 to-purple-600',
        glow: 'group-hover:shadow-violet-500/20',
    },
    {
        icon: Target,
        name: 'ATS',
        title: 'Applicant Tracking System',
        description: 'Simplify hiring with candidate tracking, interviews, and recruitment pipelines.',
        price: 200000,
        color: 'from-orange-500 to-amber-600',
        glow: 'group-hover:shadow-orange-500/20',
    },
    {
        icon: Gauge,
        name: 'OMS',
        title: 'Operations Management System',
        description: 'Monitor business operations and internal workflows in one dashboard.',
        price: 200000,
        color: 'from-rose-500 to-pink-600',
        glow: 'group-hover:shadow-rose-500/20',
    },
    {
        icon: TrendingUp,
        name: 'Lead Management',
        title: 'Lead Management CRM',
        description: 'Track leads, manage sales pipelines, and improve conversion rates.',
        price: 200000,
        color: 'from-cyan-500 to-sky-600',
        glow: 'group-hover:shadow-cyan-500/20',
    }
]

const benefits = [
    {
        icon: Zap,
        title: 'One Platform for Everything',
        description: 'Run your entire company from one unified dashboard — no switching apps.',
        color: 'from-amber-500 to-orange-500',
        bg: 'bg-amber-500/10',
        text: 'text-amber-400',
    },
    {
        icon: TrendingUp,
        title: 'Save Software Costs',
        description: 'Replace 6+ expensive tools with a single affordable platform.',
        color: 'from-emerald-500 to-teal-500',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
    },
    {
        icon: Gauge,
        title: 'Powerful Automation',
        description: 'Automate business workflows and eliminate repetitive manual work.',
        color: 'from-violet-500 to-purple-500',
        bg: 'bg-violet-500/10',
        text: 'text-violet-400',
    },
    {
        icon: Lock,
        title: 'Secure and Scalable',
        description: 'Enterprise-level security and infrastructure that grows with you.',
        color: 'from-blue-500 to-indigo-500',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
    },
]

export default function ProductSuite() {
    const [view, setView] = useState<'landing' | 'suite-details'>('landing')
    const [highlightPricing, setHighlightPricing] = useState(false)

    const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0)
    const offerPrice = 200000
    const discount = totalPrice - offerPrice

    const handleGetFullSuite = () => {
        setView('suite-details')
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (view === 'suite-details') {
        return <SuiteDetailsView onBack={() => setView('landing')} />
    }

    return (
        <AnimatePresence mode="wait">
            {view === 'landing' ? (
                <motion.div
                    key="landing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20 sm:pt-24"
                >

                    {/* ── Hero Section ── */}
                    <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-16 sm:pb-32 overflow-hidden">
                        {/* Background elements */}
                        <div className="absolute inset-0 -z-10 pointer-events-none">
                            <div className="absolute inset-0 bg-grid opacity-50" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#da5729]/5 rounded-full blur-[120px]" />
                            <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-[#db5627]/5 rounded-full blur-[100px]" />
                            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#442119]/5 rounded-full blur-[80px]" />
                        </div>

                        <div className="max-w-7xl mx-auto">
                            <div className="text-center max-w-4xl mx-auto space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#da5729]/20 border border-[#da5729]/40 text-xs font-semibold text-[#da5729] uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#da5729] animate-pulse" />
                                    #1 Business Suite Platform
                                </div>

                                {/* Headline */}
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white drop-shadow-lg">
                                    All Your Business{' '}
                                    <span className="bg-gradient-to-r from-[#ff7e4d] to-[#ff9f7a] bg-clip-text text-transparent drop-shadow-lg">Software</span>
                                    <br />
                                    in One{' '}
                                    <span className="relative inline-block">
                                        Powerful Suite
                                        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff7e4d] via-[#ff9f7a] to-[#442119] rounded-full" />
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
                                    Manage employees, payroll, hiring, operations, projects, and leads from a single platform. <span className="text-white font-semibold">One subscription. Zero friction.</span>
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                    <Button
                                        onClick={handleGetFullSuite}
                                        className="bg-gradient-to-r from-[#ff7e4d] to-[#e04d1a] hover:from-[#ff8e5f] hover:to-[#f0551f] text-white h-14 px-10 text-base font-bold shadow-2xl shadow-[#da5729]/50 border-0 rounded-xl transition-all duration-300"
                                    >
                                        Get Full Suite <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                    <a href="#products">
                                        <Button
                                            variant="outline"
                                            className="h-14 px-10 text-base border-white/30 hover:bg-white/10 hover:border-white/50 rounded-xl backdrop-blur-sm text-white font-medium"
                                        >
                                            Explore Products
                                        </Button>
                                    </a>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center justify-center gap-8 pt-8 text-sm">
                                    {[
                                        { value: '6+', label: 'Products Included' },
                                        { value: '83%', label: 'Cost Savings' },
                                        { value: '1', label: 'Unified Platform' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <div className="text-2xl font-black text-white drop-shadow-md">{stat.value}</div>
                                            <div className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Products Grid Section ── */}
                    <section id="products" className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#da5729]/5 to-transparent" />
                        </div>
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center space-y-4 mb-16">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#da5729]/20 border border-[#da5729]/40 text-xs font-semibold text-[#da5729] uppercase tracking-widest">
                                    Our Products
                                </div>
                                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                                    <span className="bg-gradient-to-r from-[#ff7e4d] to-[#ff9f7a] bg-clip-text text-transparent drop-shadow-lg">Six Powerful</span> Business Solutions
                                </h2>
                                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
                                    Comprehensive tools designed to streamline every aspect of your organization
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                                {products.map((product, idx) => (
                                    <div
                                        key={idx}
                                        className={`group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:border-[#ff7e4d]/50 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#da5729]/20 overflow-hidden`}
                                    >
                                        {/* Gradient corner glow */}
                                        <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-[#ff7e4d] to-[#442119] opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500`} />

                                        {/* Big ghost icon — top-right decorative */}
                                        <div className="absolute top-5 right-5 opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 rotate-12">
                                            <product.icon className="w-24 h-24 text-white" strokeWidth={1} />
                                        </div>

                                        <div className={`mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br from-[#ff7e4d] to-[#d94a1a] shadow-xl`}>
                                            <product.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-xs font-bold text-[#ff9f7a] uppercase tracking-widest mb-2 drop-shadow-md">{product.name}</div>
                                        <h3 className="text-lg font-bold mb-3 text-white drop-shadow-md">{product.title}</h3>
                                        <p className="text-sm text-gray-300 leading-relaxed mb-6 font-medium">{product.description}</p>

                                        <div className="flex items-center gap-2 text-sm text-[#ff9f7a] font-bold group-hover:gap-3 transition-all">
                                            Learn more <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* ── New Pricing Breakdown ── */}
                            <div id="pricing" className="max-w-5xl mx-auto">
                                {/* Section label */}
                                <div className="text-center mb-10 space-y-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#da5729]/20 border border-[#da5729]/40 text-xs font-semibold text-[#da5729] uppercase tracking-widest">
                                        <Sparkles className="w-3 h-3" /> Bundle Pricing
                                    </div>
                                    <h3 className="text-2xl font-black text-white drop-shadow-lg">What&apos;s Inside the Suite?</h3>
                                    <p className="text-sm text-gray-400 font-medium">6 enterprise products. One unbeatable price.</p>
                                </div>

                                <div className={`grid lg:grid-cols-5 gap-6 items-start transition-all duration-1000 ${highlightPricing ? 'ring-2 ring-[#ff7e4d] ring-offset-8 ring-offset-background rounded-3xl scale-[1.02]' : ''}`}>

                                    {/* Left — Product List */}
                                    <div className="lg:col-span-3 space-y-3">
                                        {products.map((product, idx) => (
                                            <div
                                                key={idx}
                                                className="group flex items-center justify-between gap-4 bg-white/[0.05] backdrop-blur-sm rounded-xl border border-white/20 px-5 py-4 hover:border-[#ff7e4d]/40 hover:bg-white/[0.08] transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-3 min-w-0">
                                                    <div className={`p-2 rounded-lg bg-gradient-to-br from-[#ff7e4d] to-[#d94a1a] shadow-xl shrink-0`}>
                                                        <product.icon className="w-4 h-4 text-white" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="text-[10px] font-bold text-[#ff9f7a] uppercase tracking-widest drop-shadow-md">{product.name}</div>
                                                        <div className="text-sm font-semibold text-white truncate drop-shadow-md">{product.title}</div>
                                                    </div>
                                                </div>
                                                <div className="shrink-0 text-right">
                                                    <div className="text-xs text-gray-400 line-through">₹{product.price.toLocaleString('en-IN')}</div>
                                                    <div className="text-xs font-bold text-emerald-400 drop-shadow-md">Included</div>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Total strikethrough row */}
                                        <div className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/10 bg-white/[0.02]">
                                            <span className="text-sm font-semibold text-gray-400">Total if purchased separately</span>
                                            <span className="text-base font-black text-gray-400 line-through">₹{totalPrice.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>

                                    {/* Right — Deal Card */}
                                    <div className="lg:col-span-2 sticky top-24">
                                        <div
                                            className="relative rounded-2xl p-8 overflow-hidden bg-gradient-to-br from-[#2a1a15] to-[#1a0f0c] border border-[#ff7e4d]/30 shadow-2xl"
                                        >
                                            {/* Glow orbs */}
                                            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#ff7e4d]/20 rounded-full blur-3xl pointer-events-none" />
                                            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#442119]/30 rounded-full blur-3xl pointer-events-none" />

                                            <div className="relative space-y-6">
                                                {/* Savings badge */}
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-wide drop-shadow-md">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                    Save ₹{discount.toLocaleString('en-IN')} — 83% Off
                                                </div>

                                                <div>
                                                    <div className="text-xs font-bold text-[#ff9f7a] uppercase tracking-widest mb-1 drop-shadow-md">Complete Suite</div>
                                                    <div className="text-xl font-black leading-tight text-white drop-shadow-lg">All 6 Products.<br />One Payment.</div>
                                                </div>

                                                {/* Price display */}
                                                <div className="space-y-1">
                                                    <div className="flex items-baseline gap-3">
                                                        <span className="text-4xl font-black text-[#ff9f7a] drop-shadow-xl">₹2,00,000</span>
                                                    </div>
                                                    <div className="text-xs text-gray-400 font-medium">One-time · Unlimited users · No renewal</div>
                                                </div>

                                                {/* Divider */}
                                                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                                {/* Perks list */}
                                                <ul className="space-y-2">
                                                    {['Priority Support', 'Free Onboarding', '1 Year Warranty', 'Future Updates'].map((perk, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                                                            <CheckCircle2 className="w-4 h-4 text-[#ff9f7a] shrink-0 drop-shadow-md" />
                                                            {perk}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* CTA */}
                                                <Button
                                                    onClick={handleGetFullSuite}
                                                    className="w-full h-12 bg-gradient-to-r from-[#ff7e4d] to-[#e04d1a] hover:from-[#ff8e5f] hover:to-[#f0551f] text-white border-0 shadow-2xl shadow-[#ff7e4d]/40 rounded-xl font-bold text-sm relative overflow-hidden group/cta"
                                                >
                                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                                        Get Full Suite <ArrowRight className="w-4 h-4" />
                                                    </span>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" />
                                                </Button>

                                                <p className="text-center text-[10px] text-gray-400 font-medium">
                                                    Limited time launch offer · No subscription
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Benefits Section ── */}
                    <section id="benefits" className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
                        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#da5729]/5 to-transparent" />
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center space-y-4 mb-16">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#da5729]/20 border border-[#da5729]/40 text-xs font-semibold text-[#da5729] uppercase tracking-widest">
                                    Why Choose Us
                                </div>
                                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                                    Built for <span className="bg-gradient-to-r from-[#ff7e4d] to-[#ff9f7a] bg-clip-text text-transparent drop-shadow-lg">Modern Businesses</span>
                                </h2>
                                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
                                    Experience the power of integrated business automation
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {benefits.map((benefit, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-white/[0.05] backdrop-blur-sm rounded-2xl border border-white/20 p-6 space-y-4 hover:border-[#ff7e4d]/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff7e4d]/10"
                                    >
                                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-[#ff7e4d] to-[#d94a1a] shadow-xl`}>
                                            <benefit.icon className={`w-6 h-6 text-white`} />
                                        </div>
                                        <h3 className="text-base font-bold text-white drop-shadow-md">{benefit.title}</h3>
                                        <p className="text-sm text-gray-300 leading-relaxed font-medium">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── CTA Section ── */}
                    <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20 text-center bg-gradient-to-br from-[#2a1a15] to-[#1a0f0c] border border-[#ff7e4d]/30 shadow-2xl"
                            >
                                {/* Background orbs */}
                                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#ff7e4d]/15 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#442119]/20 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ff7e4d]/5 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative max-w-3xl mx-auto space-y-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7e4d]/20 border border-[#ff7e4d]/40 text-sm font-semibold text-[#ff9f7a]">
                                        <Sparkles className="w-4 h-4" /> Limited Time Launch Offer
                                    </div>

                                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-xl">
                                        Get the Complete<br />
                                        <span className="bg-gradient-to-r from-[#ff7e4d] to-[#ff9f7a] bg-clip-text text-transparent drop-shadow-xl">Business Suite Today</span>
                                    </h2>

                                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                                        Save <span className="text-white font-bold">₹10,00,000</span> with our launch offer.
                                        All 6 products for just <span className="text-[#ff9f7a] font-black drop-shadow-lg">₹2,00,000</span>.
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 py-6 max-w-md mx-auto">
                                        <div className="bg-white/[0.05] backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                            <div className="text-2xl font-black text-[#ff9f7a] drop-shadow-lg">6</div>
                                            <div className="text-xs text-gray-400 font-medium">Products</div>
                                        </div>
                                        <div className="bg-white/[0.05] backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                            <div className="text-2xl font-black text-emerald-400 drop-shadow-lg">83%</div>
                                            <div className="text-xs text-gray-400 font-medium">Off</div>
                                        </div>
                                        <div className="bg-white/[0.05] backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                            <div className="text-2xl font-black text-[#ff9f7a] drop-shadow-lg">∞</div>
                                            <div className="text-xs text-gray-400 font-medium">Scale</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button
                                            onClick={handleGetFullSuite}
                                            className="h-14 px-10 text-base bg-gradient-to-r from-[#ff7e4d] to-[#e04d1a] hover:from-[#ff8e5f] hover:to-[#f0551f] text-white border-0 shadow-2xl shadow-[#ff7e4d]/40 rounded-xl font-bold transition-all duration-300"
                                        >
                                            Get Full Suite <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="h-14 px-10 text-base border-white/30 hover:bg-white/10 hover:border-white/50 rounded-xl text-white font-medium"
                                        >
                                            Book a Demo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.div>
            ) : (
                <motion.div
                    key="suite-details"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <SuiteDetailsView onBack={() => setView('landing')} />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

function SuiteDetailsView({ onBack }: { onBack: () => void }) {
    const detailedProducts = [
        {
            id: 1,
            name: 'HRMS',
            title: 'Human Resource Management',
            description: 'Complete employee management, attendance tracking, leave management, and performance reviews all in one place.',
            icon: Users,
            features: ['Employee Database', 'Attendance Tracking', 'Leave Management', 'Performance Reviews', 'Org Structure'],
            gradient: 'from-[#db5627] to-[#442119]',
            glow: 'group-hover:shadow-[#da5729]/25',
            badge: 'bg-[#da5729]/15 text-[#da5729] border-[#da5729]/25',
        },
        {
            id: 2,
            name: 'Payroll',
            title: 'Intelligent Payroll Management',
            description: 'Automate salary calculations, generate payslips, manage deductions, and process payments seamlessly.',
            icon: DollarSign,
            features: ['Salary Automation', 'Payslip Generation', 'Tax Compliance', 'Payment Processing', 'Reports & Analytics'],
            gradient: 'from-[#db5627] to-[#442119]',
            glow: 'group-hover:shadow-[#da5729]/25',
            badge: 'bg-[#da5729]/15 text-[#da5729] border-[#da5729]/25',
        },
        {
            id: 3,
            name: 'ATS',
            title: 'Applicant Tracking System',
            description: 'Streamline your recruitment process with job postings, candidate tracking, and interview management.',
            icon: Briefcase,
            features: ['Job Postings', 'Candidate Tracking', 'Resume Parsing', 'Interview Scheduling', 'Offer Management'],
            gradient: 'from-[#db5627] to-[#442119]',
            glow: 'group-hover:shadow-[#da5729]/25',
            badge: 'bg-[#da5729]/15 text-[#da5729] border-[#da5729]/25',
        },
        {
            id: 4,
            name: 'CRM',
            title: 'Customer Relationship Management',
            description: 'Manage leads, track sales opportunities, and build lasting customer relationships with our powerful CRM.',
            icon: TrendingUp,
            features: ['Lead Management', 'Sales Pipeline', 'Contact Management', 'Deal Tracking', 'Forecasting'],
            gradient: 'from-[#db5627] to-[#442119]',
            glow: 'group-hover:shadow-[#da5729]/25',
            badge: 'bg-[#da5729]/15 text-[#da5729] border-[#da5729]/25',
        },
        {
            id: 5,
            name: 'Operations',
            title: 'Operations Management System',
            description: 'Optimize your business operations with workflow automation, inventory management, and process optimization.',
            icon: Cog,
            features: ['Workflow Automation', 'Inventory Management', 'Task Management', 'Quality Control', 'Resource Planning'],
            gradient: 'from-[#db5627] to-[#442119]',
            glow: 'group-hover:shadow-[#da5729]/25',
            badge: 'bg-[#da5729]/15 text-[#da5729] border-[#da5729]/25',
        },
        {
            id: 6,
            name: 'Projects',
            title: 'Project Management Suite',
            description: 'Plan, track, and deliver projects on time with advanced project management and team collaboration tools.',
            icon: ListTodo,
            features: ['Gantt Charts', 'Kanban Boards', 'Resource Allocation', 'Time Tracking', 'Milestone Tracking'],
            gradient: 'from-[#db5627] to-[#442119]',
            glow: 'group-hover:shadow-[#da5729]/25',
            badge: 'bg-[#da5729]/15 text-[#da5729] border-[#da5729]/25',
        }
    ]
    const internalTools = [
        {
            id: 1,
            name: 'Asset Management',
            title: 'AssetTracker Pro',
            description: 'Strategic insights and operational metrics for data-driven asset management. Track assets, locations, and IDs seamlessly in real-time.',
            image: '/images/internal-tools/asset_management.png',
            link: 'https://assettracker-pro-ybz3s14.public.builtwithrocket.new/',
            icon: LayoutDashboard,
            gradient: 'from-blue-500 to-indigo-600',
            glow: 'hover:shadow-blue-500/25',
            iconBg: 'bg-blue-500/15 text-blue-400',
            badge: 'Asset Intelligence',
        },
        {
            id: 2,
            name: 'Compliance Management',
            title: 'ComplianceHub',
            description: 'Coordinate audit projects through timeline visualization and evidence collection workflows. Manage risks and policies with automated reporting.',
            image: '/images/internal-tools/compliance_management.png',
            link: 'https://compliancehub-3v41426.public.builtwithrocket.new/audit-timeline-management',
            icon: ShieldCheck,
            gradient: 'from-emerald-500 to-teal-600',
            glow: 'hover:shadow-emerald-500/25',
            iconBg: 'bg-emerald-500/15 text-emerald-400',
            badge: 'Audit & Risk',
        },
        {
            id: 3,
            name: 'Contract Management',
            title: 'ContractFlow Pro',
            description: 'Comprehensive business intelligence and data visualization platform. Advanced analytics and reporting for complex contract lifecycles.',
            image: '/images/internal-tools/contract_management.png',
            link: 'https://contractflow-pro-p1p8i87.public.builtwithrocket.new/',
            icon: FileText,
            gradient: 'from-orange-500 to-amber-600',
            glow: 'hover:shadow-orange-500/25',
            iconBg: 'bg-orange-500/15 text-orange-400',
            badge: 'Contract Intelligence',
        }
    ]
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
            {/* Nav */}
            <nav className="sticky top-0 z-50 glass border-b border-white/[0.06] bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

                    <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#da5729] transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Overview
                    </button>
                </div>
            </nav>

            {/* Header */}
            <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute inset-0 bg-grid opacity-60" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#da5729]/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-8 relative">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#da5729]/30 text-xs font-semibold text-[#da5729] uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#da5729] animate-pulse" />
                        6 Powerful Products
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
                        Explore Our<br />
                        <span className="bg-gradient-to-r from-[#db5627] to-[#442119] bg-clip-text text-transparent">Product Suite</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Six powerful business applications designed to work together seamlessly. Choose individual products or get them all.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-32 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {detailedProducts.map((product) => {
                            const IconComponent = product.icon
                            return (
                                <div
                                    key={product.id}
                                    className={`group glass rounded-2xl border border-white/[0.06] hover:border-[#da5729]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${product.glow} flex flex-col overflow-hidden`}
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <IconComponent className="w-12 h-12 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                                    </div>

                                    <div className="p-7 flex flex-col flex-1 gap-5">
                                        <div className="flex items-start gap-3">
                                            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${product.gradient} shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className={`inline-flex w-fit items-center gap-2 px-2 py-0.5 rounded-full text-[10px] font-bold border backdrop-blur-sm mb-1 ${product.badge}`}>
                                                    {product.name}
                                                </span>
                                                <h3 className="text-lg font-bold text-white leading-tight">{product.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-400 leading-relaxed flex-1">{product.description}</p>

                                        <div className="space-y-2">
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Key Features</p>
                                            <div className="flex flex-wrap gap-2">
                                                {product.features.slice(0, 3).map((feature, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-lg"
                                                    >
                                                        <CheckCircle2 className="w-3 h-3 text-[#da5729]" />
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <Button
                                            className={`w-full h-11 bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white border-0 shadow-lg rounded-xl font-semibold group/btn mt-auto`}
                                        >
                                            Learn More <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">


                <div className="max-w-4xl mx-auto text-center space-y-8 relative">
                    {/* Badge - improved contrast */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7e4d]/15 border border-[#ff7e4d]/40 text-xs font-bold text-[#ff9f7a] uppercase tracking-widest drop-shadow-md">
                        <Lock className="w-3 h-3" /> Enterprise Operations
                    </div>

                    {/* Heading - better visibility */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white drop-shadow-xl">
                        Internal{' '}
                        <span className="bg-gradient-to-r from-[#ff7e4d] to-[#ff9f7a] bg-clip-text text-transparent drop-shadow-lg">
                            Operations
                        </span>
                        <br />
                        Gallery
                    </h1>

                    {/* Description - improved contrast */}
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
                        A private suite of management tools custom-built to orchestrate our most critical business functions with precision and scale.
                    </p>

                    {/* Stat chips - updated with better contrast */}
                    <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
                        {[
                            { icon: Globe, label: 'Cloud-Native' },
                            { icon: Zap, label: 'Real-time Sync' },
                            { icon: Lock, label: 'Enterprise-Grade Security' },
                        ].map((chip) => (
                            <div
                                key={chip.label}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] backdrop-blur-sm rounded-xl border border-white/20 text-sm text-gray-300 font-medium hover:border-[#ff7e4d]/40 hover:bg-white/[0.08] transition-all duration-300"
                            >
                                <chip.icon className="w-4 h-4 text-[#ff9f7a]" />
                                {chip.label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-4 sm:px-6 lg:px-8 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {internalTools.map((tool) => {
                            const Icon = tool.icon
                            return (
                                <div
                                    key={tool.id}
                                    className={`group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/20 hover:border-[#ff7e4d]/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff7e4d]/20 flex flex-col`}
                                >
                                    {/* Browser Top Bar - improved contrast */}
                                    <div className="h-9 bg-black/40 border-b border-white/10 flex items-center px-4 gap-1.5 shrink-0 backdrop-blur-sm">
                                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                        <div className="mx-auto flex items-center gap-1.5 px-4 py-0.5 rounded bg-black/40 border border-white/20">
                                            <Lock className="w-2.5 h-2.5 text-gray-400" />
                                            <span className="text-[10px] font-medium text-gray-300 tracking-tight">internal-tools.secure</span>
                                        </div>
                                    </div>

                                    {/* Screenshot */}
                                    <div className="relative overflow-hidden bg-black/20" style={{ aspectRatio: '16/10' }}>
                                        <img
                                            src={tool.image}
                                            alt={tool.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            style={{ aspectRatio: '16/10' }}
                                            loading="lazy"
                                        />
                                        {/* Hover overlay - updated with your colors */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#ff7e4d]/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                        {/* Name chip overlay - better visibility */}
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-sm border border-[#ff9f7a]/40 text-[#ff9f7a] drop-shadow-md">
                                                <Icon className="w-3 h-3" />
                                                {tool.badge}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content - improved text contrast */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-start gap-4 mb-5">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br from-[#ff7e4d] to-[#e04d1a] shadow-xl shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-[#ff9f7a] uppercase tracking-widest mb-1 drop-shadow-md">{tool.name}</div>
                                                <h3 className="text-xl font-black text-white tracking-tight drop-shadow-md">{tool.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 font-medium">
                                            {tool.description}
                                        </p>

                                        {/* Info Chips - better visibility */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/20 text-gray-300 uppercase tracking-wide">Cloud Ready</span>
                                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/20 text-gray-300 uppercase tracking-wide">Real-time Sync</span>
                                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/20 text-gray-300 uppercase tracking-wide">Module V.2</span>
                                        </div>

                                        <a href={tool.link} target="_blank" rel="noopener noreferrer" className="block outline-none mt-auto">
                                            <Button className={`w-full h-12 bg-gradient-to-r from-[#ff7e4d] to-[#e04d1a] hover:from-[#ff8e5f] hover:to-[#f0551f] text-white border-0 shadow-xl shadow-[#ff7e4d]/30 rounded-xl font-bold uppercase tracking-widest text-xs overflow-hidden relative group/btn transition-all duration-300`}>
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    Access System <ExternalLink className="w-4 h-4" />
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
