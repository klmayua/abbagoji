"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", calls: 45, visits: 28, messages: 120 },
  { day: "Tue", calls: 52, visits: 32, messages: 145 },
  { day: "Wed", calls: 48, visits: 35, messages: 132 },
  { day: "Thu", calls: 60, visits: 42, messages: 158 },
  { day: "Fri", calls: 55, visits: 38, messages: 165 },
  { day: "Sat", calls: 42, visits: 25, messages: 98 },
  { day: "Sun", calls: 38, visits: 22, messages: 85 },
];

const timeframes = [
  { label: "24h", value: "24h" },
  { label: "7d", value: "7d" },
  { label: "30d", value: "30d" },
  { label: "90d", value: "90d" },
];

export function ActivityChart() {
  const [timeframe, setTimeframe] = useState("7d");

  return (
    <Card className="bg-surface-container-lowest border-0 shadow-sm h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-headline-md text-on-surface">Contact Activity</CardTitle>
          <p className="text-sm text-on-surface-variant mt-1">
            Daily interactions by type
          </p>
        </div>
        <div className="flex gap-1">
          {timeframes.map((tf) => (
            <Button
              key={tf.value}
              variant={timeframe === tf.value ? "default" : "ghost"}
              size="sm"
              onClick={() => setTimeframe(tf.value)}
              className="text-xs"
            >
              {tf.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e3efff" />
              <XAxis
                dataKey="day"
                tick={{ fill: "#091d2e", fontSize: 12 }}
                axisLine={{ stroke: "#c0c9bb" }}
              />
              <YAxis
                tick={{ fill: "#091d2e", fontSize: 12 }}
                axisLine={{ stroke: "#c0c9bb" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f7f9ff",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 20px 40px -10px rgba(9, 29, 46, 0.08)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="calls"
                name="Phone Calls"
                stroke="#00450d"
                strokeWidth={2}
                dot={{ fill: "#00450d", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="visits"
                name="Home Visits"
                stroke="#755b00"
                strokeWidth={2}
                dot={{ fill: "#755b00", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="messages"
                name="Messages"
                stroke="#003683"
                strokeWidth={2}
                dot={{ fill: "#003683", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
