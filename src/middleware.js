const unProtectedRoutes = [
  "/signin",
  "/signup",
  "/forgot-password",
  "/new-password",
  "/verification",
];

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/signin",
    "/signup",
    "/forgot-password",
    "/new-password",
    "/verification",
    "/complete-registration",
    "/admin",
    "/employee",
    "/employee/settings",
  ],
};

import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  console.log(token, "server");

  if (unProtectedRoutes.includes(req.nextUrl.pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  if (
    req.nextUrl.pathname.startsWith("/complete-registration") &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  if (
    req.nextUrl.pathname.startsWith("/admin") &&
    isAuthenticated &&
    token.role.name !== "HrAdmin"
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  if (
    req.nextUrl.pathname.startsWith("/dashboard") &&
    isAuthenticated &&
    token.role.name === "HrAdmin"
  ) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }
  if (
    req.nextUrl.pathname.startsWith("/employee") &&
    isAuthenticated &&
    token.role.name !== "Employee"
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  if (
    req.nextUrl.pathname.startsWith("/dashboard") &&
    isAuthenticated &&
    token.role.name === "Employee"
  ) {
    return NextResponse.redirect(new URL("/employee", req.url));
  }

  if (
    req.nextUrl.pathname === "/employee/settings" &&
    isAuthenticated &&
    token.role.name === "Employee"
  ) {
    return NextResponse.redirect(
      new URL("/employee/settings/profile", req.url)
    );
  }
  // if (
  //   req.nextUrl.pathname.startsWith("/dashboard") &&
  //   isAuthenticated &&
  //   token.company.isActive === 0
  // ) {
  //   return NextResponse.redirect(new URL("/complete-registration", req.url));
  // }
  //   return await withAuth(req, {
  //     pages: {
  //       signIn: "/signin",
  //     },
  //   });
}
