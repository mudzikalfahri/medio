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
    categories {
      id
      name
      posts {
        id
      }
    }
  }
`;

export const getHomeData = () => {
  const { data, error, loading } = useQuery(getAllPostQuery);
  return { data, error, loading };
};
