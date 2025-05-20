import ChatArea from "./ChatArea";
import Inbox from "./Inbox";
import RightPanel from "./RightPanel";

export default function Dashboard() {
  return (
    <main className="bg-[#08090A] text-white pl-[18px] w-full">
      {/* Top Notification Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1D3153] rounded-lg text-white text-sm font-medium w-full mx-auto mt-4 shadow-sm">
        <span>
          You have <span className="font-bold">14 days</span> left in your
          Advanced trial
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
        <Inbox />

        <ChatArea />

        {/* Right Panel (Details Sidebar) */}
        <RightPanel />
      </div>
    </main>
  );
}
