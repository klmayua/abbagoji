"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Positive", value: 45, color: "#4CAF50" },
  { name: "Neutral", value: 35, color: "#FFC107" },
  { name: "Negative", value: 20, color: "#F44336" },
];

export function SentimentDistribution() {
  return (
    <Card className="bg-surface-container-lowest border-0 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-headline-md text-on-surface">
          Sentiment Distribution
        </CardTitle>
        <p className="text-sm text-on-surface-variant mt-1">
          Overall voter sentiment breakdown
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f7f9ff",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 20px 40px -10px rgba(9, 29, 46, 0.08)",
                }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-outline-variant/15">
          {data.map((item) => (
            <div key={item.name} className="text-center">
              <p className="text-2xl font-bold" style={{ color: item.color }}>
                {item.value}%
              </p>
              <p className="text-xs text-on-surface-variant">{item.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
