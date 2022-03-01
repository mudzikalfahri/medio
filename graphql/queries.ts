import { gql, useQuery } from "@apollo/client";

const getAllPostQuery = gql`
  query {
    posts {
      id
      title
      body
      category {
        name
      }
      thumbnail
      createdAt
      minsRead
      headline
      author {
        id
        name
        email
        image
      }
    }
  }
`;

export const getAllPosts = () => {
  const { data, error, loading } = useQuery(getAllPostQuery);
  return { data, error, loading };
};
