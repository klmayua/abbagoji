"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IntelSentimentPage() {
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
          <h1 className="text-headline-md text-on-surface">Sentiment Tracking</h1>
          <p className="text-sm text-on-surface-variant">Track public sentiment trends</p>
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
              <TrendingUp className="size-5 text-primary" />
              Sentiment Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Positive", value: "45%", color: "text-sentiment-positive" },
                { label: "Neutral", value: "35%", color: "text-warning" },
                { label: "Negative", value: "20%", color: "text-error" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 bg-surface-container-low rounded-lg">
                  <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
                  <p className="text-sm text-on-surface-variant">{item.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
