"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, GraduationCap, Heart, Road, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Briefcase,
    title: "Jobs",
    subtitle: "Economic Development",
    description: "Federal employment programs, small business support, agricultural modernization, and youth entrepreneurship initiatives.",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "Scholarships & Schools",
    description: "Scholarships for children, school improvements, skills training programs, and educational infrastructure development.",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Healthcare",
    subtitle: "Primary Health Centers",
    description: "Primary health centers in every ward, maternal health services, and accessible healthcare for all communities.",
    color: "tertiary",
  },
  {
    icon: Road,
    title: "Infrastructure",
    subtitle: "Roads & Connectivity",
    description: "Roads that connect communities, clean water access, electricity expansion, and modern infrastructure.",
    color: "primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FourPillars() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-label-md text-secondary mb-4 block">Our Priorities</span>
          <h2 className="text-headline-lg text-on-surface mb-4">Four Commitments to Transform Yobe East</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            These four pillars guide our campaign and will drive our work in the Senate
          </p>
        </motion.div>

        {/* Pillars Grid - Asymmetric Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className={`group relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] ${
                  index === 3 ? "md:col-span-2 lg:col-span-1" : ""
                } ${
                  pillar.color === "primary"
                    ? "bg-surface-container-low hover:bg-surface-container"
                    : pillar.color === "secondary"
                    ? "bg-secondary-fixed/30 hover:bg-secondary-fixed/40"
                    : "bg-tertiary-fixed/30 hover:bg-tertiary-fixed/40"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    pillar.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : pillar.color === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-tertiary/10 text-tertiary"
                  }`}
                >
                  <Icon className="size-7" />
                </div>

                {/* Content */}
                <span
                  className={`text-label-md mb-2 block ${
                    pillar.color === "primary"
                      ? "text-primary"
                      : pillar.color === "secondary"
                      ? "text-secondary"
                      : "text-tertiary"
                  }`}
                >
                  {pillar.subtitle}
                </span>

                <h3 className="text-xl font-semibold text-on-surface mb-3">{pillar.title}</h3>

                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={`/priorities#${pillar.title.toLowerCase()}`}
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    pillar.color === "primary"
                      ? "text-primary hover:text-primary-container"
                      : pillar.color === "secondary"
                      ? "text-secondary hover:text-secondary-container"
                      : "text-tertiary hover:text-tertiary-container"
                  }`}
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-${
                    pillar.color
                  }/20`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/priorities">
            <Button variant="outline" size="lg" className="gap-2">
              View All Priorities
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
