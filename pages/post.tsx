import { NextPage } from "next";
import Layout from "layouts/Layout";
import { Meta } from "layouts/Meta";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const Post: NextPage = () => {
  const [body, setBody] = useState("");
  return (
    <Layout
      meta={
        <Meta
          description="Place to share your ideas with others"
          title="Post an Ideas"
        />
      }
    >
      <div className="max-w-5xl mx-auto pt-24">
        <textarea
          onChange={(e) => setBody(e.target.value)}
          name="body"
          id="body"
          value={body}
          cols={30}
          rows={10}
        />
        <article className="prose dark:prose-dark">
          <ReactMarkdown children={body} />
        </article>
      </div>
    </Layout>
  );
};

export default Post;
