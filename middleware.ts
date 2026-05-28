import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/coach",
  "/workouts",
  "/nutrition",
  "/uploads",
  "/compare",
  "/analytics",
  "/settings",
  "/assessment",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isDemoLoggedIn = request.cookies.get("ironmind_demo_auth")?.value;

  if (isProtectedRoute && !isDemoLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/coach/:path*",
    "/workouts/:path*",
    "/nutrition/:path*",
    "/uploads/:path*",
    "/compare/:path*",
    "/analytics/:path*",
    "/settings/:path*",
    "/assessment/:path*",
  ],
};