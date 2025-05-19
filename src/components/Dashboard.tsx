import { Plus, Search} from "lucide-react";
import ChatArea from "./ChatArea";

const inboxItems = [
  {
    icon: <div className="w-6 h-6 rounded-full bg-[#4A90E2] text-white flex items-center justify-center text-sm font-bold">M</div>,
    label: "Messenger · [Demo]",
    subtext: "Install Messenger",
    time: "2h",
  },
  {
    icon: <div className="w-6 h-6 rounded-full bg-[#00C48C] text-white flex items-center justify-center text-sm font-bold">E</div>,
    label: "Email · [Demo]",
    subtext: "This is a demo email. It shows how email c...",
    time: "2h",
  },
  {
    icon: <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center text-sm font-bold">W</div>,
    label: "WhatsApp · [Demo]",
    subtext: "Set up WhatsApp or social channels",
    time: "2h",
  },
  {
    icon: <div className="w-6 h-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center text-sm font-bold">P</div>,
    label: "Phone · [Demo]",
    subtext: "Set up phone or SMS",
    time: "2h",
  },
];

export default function Dashboard() {
  return (
    <main className="bg-[#08090A] text-white pl-[18px] w-full">
      {/* Top Notification Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1D3153] rounded-lg text-white text-sm font-medium w-full mx-auto mt-4 shadow-sm">
        <span>
          You have <span className="font-bold">14 days</span> left in your Advanced trial
        </span>

        <div className="flex gap-2">
          <button className="bg-white text-[#1D3153] px-4 py-1 rounded-full font-semibold hover:bg-gray-100 transition">
            Buy Intercom
          </button>
          <button className="bg-[#3B2B1C] text-white px-4 py-1 rounded-full hover:bg-[#4c3824] transition">
            Apply for an Early Stage 90% discount
          </button>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="flex h-[calc(100vh-80px)] mt-4 gap-2">
        {/* Left Panel (Inbox Sidebar) */}
    <section className="w-[620px] bg-[#1E1E1E] p-4 overflow-y-auto rounded-xl text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold">Inbox</h2>
        <div className="flex space-x-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <Search className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table Headers */}
      <div className="flex justify-between text-sm text-white/50 px-2 py-1 mb-2">
        <span>4 Open</span>
        <span className="flex items-center gap-1">Last activity <span className="rotate-90">⇅</span></span>
      </div>

      {/* Inbox Items */}
      <div className="space-y-2">
        {inboxItems.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start bg-white/5 hover:bg-white/10 p-3 rounded-lg cursor-pointer transition">
            <div className="flex gap-3">
              {item.icon}
              <div>
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-white/60 text-xs">{item.subtext}</p>
              </div>
            </div>
            <span className="text-xs text-white/50">{item.time}</span>
          </div>
        ))}
      </div>
    </section>

<ChatArea/>

        {/* Right Panel (Details Sidebar) */}
        <section className="w-[320px] bg-[#282828] rounded-xl  p-4 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Details</h3>
          <div className="text-sm space-y-3">
            <div><span className="font-semibold">Assignee:</span> NNM22IS044 DHANUSH</div>
            <div><span className="font-semibold">Team Inbox:</span> Unassigned</div>
            <hr className="border-white/10" />
            <div><span className="font-semibold">Brand:</span> Nitte</div>
            <div><span className="font-semibold">Language:</span> English</div>
            <div><span className="font-semibold">Copilot used:</span> False</div>
          </div>
        </section>
      </div>
    </main>
  );
}

