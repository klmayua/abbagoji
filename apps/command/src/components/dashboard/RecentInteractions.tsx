"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, MessageCircle, Home } from "lucide-react";
import Link from "next/link";

const interactions = [
  {
    id: 1,
    voter: "Ibrahim Abdullahi",
    type: "phone",
    outcome: "positive",
    time: "2 min ago",
    lga: "Damaturu",
  },
  {
    id: 2,
    voter: "Fatima Mohammed",
    type: "visit",
    outcome: "positive",
    time: "15 min ago",
    lga: "Gujba",
  },
  {
    id: 3,
    voter: "Musa Yusuf",
    type: "message",
    outcome: "neutral",
    time: "32 min ago",
    lga: "Damaturu",
  },
  {
    id: 4,
    voter: "Amina Hassan",
    type: "phone",
    outcome: "positive",
    time: "1 hr ago",
    lga: "Gulani",
  },
  {
    id: 5,
    voter: "Abubakar Suleiman",
    type: "visit",
    outcome: "negative",
    time: "2 hr ago",
    lga: "Gujba",
  },
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

export function RecentInteractions() {
  return (
    <Card className="bg-surface-container-lowest border-0 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-headline-md text-on-surface">
            Recent Interactions
          </CardTitle>
          <p className="text-sm text-on-surface-variant mt-1">
            Latest campaign contacts
          </p>
        </div>
        <Link href="/interactions">
          <Button variant="ghost" size="sm" className="group">
            View All
            <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {interactions.map((interaction) => {
            const TypeIcon = typeIcons[interaction.type as keyof typeof typeIcons];
            return (
              <div
                key={interaction.id}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors"
              >
                <Avatar className="size-10">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm">
                    {interaction.voter
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-on-surface truncate">
                    {interaction.voter}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <TypeIcon className="size-3" />
                    <span className="capitalize">{interaction.type}</span>
                    <span>•</span>
                    <span>{interaction.lga}</span>
                  </div>
                </div>

                <div className="text-right">
                  <Badge
                    variant="secondary"
                    className={
                      outcomeColors[interaction.outcome as keyof typeof outcomeColors]
                    }
                  >
                    {interaction.outcome}
                  </Badge>
                  <p className="text-xs text-on-surface-variant mt-1">
                    {interaction.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
