"use client";

import { motion } from "framer-motion";
import { Users, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const demographics = [
  { category: "Age", data: [{ label: "18-25", value: "25%" }, { label: "26-35", value: "35%" }, { label: "36-50", value: "28%" }, { label: "50+", value: "12%" }] },
  { category: "Gender", data: [{ label: "Male", value: "58%" }, { label: "Female", value: "42%" }] },
  { category: "Occupation", data: [{ label: "Farming", value: "45%" }, { label: "Trading", value: "25%" }, { label: "Civil Service", value: "20%" }, { label: "Other", value: "10%" }] },
];

export default function DemographicsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        <Link href="/analytics">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="size-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-headline-md text-on-surface">Demographics</h1>
          <p className="text-sm text-on-surface-variant">Voter demographics breakdown</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {demographics.map((demo, index) => (
          <motion.div
            key={demo.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-5 text-primary" />
                  {demo.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demo.data.map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-sm text-on-surface-variant">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: item.value }}
                          />
                        </div>
                        <span className="text-sm font-medium text-on-surface w-10 text-right">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
