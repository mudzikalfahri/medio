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
import { GiTerror } from "react-icons/gi";
import { AiOutlineReload } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginModal from "@components/LoginModal";

const Home: NextPage = () => {
  const { data, loading, error, refetch } = getHomeData();
  const { data: session, status } = useSession();
  const [modalLogin, setModalLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    refetch();
  }, []);
  const toWriteRoute = () => {
    if (!session) {
      return setModalLogin(true);
    }
    return router.push("/write");
  };
  return (
    <Layout
      meta={
        <Meta
          description="Place to share your ideas with others"
          title="Medio - Home"
        />
      }
    >
      {modalLogin && <LoginModal close={() => setModalLogin(false)} />}
      <div className="max-w-4xl mx-auto flex px-4 min-h-screen pb-10">
        <div className="w-full pt-28 md:pr-10">
          <section className="bg-gray-50">
            <div className="px-4 pt-4 pb-20 mx-auto lg:items-center lg:flex">
              <div className="max-w-xl mx-auto text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                  Share your ideas with
                  <strong className="font-extrabold text-purple-700 sm:block">
                    millions of readers.
                  </strong>
                </h1>

                <p className="mt-4 sm:leading-relaxed sm:text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <a
                    className="block w-full px-12 py-3 text-sm font-medium text-white bg-purple-600 rounded shadow sm:w-auto active:bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring"
                    href="/get-started"
                  >
                    Get Started
                  </a>

                  <a
                    className="block w-full px-12 py-3 text-sm font-medium text-purple-600 rounded shadow sm:w-auto hover:text-purple-700 active:text-purple-500 focus:outline-none focus:ring"
                    href="/about"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="rounded-xl md:rounded-full mb-6 md:flex-row flex flex-col items-center py-4 bg-gray-100 justify-center space-x-3 space-y-4 md:space-y-0">
            <h3>Have a writing or idea to share?</h3>

            <div
              onClick={toWriteRoute}
              className="cursor-pointer w-max py-1.5 px-4 bg-gray-800 text-white rounded-full text-sm"
            >
              Start Writing
            </div>
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
          <div className="pt-8 grid-cols-2 grid gap-6">
            {error && (
              <div className="flex flex-col text-gray-500 items-center pt-10 space-y-1.5">
                <GiTerror className="text-4xl" />
                <h3 className="text-md ">
                  Unable to Query Data from The Server
                </h3>
                <div
                  onClick={() => router.reload()}
                  className="text-sm cursor-pointer py-1 px-2 bg-gray-100 rounded-md underline flex items-center space-x-1"
                >
                  <AiOutlineReload className="text-xs" />
                  <p>reload</p>
                </div>
              </div>
            )}
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
        {/* <div className="hidden md:inline md:w-1/3 border-l border-gray-200 pl-10 pt-28 pb-20">
          <div className="sticky top-1 overflow-y-auto ">
            {!session && !loading && <LoginBox />}
            <Topics categories={data?.categories} loading={loading} />
            <SavedSidebar />
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Home;
