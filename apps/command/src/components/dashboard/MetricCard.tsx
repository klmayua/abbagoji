"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend: number;
  trendLabel: string;
  icon: LucideIcon;
  color: "primary" | "secondary" | "tertiary" | "success" | "warning" | "error";
}

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary-fixed/50 text-secondary",
  tertiary: "bg-tertiary-fixed/50 text-tertiary",
  success: "bg-sentiment-positive/10 text-sentiment-positive",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
};

export function MetricCard({
  title,
  value,
  trend,
  trendLabel,
  icon: Icon,
  color,
}: MetricCardProps) {
  const isPositive = trend >= 0;

  return (
    <Card className="bg-surface-container-lowest border-0 shadow-sm hover:ambient-shadow-sm transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-label-md text-on-surface-variant mb-2">{title}</p>
            <p className="text-3xl font-bold text-on-surface">{value}</p>
            <div className="flex items-center gap-2 mt-2">
              <span
                className={cn(
                  "text-sm font-medium",
                  isPositive ? "text-sentiment-positive" : "text-error"
                )}
              >
                {isPositive ? "+" : ""}{trend}%
              </span>
              <span className="text-xs text-on-surface-variant">{trendLabel}</span>
            </div>
          </div>
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colorClasses[color])}>
            <Icon className="size-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
