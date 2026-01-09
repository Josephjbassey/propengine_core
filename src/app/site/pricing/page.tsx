import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 glass-panel border-b border-prz-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/site" className="flex-shrink-0 flex items-center gap-2">
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
                                className="text-xs font-semibold uppercase tracking-wider text-prz-accent transition-colors"
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

            {/* Pricing Content */}
            <main className="pt-16">
                <section className="py-24 bg-slate-50 min-h-screen">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12">Simple Pricing</h2>
                        <div className="flex justify-center">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-sm w-full">
                                <h3 className="text-xl font-semibold text-slate-900">Launch</h3>
                                <div className="my-4">
                                    <span className="text-4xl font-bold">$299</span>
                                    <span className="text-slate-500">/mo</span>
                                </div>
                                <Link
                                    href="/sign-up"
                                    className="w-full inline-block py-2 bg-prz-blue text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                                >
                                    Start Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
