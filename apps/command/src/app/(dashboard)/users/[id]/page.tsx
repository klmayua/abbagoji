"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Shield,
  Edit,
  Key,
  LogOut,
  MoreHorizontal,
  Check,
  X,
  User,
  Activity,
  FileText,
  Save,
  Ban,
  Trash2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

const permissions = [
  { id: "dashboard", name: "View Dashboard", category: "General" },
  { id: "voters", name: "Voter Management", category: "Data" },
  { id: "voters_edit", name: "Edit Voter Data", category: "Data" },
  { id: "voters_delete", name: "Delete Voter Records", category: "Data" },
  { id: "volunteers", name: "Volunteer Management", category: "Team" },
  { id: "volunteers_edit", name: "Edit Volunteers", category: "Team" },
  { id: "communications", name: "Send Communications", category: "Outreach" },
  { id: "campaigns", name: "Create Campaigns", category: "Outreach" },
  { id: "analytics", name: "View Analytics", category: "Reports" },
  { id: "reports", name: "Generate Reports", category: "Reports" },
  { id: "intelligence", name: "Access Intelligence", category: "Security" },
  { id: "settings", name: "Manage Settings", category: "Admin" },
  { id: "users", name: "User Management", category: "Admin" },
  { id: "users_edit", name: "Edit Users", category: "Admin" },
];

const activityLog = [
  { action: "Logged in", timestamp: "2026-03-26 08:30:15", ip: "192.168.1.100", status: "success" },
  { action: "Updated voter record", timestamp: "2026-03-26 09:15:42", details: "Voter ID: YB-4521", status: "success" },
  { action: "Exported report", timestamp: "2026-03-26 10:22:18", details: "LGA Performance Report", status: "success" },
  { action: "Failed login attempt", timestamp: "2026-03-25 14:10:05", ip: "192.168.1.105", status: "failed" },
  { action: "Password changed", timestamp: "2026-03-24 16:45:30", status: "success" },
  { action: "Viewed intelligence report", timestamp: "2026-03-24 11:30:22", details: "Opposition Analysis", status: "success" },
];

export default function UserProfilePage() {
  const params = useParams();
  const userId = params.id;
  const [isEditing, setIsEditing] = useState(false);
  const [userPermissions, setUserPermissions] = useState<string[]>([
    "dashboard",
    "voters",
    "voters_edit",
    "volunteers",
    "communications",
    "analytics",
    "intelligence",
  ]);

  const user = {
    name: "Ibrahim Abdullahi",
    email: "ibrahim@abbagoji.com.ng",
    phone: "+234 803 123 4567",
    role: "Administrator",
    lga: "Damaturu",
    ward: "Ward 3",
    status: "active",
    joined: "January 15, 2026",
    lastActive: "2 minutes ago",
    loginCount: 247,
    twoFactorEnabled: true,
  };

  const togglePermission = (permId: string) => {
    setUserPermissions((prev) =>
      prev.includes(permId) ? prev.filter((p) => p !== permId) : [...prev, permId]
    );
  };

  const groupedPermissions = permissions.reduce((acc, perm) => {
    if (!acc[perm.category]) acc[perm.category] = [];
    acc[perm.category].push(perm);
    return acc;
  }, {} as Record<string, typeof permissions>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Link href="/users">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Users
            </Button>
          </Link>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                {user.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-headline-md text-on-surface">{user.name}</h1>
                <Badge className="bg-sentiment-positive/10 text-sentiment-positive">
                  {user.status}
                </Badge>
              </div>
              <p className="text-on-surface-variant">{user.role}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {user.phone}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit className="w-4 h-4 mr-2" />
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Key className="w-4 h-4 mr-2" />
                  Reset Password
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Shield className="w-4 h-4 mr-2" />
                  Enable 2FA
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Ban className="w-4 h-4 mr-2" />
                  Suspend Account
                </DropdownMenuItem>
                <DropdownMenuItem className="text-error">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete User
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="permissions">Permissions</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Full Name</label>
                    <Input defaultValue={user.name} disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Email</label>
                    <Input defaultValue={user.email} disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Phone</label>
                    <Input defaultValue={user.phone} disabled={!isEditing} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-on-surface">LGA</label>
                      <Input defaultValue={user.lga} disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-on-surface">Ward</label>
                      <Input defaultValue={user.ward} disabled={!isEditing} />
                    </div>
                  </div>
                  {isEditing && (
                    <Button className="w-full" variant="gold">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Account Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Account Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-surface-container-low rounded-lg">
                      <p className="text-2xl font-bold text-on-surface">{user.loginCount}</p>
                      <p className="text-sm text-on-surface-variant">Total Logins</p>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-lg">
                      <p className="text-2xl font-bold text-on-surface">89%</p>
                      <p className="text-sm text-on-surface-variant">Activity Score</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-outline-variant/15">
                      <span className="text-sm text-on-surface-variant">Joined</span>
                      <span className="text-sm font-medium text-on-surface">{user.joined}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-outline-variant/15">
                      <span className="text-sm text-on-surface-variant">Last Active</span>
                      <span className="text-sm font-medium text-on-surface">{user.lastActive}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-on-surface-variant">2FA Status</span>
                      <Badge className={user.twoFactorEnabled ? "bg-sentiment-positive/10 text-sentiment-positive" : "bg-error/10 text-error"}>
                        {user.twoFactorEnabled ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Permissions Tab */}
          <TabsContent value="permissions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Permissions Management
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Grant All
                    </Button>
                    <Button variant="outline" size="sm">
                      Revoke All
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(groupedPermissions).map(([category, perms]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium text-on-surface mb-3">{category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {perms.map((perm) => (
                          <div
                            key={perm.id}
                            className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg"
                          >
                            <span className="text-sm text-on-surface">{perm.name}</span>
                            <Switch
                              checked={userPermissions.includes(perm.id)}
                              onCheckedChange={() => togglePermission(perm.id)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Activity Log
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activityLog.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-surface-container-low rounded-lg"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.status === "success"
                            ? "bg-sentiment-positive/10"
                            : "bg-error/10"
                        }`}
                      >
                        {activity.status === "success" ? (
                          <Check className="w-4 h-4 text-sentiment-positive" />
                        ) : (
                          <X className="w-4 h-4 text-error" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-on-surface">{activity.action}</p>
                        {activity.details && (
                          <p className="text-xs text-on-surface-variant">{activity.details}</p>
                        )}
                        <div className="flex items-center gap-4 mt-1 text-xs text-on-surface-variant">
                          <span>{activity.timestamp}</span>
                          {activity.ip && <span>IP: {activity.ip}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-5 h-5 text-primary" />
                    Password
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-on-surface-variant">
                    Last changed: March 24, 2026
                  </p>
                  <Button variant="outline" className="w-full">
                    Reset Password
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Two-Factor Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-on-surface">Authenticator App</p>
                      <p className="text-sm text-on-surface-variant">Enabled via Google Authenticator</p>
                    </div>
                    <Badge className="bg-sentiment-positive/10 text-sentiment-positive">
                      Active
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    Reconfigure 2FA
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-error">
                    <LogOut className="w-5 h-5" />
                    Danger Zone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Force Logout All Sessions
                  </Button>
                  <Button variant="outline" className="w-full text-warning border-warning hover:bg-warning/10">
                    Suspend Account
                  </Button>
                  <Button variant="outline" className="w-full text-error border-error hover:bg-error/10">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
