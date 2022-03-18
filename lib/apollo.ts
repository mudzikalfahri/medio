import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/graphql"
      : process.env.NEXT_PUBLIC_HOST,
  cache: new InMemoryCache(),
});

export default apolloClient;
