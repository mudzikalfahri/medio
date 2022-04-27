import { useMutation } from "@apollo/client";
import { Post } from "@interfaces/index";
import { timeAgo } from "@utils/dateformat";
import { gql } from "apollo-server-micro";
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
      {/* <div
        onClick={viewDetail}
        className="flex md:flex-row flex-col md:space-x-4 mb-8 cursor-pointer"
      >
        <div className="w-full md:w-1/3 overflow-hidden">
          <img
            src={blog.thumbnail}
            alt="pic"
            className="object-cover w-full h-full rounded-lg"
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
          <p className="text-sm mt-2 text-gray-500 line-clamp-4">
            {blog.headline}
          </p>
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
      <a
        className="relative block hover:rotate-2 hover:shadow-sm duration-150 p-6 overflow-hidden border border-gray-200 rounded-lg"
        href=""
      >
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
              className="object-cover w-14 h-14 rounded-lg shadow-sm"
              src={blog.author.image}
              alt=""
            />
          </div>
        </div>

        <div className="mt-4 sm:pr-8">
          <p className="text-sm text-gray-500 line-clamp-2">{blog.headline}</p>
        </div>

        <dl className="flex mt-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Published</dt>
            <dd className="text-xs text-gray-500">{timeAgo(blog.createdAt)}</dd>
          </div>

          <div className="flex flex-col-reverse ml-3 sm:ml-6">
            <dt className="text-sm font-medium text-gray-600">Reading time</dt>
            <dd className="text-xs text-gray-500">{blog.minsRead} minute</dd>
          </div>
        </dl>
      </a>
    </Link>
  );
};

export default PostCard;
