"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { LayoutDashboard, ArrowLeft, CheckCircle2 } from "lucide-react";

const BRAND_COLORS = [
    { name: "Blue", value: "#3B82F6" },
    { name: "Emerald", value: "#10B981" },
    { name: "Indigo", value: "#6366F1" },
    { name: "Slate", value: "#0F172A" },
];

const TRADING_PLATFORMS = [
    {
        id: "mt5",
        name: "MetaTrader 5",
        shortName: "MT5",
        description: "The industry standard. Best for forex and commodities.",
        color: "green",
    },
    {
        id: "ctrader",
        name: "cTrader",
        shortName: "CT",
        description: "Modern interface favored by newer retail traders.",
        color: "blue",
    },
    {
        id: "dxtrade",
        name: "DXtrade",
        shortName: "DX",
        description: "Web-based platform with growing popularity.",
        color: "purple",
    },
];

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);

    // Step 1: Firm Identity
    const [firmName, setFirmName] = useState("");
    const [subdomain, setSubdomain] = useState("");
    const [brandColor, setBrandColor] = useState(BRAND_COLORS[0].value);

    // Step 2: Trading Platform
    const [selectedPlatform, setSelectedPlatform] = useState("mt5");

    // Step 3: Risk Rules
    const [dailyLossLimit, setDailyLossLimit] = useState(5.0);
    const [maxDrawdown, setMaxDrawdown] = useState(10.0);
    const [allowWeekendHolding, setAllowWeekendHolding] = useState(false);
    const [allowNewsTrading, setAllowNewsTrading] = useState(false);

    const progressPercentage = (step / 3) * 100;

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleComplete = async () => {
        // TODO: Create organization and save data to Convex
        // For now, redirect to dashboard
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Minimal Header */}
            <div className="h-16 bg-white border-b border-slate-200 flex items-center px-8">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-prz-blue rounded text-white flex items-center justify-center">
                        <LayoutDashboard className="w-3 h-3" />
                    </div>
                    <span className="font-bold text-slate-900">Setup Wizard</span>
                </div>
                <div className="ml-auto text-sm text-slate-500">
                    Step {step} of 3
                </div>
            </div>

            <div className="flex-1 max-w-4xl w-full mx-auto p-8">
                {/* Progress Bar */}
                <div className="w-full bg-slate-200 h-1.5 rounded-full mb-10">
                    <div
                        className="bg-prz-accent h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>

                {/* Step 1: Firm Identity */}
                {step === 1 && (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 fade-in">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Firm Identity</h2>
                        <p className="text-slate-500 mb-8">Let&apos;s set up your white-label branding.</p>

                        <div className="space-y-6 max-w-lg">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                                    Firm Name
                                </label>
                                <input
                                    type="text"
                                    value={firmName}
                                    onChange={(e) => setFirmName(e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-prz-accent/20 focus:border-prz-accent transition-all"
                                    placeholder="Ex: Apex Funding"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                                    Subdomain
                                </label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        value={subdomain}
                                        onChange={(e) => setSubdomain(e.target.value.toLowerCase())}
                                        className="flex-1 px-3 py-2 border border-r-0 border-slate-300 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-prz-accent/20 focus:border-prz-accent transition-all"
                                        placeholder="apex"
                                    />
                                    <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-slate-300 bg-slate-50 text-gray-500 text-sm">
                                        .propengine.io
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                                    Brand Color
                                </label>
                                <div className="flex gap-3">
                                    {BRAND_COLORS.map((color) => (
                                        <button
                                            key={color.value}
                                            onClick={() => setBrandColor(color.value)}
                                            className={`w-8 h-8 rounded-full transition-all ${brandColor === color.value
                                                    ? "ring-2 ring-offset-2"
                                                    : "hover:ring-2 hover:ring-offset-2"
                                                }`}
                                            style={{
                                                backgroundColor: color.value,
                                                ringColor: color.value,
                                            }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={handleNext}
                                disabled={!firmName || !subdomain}
                                className="px-6 py-2.5 bg-prz-blue text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Trading Platform */}
                {step === 2 && (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 fade-in">
                        <div className="flex items-center mb-2">
                            <button
                                onClick={handleBack}
                                className="mr-4 text-slate-400 hover:text-slate-600"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <h2 className="text-2xl font-bold text-slate-900">Trading Platform</h2>
                        </div>
                        <p className="text-slate-500 mb-8 ml-9">
                            Select the technology your traders will use.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            {TRADING_PLATFORMS.map((platform) => (
                                <label key={platform.id} className="relative cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="platform"
                                        value={platform.id}
                                        checked={selectedPlatform === platform.id}
                                        onChange={(e) => setSelectedPlatform(e.target.value)}
                                        className="peer sr-only"
                                    />
                                    <div className="p-4 rounded-xl border-2 border-slate-200 peer-checked:border-prz-accent peer-checked:bg-blue-50/50 transition-all hover:border-slate-300 h-full">
                                        <div
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm mb-3 ${platform.color === "green"
                                                    ? "bg-green-100 text-green-700"
                                                    : platform.color === "blue"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-purple-100 text-purple-700"
                                                }`}
                                        >
                                            {platform.shortName}
                                        </div>
                                        <h3 className="font-semibold text-slate-900">{platform.name}</h3>
                                        <p className="text-xs text-slate-500 mt-1">{platform.description}</p>
                                    </div>
                                    <div className="absolute top-4 right-4 text-prz-accent opacity-0 peer-checked:opacity-100 transition-opacity">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                </label>
                            ))}
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={handleNext}
                                className="px-6 py-2.5 bg-prz-blue text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Risk Rules */}
                {step === 3 && (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 fade-in">
                        <div className="flex items-center mb-2">
                            <button
                                onClick={handleBack}
                                className="mr-4 text-slate-400 hover:text-slate-600"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <h2 className="text-2xl font-bold text-slate-900">Default Rules</h2>
                        </div>
                        <p className="text-slate-500 mb-8 ml-9">Set global risk parameters.</p>

                        <div className="space-y-6 max-w-lg ml-9">
                            <div>
                                <div className="flex justify-between mb-1.5">
                                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                                        Daily Loss Limit (%)
                                    </label>
                                    <span className="text-xs font-mono text-slate-500">
                                        {dailyLossLimit.toFixed(1)}%
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    step="0.5"
                                    value={dailyLossLimit}
                                    onChange={(e) => setDailyLossLimit(parseFloat(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-prz-blue"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between mb-1.5">
                                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                                        Max Trailing Drawdown (%)
                                    </label>
                                    <span className="text-xs font-mono text-slate-500">
                                        {maxDrawdown.toFixed(1)}%
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="20"
                                    step="0.5"
                                    value={maxDrawdown}
                                    onChange={(e) => setMaxDrawdown(parseFloat(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-prz-blue"
                                />
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={allowWeekendHolding}
                                        onChange={(e) => setAllowWeekendHolding(e.target.checked)}
                                        className="w-5 h-5 text-prz-blue border-slate-300 rounded focus:ring-prz-blue"
                                    />
                                    <span className="text-sm text-slate-700">Allow Weekend Holding</span>
                                </label>
                            </div>

                            <div>
                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={allowNewsTrading}
                                        onChange={(e) => setAllowNewsTrading(e.target.checked)}
                                        className="w-5 h-5 text-prz-blue border-slate-300 rounded focus:ring-prz-blue"
                                    />
                                    <span className="text-sm text-slate-700">Allow News Trading</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={handleComplete}
                                className="px-6 py-2.5 bg-prz-green text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                            >
                                Launch Dashboard
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
