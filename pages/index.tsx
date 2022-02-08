import Header from "@components/Header";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <div className="max-w-6xl mx-auto grid grid-cols-3 px-4 h-screen">
        <div className="col-span-2 pt-28"></div>
        <div className="col-span-1 border-l border-gray-200 pl-10 pt-28">
          <div className="border-b border-gray-200 flex pb-8 flex-col items-center">
            <h1 className="w-2/3 text-gray-600 text-center font-medium">
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
              <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-700 text-sm">
                Website
              </div>
              <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-700 text-sm">
                Technology
              </div>
              <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-700 text-sm">
                Android
              </div>
              <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-700 text-sm">
                Software
              </div>
              <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-700 text-sm">
                Desktop
              </div>
              <div className="py-2 px-5 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 text-purple-700 text-sm">
                Art
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
