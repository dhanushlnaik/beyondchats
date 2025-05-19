import { Mail, MessageCircle, Phone, Plus, Search, Share2 } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="bg-[#08090A] text-white pl-[44px] w-full">
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
    <section className="w-[620px] bg-[#282828] border-r border-white/10 p-4 overflow-y-auto rounded-xl text-white">
           <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Inbox</h2>
        <div className="flex space-x-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <Search className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <InboxItem icon={<MessageCircle className="text-white w-4 h-4" />} label="Messenger - [Demo]" time="2h" />
        <InboxItem icon={<Mail className="text-white w-4 h-4" />} label="Email - [Demo]" time="2h" />
        <InboxItem icon={<Share2 className="text-white w-4 h-4" />} label="WhatsApp - [Demo]" time="2h" />
        <InboxItem icon={<Phone className="text-white w-4 h-4" />} label="Phone - [Demo]" time="2h" />
      </div>
    </section>


        {/* Middle Panel (Chat Area) */}
        <section className="flex-1 bg-[#1B1B1A] p-6 overflow-y-auto flex flex-col rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Messenger</h2>
          <div className="bg-gray-800 p-4 rounded-lg mb-2 text-sm">
            <p className="text-white">
              This is a demo message. It shows how a customer conversation from the Messenger will look in your Inbox.
              <br />
              <br />
              Once a channel is installed, all conversations come straight to your Inbox...
            </p>
            <button className="mt-3 text-blue-400 underline text-sm">Install Messenger</button>
          </div>

          <div className="mt-4">
            <label htmlFor="reply" className="text-sm text-white/70 mb-1 block">Reply</label>
            <textarea
              id="reply"
              className="w-full h-24 bg-gray-900 border border-gray-700 rounded-lg p-2 text-sm text-white resize-none"
              placeholder="Use CtrlK for shortcuts"
            />
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">Send</button>
          </div>
        </section>

        {/* Right Panel (Details Sidebar) */}
        <section className="w-[320px] bg-[#0E0E0E] border-l border-white/10 p-4 overflow-y-auto">
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

function InboxItem({
  label,
  time,
  icon,
}: {
  label: string;
  time: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition rounded-md px-3 py-2 cursor-pointer">
      <div className="flex items-center space-x-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-xs text-white/50">{time}</span>
    </div>
  );
}
