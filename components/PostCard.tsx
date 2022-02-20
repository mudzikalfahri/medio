import { Post } from "@interfaces/index";
import Image from "next/image";
import { timeAgo } from "@utils/dateformat";

const PostCard = ({ blog }: { blog: Post }) => (
  <div className="flex space-x-6 mb-10">
    <div className="w-1/3 overflow-hidden">
      <img
        src={blog.thumbnail}
        alt="pic"
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
    <div className="w-2/3">
      <div className="flex items-center space-x-2">
        <div className="py-1.5 px-3 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 w-max text-purple-700 text-xs">
          {blog.category}
        </div>
        <span className="text-gray-200">•</span>
        <p className="text-xs text-gray-500">{blog.minsRead} mins read</p>
      </div>
      <h1 className="text-2xl font-bold mt-1">{blog.title}</h1>
      <p className="text-sm mt-2 text-gray-500 line-clamp-4 text-justify">
        {blog.headline}
      </p>
      <div className="flex items-end justify-between mt-3">
        <div className="flex items-center space-x-3">
          <img src={blog.author.image} className="rounded-full w-10 h-10" />
          <div>
            <p className="text-sm">{blog.author.name}</p>
            <p className="text-xs text-purple-500">
              Published {timeAgo(blog.createdAt)}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-md bg-gray-50">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </div>
          <div className="p-1 rounded-md bg-gray-50">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
