"use client";

import { motion } from "framer-motion";
import { Users, Search, Filter, ArrowLeft, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const coordinators = [
  { id: 1, name: "Alhaji Mohammed", role: "LGA Coordinator", lga: "Damaturu", wards: 10 },
  { id: 2, name: "Hajiya Fatima", role: "LGA Coordinator", lga: "Gujba", wards: 8 },
  { id: 3, name: "Malam Yusuf", role: "LGA Coordinator", lga: "Gulani", wards: 6 },
];

export default function CoordinatorsPage() {
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
          <h1 className="text-headline-md text-on-surface">Coordinators</h1>
          <p className="text-sm text-on-surface-variant">LGA and ward coordinators</p>
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
            placeholder="Search coordinators..."
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
        {coordinators.map((coordinator) => (
          <Card key={coordinator.id} className="hover:bg-surface-container transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="size-12">
                  <AvatarFallback className="bg-tertiary/10 text-tertiary">
                    {coordinator.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-on-surface">{coordinator.name}</h3>
                  <p className="text-sm text-on-surface-variant">{coordinator.role}</p>
                  <div className="flex items-center gap-1 text-sm text-on-surface-variant mt-1">
                    <MapPin className="size-3" />
                    {coordinator.lga}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-on-surface">{coordinator.wards}</p>
                  <p className="text-xs text-on-surface-variant">wards</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
