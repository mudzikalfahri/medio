import React from "react";

function PostCardSkel() {
  return (
    <div className="flex space-x-4 mb-10">
      <div className="w-1/3 h-44 rounded-lg bg-gray-200 animate-pulse"></div>
      <div className="w-2/3">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-6 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-24 h-6 rounded-full bg-gray-200 animate-pulse"></div>
        </div>
        <div className="w-full h-7 mt-3 bg-gray-200 animate-pulse rounded-full"></div>
        <div className="w-full h-3 mt-3 bg-gray-200 animate-pulse rounded-full"></div>
        <div className="w-full h-3 mt-2 bg-gray-200 animate-pulse rounded-full"></div>
        <div className="w-2/3 h-3 mt-2 bg-gray-200 animate-pulse rounded-full"></div>
        <div className="flex items-center space-x-2 mt-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="">
            <div className="w-20 h-3 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-10 h-3 mt-2 bg-gray-200 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCardSkel;
