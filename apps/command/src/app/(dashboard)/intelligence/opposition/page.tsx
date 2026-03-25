"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const activities = [
  { id: 1, type: "Rally", location: "Damaturu", date: "Mar 20, 2026", impact: "medium" },
  { id: 2, type: "Campaign", location: "Gujba", date: "Mar 18, 2026", impact: "low" },
  { id: 3, type: "Press Release", location: "Statewide", date: "Mar 15, 2026", impact: "high" },
];

const impactColors = {
  high: "bg-error/10 text-error",
  medium: "bg-warning/10 text-warning",
  low: "bg-surface-container text-on-surface-variant",
};

export default function OppositionPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        <Link href="/intelligence">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="size-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-headline-md text-on-surface">Opposition Research</h1>
          <p className="text-sm text-on-surface-variant">Monitor opposition activities</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="size-5 text-warning" />
              Recent Opposition Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg"
                >
                  <div>
                    <p className="font-medium text-on-surface">{activity.type}</p>
                    <p className="text-sm text-on-surface-variant">{activity.location} • {activity.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${impactColors[activity.impact as keyof typeof impactColors]}`}>
                    {activity.impact} impact
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
