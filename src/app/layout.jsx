import "@mantine/notifications/styles.css";
import "@/styles/globals.css";
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "@/theme";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

export const metadata = {
  title: {
    template: "%s | HeasyResource",
    default: "HeasyResource",
  },
  description: "Hr Manangement System",
};

export default function RootLayout({ children }) {
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
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <Notifications position="top-right" zIndex={1000} />
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
