import { ApolloProvider } from "@apollo/client";
import apolloClient from "@lib/apollo";
import "@styles/tailwind.css";
import { SessionProvider } from "next-auth/react";
import "@styles/global.css";
import { Toaster } from "react-hot-toast";
const options = {
  // Define default options
  style: {
    background: "#363636",
    color: "#fff",
    fontSize: "14px",
  },
  // Default options for specific types
  success: {
    duration: 3000,
    theme: {
      primary: "green",
      secondary: "black",
    },
  },
};
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        <Toaster toastOptions={options} />
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
