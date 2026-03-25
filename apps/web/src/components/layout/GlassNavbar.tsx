"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/priorities", label: "Priorities" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/diaspora", label: "Diaspora" },
  { href: "/volunteer", label: "Volunteer" },
];

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header" : "bg-transparent"
      }`}
    >
      <div className="container-editorial">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-primary flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg md:text-xl">AG</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-on-surface-variant font-medium">Alhaji Abba Goji</p>
              <p className="text-sm font-semibold text-on-surface">Senate 2027</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors rounded-md hover:bg-surface-container-low"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="gap-2">
                <Phone className="size-4" />
                Contact
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button variant="gold" size="sm">
                Get Involved
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="size-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="size-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-surface-container-low border-l border-outline-variant/15">
              <div className="flex flex-col gap-6 pt-8">
                <div className="flex items-center gap-3 pb-6 border-b border-outline-variant/15">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AG</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">Alhaji Abba Goji</p>
                    <p className="text-xs text-on-surface-variant">Senate 2027</p>
                  </div>
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-base font-medium text-on-surface hover:text-primary hover:bg-surface-container rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 pt-6 border-t border-outline-variant/15">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Contact
                    </Button>
                  </Link>
                  <Link href="/get-involved" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="gold" className="w-full">
                      Get Involved
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
