import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// PropEngine Core Database Schema
export default defineSchema({
    // Organizations table - Each prop firm is an organization
    organizations: defineTable({
        clerkOrgId: v.string(),
        name: v.string(),
        subdomain: v.string(),
        brandColor: v.string(),
        tradingPlatform: v.string(), // "MT5" | "cTrader" | "DXtrade"
        createdAt: v.number(),
    })
        .index("by_clerkOrgId", ["clerkOrgId"])
        .index("by_subdomain", ["subdomain"]),

    // Users table - Traders and admins
    users: defineTable({
        clerkId: v.string(),
        email: v.string(),
        name: v.optional(v.string()),
        role: v.union(v.literal("admin"), v.literal("trader")),
        orgId: v.string(), // Foreign key to organizations(clerkOrgId)
        createdAt: v.number(),
    })
        .index("by_clerkId", ["clerkId"])
        .index("by_orgId", ["orgId"])
        .index("by_orgId_role", ["orgId", "role"]),

    // Risk Rules - Per-organization risk parameters
    riskRules: defineTable({
        orgId: v.string(),
        dailyLossLimit: v.number(), // Percentage (e.g., 5.0 for 5%)
        maxDrawdown: v.number(), // Percentage (e.g., 10.0 for 10%)
        allowWeekendHolding: v.boolean(),
        allowNewsTrading: v.boolean(),
        createdAt: v.number(),
        updatedAt: v.number(),
    }).index("by_orgId", ["orgId"]),

    // Trades table - All trading activity
    trades: defineTable({
        orgId: v.string(),
        traderId: v.string(), // Foreign key to users(clerkId)
        symbol: v.string(),
        side: v.union(v.literal("buy"), v.literal("sell")),
        quantity: v.number(),
        entryPrice: v.number(),
        exitPrice: v.optional(v.number()),
        pnl: v.number(),
        status: v.union(v.literal("OPEN"), v.literal("CLOSED"), v.literal("PENDING")),
        timestamp: v.number(),
        closedAt: v.optional(v.number()),
    })
        .index("by_orgId", ["orgId"])
        .index("by_traderId", ["traderId"])
        .index("by_orgId_traderId", ["orgId", "traderId"])
        .index("by_status", ["status"]),

    // Risk Metrics - Real-time risk monitoring per trader
    riskMetrics: defineTable({
        orgId: v.string(),
        traderId: v.string(),
        currentEquity: v.number(),
        startOfDayBalance: v.number(),
        dailyPnL: v.number(),
        dailyPnLPercent: v.number(),
        maxDrawdown: v.number(),
        currentDrawdown: v.number(),
        status: v.union(
            v.literal("healthy"),
            v.literal("warning"),
            v.literal("breached")
        ),
        lastUpdated: v.number(),
    })
        .index("by_orgId", ["orgId"])
        .index("by_traderId", ["traderId"])
        .index("by_status", ["status"])
        .index("by_orgId_status", ["orgId", "status"]),

    // Risk Events - Log of all risk violations
    riskEvents: defineTable({
        orgId: v.string(),
        traderId: v.string(),
        eventType: v.union(
            v.literal("DAILY_LOSS_LIMIT"),
            v.literal("MAX_DRAWDOWN"),
            v.literal("NEWS_TRADING_VIOLATION"),
            v.literal("WEEKEND_HOLDING_VIOLATION")
        ),
        severity: v.union(v.literal("warning"), v.literal("critical")),
        description: v.string(),
        metadata: v.optional(v.any()),
        resolved: v.boolean(),
        timestamp: v.number(),
    })
        .index("by_orgId", ["orgId"])
        .index("by_traderId", ["traderId"])
        .index("by_resolved", ["resolved"])
        .index("by_orgId_resolved", ["orgId", "resolved"]),
});
