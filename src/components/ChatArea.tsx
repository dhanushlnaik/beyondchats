import { ChevronDown, Send } from "lucide-react";

export default function ChatArea() {
  return (
    <section className="flex-1 bg-[#1E1E1E] p-6 overflow-y-auto flex flex-col rounded-xl text-white">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-6">Messenger</h2>

      {/* Message Bubble */}
      <div className="flex flex-col gap-4 mb-6">
        {/* System message */}
        <div className="bg-[#2F2F2F] rounded-xl p-4 text-sm text-white">
          <p className="mb-2">
            This is a demo message. It shows how a customer conversation from the Messenger will look in your Inbox.
            Conversations handled by Fin AI Agent will also appear here.
          </p>
          <p>
            Once a channel is installed, all conversations come straight to your Inbox, so you can route them to the
            right team.
          </p>
        </div>

        {/* Message from agent */}
        <div className="flex items-start gap-2">
          {/* Avatar Initial */}
          <div className="w-6 h-6 rounded-full bg-[#4A90E2] text-white text-xs font-bold flex items-center justify-center">
            M
          </div>

          <div className="bg-[#2F2F2F] px-3 py-2 rounded-xl max-w-lg text-sm">
            <a href="#" className="text-blue-400 underline">Install Messenger</a>
            <div className="text-xs text-white/50 mt-1">2h</div>
          </div>
        </div>
      </div>

      {/* Reply Box */}
      <div className="mt-auto border-t border-white/10 pt-4">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="reply" className="text-sm text-white/60 font-medium">Reply</label>
          <div className="flex items-center gap-1 text-sm text-white/40 cursor-pointer">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div className="relative">
          <textarea
            id="reply"
            placeholder="Use CtrlK for shortcuts"
            className="w-full h-24 resize-none bg-[#2A2A2A] border border-[#444] rounded-lg p-3 text-sm text-white"
          />

          <button className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-1.5 rounded flex items-center gap-1 text-sm">
            Send <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
