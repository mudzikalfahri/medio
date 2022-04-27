import Layout from "layouts/Layout";
import { Meta } from "layouts/Meta";

function SkeletonDetailPost() {
  return (
    <Layout
      meta={
        <Meta
          description="Place to share your ideas with others"
          title="Medio - Loading content..."
        />
      }
    >
      <div className="max-w-3xl mx-auto min-h-screen pt-24 pb-10">
        <div className="w-full">
          <div className="w-28 h-10 bg-gray-200 animate-pulse rounded-full mb-6"></div>
          <div className="w-full h-8 bg-gray-200 animate-pulse rounded-full mb-4"></div>
          <div className="w-2/3 h-8 bg-gray-200 animate-pulse rounded-full mb-6"></div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-2/3 h-6 bg-gray-200 animate-pulse rounded-full"></div>
          </div>
          <div className="w-full h-80 bg-gray-200 animate-pulse rounded-lg mb-8"></div>

          <div className="w-full h-6 bg-gray-200 animate-pulse rounded-full mb-5"></div>
          <div className="w-full h-6 bg-gray-200 animate-pulse rounded-full mb-5"></div>
          <div className="w-full h-6 bg-gray-200 animate-pulse rounded-full mb-5"></div>
          <div className="w-full h-6 bg-gray-200 animate-pulse rounded-full mb-5"></div>
          <div className="w-full h-6 bg-gray-200 animate-pulse rounded-full mb-5"></div>
          <div className="w-full h-6 bg-gray-200 animate-pulse rounded-full mb-5"></div>
          <div className="w-full h-6 bg-gray-200 animate-pulse rounded-full mb-5"></div>
          <div className="w-2/3 h-6 bg-gray-200 animate-pulse rounded-full mb-5"></div>
        </div>
      </div>
    </Layout>
  );
}

export default SkeletonDetailPost;
