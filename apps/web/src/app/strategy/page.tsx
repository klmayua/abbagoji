import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Target,
  Lightbulb,
  Rocket,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
  FileText,
  Presentation,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

export default function StrategyPage() {
  return (
    <>
      <GlassNavbar />
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 via-surface to-surface-container-low">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Strategic Planning</span>
              </div>
              <h1 className="text-display-md text-on-surface mb-4">
                Strategy <span className="text-secondary">& Initiatives</span> Center
              </h1>
              <p className="text-body-lg text-on-surface-variant">
                Explore our campaign strategies, ongoing initiatives, and contribute your ideas
                for building Yobe East.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Strategy Overview */}
        <section className="py-16 bg-surface">
          <div className="container-editorial">
            <Tabs defaultValue="pillars" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="pillars">Strategic Pillars</TabsTrigger>
                <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="contribute">Contribute Ideas</TabsTrigger>
              </TabsList>

              {/* Strategic Pillars Tab */}
              <TabsContent value="pillars" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Grassroots Mobilization",
                      icon: Users,
                      description: "Building a movement from the ground up through ward-level organizing, community engagement, and voter registration drives.",
                      metrics: "250 Ward Coordinators", "50,000 Registered Volunteers"
                    },
                    {
                      title: "Policy Advocacy",
                      icon: FileText,
                      description: "Articulating clear policy positions on jobs, education, healthcare, and infrastructure to demonstrate readiness to govern.",
                      metrics: "4 Policy Papers Published", "12 Town Halls Held"
                    },
                    {
                      title: "Media & Communications",
                      icon: Presentation,
                      description: "Strategic messaging across traditional and digital media to reach voters with our vision and track record.",
                      metrics: "2M+ Social Reach", "50+ Media Appearances"
                    },
                    {
                      title: "Digital Engagement",
                      icon: MessageSquare,
                      description: "Leveraging technology for voter contact, data-driven campaigning, and real-time strategy optimization.",
                      metrics: "200K Voter Database", "30% Youth Engagement"
                    }
                  ].map((pillar, index) => (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-surface-container-low border-outline-variant/15">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                              <pillar.icon className="w-6 h-6 text-secondary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-title-md text-on-surface mb-2">{pillar.title}</h3>
                              <p className="text-body-sm text-on-surface-variant mb-4">{pillar.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {pillar.metrics.split('", "').map((metric, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">{metric.replace(/"/g, '')}</Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Initiatives Tab */}
              <TabsContent value="initiatives" className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      name: "Youth Employability Program",
                      status: "Active",
                      progress: 75,
                      description: "Skills training and job placement initiative targeting 5,000 unemployed youth.",
                      milestones: ["Launch training centers", "Partner with employers", "Place 2,000 graduates"]
                    },
                    {
                      name: "Healthcare Access Initiative",
                      status: "Active",
                      progress: 60,
                      description: "Mobile clinics and telemedicine to reach 100,000 residents in underserved areas.",
                      milestones: ["Deploy 5 mobile clinics", "Train community health workers", "Establish telemedicine hubs"]
                    },
                    {
                      name: "Education Infrastructure Fund",
                      status: "Planning",
                      progress: 30,
                      description: "Renovation and equipment of 50 schools across Zone B.",
                      milestones: ["Complete needs assessment", "Secure funding commitments", "Begin renovations"]
                    },
                    {
                      name: "Women's Economic Empowerment",
                      status: "Active",
                      progress: 45,
                      description: "Microfinance and skills training for 10,000 women entrepreneurs.",
                      milestones: ["Launch microfinance scheme", "Open training centers", "Support 5,000 businesses"]
                    }
                  ].map((initiative, index) => (
                    <motion.div
                      key={initiative.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="bg-surface-container-low border-outline-variant/15">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-title-md text-on-surface">{initiative.name}</h3>
                                <Badge className={initiative.status === "Active" ? "bg-sentiment-positive/10 text-sentiment-positive" : "bg-warning/10 text-warning"}>
                                  {initiative.status}
                                </Badge>
                              </div>
                              <p className="text-body-sm text-on-surface-variant mb-4">{initiative.description}</p>
                              <div className="flex items-center gap-4">
                                <div className="flex-1">
                                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                                    <div className="h-full bg-secondary rounded-full" style={{ width: `${initiative.progress}%` }} />
                                  </div>
                                </div>
                                <span className="text-label-sm text-on-surface-variant w-12 text-right">{initiative.progress}%</span>
                              </div>
                            </div>
                            <div className="md:w-64">
                              <h4 className="text-label-md text-on-surface mb-2">Key Milestones</h4>
                              <ul className="space-y-2">
                                {initiative.milestones.map((milestone, i) => (
                                  <li key={i} className="flex items-start gap-2 text-body-sm text-on-surface-variant">
                                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                    {milestone}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Timeline Tab */}
              <TabsContent value="timeline">
                <Card className="bg-surface-container-low border-outline-variant/15">
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {[
                        { phase: "Phase 1", name: "Foundation", period: "January - March 2026", items: ["Campaign launch", "Volunteer recruitment", "Office establishment", "Digital infrastructure"], status: "Completed" },
                        { phase: "Phase 2", name: "Mobilization", period: "April - June 2026", items: ["Ward coordinator training", "Voter registration drive", "Policy rollout", "Town hall series"], status: "Current" },
                        { phase: "Phase 3", name: "Acceleration", period: "July - September 2026", items: ["Door-to-door campaign", "Media blitz", "Debate preparation", "Alliance building"], status: "Upcoming" },
                        { phase: "Phase 4", name: "Election Push", period: "October - December 2026", items: ["GOTV operations", "Polling agent training", "Election day logistics", "Vote protection"], status: "Upcoming" }
                      ].map((phase, index) => (
                        <div key={phase.phase} className="flex gap-6">
                          <div className="flex-shrink-0 w-24 text-right">
                            <div className="text-label-md text-secondary font-bold">{phase.phase}</div>
                            <div className="text-label-sm text-on-surface-variant">{phase.period}</div>
                          </div>
                          <div className="flex-shrink-0 w-px bg-outline-variant/30 relative">
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${phase.status === "Completed" ? "bg-sentiment-positive" : phase.status === "Current" ? "bg-secondary" : "bg-outline-variant"}`} />
                          </div>
                          <div className="flex-1 pb-8">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-title-md text-on-surface">{phase.name}</h4>
                              <Badge variant="outline" className="text-xs">{phase.status}</Badge>
                            </div>
                            <ul className="space-y-1">
                              {phase.items.map((item, i) => (
                                <li key={i} className="text-body-sm text-on-surface-variant">• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Contribute Ideas Tab */}
              <TabsContent value="contribute">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-surface-container-low border-outline-variant/15">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Lightbulb className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-title-lg text-on-surface">Submit Your Idea</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-body-sm text-on-surface-variant mb-6">
                          Have a suggestion for our campaign strategy or initiatives? We want to hear from you.
                        </p>

                        <Link href="/contact">
                          <Button className="w-full">
                            Submit Idea
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <Card className="bg-surface-container-low border-outline-variant/15">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                          <Rocket className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="text-title-lg text-on-surface">Start an Initiative</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-body-sm text-on-surface-variant mb-6">
                          Want to lead a community project? Apply to start an official campaign initiative.
                        </p>

                        <Link href="/get-involved">
                          <Button variant="gold" className="w-full">
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
