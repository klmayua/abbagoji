import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Download, Share2 } from "lucide-react";
import Link from "next/link";

export default function ManifestoPage() {
  return (
    <>
      <GlassNavbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-surface via-surface-container-low to-surface-container">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Official Campaign Document</span>
              </div>
              <h1 className="text-display-lg text-on-surface mb-6">
                Campaign <span className="text-primary">Manifesto</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
                A comprehensive blueprint for building Yobe East. Our vision, priorities,
                and actionable strategies for transformative leadership.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="gold" size="lg" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Manifesto
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Manifesto Content */}
        <section className="py-20 bg-surface">
          <div className="container-editorial">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-headline-lg text-on-surface mb-6">Our Vision for Yobe East</h2>
                <div className="prose prose-lg max-w-none text-on-surface-variant">
                  <p className="mb-4">
                    As your representative in the Senate, I envision a Yobe East that is prosperous,
                    educated, healthy, and connected. This manifesto outlines our commitment to
                    delivering measurable results through strategic federal intervention.
                  </p>
                  <p>
                    Together, we will build on the foundation laid by our forebears while embracing
                    the opportunities of the modern age. This is not just a campaign promise—this
                    is a covenant with every citizen of Yobe East Zone B.
                  </p>
                </div>
              </motion.div>

              {/* Four Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-16"
              >
                <h2 className="text-headline-lg text-on-surface mb-8">The Four Pillars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Economic Development",
                      icon: "💼",
                      description: "Creating sustainable jobs through federal employment programs, small business support, agricultural modernization, and youth entrepreneurship initiatives.",
                      commitments: [
                        "Secure federal funding for job creation programs",
                        "Establish microfinance schemes for SMEs",
                        "Modernize agricultural value chains",
                        "Support skills training and apprenticeships"
                      ]
                    },
                    {
                      title: "Education",
                      icon: "📚",
                      description: "Transforming education through infrastructure investment, scholarship programs, teacher training, and digital learning access.",
                      commitments: [
                        "Renovate and equip 100+ schools",
                        "Establish scholarship fund for 1,000 students",
                        "Train 500+ teachers annually",
                        "Provide digital learning devices"
                      ]
                    },
                    {
                      title: "Healthcare",
                      icon: "🏥",
                      description: "Ensuring quality healthcare through facility upgrades, equipment provision, staff training, and community health programs.",
                      commitments: [
                        "Upgrade 15 primary health centers",
                        "Equip hospitals with modern diagnostic tools",
                        "Recruit and retain medical professionals",
                        "Launch mobile clinic services"
                      ]
                    },
                    {
                      title: "Infrastructure",
                      icon: "🛣️",
                      description: "Building the backbone of progress through road construction, water projects, electricity access, and digital connectivity.",
                      commitments: [
                        "Construct and rehabilitate 200km of roads",
                        "Provide clean water access to 50,000 households",
                        "Expand rural electrification",
                        "Deploy broadband infrastructure"
                      ]
                    }
                  ].map((pillar, index) => (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/15 hover:border-primary/30 transition-colors"
                    >
                      <div className="text-3xl mb-4">{pillar.icon}</div>
                      <h3 className="text-title-lg text-on-surface mb-3">{pillar.title}</h3>
                      <p className="text-body-md text-on-surface-variant mb-4">{pillar.description}</p>
                      <ul className="space-y-2">
                        {pillar.commitments.map((commitment, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                            <span className="text-primary mt-1">✓</span>
                            {commitment}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Implementation Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-headline-lg text-on-surface mb-8">100-Day Action Plan</h2>
                <div className="space-y-6">
                  {[
                    { phase: "Days 1-30", focus: "Foundation", items: ["Constituency office establishment", "Stakeholder engagement tour", "Priority needs assessment"] },
                    { phase: "Days 31-60", focus: "Legislative Agenda", items: ["First bills introduction", "Committee assignments optimization", "Federal agency meetings"] },
                    { phase: "Days 61-100", focus: "Quick Wins", items: ["Emergency projects initiation", "Scholarship program launch", "Health outreach programs"] }
                  ].map((phase, index) => (
                    <div key={phase.phase} className="flex gap-4">
                      <div className="flex-shrink-0 w-24 text-right">
                        <span className="text-label-md text-primary font-semibold">{phase.phase}</span>
                      </div>
                      <div className="flex-shrink-0 w-px bg-outline-variant/30 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                      </div>
                      <div className="flex-1 pb-6">
                        <h4 className="text-title-md text-on-surface mb-2">{phase.focus}</h4>
                        <ul className="space-y-1">
                          {phase.items.map((item, i) => (
                            <li key={i} className="text-body-sm text-on-surface-variant">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center"
              >
                <h2 className="text-headline-md text-on-surface mb-4">Join Us in Building Yobe East</h2>
                <p className="text-body-md text-on-surface-variant mb-6 max-w-2xl mx-auto">
                  This manifesto is a living document that will evolve with your input.
                  Share your ideas and let's build the future together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/get-involved">
                    <Button variant="gold" size="lg">Get Involved</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg">Share Your Ideas</Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
