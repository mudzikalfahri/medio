import { ApolloProvider } from "@apollo/client";
import apolloClient from "@lib/apollo";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
