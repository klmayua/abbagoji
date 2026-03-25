"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";

const newsItems = [
  {
    id: 1,
    title: "Alhaji Goji Visits Damaturu Market",
    excerpt: "Engaging with traders and discussing economic development priorities for Zone B. The market visit brought together hundreds of local business owners.",
    category: "Campaign Updates",
    date: "Mar 24, 2026",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Education Plan Unveiled for Zone B Schools",
    excerpt: "Comprehensive strategy to improve educational infrastructure and scholarship opportunities for students across all LGAs.",
    category: "Policy",
    date: "Mar 20, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Healthcare Initiative Launches in Gujba",
    excerpt: "New primary health center project aims to serve 10,000 residents in the LGA with modern facilities and qualified personnel.",
    category: "Healthcare",
    date: "Mar 18, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Infrastructure Development Forum",
    excerpt: "Stakeholders gather to discuss road rehabilitation and rural electrification projects for Yobe East Zone B.",
    category: "Infrastructure",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Youth Empowerment Program Registration Opens",
    excerpt: "Registration begins for skills acquisition and entrepreneurship training for 500 youth across Zone B.",
    category: "Youth",
    date: "Mar 12, 2026",
    readTime: "2 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Women's Cooperative receives Support",
    excerpt: "Over 200 women entrepreneurs receive grants and training to expand their businesses.",
    category: "Empowerment",
    date: "Mar 10, 2026",
    readTime: "3 min read",
    featured: false,
  },
];

const categories = ["All", "Campaign Updates", "Policy", "Healthcare", "Infrastructure", "Youth", "Empowerment"];

export default function NewsPage() {
  const featuredNews = newsItems.find((n) => n.featured);
  const regularNews = newsItems.filter((n) => !n.featured);

  return (
    <div className="min-h-screen bg-surface">
      <GlassNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-surface-container-low">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-label-md text-secondary mb-4 block">Campaign Updates</span>
            <h1 className="text-display-md text-on-surface mb-4">Latest News</h1>
            <p className="text-body-lg text-on-surface-variant">
              Stay informed about our campaign progress, events, and initiatives across Yobe East Zone B.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b border-outline-variant/15">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant" />
              <Input
                type="search"
                placeholder="Search news..."
                className="pl-10 bg-surface-container-low border-0"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={cat === "All" ? "default" : "ghost"}
                  size="sm"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && (
        <section className="py-12">
          <div className="container-editorial">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link href={`/news/${featuredNews.id}`}>
                <div className="grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden bg-surface-container-lowest hover:bg-surface-container transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(9,29,46,0.12)]">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] md:aspect-auto bg-surface-container-high flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-high opacity-50" />
                    <div className="relative text-center">
                      <div className="w-24 h-24 mx-auto mb-2 rounded-full bg-surface-container-lowest flex items-center justify-center">
                        <span className="text-4xl font-bold text-on-surface-variant">
                          {featuredNews.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">[Featured Image]</p>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary text-white">Featured</Badge>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-on-surface-variant mb-4">
                      <Badge variant="secondary">{featuredNews.category}</Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        {featuredNews.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-4" />
                        {featuredNews.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                      {featuredNews.title}
                    </h2>

                    <p className="text-body-md text-on-surface-variant mb-6">
                      {featuredNews.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-medium">
                      Read Full Story
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12">
        <div className="container-editorial">
          <h2 className="text-headline-md text-on-surface mb-8">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/news/${news.id}`}>
                  <div className="rounded-2xl overflow-hidden bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container hover:shadow-[0_20px_40px_-10px_rgba(9,29,46,0.12)]">
                    {/* Image Placeholder */}
                    <div className="aspect-[16/10] bg-surface-container-high flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-high opacity-50" />
                      <div className="relative text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-surface-container-lowest flex items-center justify-center">
                          <span className="text-2xl font-bold text-on-surface-variant">
                            {news.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant">[News Image]</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="absolute top-4 left-4 bg-surface-container-highest/90 backdrop-blur-sm"
                      >
                        {news.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3" />
                          {news.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {news.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {news.title}
                      </h3>

                      <p className="text-sm text-on-surface-variant line-clamp-2">
                        {news.excerpt}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                        Read More
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-surface-container-low">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-headline-md text-on-surface mb-4">Stay Updated</h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              Subscribe to our newsletter to receive the latest campaign news directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-surface"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
