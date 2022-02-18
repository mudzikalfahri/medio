import Layout from "layouts/Layout";
import { Meta } from "layouts/Meta";
import { NextPage } from "next";
import { text } from "@utils/test";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

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
      <div className="max-w-4xl mx-auto min-h-screen pt-24">
        <div className="mx-auto ">
          <h2 className="text-purple-700 mb-2 py-1.5 px-4 bg-purple-100 w-max rounded-full">
            Website
          </h2>
          <h1 className="text-5xl font-bold mb-4">
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
              <span className="text-purple-700 underline">Richard Koh</span> on
              2 January 2022
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
        <div className="max-w-2xl prose prose-lg prose-purple mx-auto">
          {/* <ReactMarkdown children={text} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default DetailPost;
