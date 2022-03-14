import { gql, useQuery } from "@apollo/client";

const GET_HOME_DATA = gql`
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
      views
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

export const ADD_POST = gql`
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

export const GET_PATHS = gql`
  query {
    posts {
      id
    }
  }
`;

export const GET_DETAIL = gql`
  query getDetail($id: ID!) {
    post(id: $id) {
      id
      title
      category {
        name
        id
      }
      author {
        name
        image
        id
      }
      minsRead
      body
      createdAt
      thumbnail
    }
  }
`;

export const getHomeData = () => {
  const { data, error, loading } = useQuery(GET_HOME_DATA);
  return { data, error, loading };
};
