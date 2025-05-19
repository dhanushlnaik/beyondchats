"use client";
import {
  Inbox,
  Search,
  Settings,
  BookOpen,
  Users,
  BarChart,
  Send,
  UserCircle2,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

const menuItems = [
  { icon: Inbox, label: "Inbox", badge: 4 },
  { icon: Sparkles, label: "Fin AI Agent" },
  { icon: BookOpen, label: "Knowledge" },
  { icon: BarChart, label: "Reports" },
  { icon: Send, label: "Outbound" },
  { icon: Users, label: "Contacts" },
];

const bottomItems = [
  { icon: Search, label: "Search" },
  { icon: Settings, label: "Settings" },
  { icon: UserCircle2, label: "Profile" },
];

export function AppSidebar() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        "fixed top-0 left-0 h-full z-50 flex flex-col justify-between transition-all duration-300",
        hovered
          ? "w-49 bg-white/5 backdrop-blur-xl shadow-xl rounded-r-2xl outline-1 outline-white/20"
          : "w-11 bg-[#080909]"
      )}
    >
      <div className="p-2 space-y-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            badge={item.badge}
            expanded={hovered}
          />
        ))}
      </div>

      <div className="p-2 space-y-1 border-t border-white/20">
        {bottomItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            expanded={hovered}
          />
        ))}
      </div>
    </aside>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  badge,
  expanded,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  badge?: number;
  expanded: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors hover:bg-white/10 hover:outline-1 hover:outline-white/10 text-white",
        !expanded && "justify-center"
      )}
    >
      {/* Icon size can be adjusted based on expansion */}
      <Icon className="w-4 h-4 text-white shrink-0" />

      {expanded && (
        <>
          <span className="flex-1 font-medium text-sm">{label}</span>
          {badge && (
            <span className="text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full font-semibold">
              {badge}
            </span>
          )}
        </>
      )}
    </div>
  );
}
