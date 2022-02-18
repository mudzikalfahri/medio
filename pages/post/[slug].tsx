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
          title="Medio - Home"
        />
      }
    >
      <div className="max-w-3xl mx-auto min-h-screen pt-24">
        <h1 className="text-5xl font-bold mb-4">How Website Works?</h1>
        <Image
          src="/image.jpg"
          width={1000}
          height={500}
          objectFit="cover"
          className="w-full rounded-lg"
        />
        <div className="max-w-none prose prose-lg prose-purple mx-auto">
          <ReactMarkdown children={text} />
        </div>
      </div>
    </Layout>
  );
};

export default DetailPost;
