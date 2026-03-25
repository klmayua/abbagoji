"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowLeft, TrendingUp, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const metrics = [
  { title: "Voter Contact Goal", current: 85420, target: 150000, unit: "voters" },
  { title: "Event Attendance", current: 12500, target: 20000, unit: "attendees" },
  { title: "Volunteer Signups", current: 2847, target: 5000, unit: "volunteers" },
];

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        <Link href="/analytics">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="size-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-headline-md text-on-surface">Performance Metrics</h1>
          <p className="text-sm text-on-surface-variant">Campaign performance tracking</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const progress = (metric.current / metric.target) * 100;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-on-surface-variant">{metric.title}</p>
                      <p className="text-2xl font-bold text-on-surface mt-1">
                        {metric.current.toLocaleString()}
                        <span className="text-sm font-normal text-on-surface-variant">
                          {" "}
                          / {metric.target.toLocaleString()} {metric.unit}
                        </span>
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="size-5 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-on-surface-variant">{progress.toFixed(1)}% complete</span>
                      <span className="text-sm font-medium text-primary">
                        {(metric.target - metric.current).toLocaleString()} remaining
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="size-12 mx-auto mb-4 text-on-surface-variant/50" />
              <p className="text-on-surface-variant">Performance chart would be displayed here</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
