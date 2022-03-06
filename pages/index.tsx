import PostCard from "@components/PostCard";
import Layout from "layouts/Layout";
import { Meta } from "layouts/Meta";
import { useSession } from "next-auth/react";
import { NextPage } from "next";
import LoginBox from "@components/LoginBox";
import Topics from "@components/Topics";
import SavedSidebar from "@components/SavedSidebar";
import Link from "next/link";
import { getHomeData } from "@graphql/queries";
import PostCardSkel from "@components/PostCardSkel";

const Home: NextPage = () => {
  const { data, loading, error } = getHomeData();
  const { data: session } = useSession();
  return (
    <Layout
      meta={
        <Meta
          description="Place to share your ideas with others"
          title="Medio - Home"
        />
      }
    >
      <div className="max-w-6xl mx-auto flex px-4 min-h-screen">
        <div className="w-full md:w-2/3 pt-28 md:pr-10">
          <div className="rounded-full mb-6 flex items-center py-4 bg-gray-100 justify-center space-x-3">
            <h3>Share your ideas with millions of readers</h3>

            <Link href="/write" passHref>
              <div className="cursor-pointer py-1.5 px-4 bg-gray-800 text-white rounded-full text-sm">
                Start Writing
              </div>
            </Link>
          </div>
          {/* Menu bar */}
          <div className="border-b border-gray-200 flex items-center">
            <div className="py-2 px-5 border-b border-purple-700 font-semibold w-max">
              Recomended
            </div>
            <div className="py-2 px-5 w-max">Popular</div>
            <div className="py-2 px-5 w-max">Today</div>
          </div>
          {/* Post */}
          <div className="pt-10">
            {!loading &&
              data?.posts.map((blog, idx) => (
                <PostCard key={idx} blog={blog} />
              ))}
            {loading && (
              <>
                <PostCardSkel />
                <PostCardSkel />
                <PostCardSkel />
              </>
            )}
          </div>
        </div>
        <div className="hidden md:inline md:w-1/3 border-l border-gray-200 pl-10 pt-28 pb-20">
          <div className="sticky top-1 overflow-y-auto ">
            {!session && !loading && <LoginBox />}
            <Topics categories={data?.categories} loading={loading} />
            <SavedSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
