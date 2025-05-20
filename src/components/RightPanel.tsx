import React from "react";

const RightPanel = () => {
  return (
    <section className="w-[500px] bg-[#282828] rounded-xl  p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Details</h3>
      <div className="text-sm space-y-3">
        <div>
          <span className="font-semibold">Assignee:</span> NNM22IS044 DHANUSH
        </div>
        <div>
          <span className="font-semibold">Team Inbox:</span> Unassigned
        </div>
        <hr className="border-white/10" />
        <div>
          <span className="font-semibold">Brand:</span> Nitte
        </div>
        <div>
          <span className="font-semibold">Language:</span> English
        </div>
        <div>
          <span className="font-semibold">Copilot used:</span> False
        </div>
      </div>
    </section>
  );
};

export default RightPanel;
