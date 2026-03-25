"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  ChevronRight,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  Crown,
  UserCog,
  User,
  MapPin,
  Check,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";

const roles = [
  {
    id: "admin",
    name: "Administrator",
    level: 1,
    count: 3,
    description: "Full access to all features and settings",
    permissions: ["all"],
    color: "bg-error/10 text-error",
    icon: Crown,
    users: [
      { name: "Campaign Manager", email: "manager@abbagoji.com.ng", lga: "All" },
      { name: "Deputy Manager", email: "deputy@abbagoji.com.ng", lga: "All" },
      { name: "IT Admin", email: "it@abbagoji.com.ng", lga: "All" },
    ],
  },
  {
    id: "lga-coordinator",
    name: "LGA Coordinator",
    level: 2,
    count: 36,
    description: "Oversee operations in their assigned LGA",
    permissions: ["voters", "volunteers", "communications", "analytics"],
    color: "bg-primary/10 text-primary",
    icon: UserCog,
    users: [
      { name: "Hassan Yusuf", email: "hassan@abbagoji.com.ng", lga: "Damaturu" },
      { name: "Fatima Ibrahim", email: "fatima@abbagoji.com.ng", lga: "Gujba" },
      { name: "Musa Ali", email: "musa@abbagoji.com.ng", lga: "Potiskum" },
    ],
  },
  {
    id: "canvasser",
    name: "Field Canvasser",
    level: 3,
    count: 840,
    description: "Door-to-door voter outreach and data collection",
    permissions: ["voters", "interactions"],
    color: "bg-secondary/10 text-secondary",
    icon: MapPin,
    users: [
      { name: "Ahmed Musa", email: "ahmed@abbagoji.com.ng", lga: "Damaturu" },
      { name: "Aisha Bello", email: "aisha@abbagoji.com.ng", lga: "Gulani" },
    ],
  },
  {
    id: "anchor",
    name: "Anchor Citizen",
    level: 3,
    count: 2847,
    description: "Community influencers and voter advocates",
    permissions: ["voters", "interactions"],
    color: "bg-tertiary/10 text-tertiary",
    icon: User,
    users: [
      { name: "Ibrahim Suleiman", email: "ibrahim@abbagoji.com.ng", lga: "Bade" },
      { name: "Maryam Abdullahi", email: "maryam@abbagoji.com.ng", lga: "Yunusari" },
    ],
  },
  {
    id: "phone-banker",
    name: "Phone Banker",
    level: 4,
    count: 420,
    description: "Make calls and send messages to voters",
    permissions: ["communications"],
    color: "bg-sentiment-positive/10 text-sentiment-positive",
    icon: User,
    users: [
      { name: "Yusuf Mohammed", email: "yusuf@abbagoji.com.ng", lga: "Tarmuwa" },
    ],
  },
  {
    id: "data-manager",
    name: "Data Manager",
    level: 4,
    count: 120,
    description: "Manage voter data and generate reports",
    permissions: ["voters", "analytics"],
    color: "bg-warning/10 text-warning",
    icon: User,
    users: [
      { name: "Usman Ali", email: "usman@abbagoji.com.ng", lga: "Potiskum" },
    ],
  },
];

const permissionsList = [
  { id: "all", name: "Full Access", description: "Access to all system features" },
  { id: "voters", name: "Voter Management", description: "View and manage voter data" },
  { id: "volunteers", name: "Volunteer Management", description: "Manage volunteers" },
  { id: "communications", name: "Communications", description: "Send messages and campaigns" },
  { id: "analytics", name: "Analytics", description: "View reports and dashboards" },
  { id: "interactions", name: "Interactions", description: "Log voter interactions" },
];

export default function RolesHierarchyPage() {
  const [expandedRole, setExpandedRole] = useState<string | null>("admin");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-1">
              <Link href="/users" className="hover:text-primary">
                Users
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span>Roles & Hierarchy</span>
            </div>
            <h1 className="text-headline-md text-on-surface">Roles & Hierarchy</h1>
            <p className="text-sm text-on-surface-variant">
              Manage role-based access control and permissions
            </p>
          </div>
          <Button variant="gold">
            <Plus className="w-4 h-4 mr-2" />
            Create Role
          </Button>
        </div>
      </motion.div>

      {/* Hierarchy Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Organizational Hierarchy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              {/* Admin Level */}
              <div className="flex justify-center">
                <div className="bg-error/10 border border-error/30 rounded-lg p-4 text-center min-w-[200px]">
                  <Crown className="w-6 h-6 text-error mx-auto mb-2" />
                  <p className="font-medium text-on-surface">Administrator</p>
                  <p className="text-xs text-on-surface-variant">3 users</p>
                </div>
              </div>

              {/* Connector */}
              <div className="w-px h-8 bg-outline-variant" />

              {/* LGA Coordinators */}
              <div className="flex justify-center">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center min-w-[200px]">
                  <UserCog className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-medium text-on-surface">LGA Coordinators</p>
                  <p className="text-xs text-on-surface-variant">36 users</p>
                </div>
              </div>

              {/* Connector */}
              <div className="w-px h-8 bg-outline-variant" />

              {/* Field Team */}
              <div className="flex gap-4">
                <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4 text-center min-w-[150px]">
                  <MapPin className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <p className="font-medium text-on-surface text-sm">Field Canvassers</p>
                  <p className="text-xs text-on-surface-variant">840 users</p>
                </div>
                <div className="bg-tertiary/10 border border-tertiary/30 rounded-lg p-4 text-center min-w-[150px]">
                  <User className="w-5 h-5 text-tertiary mx-auto mb-2" />
                  <p className="font-medium text-on-surface text-sm">Anchor Citizens</p>
                  <p className="text-xs text-on-surface-variant">2,847 users</p>
                </div>
              </div>

              {/* Connector */}
              <div className="w-px h-8 bg-outline-variant" />

              {/* Support Roles */}
              <div className="flex gap-3">
                <div className="bg-sentiment-positive/10 border border-sentiment-positive/30 rounded-lg p-3 text-center min-w-[120px]">
                  <p className="font-medium text-on-surface text-xs">Phone Bankers</p>
                  <p className="text-xs text-on-surface-variant">420</p>
                </div>
                <div className="bg-warning/10 border border-warning/30 rounded-lg p-3 text-center min-w-[120px]">
                  <p className="font-medium text-on-surface text-xs">Data Managers</p>
                  <p className="text-xs text-on-surface-variant">120</p>
                </div>
                <div className="bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-center min-w-[120px]">
                  <p className="font-medium text-on-surface text-xs">General Volunteers</p>
                  <p className="text-xs text-on-surface-variant">2,400+</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Roles List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Role Definitions & Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {roles.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-outline-variant/15 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedRole(expandedRole === role.id ? null : role.id)
                    }
                    className="w-full flex items-center justify-between p-4 hover:bg-surface-container transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg ${role.color} flex items-center justify-center`}>
                        <role.icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-on-surface">{role.name}</p>
                          <Badge variant="outline" className="text-xs">
                            Level {role.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-on-surface-variant">{role.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium text-on-surface">{role.count}</p>
                        <p className="text-xs text-on-surface-variant">users</p>
                      </div>
                      {expandedRole === role.id ? (
                        <ChevronDown className="w-5 h-5 text-on-surface-variant" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-on-surface-variant" />
                      )}
                    </div>
                  </button>

                  {expandedRole === role.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-outline-variant/15 bg-surface-container-low"
                    >
                      <div className="p-4 space-y-4">
                        {/* Permissions */}
                        <div>
                          <p className="text-sm font-medium text-on-surface mb-2">Permissions</p>
                          <div className="flex flex-wrap gap-2">
                            {role.permissions.includes("all") ? (
                              <Badge className="bg-sentiment-positive/10 text-sentiment-positive">
                                Full Access
                              </Badge>
                            ) : (
                              role.permissions.map((perm) => (
                                <Badge key={perm} variant="outline" className="text-xs">
                                  {permissionsList.find((p) => p.id === perm)?.name || perm}
                                </Badge>
                              ))
                            )}
                          </div>
                        </div>

                        {/* Sample Users */}
                        <div>
                          <p className="text-sm font-medium text-on-surface mb-2">Sample Members</p>
                          <div className="space-y-2">
                            {role.users.map((user, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between p-2 bg-surface rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                                    {user.name.split(" ").map((n) => n[0]).join("")}
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-on-surface">{user.name}</p>
                                    <p className="text-xs text-on-surface-variant">{user.email}</p>
                                  </div>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {user.lga}
                                </Badge>
                              </div>
                            ))}
                          </div>
                          {role.count > role.users.length && (
                            <Button variant="ghost" className="w-full mt-2 text-sm">
                              View all {role.count} users
                            </Button>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2 border-t border-outline-variant/15">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Role
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Users className="w-4 h-4 mr-2" />
                            Manage Users
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>Duplicate Role</DropdownMenuItem>
                              <DropdownMenuItem className="text-error">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete Role
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
