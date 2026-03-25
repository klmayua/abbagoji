"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SentimentAnalysisPage() {
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
          <h1 className="text-headline-md text-on-surface">Sentiment Analysis</h1>
          <p className="text-sm text-on-surface-variant">Track voter sentiment across Zone B</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Positive", value: "45%", change: "+5%", color: "text-sentiment-positive" },
          { label: "Neutral", value: "35%", change: "-2%", color: "text-warning" },
          { label: "Negative", value: "20%", change: "-3%", color: "text-error" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-sm text-on-surface-variant mb-2">{item.label}</p>
                <p className={`text-4xl font-bold ${item.color}`}>{item.value}</p>
                <p className="text-sm text-on-surface-variant mt-2">{item.change} this week</p>
              </CardContent>
            </Card>
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
            <CardTitle>Sentiment Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="size-12 mx-auto mb-4 text-on-surface-variant/50" />
              <p className="text-on-surface-variant">Sentiment trend chart would be displayed here</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
