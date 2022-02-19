import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { gql } from "@apollo/client";

const UserById = gql`
  query userById($email: String) {
    user(email: $email) {
      id
      name
      image
      email
    }
  }
`;

export const useUser = () => {
  const { data: session, status } = useSession();
  if (!session)
    return {
      data: null,
      loading: false,
      authenticated: false,
    };
  const { data, loading } = useQuery(UserById, {
    variables: {
      email: session.user.email,
    },
  });

  return {
    data: data?.user[0],
    loading: loading || status === "loading",
    authenticated: true,
  };
};
