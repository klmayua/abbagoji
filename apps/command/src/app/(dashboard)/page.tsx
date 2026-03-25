"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Star, TrendingUp, Activity, MapPin } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { ZoneMapPreview } from "@/components/dashboard/ZoneMapPreview";
import { RecentInteractions } from "@/components/dashboard/RecentInteractions";
import { SentimentDistribution } from "@/components/dashboard/SentimentDistribution";

const metrics = [
  {
    title: "Total Voters",
    value: "200,000",
    trend: 12,
    trendLabel: "from last week",
    icon: Users,
    color: "primary" as const,
  },
  {
    title: "Contacted Today",
    value: "1,247",
    trend: 5,
    trendLabel: "today",
    icon: MessageSquare,
    color: "secondary" as const,
  },
  {
    title: "Anchor Citizens",
    value: "2,847",
    trend: 23,
    trendLabel: "new this week",
    icon: Star,
    color: "tertiary" as const,
  },
  {
    title: "Sentiment Score",
    value: "+12%",
    trend: 2.3,
    trendLabel: "improvement",
    icon: TrendingUp,
    color: "success" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-headline-lg text-on-surface">Dashboard</h1>
          <p className="text-sm text-on-surface-variant">
            Last updated: {new Date().toLocaleTimeString()} • Live data
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-sm text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-sentiment-positive animate-pulse" />
            Live
          </span>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {metrics.map((metric) => (
          <motion.div key={metric.title} variants={itemVariants}>
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <ActivityChart />
        </motion.div>

        {/* Map Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <ZoneMapPreview />
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <RecentInteractions />
        </motion.div>

        {/* Sentiment Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <SentimentDistribution />
        </motion.div>
      </div>
    </div>
  );
}
