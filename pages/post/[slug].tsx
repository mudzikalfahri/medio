import Layout from "layouts/Layout";
import { Meta } from "layouts/Meta";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import SocialIcon from "@components/SocialIcon";
import MiniPostCard from "@components/MiniPostCard";
import { gql } from "@apollo/client";
import apolloClient from "@lib/apollo";
import { Post as IPost } from "@interfaces/index";
import { GET_PATHS, GET_DETAIL } from "@graphql/queries";
import { timeAgo } from "@utils/dateformat";

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: GET_PATHS,
  });
  const paths = data.posts.map((post) => ({ params: { slug: post.id } }));

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data } = await apolloClient.query({
    query: GET_DETAIL,
    variables: { id: slug },
  });

  if (!data.post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data.post },
    revalidate: 5,
  };
}

interface IPostDetail {
  data: IPost;
}

const DetailPost: NextPage<IPostDetail> = ({ data }) => {
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
              {data.category.name}
            </h2>
            <h1 className="text-5xl font-bold mb-5">{data.title}</h1>
            <div className="flex items-center space-x-2 mb-8 text-gray-500">
              <Image
                src={data.author.image}
                width={30}
                height={30}
                objectFit="cover"
                className="rounded-full"
              />
              <p>
                Uploaded by{" "}
                <span className="text-purple-700 underline">
                  {data.author.name}
                </span>{" "}
                on {timeAgo(new Date(+data?.createdAt))}
              </p>
              <span className="text-gray-300">•</span>
              <p className="text-purple-700">{data.minsRead} mins read</p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src={data.thumbnail}
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
            <div className="prose max-w-2xl prose-img:rounded-lg prose-purple mx-auto pb-20">
              <ReactMarkdown children={data.body} />
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
