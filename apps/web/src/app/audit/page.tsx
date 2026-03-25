import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileCheck,
  Download,
  Eye,
  Calendar,
  Users,
  TrendingUp,
  Target,
  CheckCircle2,
  AlertCircle,
  FileText,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function AuditPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <FileCheck className="w-4 h-4" />
                <span className="text-sm font-medium">Transparency & Accountability</span>
              </div>
              <h1 className="text-display-md text-on-surface mb-4">
                Campaign Audit <span className="text-primary">& Reports</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant">
                Our commitment to transparency. Access campaign reports, financial disclosures,
                and operational audits.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-surface">
          <div className="container-editorial">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Reports Published", value: "12", icon: FileText },
                { label: "Total Contributors", value: "2,450", icon: Users },
                { label: "Amount Raised", value: "₦45.2M", icon: TrendingUp },
                { label: "Audit Score", value: "98%", icon: Target }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/15 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-headline-sm text-on-surface font-bold">{stat.value}</div>
                  <div className="text-label-sm text-on-surface-variant">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section className="py-16 bg-surface-container-low">
          <div className="container-editorial">
            <Tabs defaultValue="financial" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="financial">Financial Reports</TabsTrigger>
                <TabsTrigger value="operational">Operational Reports</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
              </TabsList>

              {/* Financial Reports */}
              <TabsContent value="financial" className="space-y-6">
                <Card className="bg-surface border-outline-variant/15">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-title-lg text-on-surface">Financial Statements</h2>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Q1 2026 Financial Report", date: "March 31, 2026", size: "2.4 MB", type: "Quarterly" },
                      { title: "February 2026 Expense Report", date: "February 28, 2026", size: "1.8 MB", type: "Monthly" },
                      { title: "January 2026 Financial Summary", date: "January 31, 2026", size: "1.5 MB", type: "Monthly" },
                      { title: "2025 Annual Financial Report", date: "December 31, 2025", size: "4.2 MB", type: "Annual" }
                    ].map((report, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-body-md text-on-surface font-medium">{report.title}</div>
                            <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
                              <Calendar className="w-3 h-3" /> {report.date}
                              <span>•</span>
                              <Badge variant="outline" className="text-xs">{report.type}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-label-sm text-on-surface-variant">{report.size}</span>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Expense Breakdown */}
                <Card className="bg-surface border-outline-variant/15">
                  <CardHeader>
                    <h3 className="text-title-lg text-on-surface">Expense Breakdown</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { category: "Campaign Operations", amount: "₦18.5M", percent: 41, color: "bg-primary" },
                        { category: "Media & Advertising", amount: "₦12.2M", percent: 27, color: "bg-secondary" },
                        { category: "Events & Mobilization", amount: "₦8.7M", percent: 19, color: "bg-tertiary" },
                        { category: "Administrative Costs", amount: "₦3.5M", percent: 8, color: "bg-surface-variant" },
                        { category: "Compliance & Legal", amount: "₦2.3M", percent: 5, color: "bg-outline" }
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-body-sm text-on-surface">{item.category}</span>
                            <span className="text-label-md text-on-surface font-medium">{item.amount}</span>
                          </div>
                          <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }} />
                          </div>
                          <div className="text-right text-label-sm text-on-surface-variant mt-1">{item.percent}%</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Operational Reports */}
              <TabsContent value="operational" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Campaign Activity Report", description: "Summary of all campaign activities, events, and outreach efforts.", date: "March 2026", icon: BarChart3 },
                    { title: "Volunteer Activity Report", description: "Volunteer participation metrics and contribution summaries.", date: "March 2026", icon: Users },
                    { title: "Voter Contact Report", description: "Analysis of voter contact efforts and engagement rates.", date: "February 2026", icon: CheckCircle2 },
                    { title: "Media Coverage Report", description: "Analysis of media mentions, sentiment, and reach.", date: "February 2026", icon: TrendingUp }
                  ].map((report, index) => (
                    <motion.div
                      key={report.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="bg-surface border-outline-variant/15 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <report.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-title-md text-on-surface">{report.title}</h3>
                                <Badge variant="outline" className="text-xs">{report.date}</Badge>
                              </div>
                              <p className="text-body-sm text-on-surface-variant mb-4">{report.description}</p>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Compliance */}
              <TabsContent value="compliance">
                <Card className="bg-surface border-outline-variant/15">
                  <CardHeader>
                    <h2 className="text-title-lg text-on-surface">Compliance Status</h2>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { item: "INEC Registration", status: "Compliant", date: "Verified January 2026", icon: CheckCircle2, color: "text-sentiment-positive" },
                      { item: "Financial Disclosure Filed", status: "Compliant", date: "Submitted March 15, 2026", icon: CheckCircle2, color: "text-sentiment-positive" },
                      { item: "Campaign Finance Limits", status: "Within Limit", date: "42% of limit used", icon: CheckCircle2, color: "text-sentiment-positive" },
                      { item: "Tax Clearance Certificate", status: "Pending Renewal", date: "Expires April 2026", icon: AlertCircle, color: "text-warning" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
                        <div className={`w-10 h-10 rounded-full bg-surface flex items-center justify-center`}>
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-body-md text-on-surface font-medium">{item.item}</h4>
                            <Badge className={item.status === "Pending Renewal" ? "bg-warning/10 text-warning" : "bg-sentiment-positive/10 text-sentiment-positive"}>
                              {item.status}
                            </Badge>
                          </div>
                          <div className="text-label-sm text-on-surface-variant">{item.date}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <FileCheck className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-headline-lg text-on-surface mb-4">Questions About Our Reports?</h2>
              <p className="text-body-md text-on-surface-variant mb-8">
                We're committed to transparency. Contact our audit team for any inquiries
                about campaign finances or operations.
              </p>
              <Link href="/contact">
                <Button variant="gold" size="lg">Contact Audit Team</Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
