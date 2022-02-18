import Button from "./Button";
import ReactMarkdown from "react-markdown";

const PreviewPost = ({ close, body }: { close: () => void; body: string }) => {
  return (
    <div className="top-0 left-0 w-full h-screen overflow-y-auto fixed bg-gray-800/40 z-30">
      <div className="flex py-4 px-10 justify-between fixed top-0 left-0 w-full items-center">
        <Button click={close} dark={false} text="< Back" />
      </div>
      <div className="max-w-4xl mx-auto rounded-2xl min-g-screen bg-white my-20">
        <article className="prose prose-purple py-16 mx-auto">
          <ReactMarkdown children={body} />
        </article>
      </div>
    </div>
  );
};

export default PreviewPost;
