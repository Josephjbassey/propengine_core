import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <Link
                        href="/site"
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-prz-blue text-white mb-4 cursor-pointer hover:bg-slate-800 transition-colors"
                    >
                        <LayoutDashboard className="w-6 h-6" />
                    </Link>
                    <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
                    <p className="text-sm text-slate-500 mt-2">
                        Enter your credentials to access the admin portal.
                    </p>
                </div>

                <SignIn
                    appearance={{
                        elements: {
                            rootBox: "mx-auto",
                            card: "bg-white shadow-xl rounded-2xl border border-slate-200",
                        },
                    }}
                    afterSignInUrl="/onboarding"
                    signUpUrl="/sign-up"
                />

                <div className="mt-6 text-center text-sm text-slate-500">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/sign-up"
                        className="text-prz-accent font-medium hover:underline"
                    >
                        Start Free Trial
                    </Link>
                </div>
            </div>
        </div>
    );
}
