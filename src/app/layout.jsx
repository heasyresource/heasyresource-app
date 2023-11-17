import "@/styles/globals.css";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "@mantine/tiptap/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "@/theme";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import NextTopLoader from "nextjs-toploader";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProviderWrap from "./context/client-provider";
import { Provider } from "react-redux";
import store from "@/store";

export const metadata = {
  title: {
    template: "%s | HeasyResource",
    default: "HeasyResource",
  },
  description: "Hr Manangement System",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />

        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta content="IE=Edge" httpEquiv="x-ua-compatible" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#fffff" />
        <meta property="og:type" content="website" />
        <meta property="og:ste_name" content="Heasyresource" />
      </head>
      <body suppressHydrationWarning={true}>
        {/* <Provider store={store}> */}
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <Notifications position="top-right" zIndex={1000} />
          <ModalsProvider>
            <NextTopLoader color="#3377FF" />

            <ProviderWrap session={session}>{children}</ProviderWrap>
          </ModalsProvider>
        </MantineProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}
