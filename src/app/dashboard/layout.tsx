"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import {
    LayoutDashboard,
    Home,
    BarChart2,
    Users,
    Target,
    AlertTriangle,
    Wallet,
    Receipt,
    LogOut,
} from "lucide-react";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const NAV_ITEMS = [
    { title: "Overview", icon: Home, href: "/dashboard" },
    { title: "Analytics", icon: BarChart2, href: "/dashboard/analytics" },
];

const MANAGEMENT_ITEMS = [
    { title: "Traders", icon: Users, href: "/dashboard/traders" },
    { title: "Challenges", icon: Target, href: "/dashboard/challenges" },
    { title: "Risk Events", icon: AlertTriangle, href: "/dashboard/risk", badge: 3 },
];

const FINANCE_ITEMS = [
    { title: "Payouts", icon: Wallet, href: "/dashboard/payouts" },
    { title: "Invoices", icon: Receipt, href: "/dashboard/invoices" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const pathname = usePathname();

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col hidden md:flex z-20">
                <div className="h-16 flex items-center px-6 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-prz-blue rounded text-white flex items-center justify-center">
                            <LayoutDashboard className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-slate-900 tracking-tight">Apex Funding</span>
                    </div>
                </div>

                <div className="p-4 space-y-1 flex-1 overflow-y-auto no-scrollbar">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2 mt-2">
                        Overview
                    </div>
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? "bg-slate-100 text-prz-blue"
                                        : "text-slate-600 hover:bg-slate-50 group"
                                    }`}
                            >
                                <item.icon className={`w-4 h-4 ${!isActive && "group-hover:text-prz-accent"}`} />
                                {item.title}
                            </Link>
                        );
                    })}

                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2 mt-6">
                        Management
                    </div>
                    {MANAGEMENT_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? "bg-slate-100 text-prz-blue"
                                        : "text-slate-600 hover:bg-slate-50 group"
                                    }`}
                            >
                                <item.icon className={`w-4 h-4 ${!isActive && "group-hover:text-prz-accent"}`} />
                                {item.title}
                                {item.badge && (
                                    <span className="ml-auto bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        );
                    })}

                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2 mt-6">
                        Finance
                    </div>
                    {FINANCE_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? "bg-slate-100 text-prz-blue"
                                        : "text-slate-600 hover:bg-slate-50 group"
                                    }`}
                            >
                                <item.icon className={`w-4 h-4 ${!isActive && "group-hover:text-prz-accent"}`} />
                                {item.title}
                            </Link>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-slate-100">
                    <Link
                        href="/site"
                        className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Topbar */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center text-sm text-slate-500">
                        <span className="hidden md:inline">Dashboard</span>
                        <span className="hidden md:inline mx-2">/</span>
                        <span className="font-medium text-slate-900">Overview</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-8 h-8",
                                },
                            }}
                        />
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}
