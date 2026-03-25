"use client";

import { motion } from "framer-motion";
import { Plug, ArrowLeft, MessageSquare, Database, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const integrations = [
  { id: 1, name: "WhatsApp Business", icon: MessageSquare, status: "connected", desc: "Send WhatsApp messages to voters" },
  { id: 2, name: "SMS Gateway", icon: MessageSquare, status: "connected", desc: "SMS broadcast service" },
  { id: 3, name: "Supabase", icon: Database, status: "connected", desc: "Database and authentication" },
  { id: 4, name: "Cloud Storage", icon: Cloud, status: "disconnected", desc: "Store campaign files" },
];

export default function IntegrationsSettingsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        <Link href="/settings">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="size-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-headline-md text-on-surface">Integrations</h1>
          <p className="text-sm text-on-surface-variant">Connect third-party services</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="space-y-3"
      >
        {integrations.map((integration) => (
          <Card key={integration.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <integration.icon className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-on-surface">{integration.name}</h3>
                  <p className="text-sm text-on-surface-variant">{integration.desc}</p>
                </div>
                <Button variant={integration.status === "connected" ? "outline" : "default"}>
                  {integration.status === "connected" ? "Disconnect" : "Connect"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
