"use client";

import { motion } from "framer-motion";
import { UserCog, Search, Filter, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const canvassers = [
  { id: 1, name: "Ahmed Musa", lga: "Damaturu", ward: "Damaturu Central", contacts: 156, status: "active" },
  { id: 2, name: "Fatima Ibrahim", lga: "Gujba", ward: "Buni Yadi", contacts: 142, status: "active" },
  { id: 3, name: "Hassan Yusuf", lga: "Gulani", ward: "Gulani", contacts: 89, status: "inactive" },
];

export default function CanvassersPage() {
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
          <h1 className="text-headline-md text-on-surface">Canvassers</h1>
          <p className="text-sm text-on-surface-variant">Field agents and door-to-door canvassers</p>
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
            placeholder="Search canvassers..."
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
        {canvassers.map((canvasser) => (
          <Card key={canvasser.id} className="hover:bg-surface-container transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="size-12">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {canvasser.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-on-surface">{canvasser.name}</h3>
                  <p className="text-sm text-on-surface-variant">{canvasser.lga} • {canvasser.ward}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-on-surface">{canvasser.contacts}</p>
                  <p className="text-xs text-on-surface-variant">contacts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
