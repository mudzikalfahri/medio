import Layout from "layouts/Layout";
import { Meta } from "layouts/Meta";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import SocialIcon from "@components/SocialIcon";
import MiniPostCard from "@components/MiniPostCard";
import { getDetailData } from "@graphql/queries";
import { timeAgo } from "@utils/dateformat";
import SkeletonDetailPost from "@components/SkeletonDetailPost";
import { useRouter } from "next/router";

const DetailPost: NextPage = () => {
  const router = useRouter();
  const { data, loading, error } = getDetailData(router.query.slug);
  if (loading) return <SkeletonDetailPost />;
  if (error) return <div className="">Error</div>;
  return (
    <Layout
      meta={
        <Meta
          description="Place to share your ideas with others"
          title={"Medio - " + data.post.title}
        />
      }
    >
      <div className="max-w-3xl mx-auto min-h-screen">
        <div className="pt-24">
          <div className="mx-auto">
            <h2 className="text-purple-700 mb-2 py-1.5 px-4 bg-purple-100 w-max rounded-full">
              {data.post.category.name}
            </h2>
            <h1 className="text-5xl font-bold mb-5">{data.post.title}</h1>
            <div className="flex items-center space-x-2 mb-8 text-gray-500">
              <img
                src={data.post.author.image}
                className="rounded-full h-8 w-8"
              />
              <p>
                Uploaded by{" "}
                <span className="text-purple-700 underline">
                  {data.post.author.name}
                </span>{" "}
                on {timeAgo(data.post?.createdAt)}
              </p>
              <span className="text-gray-300">•</span>
              <p className="text-purple-700">{data.post.minsRead} mins read</p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={data.post.thumbnail}
              className="rounded-lg w-full h-80 object-cover"
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
            <div className="prose max-w-2xl prose-img:rounded-lg prose-purple mx-auto pb-20">
              <ReactMarkdown children={data.post.body} />
            </div>
          </div>
        </div>
        {/* <div className="col-span-2 min-h-screen border-l border-gray-200 pt-24 pl-6">
          <div className="mb-4 sticky top-24">
            <h1 className="font-semibold">Related Posts</h1>
            <div className="py-6 flex flex-col space-y-6">
              <MiniPostCard />
              <MiniPostCard />
            </div>
            <p className="text-xs cursor-pointer hover:underline">
              See all (6)
            </p>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default DetailPost;
