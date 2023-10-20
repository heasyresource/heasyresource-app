import { Inter } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import store from "@/store";





export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>Heasyresource</title>
        <meta charSet="utf-8" />
        <meta content="IE=Edge" httpEquiv="x-ua-compatible" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#fffff" />
        <meta property="og:type" content="website" />
        <meta property="og:ste_name" content="Heasyresource" />
      </Head>
      <Provider store={store}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
            fontFamily: "Satoshi, sans-serif",
            headerFontFamily: "Satoshi, sans-serif",
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </Provider>
    </main>
  );
}
