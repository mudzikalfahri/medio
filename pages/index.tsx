import Header from "@components/Header";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import PostCard from "@components/PostCard";
import Layout from "layouts/Layout";
import { Meta } from "layouts/Meta";
import Image from "next/image";

export default function Home() {
  return (
    <Layout
      meta={
        <Meta
          description="Place to share your ideas with others"
          title="Medio - Home"
        />
      }
    >
      <div className="w-2/3 pt-28 pr-10">
        <div className="rounded-full mb-6 flex items-center py-4 bg-gray-100 justify-center space-x-3">
          <h3>Share your ideas with millions of readers</h3>
          <div className="py-1.5 px-4 bg-gray-800 text-white rounded-full text-sm">
            Start Writing
          </div>
        </div>
        {/* Menu bar */}
        <div className="border-b border-gray-200 flex items-center">
          <div className="py-2 px-5 border-b border-purple-700 font-semibold w-max">
            Recomended
          </div>
          <div className="py-2 px-5 w-max">Popular</div>
          <div className="py-2 px-5 w-max">Today</div>
        </div>
        {/* Post */}
        <div className="pt-10">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <div className="w-1/3 border-l border-gray-200 pl-10 pt-28">
        <div className="sticky top-0 overflow-y-auto">
          <div className="border-b border-gray-200 flex pb-8 flex-col items-center">
            <h1 className="w-2/3 text-gray-800 text-center font-medium">
              Login now then you can post and comment as you like
            </h1>
            <div className="flex items-center space-x-2 py-2 rounded-full bg-white px-8 justify-center border border-gray-500 mt-4">
              <FcGoogle className="text-xl" />
              <p className="text-sm">Login with Google</p>
            </div>
            <div className="flex items-center space-x-2 py-2 rounded-full bg-white px-8 justify-center border border-gray-500 mt-3">
              <FaGithub className="text-xl" />
              <p className="text-sm">Login with Github</p>
            </div>
            <p className="underline text-sm text-gray-500 mt-4">Maybe later</p>
          </div>
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
          <div className="mt-10">
            <h1 className="font-semibold">Saved Posts</h1>
            <div className="py-6 flex flex-col space-y-6">
              {/* SavedCard */}
              <div className="">
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
              <div className="">
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
            </div>
            <p className="text-xs cursor-pointer hover:underline">
              See all (6)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
