import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new organization during onboarding
export const createOrganization = mutation({
    args: {
        clerkOrgId: v.string(),
        name: v.string(),
        subdomain: v.string(),
        brandColor: v.string(),
        tradingPlatform: v.string(),
    },
    handler: async (ctx, args) => {
        const orgId = await ctx.db.insert("organizations", {
            clerkOrgId: args.clerkOrgId,
            name: args.name,
            subdomain: args.subdomain,
            brandColor: args.brandColor,
            tradingPlatform: args.tradingPlatform,
            createdAt: Date.now(),
        });
        return orgId;
    },
});

// Create default risk rules for an organization
export const createRiskRules = mutation({
    args: {
        orgId: v.string(),
        dailyLossLimit: v.number(),
        maxDrawdown: v.number(),
        allowWeekendHolding: v.boolean(),
        allowNewsTrading: v.boolean(),
    },
    handler: async (ctx, args) => {
        const ruleId = await ctx.db.insert("riskRules", {
            orgId: args.orgId,
            dailyLossLimit: args.dailyLossLimit,
            maxDrawdown: args.maxDrawdown,
            allowWeekendHolding: args.allowWeekendHolding,
            allowNewsTrading: args.allowNewsTrading,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });
        return ruleId;
    },
});

// Sync Clerk user to Convex database
export const syncUser = mutation({
    args: {
        clerkId: v.string(),
        email: v.string(),
        name: v.optional(v.string()),
        role: v.union(v.literal("admin"), v.literal("trader")),
        orgId: v.string(),
    },
    handler: async (ctx, args) => {
        // Check if user already exists
        const existing = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
            .first();

        if (existing) {
            // Update existing user
            await ctx.db.patch(existing._id, {
                email: args.email,
                name: args.name,
                role: args.role,
                orgId: args.orgId,
            });
            return existing._id;
        }

        // Create new user
        const userId = await ctx.db.insert("users", {
            clerkId: args.clerkId,
            email: args.email,
            name: args.name,
            role: args.role,
            orgId: args.orgId,
            createdAt: Date.now(),
        });
        return userId;
    },
});

// Get organization by subdomain
export const getOrganizationBySubdomain = query({
    args: { subdomain: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("organizations")
            .withIndex("by_subdomain", (q) => q.eq("subdomain", args.subdomain))
            .first();
    },
});

// Get organization by Clerk org ID
export const getOrganizationByClerkId = query({
    args: { clerkOrgId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("organizations")
            .withIndex("by_clerkOrgId", (q) => q.eq("clerkOrgId", args.clerkOrgId))
            .first();
    },
});

// Get risk rules for an organization
export const getRiskRules = query({
    args: { orgId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("riskRules")
            .withIndex("by_orgId", (q) => q.eq("orgId", args.orgId))
            .first();
    },
});

// Get all users in an organization
export const getUsersByOrg = query({
    args: { orgId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("users")
            .withIndex("by_orgId", (q) => q.eq("orgId", args.orgId))
            .collect();
    },
});

// Get risk events for an organization (unresolved only)
export const getUnresolvedRiskEvents = query({
    args: { orgId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("riskEvents")
            .withIndex("by_orgId_resolved", (q) =>
                q.eq("orgId", args.orgId).eq("resolved", false)
            )
            .collect();
    },
});
