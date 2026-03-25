"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const zoneStats = [
  { lga: "Damaturu", coverage: 78, sentiment: "+15%" },
  { lga: "Gujba", coverage: 62, sentiment: "+8%" },
  { lga: "Gulani", coverage: 45, sentiment: "+5%" },
];

export function ZoneMapPreview() {
  return (
    <Card className="bg-surface-container-lowest border-0 shadow-sm h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-headline-md text-on-surface">
              Zone B Coverage
            </CardTitle>
            <p className="text-sm text-on-surface-variant mt-1">
              LGA coverage overview
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="size-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Map Placeholder */}
        <div className="aspect-[4/3] rounded-xl bg-surface-container relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="size-12 text-primary/30 mx-auto mb-2" />
              <p className="text-sm text-on-surface-variant">
                Interactive Map
              </p>
              <p className="text-xs text-on-surface-variant/70">
                Damaturu • Gujba • Gulani
              </p>
            </div>
          </div>
          {/* Decorative zone markers */}
          <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-sentiment-positive animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-warning animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-error animate-pulse" />
        </div>

        {/* LGA List */}
        <div className="space-y-3">
          {zoneStats.map((zone) => (
            <div
              key={zone.lga}
              className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low"
            >
              <div>
                <p className="text-sm font-medium text-on-surface">
                  {zone.lga}
                </p>
                <p className="text-xs text-on-surface-variant">
                  Coverage: {zone.coverage}%
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-sentiment-positive">
                  {zone.sentiment}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Link href="/map">
          <Button variant="ghost" className="w-full group">
            View Full Map
            <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
