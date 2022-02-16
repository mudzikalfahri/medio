import { ApolloProvider } from "@apollo/client";
import apolloClient from "@lib/apollo";
import "@styles/tailwind.css";
import { SessionProvider } from "next-auth/react";
import "@styles/global.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
