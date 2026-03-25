"use client";

import { motion } from "framer-motion";
import {
  Users,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Shield,
  UserCheck,
  UserX,
  Clock,
  Download,
  Plus,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";

const users = [
  { id: 1, name: "Ibrahim Abdullahi", email: "ibrahim@abbagoji.com.ng", phone: "+234 803 123 4567", role: "Admin", lga: "Damaturu", ward: "Ward 3", status: "active", lastActive: "2 min ago", joined: "2026-01-15" },
  { id: 2, name: "Fatima Mohammed", email: "fatima@abbagoji.com.ng", phone: "+234 805 234 5678", role: "LGA Coordinator", lga: "Gujba", ward: "Ward 1", status: "active", lastActive: "15 min ago", joined: "2026-02-01" },
  { id: 3, name: "Musa Haruna", email: "musa@abbagoji.com.ng", phone: "+234 807 345 6789", role: "Field Canvasser", lga: "Gulani", ward: "Ward 2", status: "active", lastActive: "1 hour ago", joined: "2026-02-10" },
  { id: 4, name: "Aisha Yusuf", email: "aisha@abbagoji.com.ng", phone: "+234 809 456 7890", role: "Data Manager", lga: "Tarmuwa", ward: "Ward 4", status: "inactive", lastActive: "3 days ago", joined: "2026-01-20" },
  { id: 5, name: "Abubakar Suleiman", email: "abubakar@abbagoji.com.ng", phone: "+234 801 567 8901", role: "Phone Banker", lga: "Potiskum", ward: "Ward 5", status: "pending", lastActive: "Never", joined: "2026-03-25" },
  { id: 6, name: "Hassan Ibrahim", email: "hassan@abbagoji.com.ng", phone: "+234 802 678 9012", role: "Anchor Citizen", lga: "Bade", ward: "Ward 1", status: "active", lastActive: "30 min ago", joined: "2026-02-15" },
  { id: 7, name: "Maryam Isa", email: "maryam@abbagoji.com.ng", phone: "+234 803 789 0123", role: "Media Team", lga: "Damaturu", ward: "Ward 2", status: "active", lastActive: "5 min ago", joined: "2026-01-25" },
  { id: 8, name: "Yusuf Ali", email: "yusuf@abbagoji.com.ng", phone: "+234 804 890 1234", role: "Volunteer", lga: "Yunusari", ward: "Ward 3", status: "inactive", lastActive: "1 week ago", joined: "2026-02-20" },
];

const stats = [
  { label: "Total Users", value: "2,450", icon: Users },
  { label: "Active", value: "2,180", icon: UserCheck, color: "text-sentiment-positive" },
  { label: "Pending", value: "145", icon: Clock, color: "text-warning" },
  { label: "Inactive", value: "125", icon: UserX, color: "text-error" },
];

export default function UserDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive" | "pending">("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-sentiment-positive/10 text-sentiment-positive">Active</Badge>;
      case "inactive":
        return <Badge className="bg-error/10 text-error">Inactive</Badge>;
      case "pending":
        return <Badge className="bg-warning/10 text-warning">Pending</Badge>;
      default:
        return null;
    }
  };

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
            <h1 className="text-headline-md text-on-surface">User Management</h1>
            <p className="text-sm text-on-surface-variant">Manage team members and their permissions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Link href="/signup">
              <Button variant="gold">
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color || "text-primary"}`} />
              </div>
              <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
              <p className="text-sm text-on-surface-variant">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="all" onClick={() => setFilterStatus("all")}>All</TabsTrigger>
                  <TabsTrigger value="active" onClick={() => setFilterStatus("active")}>Active</TabsTrigger>
                  <TabsTrigger value="pending" onClick={() => setFilterStatus("pending")}>Pending</TabsTrigger>
                  <TabsTrigger value="inactive" onClick={() => setFilterStatus("inactive")}>Inactive</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                  <Input
                    placeholder="Search users..."
                    className="pl-10 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-outline-variant/15">
              {filteredUsers.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-4 hover:bg-surface-container transition-colors"
                >
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <Link href={`/users/${user.id}`}>
                      <p className="font-medium text-on-surface hover:text-primary transition-colors">{user.name}</p>
                    </Link>
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {user.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {user.phone}
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm font-medium text-on-surface">{user.role}</p>
                      <p className="text-xs text-on-surface-variant flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {user.lga}, {user.ward}
                      </p>
                    </div>

                    <div className="text-right">
                      {getStatusBadge(user.status)}
                      <p className="text-xs text-on-surface-variant mt-1">{user.lastActive}</p>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <Link href={`/users/${user.id}`}>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem>Edit User</DropdownMenuItem>
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      <DropdownMenuItem className="text-error">Deactivate</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              ))}
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-on-surface-variant mx-auto mb-4" />
                <p className="text-on-surface-variant">No users found</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
