"use client";

import { motion } from "framer-motion";
import { Settings, User, Users, Plug, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const settingsLinks = [
  { title: "Profile", href: "/settings/profile", icon: User, desc: "Manage your account settings" },
  { title: "Team", href: "/settings/team", icon: Users, desc: "Manage team members and permissions" },
  { title: "Integrations", href: "/settings/integrations", icon: Plug, desc: "Connect third-party services" },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-headline-md text-on-surface">Settings</h1>
        <p className="text-sm text-on-surface-variant">Manage your account and preferences</p>
      </motion.div>

      <div className="space-y-3">
        {settingsLinks.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={link.href}>
              <Card className="hover:bg-surface-container transition-colors cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="size-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-on-surface">{link.title}</h2>
                      <p className="text-sm text-on-surface-variant">{link.desc}</p>
                    </div>
                    <ArrowRight className="size-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
