import { gql, useQuery } from "@apollo/client";

const fetchPosts = gql`
  query {
    posts {
      id
      title
      body
    }
    post(id: "1") {
      title
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(fetchPosts);
  console.log(data);
  return <div>Home</div>;
}
