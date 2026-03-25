import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, MessageSquare, Calendar, Heart, TrendingUp, MapPin, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function DiasporaPage() {
  return (
    <>
      <GlassNavbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-surface via-surface-container-low to-surface-container">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container-editorial relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/10 text-tertiary mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Global Community</span>
              </div>
              <h1 className="text-display-lg text-on-surface mb-6">
                Yobe East <span className="text-tertiary">Diaspora</span> Connect
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
                Join our global network of Yobe East indigenes worldwide. Stay connected,
                contribute to development, and help shape the future of our homeland.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/get-involved">
                  <Button variant="gold" size="lg">Join Diaspora Network</Button>
                </Link>
                <Link href="/diaspora/engagement">
                  <Button variant="outline" size="lg">Engagement Opportunities</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-surface-container-low">
          <div className="container-editorial">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "5,000+", label: "Diaspora Members", icon: Users },
                { value: "25+", label: "Countries", icon: Globe },
                { value: "₦500M", label: "Remittances Tracked", icon: TrendingUp },
                { value: "150+", label: "Projects Funded", icon: Heart }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-headline-md text-on-surface font-bold">{stat.value}</div>
                  <div className="text-body-sm text-on-surface-variant">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Areas */}
        <section className="py-20 bg-surface">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-headline-lg text-on-surface mb-4">Ways to Engage</h2>
              <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Whether you're across the border or across the ocean, there are many ways
                to contribute to Yobe East's development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Investment Partnerships",
                  icon: Briefcase,
                  description: "Explore business opportunities and investment partnerships in Yobe East.",
                  action: "Learn More"
                },
                {
                  title: "Skills Transfer",
                  icon: GraduationCap,
                  description: "Share your professional expertise through virtual mentoring and training programs.",
                  action: "Register Skills"
                },
                {
                  title: "Community Projects",
                  icon: Heart,
                  description: "Fund or participate in community development projects in your hometown.",
                  action: "View Projects"
                },
                {
                  title: "Networking Events",
                  icon: Calendar,
                  description: "Connect with fellow diaspora members at our regional meetups and events.",
                  action: "See Events"
                },
                {
                  title: "Advocacy",
                  icon: MessageSquare,
                  description: "Advocate for Yobe East's interests in your host country.",
                  action: "Join Advocacy"
                },
                {
                  title: "Local Chapters",
                  icon: MapPin,
                  description: "Join or start a Yobe East diaspora chapter in your city.",
                  action: "Find Chapter"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-surface-container-low border-outline-variant/15 hover:border-primary/30 transition-all group">
                    <CardContent className="p-6">
                      <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-title-md text-on-surface mb-2">{item.title}</h3>
                      <p className="text-body-sm text-on-surface-variant mb-4">{item.description}</p>
                      <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                        {item.action} →
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Chapters */}
        <section className="py-20 bg-surface-container-low">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-headline-lg text-on-surface mb-4">Diaspora Chapters</h2>
              <p className="text-body-md text-on-surface-variant">Connect with Yobe East communities around the world.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { city: "London", country: "UK", members: "850+" },
                { city: "New York", country: "USA", members: "620+" },
                { city: "Riyadh", country: "Saudi Arabia", members: "1,200+" },
                { city: "Dubai", country: "UAE", members: "480+" },
                { city: "Abuja", country: "Nigeria", members: "350+" },
                { city: "Lagos", country: "Nigeria", members: "420+" },
                { city: "Kano", country: "Nigeria", members: "280+" },
                { city: "Kaduna", country: "Nigeria", members: "310+" }
              ].map((chapter, index) => (
                <motion.div
                  key={chapter.city}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-surface rounded-lg p-4 border border-outline-variant/15 text-center hover:border-primary/30 transition-all cursor-pointer"
                >
                  <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-title-sm text-on-surface font-medium">{chapter.city}</div>
                  <div className="text-label-sm text-on-surface-variant">{chapter.country}</div>
                  <div className="text-label-sm text-primary mt-1">{chapter.members} members</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-tertiary/10 to-primary/10">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-headline-lg text-on-surface mb-4">Ready to Connect?</h2>
              <p className="text-body-md text-on-surface-variant mb-8">
                Join thousands of Yobe East indigenes worldwide who are contributing to
                our homeland's development. Register now to access exclusive diaspora resources.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/get-involved">
                  <Button variant="gold" size="lg" className="min-w-[200px]">Register as Diaspora Member</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="min-w-[200px]">Contact Diaspora Coordinator</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
