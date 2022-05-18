import { useMutation } from "@apollo/client";
import { Post } from "@interfaces/index";
import { timeAgo } from "@utils/dateformat";
import { gql } from "apollo-server-micro";
import Image from "next/image";
import Link from "next/link";

const ADD_VIEWS = gql`
  mutation Mutation($id: String!) {
    addView(id: $id) {
      views
    }
  }
`;

const PostCard = ({ blog }: { blog: Post }) => {
  const [addView] = useMutation(ADD_VIEWS);
  const viewDetail = () => {
    addView({ variables: { id: blog.id } });
  };
  return (
    <Link href={"/post/" + blog.id}>
      <article className="p-6 bg-white rounded-xl ring ring-indigo-50">
        <div className="flex items-start">
          <div className="">
            <div className="flex sm:flex-row flex-col items-center justify-between">
              <div className="rounded-full border w-max border-purple-700 bg-purple-700 px-3 py-1 text-[10px] font-medium text-white">
                {blog.category.name}
              </div>
              <div className="text-xs mt-2 sm:mt-0 font-medium text-gray-500 flex items-center space-x-1">
                <img
                  src={blog.author.image}
                  className="w-6 h-6 rounded-full object-cover"
                  alt=""
                />
                <p>Posted by </p>
                <a href="" className="underline hover:text-gray-700">
                  {blog.author.name}
                </a>
              </div>
            </div>

            <h2 className="mt-4 text-lg font-medium sm:text-xl">
              <a href="" className="hover:underline">
                {" "}
                {blog.title}{" "}
              </a>
            </h2>

            <p className="mt-1 line-clamp-3 text-sm text-gray-700">
              {blog.headline}
            </p>

            <div className="mt-4 flex-col sm:flex-row text-center md:text-left sm:flex sm:items-center sm:gap-2">
              <div className="flex justify-center mb-2 sm:mb-0 sm:justify-start items-center text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="ml-1 text-xs font-medium">
                  {blog.minsRead} minutes read
                </p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>
              <p className="ml-1 text-gray-500 text-xs font-medium">
                {timeAgo(blog.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </article>
      {/* <div
        onClick={viewDetail}
        className="flex md:flex-row flex-col md:space-x-4 mb-8 cursor-pointer"
      >
        <div className="w-1/3">
          <img
            src={blog.thumbnail}
            alt="pic"
            className="object-cover aspect-square rounded-lg"
          />
        </div>

        <div className="w-full md:w-2/3">
          <div className="flex items-center space-x-2 mt-3 md:mt-0">
            <div className="py-1.5 px-3 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 w-max text-purple-700 text-xs">
              {blog.category.name}
            </div>
            <span className="text-gray-200">•</span>
            <p className="text-xs text-gray-500">{blog.minsRead} mins read</p>
            <span className="text-gray-200">•</span>
            <p className="text-xs text-gray-500">{blog.views} Views</p>
          </div>
          <h1 className="text-2xl font-bold mt-1">{blog.title}</h1>

          <div className="flex items-end justify-between mt-3">
            <div className="flex items-center space-x-3">
              <img
                src={blog.author.image}
                className="rounded-full w-10 h-10 border border-purple-200"
              />
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
      </div> */}
      {/* <a
        className="relative block hover:shadow-sm duration-150 overflow-hidden border border-gray-200 rounded-xl"
        href=""
      >
        <div
          className="h-44 w-full p-2 object-cover flex flex-col justify-between"
          style={{
            background: `url(${blog.thumbnail})`,
            backgroundSize: "cover",
            filter: "brightness(85%) grayscale(20%)",
          }}
        >
          <div className="flex justify-end">
            <div className="px-1.5 text-sm font-semibold flex items-center py-0.5 rounded-md bg-white/80">
              <span>
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
              {blog.views} views
            </div>
          </div>
          <div className="flex justify-start">
            <div className="px-2 text-sm font-semibold flex items-center py-0.5 rounded-md bg-white/80">
              {blog.category.name}
            </div>
          </div>
        </div>
        <div className="p-5">
          <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-blue-300 via-indigo-500 to-purple-600"></span>

          <div className="justify-between sm:flex">
            <div>
              <h5 className="text-xl font-bold text-gray-900">{blog.title}</h5>
              <p className="mt-1 text-xs font-medium text-gray-600">
                By {blog.author.name}
              </p>
            </div>

            <div className="flex-shrink-0 hidden ml-3 sm:block">
              <img
                className="object-cover w-10 h-10 rounded-lg shadow-sm"
                src={blog.author.image}
                alt=""
              />
            </div>
          </div>

          <div className="mt-4 sm:pr-8">
            <p className="text-sm text-gray-500 line-clamp-2">
              {blog.headline}
            </p>
          </div>

          <dl className="flex mt-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">
                {timeAgo(blog.createdAt)}
              </dd>
            </div>

            <div className="flex flex-col-reverse ml-3 sm:ml-6">
              <dt className="text-sm font-medium text-gray-600">
                Reading time
              </dt>
              <dd className="text-xs text-gray-500">{blog.minsRead} minute</dd>
            </div>
          </dl>
        </div>
      </a> */}
    </Link>
  );
};

export default PostCard;
