"use client";

import { Users, DollarSign, AlertTriangle, TrendingUp } from "lucide-react";

export default function DashboardPage() {
    // TODO: Fetch real data from Convex
    const stats = {
        activeTraders: 127,
        totalAUM: 2450000,
        pendingPayouts: 12,
        riskEvents: 3,
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Users className="w-5 h-5 text-prz-accent" />
                        </div>
                        <span className="text-xs font-semibold text-green-600">+12%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{stats.activeTraders}</h3>
                    <p className="text-sm text-slate-500 mt-1">Active Traders</p>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-emerald-50 rounded-lg">
                            <DollarSign className="w-5 h-5 text-prz-green" />
                        </div>
                        <span className="text-xs font-semibold text-green-600">+8%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                        ${(stats.totalAUM / 1000000).toFixed(2)}M
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Total AUM</p>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-amber-50 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-xs font-semibold text-slate-400">Pending</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{stats.pendingPayouts}</h3>
                    <p className="text-sm text-slate-500 mt-1">Pending Payouts</p>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-red-50 rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-prz-red" />
                        </div>
                        <span className="text-xs font-semibold text-red-600">Active</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{stats.riskEvents}</h3>
                    <p className="text-sm text-slate-500 mt-1">Risk Events</p>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                <Users className="w-5 h-5 text-slate-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-900">New trader registered</p>
                                <p className="text-xs text-slate-500">John Doe - 2 hours ago</p>
                            </div>
                        </div>
                        <span className="text-xs text-slate-400">Today</span>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-900">Payout processed</p>
                                <p className="text-xs text-slate-500">$5,000 to Trader #1234</p>
                            </div>
                        </div>
                        <span className="text-xs text-slate-400">Yesterday</span>
                    </div>

                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-900">Risk event triggered</p>
                                <p className="text-xs text-slate-500">Daily loss limit exceeded - Trader #5678</p>
                            </div>
                        </div>
                        <span className="text-xs text-slate-400">2 days ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
