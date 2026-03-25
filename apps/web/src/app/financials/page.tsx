import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Wallet,
  TrendingUp,
  Users,
  Target,
  Heart,
  Building2,
  Calendar,
  CheckCircle2,
  Download,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function FinancialsPage() {
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
                <Wallet className="w-4 h-4" />
                <span className="text-sm font-medium">Campaign Finance</span>
              </div>
              <h1 className="text-display-md text-on-surface mb-4">
                Financials <span className="text-secondary">& Fundraising</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant">
                Transparent financial management. See how campaign funds are raised and spent
                to build a better Yobe East.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Campaign Finance Overview */}
        <section className="py-12 bg-surface">
          <div className="container-editorial">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Raised", value: "₦45.2M", change: "+12% this month", icon: TrendingUp, color: "text-sentiment-positive" },
                { label: "Total Spent", value: "₦32.1M", change: "71% of raised", icon: Wallet },
                { label: "Individual Donors", value: "1,247", change: "+89 new", icon: Users },
                { label: "Campaign Goal", value: "₦150M", change: "30% achieved", icon: Target }
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
                    <stat.icon className="w-5 h-5 text-secondary" />
                    {stat.change && (
                      <span className={`text-label-sm ${stat.color || "text-on-surface-variant"}`}>{stat.change}</span>
                    )}
                  </div>
                  <div className="text-headline-sm text-on-surface font-bold">{stat.value}</div>
                  <div className="text-label-sm text-on-surface-variant">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-surface-container-low">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="contribute" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="contribute">Contribute</TabsTrigger>
                    <TabsTrigger value="expenses">Expenses</TabsTrigger>
                    <TabsTrigger value="transparency">Transparency</TabsTrigger>
                  </TabsList>

                  {/* Contribute Tab */}
                  <TabsContent value="contribute" className="space-y-6">
                    <Card className="bg-surface border-outline-variant/15">
                      <CardHeader>
                        <h2 className="text-title-lg text-on-surface">Ways to Contribute</h2>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {[
                          { title: "Individual Donation", description: "Make a one-time or recurring donation to support the campaign.", options: ["₦5,000", "₦10,000", "₦50,000", "₦100,000", "Custom"], popular: true },
                          { title: "Monthly Supporter", description: "Become a sustaining donor with monthly contributions.", options: ["₦5,000/month", "₦10,000/month", "₦25,000/month"], popular: false },
                          { title: "Corporate Partnership", description: "For businesses and organizations wanting to support the campaign.", options: ["Contact Us"], popular: false }
                        ].map((method, i) => (
                          <div key={i} className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-title-md text-on-surface">{method.title}</h3>
                                {method.popular && (
                                  <Badge className="bg-secondary/10 text-secondary text-xs mt-1">Most Popular</Badge>
                                )}
                              </div>
                              <Heart className="w-5 h-5 text-secondary" />
                            </div>
                            <p className="text-body-sm text-on-surface-variant mb-4">{method.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {method.options.map((option, j) => (
                                <Button key={j} variant={j === 0 ? "gold" : "outline"} size="sm">
                                  {option}
                                </Button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Recent Donors */}
                    <Card className="bg-surface border-outline-variant/15">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <h3 className="text-title-lg text-on-surface">Recent Supporters</h3>
                          <Link href="#">
                            <Button variant="ghost" size="sm">View All</Button>
                          </Link>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[
                            { name: "Ibrahim M.", amount: "₦50,000", type: "Monthly" },
                            { name: "Fatima A.", amount: "₦25,000", type: "One-time" },
                            { name: "Alhaji Y.", amount: "₦100,000", type: "Corporate" },
                            { name: "Anonymous", amount: "₦10,000", type: "One-time" },
                            { name: "Hassan K.", amount: "₦5,000", type: "Monthly" },
                            { name: "Aisha B.", amount: "₦30,000", type: "One-time" },
                            { name: "Usman T.", amount: "₦15,000", type: "Monthly" },
                            { name: "Maryam S.", amount: "₦20,000", type: "One-time" }
                          ].map((donor, i) => (
                            <div key={i} className="text-center p-3 bg-surface-container-low rounded-lg">
                              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                                <span className="text-secondary font-bold">{donor.name.charAt(0)}</span>
                              </div>
                              <div className="text-label-md text-on-surface font-medium">{donor.name}</div>
                              <div className="text-label-sm text-secondary">{donor.amount}</div>
                              <div className="text-label-sm text-on-surface-variant">{donor.type}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Expenses Tab */}
                  <TabsContent value="expenses">
                    <Card className="bg-surface border-outline-variant/15">
                      <CardHeader>
                        <h2 className="text-title-lg text-on-surface">Expense Breakdown</h2>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {[
                            { label: "Campaign Ops", amount: "₦18.5M", percent: 58 },
                            { label: "Media & Ads", amount: "₦7.2M", percent: 22 },
                            { label: "Events", amount: "₦4.1M", percent: 13 },
                            { label: "Admin", amount: "₦2.3M", percent: 7 }
                          ].map((cat, i) => (
                            <div key={i} className="text-center p-4 bg-surface-container-low rounded-lg">
                              <div className="text-headline-sm text-on-surface font-bold">{cat.amount}</div>
                              <div className="text-label-sm text-on-surface-variant">{cat.label}</div>
                              <div className="text-label-sm text-secondary mt-1">{cat.percent}%</div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          {[
                            { category: "Campaign Operations", description: "Office rent, utilities, staff salaries, transportation", amount: "₦18.5M", progress: 58 },
                            { category: "Media & Advertising", description: "Radio, TV, social media, print materials", amount: "₦7.2M", progress: 22 },
                            { category: "Events & Mobilization", description: "Town halls, rallies, community engagements", amount: "₦4.1M", progress: 13 },
                            { category: "Administrative", description: "Legal, accounting, technology, communications", amount: "₦2.3M", progress: 7 }
                          ].map((item, i) => (
                            <div key={i}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-body-sm text-on-surface font-medium">{item.category}</span>
                                <span className="text-label-md text-on-surface">{item.amount}</span>
                              </div>
                              <div className="text-label-sm text-on-surface-variant mb-2">{item.description}</div>
                              <Progress value={item.progress} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Transparency Tab */}
                  <TabsContent value="transparency">
                    <Card className="bg-surface border-outline-variant/15">
                      <CardHeader>
                        <h2 className="text-title-lg text-on-surface">Our Commitment to Transparency</h2>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { title: "Real-time Updates", description: "Financial reports updated monthly and published publicly", icon: Calendar },
                            { title: "Donor Recognition", description: "All donations over ₦50,000 are acknowledged (unless anonymous)", icon: CheckCircle2 },
                            { title: "Audit Trail", description: "Independent audits conducted quarterly", icon: Building2 },
                            { title: "Open Books", description: "Full financial records available for inspection", icon: Wallet }
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-surface-container-low rounded-lg">
                              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-5 h-5 text-secondary" />
                              </div>
                              <div>
                                <h3 className="text-title-sm text-on-surface font-medium">{item.title}</h3>
                                <p className="text-body-sm text-on-surface-variant">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-center gap-4 pt-4">
                          <Button variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download Financial Reports
                          </Button>
                          <Link href="/audit">
                            <Button variant="gold">
                              View Audit Reports
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Fundraising Progress */}
                <Card className="bg-surface border-outline-variant/15">
                  <CardHeader>
                    <h3 className="text-title-md text-on-surface">Campaign Goal Progress</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-headline-lg text-on-surface font-bold">₦45.2M</div>
                      <div className="text-body-sm text-on-surface-variant">raised of ₦150M goal</div>
                    </div>
                    <Progress value={30} className="h-4 mb-2" />
                    <div className="flex justify-between text-label-sm text-on-surface-variant">
                      <span>30% complete</span>
                      <span>₦104.8M to go</span>
                    </div>
                    <Link href="#">
                      <Button variant="gold" className="w-full mt-6">Contribute Now</Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Monthly Breakdown */}
                <Card className="bg-surface border-outline-variant/15">
                  <CardHeader>
                    <h3 className="text-title-md text-on-surface">Monthly Trend</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { month: "March 2026", amount: "₦8.5M", trend: "up" },
                        { month: "February 2026", amount: "₦6.2M", trend: "up" },
                        { month: "January 2026", amount: "₦5.1M", trend: "up" },
                        { month: "December 2025", amount: "₦3.8M", trend: "neutral" }
                      ].map((month, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-outline-variant/10 last:border-0">
                          <span className="text-body-sm text-on-surface">{month.month}</span>
                          <span className="text-label-md text-on-surface font-medium">{month.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-outline-variant/15">
                  <CardContent className="p-6">
                    <Building2 className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="text-title-md text-on-surface mb-2">Corporate Partnerships</h3>
                    <p className="text-body-sm text-on-surface-variant mb-4">
                      Interested in corporate sponsorship or bulk donations?
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full">Contact Finance Team</Button>
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
