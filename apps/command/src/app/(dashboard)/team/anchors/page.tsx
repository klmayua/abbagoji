"use client";

import { motion } from "framer-motion";
import { Users, Search, Filter, ArrowLeft, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const anchors = [
  { id: 1, name: "Alhaji Ibrahim", lga: "Damaturu", network: 450, influence: "high" },
  { id: 2, name: "Hajiya Aisha", lga: "Gujba", network: 380, influence: "high" },
  { id: 3, name: "Malam Musa", lga: "Gulani", network: 250, influence: "medium" },
];

const influenceColors = {
  high: "bg-sentiment-positive/10 text-sentiment-positive",
  medium: "bg-warning/10 text-warning",
  low: "bg-surface-container text-on-surface-variant",
};

export default function AnchorsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        <Link href="/team">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="size-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-headline-md text-on-surface">Anchor Citizens</h1>
          <p className="text-sm text-on-surface-variant">Community influencers and advocates</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant" />
          <Input
            type="search"
            placeholder="Search anchor citizens..."
            className="pl-10 bg-surface-container-low"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="size-4" />
          Filters
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="grid gap-4"
      >
        {anchors.map((anchor) => (
          <Card key={anchor.id} className="hover:bg-surface-container transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="size-12">
                  <AvatarFallback className="bg-secondary/10 text-secondary">
                    <Star className="size-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-on-surface">{anchor.name}</h3>
                  <p className="text-sm text-on-surface-variant">{anchor.lga}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-on-surface">{anchor.network}</p>
                    <p className="text-xs text-on-surface-variant">network size</p>
                  </div>
                  <Badge className={influenceColors[anchor.influence as keyof typeof influenceColors]}>
                    {anchor.influence}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
