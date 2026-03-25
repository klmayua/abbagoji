"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HandHeart, Megaphone, ArrowRight, Users, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const involvementOptions = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Join our team of canvassers and organizers. Help spread the message door-to-door.",
    cta: "Sign Up",
    href: "/get-involved",
    variant: "default" as const,
  },
  {
    icon: Megaphone,
    title: "Become an Anchor Citizen",
    description: "Spread the word in your network. Be a voice for positive change in your community.",
    cta: "Join Now",
    href: "/get-involved",
    variant: "gold" as const,
  },
];

export function GetInvolvedCTA() {
  return (
    <section className="section-padding bg-surface-container-low">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-label-md text-primary mb-4 block">Join The Movement</span>
          <h2 className="text-headline-lg text-on-surface mb-4">Get Involved</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Change happens when we work together. Here's how you can make a difference.
          </p>
        </motion.div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {involvementOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative p-8 rounded-2xl bg-surface-container-lowest transition-all duration-300 hover:ambient-shadow"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-on-surface mb-3">{option.title}</h3>
                <p className="text-body-md text-on-surface-variant mb-6">{option.description}</p>

                {/* CTA */}
                <Link href={option.href}>
                  <Button
                    variant={option.variant}
                    className="group/btn gap-2"
                  >
                    {option.cta}
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-on-surface-variant mb-6">Other ways to support the campaign</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Share2 className="size-4" />
              Share on Social Media
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Users className="size-4" />
              Host a House Meeting
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
