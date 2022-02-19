import Image from "next/image";
import React from "react";
import MiniPostCard from "./MiniPostCard";

function SavedSidebar() {
  return (
    <div className="mt-10">
      <h1 className="font-semibold">Saved Posts</h1>
      <div className="py-6 flex flex-col space-y-6">
        {/* SavedCard */}
        <MiniPostCard />
        <MiniPostCard />
      </div>
      <p className="text-xs cursor-pointer hover:underline">See all (6)</p>
    </div>
  );
}

export default SavedSidebar;
