import Image from "next/image";

const PostCard = () => (
  <div className="flex space-x-6 mb-10">
    <div className="w-1/3 overflow-hidden">
      <Image
        src="/image.jpg"
        width="600"
        height="600"
        alt="pic"
        className="object-cover w-full rounded-lg"
      />
    </div>
    <div className="w-2/3">
      <div className="py-1.5 px-3 rounded-full cursor-pointer hover:bg-purple-100 duration-150 bg-purple-50 w-max text-purple-800 text-xs">
        Website
      </div>
      <h1 className="text-2xl font-bold mt-1">
        How Much Money I Made Playing Axie Infinity for One Week
      </h1>
      <p className="text-sm mt-2 text-gray-500">
        Axie Infinity is one of the most popular play-to-earn cryptocurrency
        games. It sports an active NFT marketplace, meaning you can play for
        money. Axie Infinity is one of the most popular play-to-earn
      </p>
      <div className="flex items-end justify-between mt-3">
        <div className="flex items-center space-x-3">
          <Image
            src="/profile.jfif"
            width="35"
            height="35"
            objectFit="cover"
            className="rounded-full"
          ></Image>
          <div>
            <p className="text-sm">Richard koh</p>
            <p className="text-xs text-purple-500">4 Mins ago</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-md bg-gray-50">
            <svg
              className="w-5 h-5 text-gray-500"
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
          </div>
          <div className="p-1 rounded-md bg-gray-50">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
