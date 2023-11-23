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
    "/change-password",
    "/",
  ],
};

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { getSubdomain } from "./utils/publicFunctions";
import { withAuth } from "next-auth/middleware";

export default async function middleware(req, res) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  const defaultSubdomain = ["www", "heasyresource"];
  const subdomain = getSubdomain(req.headers.get("host"));
  const hasSubdomain = !defaultSubdomain.includes(subdomain);
  if (hasSubdomain) {
    const getSubdomain = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/companies/subdomain/${subdomain}`
    );
    const getSubdomainData = await getSubdomain.json();

    if (
      getSubdomainData.results === null ||
      getSubdomainData.results?.isActive === 0
    ) {
      return NextResponse.redirect(new URL("/404", req.url));
    }

    if (
      getSubdomainData.results !== null &&
      (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/signup")
    ) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }
  if (
    req.nextUrl.pathname.startsWith("/dashboard") &&
    !hasSubdomain &&
    isAuthenticated &&
    token.role.name === "CompanyAdmin"
  ) {
    return NextResponse.redirect(new URL("/complete-registration", req.url));
  }
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

  if (
    req.nextUrl.pathname.startsWith("/dashboard") &&
    isAuthenticated &&
    token.company.isActive === 0
  ) {
    return NextResponse.redirect(new URL("/complete-registration", req.url));
  }
  if (
    req.nextUrl.pathname.startsWith("/employee") &&
    isAuthenticated &&
    token.isDefaultPassword === 1
  ) {
    return NextResponse.redirect(new URL("/change-password", req.url));
  }
  if (
    req.nextUrl.pathname.startsWith("/change-password") &&
    isAuthenticated &&
    token.role.name === "Employee" &&
    token.isDefaultPassword === 0
  ) {
    return NextResponse.redirect(new URL("/employee", req.url));
  }

  return await withAuth(req, {
    pages: {
      signIn: "/signin",
    },
  });
}
