import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function LoginBox() {
  const { data, status } = useSession();
  return (
    <div className="border-b border-gray-200 flex pb-8 flex-col items-center">
      <h1 className="w-2/3 text-gray-800 text-center font-medium">
        Login now then you can post and comment as you like
      </h1>
      <div
        onClick={() => signIn("google")}
        className="flex items-center cursor-pointer duration-150 hover:bg-gray-800 hover:text-white space-x-2 py-2 rounded-full bg-white px-8 justify-center border border-gray-500 mt-4"
      >
        <FcGoogle className="text-xl" />
        <p className="text-sm">Login with Google</p>
      </div>
      <div
        onClick={() => signIn("github")}
        className="flex items-center cursor-pointer duration-150 hover:bg-gray-800 hover:text-white space-x-2 py-2 rounded-full bg-white px-8 justify-center border border-gray-500 mt-3"
      >
        <FaGithub className="text-xl" />
        <p className="text-sm">Login with Github</p>
      </div>
      <p className="underline text-sm text-gray-500 mt-4">Maybe later</p>
    </div>
  );
}

export default LoginBox;
