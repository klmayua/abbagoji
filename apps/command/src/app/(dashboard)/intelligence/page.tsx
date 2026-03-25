"use client";

import { motion } from "framer-motion";
import { Eye, ArrowRight, Shield, TrendingUp, Users, Target, AlertTriangle, FileText, BarChart3, Radio } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const intelModules = [
  { title: "Opposition Research", href: "/intelligence/opposition", icon: Shield, desc: "Monitor opposition activities and strategies", alerts: 3 },
  { title: "Sentiment Tracking", href: "/intelligence/sentiment", icon: TrendingUp, desc: "Track public sentiment trends", alerts: 0 },
  { title: "Coalition Analysis", href: "#", icon: Users, desc: "Monitor potential coalition partners", alerts: 1 },
  { title: "Voter Intelligence", href: "/voters", icon: Target, desc: "Deep voter insights and profiling", alerts: 0 },
];

const recentAlerts = [
  { type: "Opposition", message: "Rival candidate announced new policy on education", time: "2 hours ago", severity: "medium" },
  { type: "Sentiment", message: "Negative sentiment spike in Damaturu Ward 3", time: "4 hours ago", severity: "high" },
  { type: "Coalition", message: "APC ward chairman expressed interest in alliance", time: "6 hours ago", severity: "low" },
  { type: "Intelligence", message: "New voter registration data available", time: "1 day ago", severity: "info" },
];

const intelReports = [
  { title: "Weekly Opposition Analysis", date: "March 25, 2026", type: "Strategic", status: "New" },
  { title: "Sentiment Analysis Report", date: "March 24, 2026", type: "Analytics", status: "Read" },
  { title: "Coalition Opportunities", date: "March 22, 2026", type: "Strategic", status: "Read" },
  { title: "Polling Unit Analysis", date: "March 20, 2026", type: "Tactical", status: "Read" },
];

export default function IntelligencePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-headline-md text-on-surface">General Intelligence Module</h1>
        <p className="text-sm text-on-surface-variant">Comprehensive campaign intelligence and strategic insights</p>
      </motion.div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Active Alerts", value: "4", change: "+2 today", icon: AlertTriangle },
              { label: "Intelligence Reports", value: "24", change: "This month", icon: FileText },
              { label: "Sentiment Score", value: "+12%", change: "Positive trend", icon: TrendingUp },
              { label: "Data Sources", value: "156", change: "Monitored", icon: Radio },
            ].map((stat, index) => (
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

          {/* Intelligence Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {intelModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={module.href}>
                  <Card className="h-full hover:bg-surface-container transition-colors cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <module.icon className="size-6 text-primary" />
                        </div>
                        {module.alerts > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {module.alerts} alerts
                          </Badge>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold text-on-surface mb-2">{module.title}</h2>
                      <p className="text-sm text-on-surface-variant mb-4">{module.desc}</p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Open Module
                        <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="size-5 text-primary" />
                Quick Intelligence Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-on-surface mb-2">Opposition Activity</h4>
                  <p className="text-sm text-on-surface-variant">Opposition increased media presence by 40% this week. Focus on countering education policy narrative.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-on-surface mb-2">Sentiment Overview</h4>
                  <p className="text-sm text-on-surface-variant">Overall positive sentiment at 68%. Slight decline in Gujba LGA requires attention.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-on-surface mb-2">Coalition Status</h4>
                  <p className="text-sm text-on-surface-variant">3 potential coalition partners identified. Initial outreach completed. Awaiting responses.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Alerts Tab */}
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="size-5 text-warning" />
                Intelligence Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-surface-container-low rounded-lg border-l-4 border-l-warning"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          alert.severity === "high"
                            ? "border-error text-error"
                            : alert.severity === "medium"
                            ? "border-warning text-warning"
                            : "border-primary text-primary"
                        }`}
                      >
                        {alert.type}
                      </Badge>
                      <span className="text-xs text-on-surface-variant">{alert.time}</span>
                    </div>
                    <p className="text-sm text-on-surface">{alert.message}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Intelligence Reports</CardTitle>
              <Button variant="outline" size="sm">
                <FileText className="size-4 mr-2" />
                Generate Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {intelReports.map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="size-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-on-surface">{report.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <span>{report.date}</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">{report.type}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {report.status === "New" && (
                        <Badge className="bg-primary/10 text-primary text-xs">New</Badge>
                      )}
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analysis Tab */}
        <TabsContent value="analysis">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { candidate: "Alhaji Abba Goji", support: 42, color: "bg-primary" },
                    { candidate: "Opposition A", support: 28, color: "bg-error" },
                    { candidate: "Opposition B", support: 18, color: "bg-warning" },
                    { candidate: "Undecided", support: 12, color: "bg-outline-variant" },
                  ].map((item) => (
                    <div key={item.candidate}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-on-surface">{item.candidate}</span>
                        <span className="text-sm font-medium text-on-surface">{item.support}%</span>
                      </div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.support}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Issues Priority</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { issue: "Economic Development", importance: 78, trend: "up" },
                    { issue: "Healthcare", importance: 72, trend: "up" },
                    { issue: "Education", importance: 68, trend: "stable" },
                    { issue: "Infrastructure", importance: 65, trend: "up" },
                    { issue: "Security", importance: 58, trend: "down" },
                  ].map((item) => (
                    <div key={item.issue} className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                      <span className="text-sm text-on-surface">{item.issue}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-on-surface">{item.importance}%</span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            item.trend === "up" ? "border-sentiment-positive text-sentiment-positive" : "border-outline-variant"
                          }`}
                        >
                          {item.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
