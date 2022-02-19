import Image from "next/image";
import React from "react";

function MiniPostCard() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Image
          src="/profile.jfif"
          width="20"
          height="20"
          objectFit="cover"
          className="rounded-full"
        />
        <p className="text-xs font-semibold">Richard Koh</p>
      </div>
      <p className="font-bold mt-2">
        How Much Money I Made Playing Axie Infinity for One Week
      </p>
      <div className="flex mt-2 items-center space-x-2">
        <p className="text-xs text-purple-600">26 Jan</p>
        <span className="text-gray-200">•</span>
        <p className="text-xs text-gray-500">6 mins read</p>
      </div>
    </div>
  );
}

export default MiniPostCard;
