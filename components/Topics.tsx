import React from "react";

function Topics() {
  return (
    <div className="topics mt-6">
      <h1 className="font-semibold">Recomended Topics</h1>
      <div className="flex flex-wrap items-center mt-4 gap-3">
        <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-800 text-sm">
          Website
        </div>
        <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-800 text-sm">
          Technology
        </div>
        <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-800 text-sm">
          Android
        </div>
        <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-800 text-sm">
          Software
        </div>
        <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-800 text-sm">
          Desktop
        </div>
        <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-700 text-sm">
          Art
        </div>
      </div>
    </div>
  );
}

export default Topics;
