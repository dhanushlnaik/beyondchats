import {
  ChevronDown,
  Star,
  MoreHorizontal,
  Ticket,
  MoonStar,
  InboxIcon,
  Zap,
} from "lucide-react";
export default function ChatArea() {
  return (
    <section className="flex-1 bg-[#282828] p-4 flex flex-col rounded-xl text-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Messenger</h2>
        <div className="flex items-center space-x-2">
          <button className="hover:bg-white/10 p-1.5 rounded-full text-white/60 hover:text-white">
            <Star className="w-4 h-4" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 transition p-1.5 rounded-full text-white/60 hover:text-white">
            <MoreHorizontal color="white" className="w-4 h-4" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 transition p-1.5 rounded-full text-white/60 hover:text-white">
            <Ticket color="white" className="w-4 h-4" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 transition p-1.5 rounded-full text-white/60 hover:text-white">
            <MoonStar color="white" className="w-4 h-4" />
          </button>
          <button className="bg-white text-[#242424] px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1">
            <InboxIcon color="#242424" className="w-5 h-5" />
            Close
          </button>
        </div>
      </div>
      <div className="p-2  border-t border-white/20"></div>

      {/* Chat Messages */}
      <div className="flex flex-col gap-4 mb-4">
        {/* System message bubble with avatar placeholder */}
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-white/10 rounded-lg" />
          <div className="bg-[#2F2F2F] rounded-xl p-4 text-sm max-w-xl">
            <p className="mb-2">
              This is a demo message. It shows how a customer conversation from
              the Messenger will look in your Inbox. Conversations handled by
              Fin AI Agent will also appear here.
            </p>
            <p>
              Once a channel is installed, all conversations come straight to
              your Inbox, so you can route them to the right team.
            </p>
          </div>
        </div>

        {/* Agent reply */}
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-[#4A90E2] text-white text-xs font-bold flex items-center justify-center">
            M
          </div>
          <div className="flex flex-col">
            <div className="bg-[#2F2F2F] px-3 py-2 rounded-xl text-sm max-w-xs">
              <a href="#" className="text-blue-400 underline">
                Install Messenger
              </a>
            </div>
            <span className="text-xs text-white/50 mt-1">17h</span>
          </div>
        </div>
      </div>

      <div className="mt-auto rounded-lg border border-white/20 bg-[#1e1e1e] p-3">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-sm text-white font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4h12v12H4z" />
              </svg>
              Reply
            </span>
            <ChevronDown className="w-4 h-4 text-white/60" />
            <span className="text-white/40 font-normal ml-2">Messenger</span>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Use CtrlK for shortcuts"
          className="w-full bg-transparent text-white text-sm placeholder-white/40 resize-none h-16 outline-none"
        />

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-2">
          <div className="flex items-center text-white/50 gap-3">
            <Zap className="w-4 h-4 cursor-pointer" />
            <div className="w-px h-4 bg-white/20" />
            <MoreHorizontal className="w-4 h-4 cursor-pointer" />
          </div>

          <button
            className="flex items-center text-sm text-white/40 gap-1 cursor-not-allowed"
            disabled
          >
            Send
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
