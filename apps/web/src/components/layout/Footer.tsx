import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, Users, Video } from "lucide-react";

const footerLinks = {
  campaign: [
    { label: "About", href: "/about" },
    { label: "Priorities", href: "/priorities" },
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
  ],
  getInvolved: [
    { label: "Volunteer", href: "/get-involved" },
    { label: "Become an Anchor Citizen", href: "/get-involved" },
    { label: "Find Polling Unit", href: "/find-polling-unit" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Press Kit", href: "#" },
    { label: "Campaign Materials", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Share2, href: "#", label: "Twitter" },
  { icon: Users, href: "#", label: "Instagram" },
  { icon: Video, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/15">
      <div className="container-editorial py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">AG</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Alhaji Abba Goji</p>
                <p className="text-xs text-on-surface-variant">Senate 2027 | Yobe East</p>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 max-w-sm leading-relaxed">
              Building Yobe East Together. A campaign focused on Jobs, Education, Healthcare, and Infrastructure for Zone B.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Campaign Links */}
          <div>
            <h3 className="text-label-md text-on-surface-variant mb-4">Campaign</h3>
            <ul className="space-y-3">
              {footerLinks.campaign.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-surface hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h3 className="text-label-md text-on-surface-variant mb-4">Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-surface hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-label-md text-on-surface-variant mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-surface hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-outline-variant/15">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a
                href="mailto:hello@abbagoji.com.ng"
                className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <Mail className="size-4" />
                hello@abbagoji.com.ng
              </a>
              <a
                href="tel:+2348000000000"
                className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <Phone className="size-4" />
                +234 800 000 0000
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <MapPin className="size-4" />
              <span>Damaturu, Yobe State, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-outline-variant/15">
          <div className="bg-surface-container rounded-lg p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-xs text-on-surface-variant">
                Paid for by Alhaji Abba Goji Campaign Committee. Authorized by the Campaign Manager.
              </p>
              <p className="text-xs text-on-surface-variant">
                © 2026 Alhaji Abba Goji for Senate. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
