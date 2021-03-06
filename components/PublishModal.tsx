import Button from "./Button";
import { useForm } from "react-hook-form";
import { useMutation, gql, useQuery } from "@apollo/client";
import { ADD_POST } from "@graphql/queries";
import { BsCheck2Circle } from "react-icons/bs";
import { useRouter } from "next/router";
import { GET_CATEGORY } from "@graphql/queries";
import toast from "react-hot-toast";

function PublishModal({
  close,
  body,
  session,
}: {
  close: () => void;
  body: string;
  session: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, loading, error: errorCategory } = useQuery(GET_CATEGORY);
  const [addPost, { data: dataMutate, loading: loadMutate, error }] =
    useMutation(ADD_POST);

  const router = useRouter();
  console.log(errors);

  const onSubmit = (data) => {
    const { title, categoryId, headline, minsRead, thumbnail } = data;
    const variables = {
      title,
      categoryId,
      body,
      minsRead: Number(minsRead),
      headline,
      thumbnail,
      authorId: session.id,
    };
    const prom = addPost({ variables: variables });
    toast.promise(prom, {
      loading: "Uploading Article",
      success: "Article Uploaded Successfully",
      error: "Error Uploading Data",
    });
  };

  return (
    <div className="top-0 left-0 w-full h-screen overflow-y-auto fixed bg-gray-800/40 z-30 ">
      {loading && (
        <div className="w-full flex justify-center">
          <SkeletonPublish />
        </div>
      )}

      {!loading && (
        <div className="min-h-screen py-20 w-full flex items-center justify-center">
          <div className="w-2/5 py-4 px-8 flex flex-col items-center bg-white rounded-lg">
            {loadMutate && (
              <div className="flex flex-col items-center py-10 space-y-4">
                <span className="loader">
                  <span className="loader-inner"></span>
                </span>
                <div className="font-medium">Publishing Content</div>
              </div>
            )}
            {dataMutate && (
              <div className="flex flex-col items-center py-6">
                <div className="w-12 mb-3 h-12 flex justify-center items-center bg-purple-100 rounded-full">
                  <BsCheck2Circle className="text-2xl text-purple-600" />
                </div>
                <div className="font-medium mb-4">Published Succesfully</div>

                <Button
                  text="Go to Post"
                  click={() => {
                    close();
                    router.push("/");
                  }}
                  dark={true}
                />
              </div>
            )}
            {!loadMutate && !dataMutate && (
              <>
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
                  Make a title and category that can be reachable over the
                  community
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="self-start ml-1 text-sm mt-6 text-gray-500">
                    Content Title
                  </p>
                  <input
                    type="text"
                    {...register("title", { required: true, minLength: 10 })}
                    placeholder="How Website Works"
                    className={
                      errors.title
                        ? "input[type='text'] placeholder:text-sm placeholder:text-gray-400 w-full border-red-700 border rounded-xl bg-gray-100"
                        : "input[type='text'] placeholder:text-sm placeholder:text-gray-400 w-full focus:border-purple-700 border-white focus:border rounded-xl bg-gray-100"
                    }
                  />
                  {errors.title?.type === "minLength" && (
                    <p className="text-xs text-red-500 text-right">
                      Title must be at least 10 characters
                    </p>
                  )}
                  {errors.title?.type === "required" && (
                    <p className="text-xs text-red-500 text-right">
                      The title field is required
                    </p>
                  )}
                  <p className="self-start ml-1 text-sm mt-2 text-gray-500">
                    Category
                  </p>
                  <select
                    {...register("categoryId", { required: true })}
                    className="select[multiple] placeholder:text-sm placeholder:text-gray-400 w-full focus:border-purple-700 text-sm border-white focus:border rounded-xl bg-gray-100"
                  >
                    {data.categories.map((each, idx) => (
                      <option key={idx} value={each.id}>
                        {each.name}
                      </option>
                    ))}
                  </select>
                  {errors.categoryId?.type === "required" && (
                    <p className="text-xs text-red-500 text-right">
                      The category field is required
                    </p>
                  )}
                  <p className="self-start ml-1 text-sm mt-2 text-gray-500">
                    Headline
                  </p>
                  <textarea
                    {...register("headline", { required: true, minLength: 20 })}
                    placeholder="Summary of The Content"
                    className="input[type='textarea'] placeholder:text-sm placeholder:text-gray-400 w-full focus:border-purple-700 border-white focus:border rounded-xl bg-gray-100"
                  />
                  {errors.headline?.type === "required" && (
                    <p className="text-xs text-red-500 text-right">
                      The headline field is required
                    </p>
                  )}
                  {errors.headline?.type === "minLength" && (
                    <p className="text-xs text-red-500 text-right">
                      Headline must be at least 20 characters
                    </p>
                  )}
                  <p className="self-start ml-1 text-sm mt-2 text-gray-500">
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
                  <p className="self-start ml-1 text-sm mt-4 text-gray-500">
                    Thumbnail Url
                  </p>
                  <input
                    type="text"
                    {...register("thumbnail", { required: true })}
                    placeholder="https://image.com/image.jpeg"
                    className="input[type='text'] placeholder:text-sm placeholder:text-gray-400 w-full focus:border-purple-700 border-white focus:border rounded-xl bg-gray-100"
                  />
                  {errors.thumbnail?.type === "required" && (
                    <p className="text-xs text-red-500 text-right">
                      The thumbnail field is required
                    </p>
                  )}
                  <div className="mx-1 flex space-x-2 self-start mt-5">
                    <input
                      type="checkbox"
                      className="form-checkbox mt-1 rounded text-purple-600 "
                    />
                    <p className="text-sm text-gray-500">
                      I emphasize that my writing does not contain negative
                      content and does not offend other parties
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 justify-end mt-6">
                    <Button text="Cancel" click={close} dark={false} />
                    <Button text="Publish Now" dark={true} />
                  </div>
                </form>
              </>
            )}
          </div>
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
