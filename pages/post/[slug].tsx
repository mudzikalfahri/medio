import Layout from "layouts/Layout";
import { Meta } from "layouts/Meta";
import { NextPage } from "next";
import { text } from "@utils/test";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import SocialIcon from "@components/SocialIcon";
import MiniPostCard from "@components/MiniPostCard";

const DetailPost: NextPage = () => {
  return (
    <Layout
      meta={
        <Meta
          description="Place to share your ideas with others"
          title="How Website Works"
        />
      }
    >
      <div className="max-w-6xl mx-auto min-h-screen grid grid-cols-7">
        <div className="col-span-5 pt-24 pr-16 pl-4">
          <div className="mx-auto">
            <h2 className="text-purple-700 mb-2 py-1.5 px-4 bg-purple-100 w-max rounded-full">
              Website
            </h2>
            <h1 className="text-5xl font-bold mb-5">
              How to Build Strong Community
            </h1>
            <div className="flex items-center space-x-2 mb-8 text-gray-500">
              <Image
                src="/profile.jfif"
                width={30}
                height={30}
                objectFit="cover"
                className="rounded-full"
              />
              <p>
                Uploaded by{" "}
                <span className="text-purple-700 underline">Richard Koh</span>{" "}
                on 2 January 2022
              </p>
              <span className="text-gray-300">•</span>
              <p className="text-purple-700">4 mins read</p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="/image.jpg"
              width={900}
              height={400}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-between mt-14">
            <div className="w-1/6 ">
              <div className="sticky top-28">
                <SocialIcon>
                  <FaFacebookF />
                </SocialIcon>
                <SocialIcon>
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon>
                  <FaWhatsapp />
                </SocialIcon>
              </div>
            </div>
            <div className="prose max-w-2xl prose-img:rounded-lg prose-purple mx-auto">
              <ReactMarkdown children={text + text} />
            </div>
          </div>
        </div>
        <div className="col-span-2 min-h-screen border-l border-gray-200 pt-24 pl-6">
          <div className="mb-4 sticky top-24">
            <h1 className="font-semibold">Related Posts</h1>
            <div className="py-6 flex flex-col space-y-6">
              {/* SavedCard */}
              <MiniPostCard />
              <MiniPostCard />
            </div>
            <p className="text-xs cursor-pointer hover:underline">
              See all (6)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPost;
