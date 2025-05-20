"use client";
import React from "react";
import { InboxIcon, Plus, Search, SortDesc } from "lucide-react";
import { MoreHorizontal } from "lucide-react"; // You can use heroicons or others too
import { useState } from "react";

const inboxItems = [
  {
    icon: (
      <div className="w-6 h-6 rounded-full bg-[#4A90E2] text-white flex items-center justify-center text-sm font-bold">
        M
      </div>
    ),
    label: "Messenger · [Demo]",
    subtext: "Install Messenger",
    time: "2h",
  },
  {
    icon: (
      <div className="w-6 h-6 rounded-full bg-[#00C48C] text-white flex items-center justify-center text-sm font-bold">
        E
      </div>
    ),
    label: "Email · [Demo]",
    subtext: "This is a demo email. It shows how email c...",
    time: "2h",
  },
  {
    icon: (
      <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center text-sm font-bold">
        W
      </div>
    ),
    label: "WhatsApp · [Demo]",
    subtext: "Set up WhatsApp or social channels",
    time: "2h",
  },
  {
    icon: (
      <div className="w-6 h-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center text-sm font-bold">
        P
      </div>
    ),
    label: "Phone · [Demo]",
    subtext: "Set up phone or SMS",
    time: "2h",
  },
];

const Inbox = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="w-[500px] bg-[#1E1E1E] p-4 overflow-y-auto rounded-xl text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Your inbox</h2>
        <div className="flex space-x-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <Search className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-2  border-t border-white/20">
        {/* Table Headers */}
        <div className="flex justify-between text-sm font-bold text-white px-2 py-1 mb-2">
          <span>4 Open</span>

          <span className="flex items-center gap-2">
            <span>Last activity</span>

            {/* Vertical Separator */}
            <div className="w-px h-4 bg-white/30" />

            {/* Accurate Icon */}
            <SortDesc className="w-4 h-4 text-white/70" />
          </span>
        </div>
      </div>

      {/* Inbox Items */}
      <div className="space-y-0 divide-y divide-white/10">
        {inboxItems.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative px-3 py-3 cursor-pointer transition ${
                isHovered
                  ? "border border-white/20 rounded-xl bg-white/5"
                  : "hover:bg-white/15 hover:rounded-xl"
              }`}
            >
              {/* Top-right Actions */}
              <div className="absolute top-2 right-3 flex items-center space-x-2">
                {isHovered && (
                  <button className="text-white/60 hover:text-white">
                    <InboxIcon className="w-4 h-4" />
                  </button>
                )}
                <button className="text-white/60 hover:text-white">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex justify-between items-start gap-3 pr-10">
                <div className="flex gap-3">
                  {item.icon}
                  <div>
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-white/70 text-xs mt-0.5">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              </div>

              {/* Time at Bottom Right */}
              <div className="flex justify-end">
                <span className="text-xs text-white/50">{item.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Inbox;
