"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Globe, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";

const newsArticles = [
  {
    id: 1,
    title: "Alhaji Goji Visits Damaturu Market",
    content: `
      Alhaji Abba Goji, the All Progressives Congress (APC) senatorial candidate for Yobe East Zone B, paid a visit to Damaturu Central Market to engage with traders and discuss economic development priorities for the zone.

      The visit, which lasted several hours, saw the candidate moving from stall to stall, listening to the concerns of market vendors and business owners. Key issues raised included the need for improved infrastructure, better security, access to credit facilities, and reduced market fees.

      "Markets are the lifeblood of our economy," Alhaji Goji stated. "When our traders succeed, our entire community benefits. This is why I am committed to advocating for policies that support small businesses and create an enabling environment for commerce to thrive."

      The traders expressed appreciation for the visit, noting that it was rare for political candidates to engage directly with them in their places of business. Many pledged their support for the campaign, citing Alhaji Goji's track record of supporting local businesses through his various enterprises.

      The campaign team announced plans for a comprehensive economic development blueprint for Zone B, which will include provisions for market modernization, trader training programs, and access to microfinance.
    `,
    category: "Campaign Updates",
    date: "Mar 24, 2026",
    readTime: "3 min read",
    author: "Campaign Communications Team",
  },
  {
    id: 2,
    title: "Education Plan Unveiled for Zone B Schools",
    content: `Detailed education plan content...`,
    category: "Policy",
    date: "Mar 20, 2026",
    readTime: "5 min read",
    author: "Policy Team",
  },
  {
    id: 3,
    title: "Healthcare Initiative Launches in Gujba",
    content: `Healthcare initiative details...`,
    category: "Healthcare",
    date: "Mar 18, 2026",
    readTime: "4 min read",
    author: "Healthcare Committee",
  },
  {
    id: 4,
    title: "Infrastructure Development Forum",
    content: `Infrastructure forum details...`,
    category: "Infrastructure",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    author: "Infrastructure Team",
  },
  {
    id: 5,
    title: "Youth Empowerment Program Registration Opens",
    content: `Youth program details...`,
    category: "Youth",
    date: "Mar 12, 2026",
    readTime: "2 min read",
    author: "Youth Directorate",
  },
  {
    id: 6,
    title: "Women's Cooperative receives Support",
    content: `Women empowerment details...`,
    category: "Empowerment",
    date: "Mar 10, 2026",
    readTime: "3 min read",
    author: "Women's Wing",
  },
];

const relatedNews = [
  {
    id: 2,
    title: "Education Plan Unveiled for Zone B Schools",
    category: "Policy",
    date: "Mar 20, 2026",
  },
  {
    id: 3,
    title: "Healthcare Initiative Launches in Gujba",
    category: "Healthcare",
    date: "Mar 18, 2026",
  },
  {
    id: 4,
    title: "Infrastructure Development Forum",
    category: "Infrastructure",
    date: "Mar 15, 2026",
  },
];

interface NewsArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { id } = await params;
  const article = newsArticles.find((n) => n.id === parseInt(id));

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface">
      <GlassNavbar />

      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="container-editorial max-w-4xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/news">
              <Button variant="ghost" className="group gap-2 mb-8">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Back to News
              </Button>
            </Link>
          </motion.div>

          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-primary/10 text-primary">{article.category}</Badge>
            <h1 className="text-display-sm text-on-surface mb-6">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">AG</span>
                </div>
                <div>
                  <p className="font-medium text-on-surface">{article.author}</p>
                  <p>Campaign Team</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-4" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video bg-surface-container-high rounded-2xl flex items-center justify-center relative overflow-hidden mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-high opacity-50" />
            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto mb-2 rounded-full bg-surface-container-lowest flex items-center justify-center">
                <span className="text-4xl font-bold text-on-surface-variant">
                  {article.title.charAt(0)}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">[Article Featured Image]</p>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-outline-variant/15"
          >
            <p className="text-sm font-medium text-on-surface mb-4">Share this article</p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Globe className="size-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <LinkIcon className="size-4" />
                Copy Link
              </Button>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-surface-container-low">
        <div className="container-editorial">
          <h2 className="text-headline-md text-on-surface mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/news/${news.id}`}>
                  <div className="rounded-xl overflow-hidden bg-surface-container-lowest p-6 transition-all duration-300 hover:bg-surface-container hover:shadow-[0_20px_40px_-10px_rgba(9,29,46,0.12)]">
                    <Badge variant="secondary" className="mb-3">{news.category}</Badge>
                    <h3 className="text-lg font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant">{news.date}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
