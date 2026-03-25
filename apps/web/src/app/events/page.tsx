"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";

const events = [
  {
    id: 1,
    title: "Zone B Town Hall Meeting",
    description: "Join Alhaji Goji for an interactive town hall meeting to discuss community priorities and the path forward.",
    date: "Apr 5, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Damaturu Town Hall",
    lga: "Damaturu",
    category: "Town Hall",
    attendees: 500,
    image: null,
  },
  {
    id: 2,
    title: "Youth Empowerment Summit",
    description: "A gathering of young leaders to discuss opportunities in entrepreneurship, skills acquisition, and employment.",
    date: "Apr 12, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Gujba Community Center",
    lga: "Gujba",
    category: "Youth",
    attendees: 300,
    image: null,
  },
  {
    id: 3,
    title: "Women in Business Workshop",
    description: "Training and networking event for women entrepreneurs. Learn about grants, loans, and business development.",
    date: "Apr 18, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "Gulani LGA Secretariat",
    lga: "Gulani",
    category: "Empowerment",
    attendees: 250,
    image: null,
  },
  {
    id: 4,
    title: "Campaign Rally - Zone B",
    description: "Major campaign rally featuring Alhaji Goji and special guests. Come show your support for progress.",
    date: "Apr 25, 2026",
    time: "3:00 PM - 7:00 PM",
    location: "Zone B Stadium",
    lga: "Damaturu",
    category: "Rally",
    attendees: 5000,
    image: null,
  },
  {
    id: 5,
    title: "Healthcare Outreach Program",
    description: "Free medical checkups, vaccination drives, and health education. Open to all residents.",
    date: "May 2, 2026",
    time: "8:00 AM - 4:00 PM",
    location: "Buni Yadi Primary Health Center",
    lga: "Gujba",
    category: "Healthcare",
    attendees: 1000,
    image: null,
  },
  {
    id: 6,
    title: "Farmers' Cooperative Meeting",
    description: "Discussion on agricultural support programs, fertilizer distribution, and market access.",
    date: "May 10, 2026",
    time: "1:00 PM - 4:00 PM",
    location: "Various Locations",
    lga: "All Zone B",
    category: "Agriculture",
    attendees: 800,
    image: null,
  },
];

const categories = ["All", "Town Hall", "Youth", "Empowerment", "Rally", "Healthcare", "Agriculture"];
const lgas = ["All", "Damaturu", "Gujba", "Gulani", "Buni Yadi", "Biu"];

export default function EventsPage() {
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
            <span className="text-label-md text-secondary mb-4 block">Get Involved</span>
            <h1 className="text-display-md text-on-surface mb-4">Upcoming Events</h1>
            <p className="text-body-lg text-on-surface-variant">
              Join us at events across Yobe East Zone B. Together, we can build a better future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-outline-variant/15">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-96">
              <Input
                type="search"
                placeholder="Search events..."
                className="bg-surface-container-low border-0"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="size-4" />
                Filter
              </Button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
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
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-surface-container-lowest hover:bg-surface-container transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(9,29,46,0.12)]"
              >
                {/* Image */}
                <div className="aspect-[16/9] bg-surface-container-high flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-high opacity-50" />
                  <div className="relative text-center">
                    <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-surface-container-lowest flex items-center justify-center">
                      <span className="text-3xl font-bold text-on-surface-variant">
                        {event.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">[Event Image]</p>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {event.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-3">
                    <Calendar className="size-4 text-primary" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-on-surface-variant mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>{event.location}, {event.lga}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="size-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>

                  <Button className="w-full group/btn">
                    RSVP Now
                    <ArrowRight className="size-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Host Event CTA */}
      <section className="py-16 bg-surface-container-low">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-headline-md text-on-surface mb-4">Want to Host an Event?</h2>
              <p className="text-body-md text-on-surface-variant mb-6">
                Are you interested in organizing a campaign event in your community? We provide support for house meetings, town halls, and community gatherings.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/get-involved">
                  <Button>Host an Event</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
