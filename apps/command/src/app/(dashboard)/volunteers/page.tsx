"use client";

import { motion } from "framer-motion";
import { Users, UserPlus, Calendar, Award, TrendingUp, MapPin, Phone, Mail, CheckCircle2, Clock, Target, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const volunteerStats = [
  { label: "Total Volunteers", value: "2,450", change: "+89 this week", icon: Users },
  { label: "Active Today", value: "186", change: "+12 vs yesterday", icon: CheckCircle2 },
  { label: "Hours Logged", value: "1,247", change: "This week", icon: Clock },
  { label: "Tasks Completed", value: "3,842", change: "+156 today", icon: Target },
];

const topVolunteers = [
  { name: "Ibrahim Abdullahi", role: "Ward Coordinator", lga: "Damaturu", hours: 156, tasks: 89, rating: 5 },
  { name: "Fatima Mohammed", role: "Field Canvasser", lga: "Gujba", hours: 142, tasks: 76, rating: 5 },
  { name: "Musa Haruna", role: "Data Entry", lga: "Gulani", hours: 128, tasks: 94, rating: 4 },
  { name: "Aisha Yusuf", role: "Event Organizer", lga: "Tarmuwa", hours: 134, tasks: 52, rating: 5 },
  { name: "Abubakar Suleiman", role: "Phone Banker", lga: "Potiskum", hours: 118, tasks: 245, rating: 4 },
];

const recentActivity = [
  { action: "New volunteer registered", user: "Hassan Ibrahim", location: "Damaturu", time: "5 min ago" },
  { action: "Task completed", user: "Fatima Mohammed", details: "Canvassed 25 households", time: "12 min ago" },
  { action: "Shift check-in", user: "Musa Haruna", location: "Gujba Ward 3", time: "18 min ago" },
  { action: "Training completed", user: "Aisha Yusuf", course: "Voter Registration", time: "32 min ago" },
];

const lgaBreakdown = [
  { lga: "Damaturu", volunteers: 584, active: 89, completion: 78 },
  { lga: "Gujba", volunteers: 423, active: 67, completion: 72 },
  { lga: "Gulani", volunteers: 312, active: 45, completion: 65 },
  { lga: "Tarmuwa", volunteers: 278, active: 38, completion: 58 },
  { lga: "Potiskum", volunteers: 398, active: 52, completion: 70 },
  { lga: "Bade", volunteers: 245, active: 34, completion: 62 },
  { lga: "Yunusari", volunteers: 210, active: 28, completion: 55 },
];

export default function VolunteersPage() {
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
            <h1 className="text-headline-md text-on-surface">Volunteer Management Module</h1>
            <p className="text-sm text-on-surface-variant">Manage and coordinate campaign volunteers</p>
          </div>
          <Button variant="gold">
            <UserPlus className="size-4 mr-2" />
            Add Volunteer
          </Button>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="locations">By Location</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {volunteerStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="size-5 text-primary" />
                      <span className="text-xs text-on-surface-variant">{stat.change}</span>
                    </div>
                    <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
                    <p className="text-sm text-on-surface-variant">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Volunteers */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Top Performing Volunteers</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topVolunteers.map((volunteer, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors"
                    >
                      <div className="text-lg font-bold text-primary w-8">#{index + 1}</div>

                      <Avatar className="size-10">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {volunteer.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-on-surface">{volunteer.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <span>{volunteer.role}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="size-3" /> {volunteer.lga}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm font-medium text-on-surface">{volunteer.hours} hrs</div>
                        <div className="text-xs text-on-surface-variant">{volunteer.tasks} tasks</div>
                      </div>

                      <Badge className="bg-sentiment-positive/10 text-sentiment-positive">
                        ★ {volunteer.rating}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-on-surface">{activity.action}</p>
                        <p className="text-xs text-on-surface-variant">{activity.user}</p>
                        {activity.details && <p className="text-xs text-on-surface-variant">{activity.details}</p>}
                        {activity.location && <p className="text-xs text-on-surface-variant">📍 {activity.location}</p>}
                        <p className="text-xs text-primary mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Volunteers List Tab */}
        <TabsContent value="volunteers">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>All Volunteers</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Export</Button>
                <Button variant="gold" size="sm">
                  <UserPlus className="size-4 mr-2" />
                  Add New
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topVolunteers.map((volunteer, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg"
                  >
                    <Avatar className="size-12">
                      <AvatarFallback className="bg-primary/10 text-primary text-lg">
                        {volunteer.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-on-surface">{volunteer.name}</h4>
                      <p className="text-xs text-on-surface-variant">{volunteer.role}</p>
                      <div className="flex items-center gap-3 mt-1 text-xs text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3" /> {volunteer.lga}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="size-3" /> 0803XXX{1000 + index}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="size-3" /> Email
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm font-medium text-on-surface">{volunteer.hours} hrs</p>
                        <p className="text-xs text-on-surface-variant">{volunteer.tasks} tasks</p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="size-5 text-primary" />
                  Activity Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { day: "Monday", volunteers: 142, tasks: 487 },
                    { day: "Tuesday", volunteers: 156, tasks: 523 },
                    { day: "Wednesday", volunteers: 138, tasks: 456 },
                    { day: "Thursday", volunteers: 164, tasks: 589 },
                    { day: "Friday", volunteers: 178, tasks: 634 },
                    { day: "Saturday", volunteers: 198, tasks: 712 },
                    { day: "Sunday", volunteers: 124, tasks: 389 },
                  ].map((day, index) => (
                    <div key={day.day} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-on-surface">{day.day}</div>
                      <div className="flex-1">
                        <div className="h-8 bg-surface-container rounded-lg overflow-hidden flex">
                          <div
                            className="h-full bg-primary/80 flex items-center justify-end px-2"
                            style={{ width: `${(day.tasks / 712) * 100}%` }}
                          >
                            <span className="text-xs text-white font-medium">{day.tasks}</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-16 text-right text-sm text-on-surface-variant">{day.volunteers}</div>
                    </div>
                  ))}
                </div>              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="size-5 text-primary" /
                  Volunteer Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "Ward Coordinators", count: 250, active: 238, color: "bg-primary" },
                    { category: "Field Canvassers", count: 840, active: 567, color: "bg-secondary" },
                    { category: "Phone Bankers", count: 420, active: 312, color: "bg-tertiary" },
                    { category: "Event Volunteers", count: 380, active: 189, color: "bg-sentiment-positive" },
                    { category: "Data Entry", count: 120, active: 98, color: "bg-warning" },
                    { category: "Social Media", count: 440, active: 356, color: "bg-error" },
                  ].map((cat) => (
                    <div key={cat.category}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-on-surface">{cat.category}</span>
                        <span className="text-sm font-medium text-on-surface">{cat.active}/{cat.count}</span>
                      </div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                        <div
                          className={`h-full ${cat.color} rounded-full`}
                          style={{ width: `${(cat.active / cat.count) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* By Location Tab */}
        <TabsContent value="locations">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Volunteer Distribution by LGA</CardTitle>
              <Button variant="outline" size="sm">
                <BarChart3 className="size-4 mr-2" />
                View Map
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lgaBreakdown.map((lga, index) => (
                  <div
                    key={lga.lga}
                    className="p-4 bg-surface-container-low rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                          #{index + 1}
                        </div>
                        <h4 className="text-sm font-medium text-on-surface">{lga.lga}</h4>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-lg font-bold text-on-surface">{lga.volunteers}</p>
                          <p className="text-xs text-on-surface-variant">volunteers</p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-medium text-sentiment-positive">{lga.active}</p>
                          <p className="text-xs text-on-surface-variant">active</p>
                        </div>

                        <Badge className="bg-primary/10 text-primary">
                          {lga.completion}% completion
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Progress value={lga.completion} className="h-2" />
                      </div>

                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
