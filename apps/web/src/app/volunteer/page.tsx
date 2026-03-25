import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Clock,
  CheckCircle2,
  Target,
  Star,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function VolunteerPage() {
  return (
    <>
      <GlassNavbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-surface to-surface-container-low">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Volunteer Portal</span>
              </div>
              <h1 className="text-display-md text-on-surface mb-4">
                Volunteer <span className="text-primary">Dashboard</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl">
                Welcome to your volunteer command center. Track your activities, see your impact,
                and discover new ways to contribute to the campaign.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Stats */}
        <section className="py-8 bg-surface">
          <div className="container-editorial">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Activities Completed", value: "24", change: "+5 this week", icon: CheckCircle2 },
                { label: "Voters Contacted", value: "156", change: "+23 this week", icon: Users },
                { label: "Hours Contributed", value: "48", change: "+8 this week", icon: Clock },
                { label: "Campaign Points", value: "2,450", change: "Level 5 Volunteer", icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/15"
                >
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-label-sm text-sentiment-positive">{stat.change}</span>
                  </div>
                  <div className="text-headline-sm text-on-surface font-bold">{stat.value}</div>
                  <div className="text-label-sm text-on-surface-variant">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Dashboard Content */}
        <section className="py-8 bg-surface">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Assigned Tasks */}
                <Card className="bg-surface-container-low border-outline-variant/15">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-title-lg text-on-surface">Your Assigned Tasks</h2>
                      <Link href="#">
                        <Button variant="ghost" size="sm">View All</Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { task: "Canvassing - Damaturu Ward 3", deadline: "Today, 4:00 PM", priority: "High", status: "In Progress", progress: 60 },
                      { task: "Phone Banking - Target 50 calls", deadline: "Tomorrow", priority: "Medium", status: "Pending", progress: 0 },
                      { task: "Event Setup - Town Hall Meeting", deadline: "March 28", priority: "High", status: "Not Started", progress: 0 },
                      { task: "Data Entry - Voter Registration", deadline: "March 30", priority: "Low", status: "In Progress", progress: 40 }
                    ].map((task, i) => (
                      <div key={i} className="p-4 bg-surface rounded-lg border border-outline-variant/10">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-body-md text-on-surface font-medium">{task.task}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="w-3 h-3 text-on-surface-variant" />
                              <span className="text-label-sm text-on-surface-variant">{task.deadline}</span>
                            </div>
                          </div>
                          <Badge variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"}>
                            {task.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <Progress value={task.progress} className="h-2" />
                          </div>
                          <span className="text-label-sm text-on-surface-variant w-16 text-right">{task.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card className="bg-surface-container-low border-outline-variant/15">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-title-lg text-on-surface">Upcoming Events</h2>
                      <Link href="/events">
                        <Button variant="ghost" size="sm">View Calendar</Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Community Town Hall", date: "Mar 28, 2026", time: "2:00 PM", location: "Damaturu Central Mosque", role: "Setup Team" },
                      { name: "Youth Mobilization Rally", date: "Mar 30, 2026", time: "10:00 AM", location: "Gujba Stadium", role: "Crowd Coordination" },
                      { name: "Women's Forum", date: "Apr 2, 2026", time: "11:00 AM", location: "Potiskum Town Hall", role: "Registration Desk" }
                    ].map((event, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-surface rounded-lg border border-outline-variant/10">
                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-label-sm text-primary font-bold">{event.date.split(" ")[0]}</span>
                          <span className="text-label-sm text-on-surface-variant">{event.date.split(" ")[1]}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-body-md text-on-surface font-medium">{event.name}</h4>
                          <div className="flex items-center gap-4 mt-1 text-label-sm text-on-surface-variant">
                            <span>{event.time}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {event.location}
                            </span>
                          </div>
                          <div className="mt-2">
                            <Badge variant="outline" className="text-xs">Your Role: {event.role}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Volunteer Profile */}
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-outline-variant/15">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">AG</span>
                    </div>
                    <h3 className="text-title-lg text-on-surface mb-1">Abdul Ganiu</h3>
                    <p className="text-body-sm text-on-surface-variant mb-3">Level 5 Volunteer</p>
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="text-label-sm text-on-surface-variant mb-4">
                      Member since January 2026
                    </div>
                    <Link href="#">
                      <Button variant="outline" className="w-full">Edit Profile</Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card className="bg-surface-container-low border-outline-variant/15">
                  <CardHeader className="pb-3">
                    <h3 className="text-title-md text-on-surface">Achievements</h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { name: "First 100 Contacts", description: "Reached 100 voters", icon: Target },
                      { name: "Event MVP", description: "Top contributor at rally", icon: Award },
                      { name: "Consistent Volunteer", description: "30 days streak", icon: TrendingUp }
                    ].map((achievement, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <achievement.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-label-md text-on-surface font-medium">{achievement.name}</div>
                          <div className="text-label-sm text-on-surface-variant">{achievement.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-surface-container-low border-outline-variant/15">
                  <CardHeader className="pb-3">
                    <h3 className="text-title-md text-on-surface">Quick Actions</h3>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link href="/find-polling-unit">
                      <Button variant="outline" className="w-full justify-start">
                        <MapPin className="w-4 h-4 mr-2" />
                        Find Polling Unit
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Coordinator
                      </Button>
                    </Link>
                    <Link href="/events">
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="w-4 h-4 mr-2" />
                        Browse Events
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
