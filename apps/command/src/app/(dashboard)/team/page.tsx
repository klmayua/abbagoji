"use client";

import { motion } from "framer-motion";
import { UserCog, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const teamLinks = [
  { title: "Canvassers", href: "/team/canvassers", count: 485, desc: "Field agents and door-to-door canvassers" },
  { title: "Anchor Citizens", href: "/team/anchors", count: 2847, desc: "Community influencers and advocates" },
  { title: "Coordinators", href: "/team/coordinators", count: 36, desc: "LGA and ward coordinators" },
];

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-headline-md text-on-surface">Team Management</h1>
            <p className="text-sm text-on-surface-variant">Manage campaign team members</p>
          </div>
          <Button>Add Team Member</Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamLinks.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={link.href}>
              <Card className="h-full hover:bg-surface-container transition-colors cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <UserCog className="size-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-on-surface">{link.count.toLocaleString()}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-on-surface mb-2">{link.title}</h2>
                  <p className="text-sm text-on-surface-variant mb-4">{link.desc}</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    View All
                    <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Team Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New canvasser registered", who: "Ahmed Musa", when: "5 min ago" },
                { action: "Anchor citizen approved", who: "Fatima Ibrahim", when: "1 hour ago" },
                { action: "Coordinator added to Damaturu", who: "Hassan Yusuf", when: "3 hours ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-outline-variant/15 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-on-surface">{activity.action}</p>
                    <p className="text-xs text-on-surface-variant">{activity.who}</p>
                  </div>
                  <span className="text-xs text-on-surface-variant">{activity.when}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
