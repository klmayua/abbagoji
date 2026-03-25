"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const analyticsLinks = [
  { title: "Sentiment Analysis", href: "/analytics/sentiment", icon: TrendingUp, desc: "Track voter sentiment trends" },
  { title: "Demographics", href: "/analytics/demographics", icon: Users, desc: "Voter demographics breakdown" },
  { title: "Performance", href: "/analytics/performance", icon: Calendar, desc: "Campaign performance metrics" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-headline-md text-on-surface">Analytics Overview</h1>
        <p className="text-sm text-on-surface-variant">Campaign analytics and insights</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {analyticsLinks.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={link.href}>
              <Card className="h-full hover:bg-surface-container transition-colors cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="size-6 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-on-surface mb-2">{link.title}</h2>
                  <p className="text-sm text-on-surface-variant">{link.desc}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Reach", value: "156K" },
                { label: "Engagement", value: "68%" },
                { label: "Conversion", value: "42%" },
                { label: "Growth", value: "+12%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-surface-container-low rounded-lg">
                  <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
                  <p className="text-sm text-on-surface-variant">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
