import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HandHeart,
  Lightbulb,
  Building2,
  Plane,
  Video,
  Users,
  Target,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function DiasporaEngagementPage() {
  return (
    <>
      <GlassNavbar />
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-surface via-surface-container-low to-surface-container">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-display-md text-on-surface mb-4">
                Diaspora <span className="text-tertiary">Engagement</span> Hub
              </h1>
              <p className="text-body-lg text-on-surface-variant">
                Discover meaningful ways to contribute to Yobe East's development from anywhere in the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Engagement Programs */}
        <section className="py-16 bg-surface">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Programs */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-headline-md text-on-surface mb-6">Active Programs</h2>

                {[
                  {
                    title: "Adopt-a-School Initiative",
                    category: "Education",
                    icon: Building2,
                    description: "Diaspora members can adopt schools in their home communities and fund renovation, equipment, and teacher support.",
                    impact: "45 schools adopted",
                    status: "Active",
                    color: "primary"
                  },
                  {
                    title: "Medical Mission Partnership",
                    category: "Healthcare",
                    icon: HandHeart,
                    description: "Partner with medical professionals to organize health outreaches, supply equipment, and support local healthcare workers.",
                    impact: "12 missions completed",
                    status: "Recruiting",
                    color: "secondary"
                  },
                  {
                    title: "Skills Transfer Program",
                    category: "Capacity Building",
                    icon: Video,
                    description: "Share your professional expertise through virtual workshops, mentoring sessions, and knowledge exchange programs.",
                    impact: "2,400+ trained",
                    status: "Ongoing",
                    color: "tertiary"
                  },
                  {
                    title: "Business Investment Circle",
                    category: "Economic Development",
                    icon: Lightbulb,
                    description: "Join investment groups to fund SMEs and startups in Yobe East. Minimum contributions start at ₦500,000.",
                    impact: "₦250M invested",
                    status: "Open",
                    color: "primary"
                  }
                ].map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-surface-container-low border-outline-variant/15 hover:border-primary/30 transition-all">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className={`w-14 h-14 rounded-xl bg-${program.color}/10 flex items-center justify-center flex-shrink-0`}>
                            <program.icon className={`w-7 h-7 text-${program.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">{program.category}</Badge>
                              <Badge className={`bg-${program.color}/10 text-${program.color} text-xs`}>{program.status}</Badge>
                            </div>
                            <h3 className="text-title-md text-on-surface mb-2">{program.title}</h3>
                            <p className="text-body-sm text-on-surface-variant mb-4">{program.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="text-label-sm text-primary font-medium">{program.impact}</div>
                              <Button variant="ghost" size="sm" className="gap-1">
                                Learn More <ArrowRight className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card className="bg-surface-container-low border-outline-variant/15">
                  <CardHeader className="pb-3">
                    <h3 className="text-title-md text-on-surface">Your Impact</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: "Projects Supported", value: "0" },
                      { label: "Amount Contributed", value: "₦0" },
                      { label: "Hours Volunteered", value: "0" },
                      { label: "People Impacted", value: "0" }
                    ].map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center py-2 border-b border-outline-variant/10 last:border-0">
                        <span className="text-body-sm text-on-surface-variant">{stat.label}</span>
                        <span className="text-label-md text-on-surface font-medium">{stat.value}</span>
                      </div>
                    ))}
                    <Link href="/get-involved">
                      <Button variant="gold" className="w-full mt-4">Start Contributing</Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card className="bg-surface-container-low border-outline-variant/15">
                  <CardHeader className="pb-3">
                    <h3 className="text-title-md text-on-surface">Upcoming Events</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Virtual Town Hall", date: "March 30, 2026", type: "Online" },
                      { title: "London Chapter Meeting", date: "April 5, 2026", type: "In-Person" },
                      { title: "Investment Workshop", date: "April 12, 2026", type: "Hybrid" }
                    ].map((event, i) => (
                      <div key={i} className="py-2">
                        <div className="text-body-sm text-on-surface font-medium">{event.title}</div>
                        <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
                          <span>{event.date}</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">{event.type}</Badge>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">View All Events</Button>
                  </CardContent>
                </Card>

                {/* Success Stories */}
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-outline-variant/15">
                  <CardContent className="p-6">
                    <h3 className="text-title-md text-on-surface mb-4">Success Story</h3>
                    <blockquote className="text-body-sm text-on-surface-variant italic mb-4">
                      "Through the diaspora investment circle, we funded 5 new businesses in Potiskum
                      that now employ over 50 young people."
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-label-sm text-on-surface font-medium">London Chapter</div>
                        <div className="text-label-sm text-on-surface-variant">Business Investors Group</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-surface-container-low">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-headline-lg text-on-surface mb-4">How It Works</h2>
              <p className="text-body-md text-on-surface-variant">Getting involved is simple</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Register", description: "Join the diaspora network with your details" },
                { step: "02", title: "Explore", description: "Browse available programs and opportunities" },
                { step: "03", title: "Connect", description: "Link with chapter coordinators and members" },
                { step: "04", title: "Contribute", description: "Start making your impact on Yobe East" }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-headline-sm font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-title-md text-on-surface mb-2">{step.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <Target className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-headline-lg text-on-surface mb-4">Make Your Impact Today</h2>
              <p className="text-body-md text-on-surface-variant mb-8">
                Whether you can contribute time, expertise, or resources, there's a place for you
                in our diaspora engagement programs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/get-involved">
                  <Button variant="gold" size="lg">Register Now</Button>
                </Link>
                <Button variant="outline" size="lg">Download Program Guide</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
