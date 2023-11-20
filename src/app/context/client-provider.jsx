"use client";

import { SessionProvider } from "next-auth/react";

export default function ProviderWrap({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
