import Button from "./Button";
import { useForm } from "react-hook-form";
import { useUser } from "@hooks/useUser";
import { useMutation, gql, useQuery } from "@apollo/client";

const ADD_POST = gql`
  mutation addPost(
    $title: String!
    $body: String!
    $headline: String!
    $minsRead: Int!
    $categoryId: String!
    $thumbnail: String!
    $authorId: String!
  ) {
    createPost(
      title: $title
      body: $body
      headline: $headline
      minsRead: $minsRead
      categoryId: $categoryId
      thumbnail: $thumbnail
      authorId: $authorId
    ) {
      body
      createdAt
    }
  }
`;

const GET_CATEGORY = gql`
  query Categories {
    categories {
      name
      id
    }
  }
`;

function PublishModal({
  close,
  body,
  session,
}: {
  close: () => void;
  body: string;
  session: any;
}) {
  const { register, handleSubmit } = useForm();
  const { data, loading, error: errorCategory } = useQuery(GET_CATEGORY);
  const [addPost, { data: dataMutate, loading: loadMutate, error }] =
    useMutation(ADD_POST);

  const onSubmit = (data) => {
    const { title, categoryId, headline, minsRead } = data;
    const variables = {
      title,
      categoryId,
      body,
      minsRead: Number(minsRead),
      headline,
      thumbnail: "/image.jpg",
      authorId: session.id,
    };
    addPost({ variables: variables });
  };

  return (
    <div className="top-0 left-0 w-full h-screen overflow-y-auto fixed bg-gray-800/40 z-30 flex items-center justify-center">
      {loading && <SkeletonPublish />}
      {!loading && (
        <div className="w-2/5 py-4 px-8 flex flex-col items-center bg-white rounded-lg">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-100 text-purple-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold mt-1">Publish Content</h1>
          <p className="text-center text-gray-500 text-sm w-2/3 mt-2">
            Make a title and category that can be reachable over the community
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="self-start ml-1 text-sm mt-6 text-gray-500">
              Content Title
            </p>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="How Website Works"
              className="input[type='text'] placeholder:text-sm placeholder:text-gray-400 w-full focus:border-purple-700 border-white focus:border rounded-xl bg-gray-100"
            />
            <p className="self-start ml-1 text-sm mt-2 text-gray-500">
              Category
            </p>
            <select
              defaultValue="default"
              {...register("categoryId", { required: true })}
              className="select[multiple] placeholder:text-sm placeholder:text-gray-400 w-full focus:border-purple-700 text-sm border-white focus:border rounded-xl bg-gray-100"
            >
              <option value="default" disabled>
                Select your option
              </option>
              {data.categories.map((each, idx) => (
                <option key={idx} value={each.id}>
                  {each.name}
                </option>
              ))}
            </select>
            <p className="self-start ml-1 text-sm mt-2 text-gray-500">
              Headline
            </p>
            <textarea
              {...register("headline", { required: true })}
              placeholder="Summary of The Content"
              className="input[type='text'] placeholder:text-sm placeholder:text-gray-400 w-full focus:border-purple-700 border-white focus:border rounded-xl bg-gray-100"
            />
            <p className="self-start ml-1 text-sm mt-1 text-gray-500">
              Time Takes to Read
            </p>
            <div className="flex items-center">
              <input
                type="number"
                {...register("minsRead", { required: true })}
                defaultValue="1"
                min="0"
                className="input[type='number'] placeholder:text-sm placeholder:text-gray-400 focus:border-purple-700 border-white focus:border rounded-xl bg-gray-100 w-20"
              />
              <p className="text-sm text-gray-700 ml-4">Mins Read</p>
            </div>
            <div className="mx-1 flex space-x-2 self-start mt-5">
              <input
                type="checkbox"
                className="form-checkbox mt-1 rounded text-purple-600 "
              />
              <p className="text-sm text-gray-500">
                I emphasize that my writing does not contain negative content
                and does not offend other parties
              </p>
            </div>
            <div className="flex items-center space-x-2 justify-end mt-6">
              <Button text="Cancel" click={close} dark={false} />
              <Button text="Publish Now" dark={true} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

function SkeletonPublish() {
  return (
    <div className="w-2/5 py-4 px-8 flex flex-col items-center bg-white rounded-lg">
      <div className="w-12 h-12 rounded-full animate-pulse bg-gray-200"></div>
      <div className="h-6 w-1/2 animate-pulse bg-gray-200 rounded-lg mt-4"></div>
      <div className="h-6 w-full animate-pulse bg-gray-200 rounded-lg mt-4"></div>
      <div className="h-6 w-1/3 animate-pulse bg-gray-200 rounded-lg mt-2"></div>
      <div className="h-9 w-full animate-pulse bg-gray-200 rounded-lg mt-8"></div>
      <div className="h-9 w-full animate-pulse bg-gray-200 rounded-lg mt-4"></div>
      <div className="h-9 w-full animate-pulse bg-gray-200 rounded-lg mt-4"></div>
      <div className="h-9 w-full animate-pulse bg-gray-200 rounded-lg mt-4"></div>
      <div className="h-4 w-full animate-pulse bg-gray-200 rounded-lg mt-8"></div>
      <div className="h-4 w-1/4 self-start animate-pulse bg-gray-200 rounded-lg mt-2"></div>
      <div className="flex justify-end items-center w-full space-x-3 mt-8">
        <div className="h-9 w-1/5 animate-pulse bg-gray-200 rounded-full"></div>
        <div className="h-9 w-1/4 animate-pulse bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}

export default PublishModal;
