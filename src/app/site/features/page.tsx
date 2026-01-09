import Link from "next/link";
import { ShieldAlert, Server, CreditCard, LayoutDashboard } from "lucide-react";

export default function FeaturesPage() {
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
                                className="text-xs font-semibold uppercase tracking-wider text-prz-accent transition-colors"
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

            {/* Features Content */}
            <main className="pt-16">
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">Features</h2>
                            <p className="text-slate-600">Everything needed to run a prop firm.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 border border-slate-200 rounded-xl hover:border-prz-accent transition-colors">
                                <ShieldAlert className="w-8 h-8 text-prz-blue mb-4" />
                                <h3 className="font-semibold text-slate-900 mb-2">Risk Engine</h3>
                                <p className="text-sm text-slate-600">
                                    Automated drawdown monitoring with real-time alerts and liquidation triggers.
                                </p>
                            </div>
                            <div className="p-6 border border-slate-200 rounded-xl hover:border-prz-accent transition-colors">
                                <Server className="w-8 h-8 text-prz-blue mb-4" />
                                <h3 className="font-semibold text-slate-900 mb-2">Multi-Broker</h3>
                                <p className="text-sm text-slate-600">
                                    Connect MT4, MT5, and cTrader simultaneously to diversify your offerings.
                                </p>
                            </div>
                            <div className="p-6 border border-slate-200 rounded-xl hover:border-prz-accent transition-colors">
                                <CreditCard className="w-8 h-8 text-prz-blue mb-4" />
                                <h3 className="font-semibold text-slate-900 mb-2">Billing</h3>
                                <p className="text-sm text-slate-600">
                                    Built-in checkout with support for crypto payments and global currencies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
