"use client";

import { motion } from "framer-motion";
import { Map, Filter, Layers, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const zoneBStats = [
  { lga: "Damaturu", coverage: 85, voters: 45000, status: "high" },
  { lga: "Gujba", coverage: 72, voters: 32000, status: "medium" },
  { lga: "Gulani", coverage: 68, voters: 28000, status: "medium" },
  { lga: "Busari", coverage: 55, voters: 35000, status: "low" },
  { lga: "Buni", coverage: 78, voters: 30000, status: "medium" },
  { lga: "Fika", coverage: 82, voters: 30000, status: "high" },
];

const statusColors = {
  high: "bg-sentiment-positive",
  medium: "bg-warning",
  low: "bg-error",
};

export default function MapPage() {
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
          <h1 className="text-headline-md text-on-surface">Zone B Map</h1>
          <p className="text-sm text-on-surface-variant">Interactive coverage map for Yobe East Zone B</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Layers className="size-4" />
            Layers
          </Button>
          <Button variant="outline" className="gap-2">
            <Filter className="size-4" />
            Filter
          </Button>
        </div>
      </motion.div>

      {/* Map Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="h-[600px]">
            <CardContent className="p-0 h-full relative">
              <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center">
                <div className="text-center">
                  <Map className="size-16 mx-auto mb-4 text-on-surface-variant/50" />
                  <p className="text-on-surface-variant">Interactive Map View</p>
                  <p className="text-sm text-on-surface-variant/70 mt-2">Mapbox GL JS integration would go here</p>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button variant="secondary" size="icon">+</Button>
                <Button variant="secondary" size="icon">-</Button>
                <Button variant="secondary" size="icon">
                  <Navigation className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* LGA Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="space-y-4"
        >
          <Card>
            <CardHeader>
              <CardTitle>LGA Coverage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {zoneBStats.map((stat) => (
                <div key={stat.lga} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${statusColors[stat.status as keyof typeof statusColors]}`} />
                      <span className="font-medium text-on-surface">{stat.lga}</span>
                    </div>
                    <span className="text-sm text-on-surface-variant">{stat.coverage}%</span>
                  </div>
                  <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className={`h-full ${statusColors[stat.status as keyof typeof statusColors]}`}
                      style={{ width: `${stat.coverage}%` }}
                    />
                  </div>
                  <p className="text-xs text-on-surface-variant">{stat.voters.toLocaleString()} voters</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
