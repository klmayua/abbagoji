"use client";

import { motion } from "framer-motion";
import { MessageSquare, Filter, Download, Plus, Search, Phone, MessageCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const interactions = [
  { id: 1, voter: "Ibrahim Abdullahi", type: "phone", outcome: "positive", time: "2 min ago", lga: "Damaturu", agent: "Ahmed Ali" },
  { id: 2, voter: "Fatima Mohammed", type: "visit", outcome: "positive", time: "15 min ago", lga: "Gujba", agent: "Hassan Yusuf" },
  { id: 3, voter: "Musa Yusuf", type: "message", outcome: "neutral", time: "32 min ago", lga: "Damaturu", agent: "Ahmed Ali" },
  { id: 4, voter: "Amina Hassan", type: "phone", outcome: "positive", time: "1 hr ago", lga: "Gulani", agent: "Maryam Isa" },
  { id: 5, voter: "Abubakar Suleiman", type: "visit", outcome: "negative", time: "2 hr ago", lga: "Gujba", agent: "Hassan Yusuf" },
];

const typeIcons = {
  phone: Phone,
  message: MessageCircle,
  visit: Home,
};

const outcomeColors = {
  positive: "bg-sentiment-positive/10 text-sentiment-positive",
  neutral: "bg-warning/10 text-warning",
  negative: "bg-error/10 text-error",
};

export default function InteractionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-headline-md text-on-surface">Interactions Log</h1>
          <p className="text-sm text-on-surface-variant">Track all voter contacts and engagements</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="size-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="size-4" />
            Log Interaction
          </Button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Interactions", value: "24,580", icon: MessageSquare },
          { label: "Today", value: "1,247", icon: MessageSquare },
          { label: "Positive", value: "18,420", icon: MessageSquare },
          { label: "Conversion Rate", value: "75%", icon: MessageSquare },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-on-surface-variant mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="size-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant" />
          <Input
            type="search"
            placeholder="Search interactions..."
            className="pl-10 bg-surface-container-low"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="size-4" />
          Filters
        </Button>
      </motion.div>

      {/* Interactions List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="space-y-3"
      >
        {interactions.map((interaction) => {
          const TypeIcon = typeIcons[interaction.type as keyof typeof typeIcons];
          return (
            <Card key={interaction.id} className="hover:bg-surface-container transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {interaction.voter.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-on-surface truncate">{interaction.voter}</p>
                    <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <TypeIcon className="size-3" />
                      <span className="capitalize">{interaction.type}</span>
                      <span>•</span>
                      <span>{interaction.lga}</span>
                      <span>•</span>
                      <span>{interaction.agent}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge className={outcomeColors[interaction.outcome as keyof typeof outcomeColors]}>
                      {interaction.outcome}
                    </Badge>
                    <p className="text-xs text-on-surface-variant mt-1">{interaction.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>
    </div>
  );
}
