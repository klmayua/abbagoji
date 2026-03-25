"use client";

import { motion } from "framer-motion";
import { Radio, MessageCircle, ArrowRight, Mail, Phone, Users, Send, TrendingUp, BarChart3, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const outreachChannels = [
  { title: "WhatsApp Center", href: "/communications/whatsapp", icon: MessageCircle, desc: "Manage WhatsApp campaigns and broadcasts", messages: 12450, delivered: 11850, opened: 8940 },
  { title: "SMS Center", href: "/communications/sms", icon: Radio, desc: "Send SMS to voters and track delivery", messages: 89420, delivered: 88500, opened: 45000 },
  { title: "Email Campaigns", href: "#", icon: Mail, desc: "Email newsletters and announcements", messages: 5600, delivered: 5400, opened: 3200 },
  { title: "Voice Calls", href: "#", icon: Phone, desc: "Automated voice call campaigns", messages: 8900, delivered: 8600, opened: 0 },
];

const recentCampaigns = [
  { name: "Weekend Mobilization", channel: "WhatsApp", sent: "12,450", opened: "71.8%", status: "Completed", date: "Mar 25" },
  { name: "GOTV Reminder", channel: "SMS", sent: "45,200", opened: "52.4%", status: "Running", date: "Mar 24" },
  { name: "Volunteer Recruitment", channel: "WhatsApp", sent: "5,800", opened: "68.2%", status: "Completed", date: "Mar 22" },
  { name: "Donation Drive", channel: "Email", sent: "2,400", opened: "58.3%", status: "Scheduled", date: "Mar 27" },
];

const templates = [
  { name: "Welcome Message", type: "WhatsApp", usage: "1,240", lastUsed: "Today" },
  { name: "Event Invitation", type: "SMS", usage: "890", lastUsed: "Yesterday" },
  { name: "GOTV Reminder", type: "WhatsApp", usage: "2,100", lastUsed: "Today" },
  { name: "Thank You", type: "Email", usage: "650", lastUsed: "2 days ago" },
];

export default function CommunicationsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-headline-md text-on-surface">Outreach Hub</h1>
        <p className="text-sm text-on-surface-variant">Centralized campaign communications management</p>
      </motion.div>

      <Tabs defaultValue="channels" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Channels Tab */}
        <TabsContent value="channels" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Reach", value: "116,370", change: "+8% this week", icon: Users },
              { label: "Messages Sent", value: "106,170", change: "Today", icon: Send },
              { label: "Avg. Open Rate", value: "58.4%", change: "+3.2%", icon: TrendingUp },
              { label: "Response Rate", value: "24.1%", change: "+1.8%", icon: BarChart3 },
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

          {/* Channel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outreachChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={channel.href}>
                  <Card className="h-full hover:bg-surface-container transition-colors cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <channel.icon className="size-6 text-primary" />
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-on-surface">{channel.messages.toLocaleString()}</p>
                          <p className="text-xs text-on-surface-variant">messages sent</p>
                        </div>
                      </div>
                      <h2 className="text-lg font-semibold text-on-surface mb-2">{channel.title}</h2>
                      <p className="text-sm text-on-surface-variant mb-4">{channel.desc}</p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-on-surface-variant">Delivered</p>
                          <p className="text-sm font-medium text-on-surface">{((channel.delivered / channel.messages) * 100).toFixed(1)}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-on-surface-variant">Opened</p>
                          <p className="text-sm font-medium text-on-surface">{channel.opened ? ((channel.opened / channel.messages) * 100).toFixed(1) : "N/A"}%</p>
                        </div>
                      </div>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Open Center
                        <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Campaigns Tab */}
        <TabsContent value="campaigns">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Recent Campaigns</CardTitle>
              <Button variant="gold" size="sm">
                <Send className="size-4 mr-2" />
                New Campaign
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentCampaigns.map((campaign, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        campaign.channel === "WhatsApp" ? "bg-sentiment-positive/10" :
                        campaign.channel === "SMS" ? "bg-primary/10" : "bg-secondary/10"
                      }`}>
                        {campaign.channel === "WhatsApp" ? (
                          <MessageCircle className="size-5 text-sentiment-positive" />
                        ) : campaign.channel === "SMS" ? (
                          <Radio className="size-5 text-primary" />
                        ) : (
                          <Mail className="size-5 text-secondary" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-on-surface">{campaign.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <span>{campaign.channel}</span>
                          <span>•</span>
                          <Calendar className="size-3" />
                          <span>{campaign.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm font-medium text-on-surface">{campaign.sent}</p>
                        <p className="text-xs text-on-surface-variant">sent</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-on-surface">{campaign.opened}</p>
                        <p className="text-xs text-on-surface-variant">opened</p>
                      </div>
                      <Badge
                        className={`text-xs ${
                          campaign.status === "Running" ? "bg-sentiment-positive/10 text-sentiment-positive" :
                          campaign.status === "Scheduled" ? "bg-warning/10 text-warning" :
                          "bg-outline-variant/10 text-on-surface-variant"
                        }`}
                      >
                        {campaign.status}
                      </Badge>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Message Templates</CardTitle>
              <Button variant="outline" size="sm">
                Create Template
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template, index) => (
                  <div
                    key={index}
                    className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/15 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium text-on-surface">{template.name}</h4>
                      <Badge variant="outline" className="text-xs">{template.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-on-surface-variant">
                      <span>Used {template.usage} times</span>
                      <span>Last used: {template.lastUsed}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">Preview</Button>
                      <Button variant="gold" size="sm" className="flex-1">Use</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { channel: "WhatsApp", rate: 71.8, color: "bg-sentiment-positive" },
                    { channel: "Email", rate: 58.3, color: "bg-secondary" },
                    { channel: "SMS", rate: 52.4, color: "bg-primary" },
                    { channel: "Voice", rate: 45.2, color: "bg-tertiary" },
                  ].map((item) => (
                    <div key={item.channel}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-on-surface">{item.channel}</span>
                        <span className="text-sm font-medium text-on-surface">{item.rate}%</span>
                      </div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.rate}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement by Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { time: "Morning (6AM - 12PM)", engagement: "42%", performance: "High" },
                    { time: "Afternoon (12PM - 4PM)", engagement: "38%", performance: "Medium" },
                    { time: "Evening (4PM - 8PM)", engagement: "68%", performance: "Best" },
                    { time: "Night (8PM - 10PM)", engagement: "45%", performance: "High" },
                  ].map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                      <span className="text-sm text-on-surface">{slot.time}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-on-surface">{slot.engagement}</span>
                        <Badge
                          className={`text-xs ${
                            slot.performance === "Best" ? "bg-sentiment-positive/10 text-sentiment-positive" :
                            slot.performance === "High" ? "bg-primary/10 text-primary" :
                            "bg-warning/10 text-warning"
                          }`}
                        >
                          {slot.performance}
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
