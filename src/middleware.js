const unProtectedRoutes = ["/signin", "/signup", "/forgot-password", "/new-password", "/verfication"];
const matcher = ["/dashboard/:path*", ...unProtectedRoutes];
export const config = {
  matcher,
};

import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if (unProtectedRoutes.includes(req.nextUrl.pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  //   return await withAuth(req, {
  //     pages: {
  //       signIn: "/signin",
  //     },
  //   });
}
