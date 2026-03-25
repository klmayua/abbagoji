"use client";

import { motion } from "framer-motion";
import { User, ArrowLeft, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export default function ProfileSettingsPage() {
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
          <h1 className="text-headline-md text-on-surface">Profile Settings</h1>
          <p className="text-sm text-on-surface-variant">Manage your account settings</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="size-20">
                <AvatarFallback className="bg-primary/10 text-primary text-2xl">CM</AvatarFallback>
              </Avatar>
              <Button variant="outline">Change Photo</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface">Full Name</label>
                <Input defaultValue="Campaign Manager" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface">Role</label>
                <Input defaultValue="Admin" disabled />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant" />
                <Input type="email" defaultValue="manager@abbagoji.com.ng" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant" />
                <Input type="tel" defaultValue="+234 800 000 0000" className="pl-10" />
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
