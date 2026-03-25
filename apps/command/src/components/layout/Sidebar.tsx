"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Map,
  BarChart3,
  UserCog,
  Radio,
  Eye,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Voters", href: "/voters", icon: Users, badge: "200K" },
  { name: "Interactions", href: "/interactions", icon: MessageSquare, badge: "1.2K" },
  { name: "Map", href: "/map", icon: Map },
  {
    name: "Users",
    href: "/users",
    icon: UserCog,
    badge: "2.4K",
    children: [
      { name: "All Users", href: "/users" },
      { name: "Roles & Hierarchy", href: "/users/roles" },
    ],
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    children: [
      { name: "Sentiment", href: "/analytics/sentiment" },
      { name: "Demographics", href: "/analytics/demographics" },
      { name: "Performance", href: "/analytics/performance" },
    ],
  },
  {
    name: "Team",
    href: "/team",
    icon: Users,
    children: [
      { name: "Canvassers", href: "/team/canvassers" },
      { name: "Anchor Citizens", href: "/team/anchors" },
      { name: "Coordinators", href: "/team/coordinators" },
    ],
  },
  {
    name: "Communications",
    href: "/communications",
    icon: Radio,
    children: [
      { name: "WhatsApp", href: "/communications/whatsapp" },
      { name: "SMS", href: "/communications/sms" },
    ],
  },
  {
    name: "Intelligence",
    href: "/intelligence",
    icon: Eye,
    children: [
      { name: "Opposition", href: "/intelligence/opposition" },
      { name: "Sentiment", href: "/intelligence/sentiment" },
    ],
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    children: [
      { name: "Profile", href: "/settings/profile" },
      { name: "Team", href: "/settings/team" },
      { name: "Integrations", href: "/settings/integrations" },
    ],
  },
];

function NavItem({
  item,
  collapsed,
}: {
  item: (typeof navigation)[0];
  collapsed: boolean;
}) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;

  if (collapsed) {
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-lg transition-colors",
          isActive
            ? "bg-primary/10 text-primary"
            : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
        )}
        title={item.name}
      >
        <Icon className="size-5" />
      </Link>
    );
  }

  return (
    <div className="space-y-1">
      <Link
        href={item.href}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            setExpanded(!expanded);
          }
        }}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
          isActive
            ? "bg-primary/10 text-primary"
            : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
        )}
      >
        <Icon className="size-5 flex-shrink-0" />
        <span className="flex-1 text-sm font-medium truncate">{item.name}</span>
        {item.badge && (
          <span className="px-2 py-0.5 text-xs rounded-full bg-surface-container-high text-on-surface-variant">
            {item.badge}
          </span>
        )}
        {hasChildren && (
          <ChevronDown
            className={cn(
              "size-4 transition-transform",
              expanded ? "rotate-180" : ""
            )}
          />
        )}
      </Link>

      {/* Submenu */}
      {hasChildren && expanded && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-6 space-y-1 border-l border-outline-variant/30 pl-3"
          >
            {item.children!.map((child) => {
              const isChildActive = pathname === child.href;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm rounded-lg transition-colors",
                    isChildActive
                      ? "bg-primary/10 text-primary"
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                  )}
                >
                  {child.name}
                </Link>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col border-r border-outline-variant/15 bg-surface-container-low"
    >
      {/* Logo Area */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-outline-variant/15">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3",
            collapsed ? "justify-center w-full" : ""
          )}
        >
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">AG</span>
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-on-surface">URADI360</p>
              <p className="text-xs text-on-surface-variant">Command Center</p>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navigation.map((item) => (
          <NavItem key={item.name} item={item} collapsed={collapsed} />
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="p-3 border-t border-outline-variant/15">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "flex items-center gap-2 w-full px-3 py-2 text-sm text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container-high transition-colors",
            collapsed ? "justify-center" : ""
          )}
        >
          {collapsed ? (
            <ChevronRight className="size-5" />
          ) : (
            <>
              <ChevronLeft className="size-5" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
