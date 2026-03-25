"use client";

import { motion } from "framer-motion";
import { Users, Filter, Download, Plus, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const voters = [
  { id: 1, name: "Ibrahim Abdullahi", phone: "+234 800 000 0001", lga: "Damaturu", ward: "Damaturu Central", pu: "001", priority: "high", contacted: true },
  { id: 2, name: "Fatima Mohammed", phone: "+234 800 000 0002", lga: "Gujba", ward: "Buni Yadi", pu: "004", priority: "medium", contacted: true },
  { id: 3, name: "Musa Yusuf", phone: "+234 800 000 0003", lga: "Damaturu", ward: "Damaturu East", pu: "003", priority: "low", contacted: false },
  { id: 4, name: "Amina Hassan", phone: "+234 800 000 0004", lga: "Gulani", ward: "Gulani", pu: "006", priority: "high", contacted: true },
  { id: 5, name: "Abubakar Suleiman", phone: "+234 800 000 0005", lga: "Gujba", ward: "Gujba", pu: "005", priority: "medium", contacted: false },
];

const priorityColors = {
  high: "bg-sentiment-positive/10 text-sentiment-positive",
  medium: "bg-warning/10 text-warning",
  low: "bg-surface-container text-on-surface-variant",
};

export default function VotersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-headline-md text-on-surface">Voter Database</h1>
          <p className="text-sm text-on-surface-variant">Manage and track voters across Zone B</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="size-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="size-4" />
            Add Voter
          </Button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Voters", value: "200,000", icon: Users },
          { label: "Contacted", value: "85,420", icon: Users },
          { label: "High Priority", value: "12,340", icon: Users },
          { label: "Today", value: "1,247", icon: Users },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-on-surface-variant mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="size-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant" />
          <Input
            type="search"
            placeholder="Search voters..."
            className="pl-10 bg-surface-container-low"
          />
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="size-4" />
            Filters
          </Button>
          <Button variant="outline" className="gap-2">
            LGA
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>All Voters</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>LGA</TableHead>
                  <TableHead>Ward</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {voters.map((voter) => (
                  <TableRow key={voter.id}>
                    <TableCell className="font-medium">{voter.name}</TableCell>
                    <TableCell>{voter.phone}</TableCell>
                    <TableCell>{voter.lga}</TableCell>
                    <TableCell>{voter.ward}</TableCell>
                    <TableCell>
                      <Badge className={priorityColors[voter.priority as keyof typeof priorityColors]}>
                        {voter.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={voter.contacted ? "default" : "secondary"}>
                        {voter.contacted ? "Contacted" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
