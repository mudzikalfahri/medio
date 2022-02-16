import { NextPage } from "next";
import Layout from "layouts/Layout";
import { Meta } from "layouts/Meta";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Button from "@components/Button";

const Post: NextPage = () => {
  const [body, setBody] = useState("");
  return (
    <Layout
      meta={
        <Meta
          description="Place to share your ideas with others"
          title="Post an Ideas"
        />
      }
    >
      <div className="fixed w-full bg-white shadow-lg bottom-0 py-4 z-30 left-0">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p>Start writing and you can see the preview on the right side</p>
          <Button dark={true} text="Publish" />
        </div>
      </div>
      <div className="max-w-5xl mx-auto pt-24 flex space-x-5 pb-20">
        <div className="w-1/2 min-h-screen p-4 bg-gray-50 rounded-lg ">
          <div className="tools flex items-center space-x-1">
            <div
              onClick={() => setBody((prev) => prev + "***bold text***")}
              className="w-6 h-6 bg-gray-800 text-white duration-150 cursor-pointer shadow-sm rounded-md flex items-center justify-center hover:bg-gray-700 font-bold text-xs"
            >
              B
            </div>
            <div className="w-6 h-6 bg-gray-800 text-white duration-150 cursor-pointer shadow-sm rounded-md flex items-center justify-center hover:bg-gray-700 font-medium text-sm">
              "
            </div>
            <div className="w-6 h-6 bg-gray-800 text-white duration-150 cursor-pointer shadow-sm rounded-md flex items-center justify-center hover:bg-gray-700 font-medium text-xs">
              {"</>"}
            </div>
            <div className="px-1 h-6 bg-gray-800 text-white duration-150 cursor-pointer shadow-sm rounded-md flex items-center justify-center hover:bg-gray-700 font-medium text-xs">
              Link
            </div>
            <div className="px-1 h-6 bg-gray-800 text-white duration-150 cursor-pointer shadow-sm rounded-md flex items-center justify-center hover:bg-gray-700 font-medium text-xs">
              Image
            </div>
          </div>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            name="body"
            id="body"
            value={body}
            placeholder="Tell your story"
            cols={30}
            rows={10}
            className="border-none bg-gray-50 placeholder:text-lg pt-6 w-full h-screen focus-visible:outline-none outline-none"
          />
        </div>
        <article className="prose prose-purple w-1/2 h-screen">
          <ReactMarkdown children={body} />
        </article>
      </div>
    </Layout>
  );
};

export default Post;
