import React from "react";
import { Category as ICategory } from "@interfaces/index";

function Topics({
  categories,
  loading,
}: {
  categories: ICategory[];
  loading: boolean;
}) {
  return (
    <div className="topics mt-6">
      {loading && (
        <div className="w-36 h-6 rounded-full bg-gray-200 animate-pulse"></div>
      )}
      {!loading && <h1 className="font-semibold">Recomended Topics</h1>}
      <div className="flex flex-wrap items-center mt-4 gap-2">
        {loading && (
          <>
            <div className="w-24 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-20 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-24 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-20 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-16 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-16 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-20 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-16 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-24 h-8 bg-gray-200 animate-pulse rounded-full"></div>
          </>
        )}
        {!loading &&
          categories?.map((category, idx) => (
            <div
              key={idx}
              className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-800 text-sm"
            >
              {category.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Topics;
