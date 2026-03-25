"use client";

import { motion } from "framer-motion";
import { Users, ArrowLeft, Plus, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const teamMembers = [
  { id: 1, name: "Ahmed Ali", email: "ahmed@abbagoji.com.ng", role: "Data Manager", status: "active" },
  { id: 2, name: "Hassan Yusuf", email: "hassan@abbagoji.com.ng", role: "Field Coordinator", status: "active" },
  { id: 3, name: "Maryam Isa", email: "maryam@abbagoji.com.ng", role: "Communications", status: "inactive" },
];

export default function TeamSettingsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <Link href="/settings">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="size-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-headline-md text-on-surface">Team Members</h1>
            <p className="text-sm text-on-surface-variant">Manage team members and permissions</p>
          </div>
        </div>
        <Button className="gap-2">
          <Plus className="size-4" />
          Add Member
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-outline-variant/15">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-4 p-4 hover:bg-surface-container transition-colors"
                >
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-on-surface">{member.name}</p>
                    <p className="text-sm text-on-surface-variant">{member.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-on-surface">{member.role}</p>
                    <p className={`text-xs ${member.status === 'active' ? 'text-sentiment-positive' : 'text-on-surface-variant'}`}>
                      {member.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
