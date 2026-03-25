"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft, Send, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const templates = [
  { id: 1, name: "Welcome Message", sent: 5000 },
  { id: 2, name: "Event Invitation", sent: 3200 },
  { id: 3, name: "Polling Unit Info", sent: 4100 },
];

export default function WhatsAppPage() {
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
          <h1 className="text-headline-md text-on-surface">WhatsApp Center</h1>
          <p className="text-sm text-on-surface-variant">Manage WhatsApp campaigns and broadcasts</p>
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
              <CardTitle>Send Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter message..." />
              <div className="flex gap-3">
                <Button className="gap-2">
                  <Send className="size-4" />
                  Send Broadcast
                </Button>
                <Button variant="outline">Select Recipients</Button>
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
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Messages Sent</span>
                <span className="font-semibold text-on-surface">12,450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Delivered</span>
                <span className="font-semibold text-sentiment-positive">12,200 (98%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Read</span>
                <span className="font-semibold text-on-surface">9,840 (79%)</span>
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
            <CardTitle>Message Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="size-5 text-primary" />
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
