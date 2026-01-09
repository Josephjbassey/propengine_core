import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/admin(.*)",
    "/onboarding(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    const url = req.nextUrl;
    const hostname = req.headers.get("host") || "";

    // 1. Enforce Authentication on protected routes
    if (isProtectedRoute(req)) {
        await auth.protect();
    }

    // 2. Subdomain Routing Logic
    // Extract subdomain (handles both localhost.test and production domains)
    const subdomain = hostname.split(".")[0];

    // Admin subdomain routing
    if (subdomain === "admin" || hostname.startsWith("admin.")) {
        return NextResponse.rewrite(new URL(`/admin${url.pathname}`, req.url));
    }

    // App subdomain routing (trader dashboard)
    if (subdomain === "app" || hostname.startsWith("app.")) {
        return NextResponse.rewrite(new URL(`/dashboard${url.pathname}`, req.url));
    }

    // Default to Main Site folder (marketing)
    // Only rewrite if not already on /site path to avoid infinite loops
    if (!url.pathname.startsWith("/site") && !url.pathname.startsWith("/_next")) {
        return NextResponse.rewrite(new URL(`/site${url.pathname}`, req.url));
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
