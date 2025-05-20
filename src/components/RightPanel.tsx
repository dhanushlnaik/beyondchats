import {
  Lock,
  ShieldQuestion,
  ScrollText,
  FileQuestion,
  PlayCircle,
} from "lucide-react";

const RightPanel = () => {
  return (
    <section className="w-[560px] bg-[#1e1e1e] text-white flex flex-col rounded-xl overflow-hidden border border-white/10">
      {/* Top Nav */}
      <div className="flex items-center px-4 pt-4">
        <button className="text-sm text-white/70 mr-6">Details</button>
        <button className="text-sm text-white border-b-2 border-orange-500 pb-1">
          Copilot
        </button>
        <div className="ml-auto text-white/50 cursor-pointer">⚙</div>
      </div>

      {/* Copilot Info Section */}
      <div className="flex-1 p-6 space-y-6 text-sm">
        <div className="text-center space-y-1">
          <h1 className="text-white font-semibold text-lg">
            Copilot is here to help.
          </h1>
          <p className="text-white/80">Just ask.</p>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <ShieldQuestion className="w-5 h-5 mt-0.5 text-white/50" />
            <span className="text-white/80">
              Copilot can find answers to customer queries by searching your
              team’s support content and past conversations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ScrollText className="w-5 h-5 mt-0.5 text-white/50" />
            <span className="text-white/80">
              It can help you figure out what to do, using your team’s internal
              articles.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FileQuestion className="w-5 h-5 mt-0.5 text-white/50" />
            <span className="text-white/80">
              All it needs is{" "}
              <a className="underline cursor-pointer">knowledge</a>. The more
              content you give, the more expert Copilot becomes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Lock className="w-5 h-5 mt-0.5 text-white/50" />
            <span className="text-white/80">
              Copilot conversations are only visible to you.
            </span>
          </li>
        </ul>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full shadow-sm">
            <PlayCircle className="w-5 h-5" />
            Copilot explained
          </button>
        </div>
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center bg-[#1e1e1e] rounded-full px-4 py-2 border border-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-sm">
          <input
            type="text"
            placeholder="Ask a question..."
            className="bg-transparent flex-1 text-white text-sm placeholder-white/40 outline-none"
          />
          <button className="text-white/60">
            <svg
              className="w-4 h-4 rotate-90"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightPanel;
