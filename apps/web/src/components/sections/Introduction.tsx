"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Introduction() {
  return (
    <section className="section-padding bg-surface-container-low">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container">
              {/* Placeholder for candidate photo */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-container to-surface-container-high">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">AG</span>
                  </div>
                  <p className="text-on-surface-variant">[Candidate Photo]</p>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary-fixed/30 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <span className="text-label-md text-secondary mb-4 block">As-Salamu Alaykum</span>

            <h2 className="text-headline-lg text-on-surface mb-6">
              I am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                Alhaji Abba Goji.
              </span>
            </h2>

            <div className="space-y-4 text-body-md text-on-surface-variant mb-8">
              <p>
                For years, I have built businesses. Created jobs. Contributed to our economy as Vice Chairman of Resident Cement.
              </p>
              <p>
                Now, I want to build something bigger: A better Yobe East for all of us.
              </p>
              <p>
                This campaign is about jobs for our youth. Education for our children. Healthcare in every ward. Roads that connect our communities.
              </p>
            </div>

            <Link href="/about">
              <Button variant="ghost" className="group gap-2 px-0 hover:bg-transparent hover:text-primary">
                Read Full Biography
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
