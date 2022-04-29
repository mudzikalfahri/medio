import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

const LoginModal = ({ close }) => {
  return (
    <div className="top-0 left-0 flex items-center justify-center w-full h-screen overflow-y-auto fixed bg-gray-800/40 z-30 ">
      <div className="w-2/5 animate-mod duration-200 py-4 pb-10 px-8 flex flex-col items-center bg-white rounded-lg">
        <div className="flex w-full justify-end">
          <div
            onClick={close}
            className="w-8 h-8 cursor-pointer hover:bg-gray-200 active:bg-gray-100 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <GrFormClose />
          </div>
        </div>
        <h1 className="w-2/3 text-gray-800 text-center font-medium">
          You have to login first to unlock more features ✨
        </h1>
        <div
          onClick={() => signIn("github")}
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
        <div onClick={close} className="underline text-sm text-gray-500 mt-4">
          Maybe later
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
