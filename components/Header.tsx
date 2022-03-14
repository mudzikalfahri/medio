import HeaderIcon from "./HeaderIcon";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { data, status } = useSession();
  return (
    <header className="fixed text-gray-800 top-0 left-0 py-3 w-full shadow-md shadow-gray-400/10 z-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <div className="logo flex items-center space-x-1 cursor-pointer">
            <svg
              className="w-7 h-7 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <h1 className="font-bold text-3xl font-serif">Medio</h1>
          </div>
        </Link>
        <div className="right-side flex items-center">
          <HeaderIcon
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            }
          />
          <HeaderIcon
            icon={
              <svg
                className="w-5 h-5"
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
            }
          />
          <HeaderIcon
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            }
          />
          {status !== "loading" ? (
            !data && <Button dark={true} text="Login" />
          ) : (
            <div className="bg-gray-200 animate-pulse w-16 ml-2 h-10 rounded-full"></div>
          )}
          {data && (
            <div
              onClick={() => setMenu((prev) => !prev)}
              className="flex items-center cursor-pointer duration-150 hover:bg-gray-100 space-x-1 pr-1.5 ml-2 bg-gray-50 rounded-full relative"
            >
              <Image
                src={data.user.image}
                width="40"
                height="40"
                alt="profile"
                className="rounded-full"
              />
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {menu && (
                <div className="top-11 bg-white shadow-md overflow-hidden shadow-gray-200 right-0 w-36 rounded-md absolute">
                  <div className="py-2 px-4 text-sm border-b cursor-pointer duration-150 hover:bg-gray-50 font-medium bg-white">
                    Account
                  </div>
                  <div
                    onClick={() => signOut()}
                    className="py-2 px-4 text-sm cursor-pointer duration-150 hover:bg-gray-50 font-medium bg-white"
                  >
                    Sign out
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
