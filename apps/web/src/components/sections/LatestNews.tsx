"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    id: 1,
    title: "Alhaji Goji Visits Damaturu Market",
    excerpt: "Engaging with traders and discussing economic development priorities for Zone B.",
    category: "Campaign Updates",
    date: "Mar 24, 2026",
    readTime: "3 min read",
    image: null,
  },
  {
    id: 2,
    title: "Education Plan Unveiled for Zone B Schools",
    excerpt: "Comprehensive strategy to improve educational infrastructure and scholarship opportunities.",
    category: "Policy",
    date: "Mar 20, 2026",
    readTime: "5 min read",
    image: null,
  },
  {
    id: 3,
    title: "Healthcare Initiative Launches in Gujba",
    excerpt: "New primary health center project aims to serve 10,000 residents in the LGA.",
    category: "Healthcare",
    date: "Mar 18, 2026",
    readTime: "4 min read",
    image: null,
  },
];

export function LatestNews() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-label-md text-secondary mb-4 block">Campaign Updates</span>
            <h2 className="text-headline-lg text-on-surface mb-2">Latest News</h2>
            <p className="text-body-md text-on-surface-variant">Stay informed about our campaign progress</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/news">
              <Button variant="ghost" className="group gap-2">
                View All News
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/news/${news.id}`}>
                <div className="rounded-2xl overflow-hidden bg-surface-container-low transition-all duration-300 hover:bg-surface-container hover:ambient-shadow-sm">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] bg-surface-container-high flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-high opacity-50" />
                    <div className="relative text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-surface-container-lowest flex items-center justify-center">
                        <span className="text-2xl font-bold text-on-surface-variant">{news.title.charAt(0)}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant">[News Image]</p>
                    </div>

                    {/* Category Badge */}
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
  );
}
