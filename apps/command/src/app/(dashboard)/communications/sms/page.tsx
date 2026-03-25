"use client";

import { motion } from "framer-motion";
import { Radio, ArrowLeft, Send, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const templates = [
  { id: 1, name: "Voter Registration Reminder", sent: 45000 },
  { id: 2, name: "Event Reminder", sent: 28000 },
  { id: 3, name: "Polling Unit Alert", sent: 16420 },
];

export default function SMSPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        <Link href="/communications">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="size-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-headline-md text-on-surface">SMS Center</h1>
          <p className="text-sm text-on-surface-variant">Send SMS to voters and track delivery</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="md:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Compose SMS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <textarea
                className="w-full h-32 p-3 rounded-lg border border-outline-variant/30 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                placeholder="Enter your message (160 chars max)..."
                maxLength={160}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">0/160 characters</span>
                <div className="flex gap-3">
                  <Button variant="outline">Select Recipients</Button>
                  <Button className="gap-2">
                    <Send className="size-4" />
                    Send SMS
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>SMS Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Messages Sent</span>
                <span className="font-semibold text-on-surface">89,420</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Delivered</span>
                <span className="font-semibold text-sentiment-positive">86,250 (96%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Failed</span>
                <span className="font-semibold text-error">3,170 (4%)</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>SMS Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                      <MessageSquare className="size-5 text-tertiary" />
                    </div>
                    <span className="font-medium text-on-surface">{template.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-on-surface-variant">{template.sent.toLocaleString()} sent</span>
                    <Button variant="ghost" size="sm">Use</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
