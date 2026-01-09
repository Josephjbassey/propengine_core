import Link from "next/link";
import { ChevronRight, LayoutDashboard } from "lucide-react";

export default function MarketingHomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 glass-panel border-b border-prz-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                            <div className="w-8 h-8 bg-prz-blue rounded-lg flex items-center justify-center text-white shadow-md">
                                <LayoutDashboard className="w-5 h-5" />
                            </div>
                            <span className="text-prz-blue text-lg font-bold tracking-tight">
                                PropEngine Core
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-8">
                            <Link
                                href="/site"
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-prz-accent transition-colors"
                            >
                                Overview
                            </Link>
                            <Link
                                href="/site/features"
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-prz-accent transition-colors"
                            >
                                Features
                            </Link>
                            <Link
                                href="/site/pricing"
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-prz-accent transition-colors"
                            >
                                Pricing
                            </Link>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link
                                href="/sign-in"
                                className="hidden md:inline-flex text-sm font-medium text-slate-600 hover:text-prz-blue"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/sign-up"
                                className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-prz-blue hover:bg-slate-800 transition-all shadow-sm"
                            >
                                Start Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="pt-16">
                <section className="lg:pt-32 lg:pb-32 overflow-hidden border-b border-slate-200 pt-20 pb-20 relative">
                    <div className="absolute inset-0 hero-pattern -z-10"></div>
                    <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-prz-accent/5 rounded-full blur-3xl opacity-50"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-prz-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-prz-accent"></span>
                            </span>
                            v3.0 Released: Integrated cTrader Support
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                            The Operating System for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-prz-blue to-prz-accent">
                                Modern Prop Firms.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Launch your white-label prop firm in days. Automate challenges, manage risk,
                            and process payouts from a single dashboard.
                        </p>

                        <div className="flex justify-center gap-4">
                            <Link
                                href="/sign-up"
                                className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium rounded-lg text-white bg-prz-blue hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Start Building
                                <ChevronRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link
                                href="/site/pricing"
                                className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium rounded-lg text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="py-10 border-b border-slate-100 bg-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
                            Powering 500+ Firms Globally
                        </p>
                        <div className="flex justify-center gap-12 opacity-40 grayscale items-center flex-wrap">
                            <span className="text-xl font-bold font-serif">AlphaCapital</span>
                            <span className="text-xl font-bold italic">NextGen</span>
                            <span className="text-xl font-bold tracking-tighter">TRADERIFY</span>
                            <span className="text-xl font-bold">BlueEdge</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
