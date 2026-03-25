"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Jobs Created", description: "Through Resident Cement and affiliated organizations" },
  { value: 50, suffix: "+", label: "Schools Supported", description: "Educational initiatives across Zone B" },
  { value: 6, suffix: "", label: "LGAs Covered", description: "Complete coverage of Yobe East Zone B" },
  { value: 200000, suffix: "+", label: "Lives Impacted", description: "Direct and indirect community beneficiaries" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(count)}{suffix}
    </span>
  );
}

export function ImpactStats() {
  return (
    <section className="section-padding bg-surface-container-high">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-label-md text-secondary mb-4 block">By The Numbers</span>
          <h2 className="text-headline-lg text-on-surface mb-4">Our Impact So Far</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Results speak louder than promises. Here's what we've accomplished together.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-surface-container-lowest"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-on-surface mb-2">{stat.label}</h3>
              <p className="text-sm text-on-surface-variant">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-on-surface-variant/70 mt-12"
        >
          Through Resident Cement and affiliated organizations
        </motion.p>
      </div>
    </section>
  );
}
