"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-container-low to-surface-container">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-surface-container-high/50 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-editorial pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Campaign Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/15">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-label-md text-on-surface-variant">Senate 2027 Campaign</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-display-lg text-on-surface mb-6"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              Yobe East
            </span>
            {" "}Together
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body-lg text-on-surface-variant mb-4 max-w-2xl mx-auto"
          >
            Alhaji Abba Goji for Senate 2027
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body-md text-on-surface-variant/80 mb-10 max-w-xl mx-auto"
          >
            Yobe East Zone B | Jobs • Education • Healthcare • Infrastructure
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[160px]"
              >
                Learn More
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button
                variant="gold"
                size="lg"
                className="min-w-[160px]"
              >
                Get Involved
              </Button>
            </Link>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { value: "6", label: "LGAs Covered" },
              { value: "200K+", label: "Supporters" },
              { value: "4", label: "Key Priorities" },
              { value: "2027", label: "Election Year" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-surface-container-lowest/50 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-primary mb-1"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-on-surface-variant">Scroll</span>
            <ChevronDown className="size-5 text-on-surface-variant" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
