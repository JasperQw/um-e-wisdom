import { NextResponse, NextRequest } from "next/server";
import { decodeJWT } from "./helper/jwt_helper";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let cookie = request.cookies.get("token");
  let path = request.nextUrl.pathname;
  let payload;
  if (cookie) {
    payload = await decodeJWT(cookie.value);
    if (!payload) {
      request.cookies.delete("token");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (path === "/login") {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
  } else {
    if (path !== "/login") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile/:path*",
    "/login",
    "/cart",
    "/collection",
    "/return",
    "/renew",
  ],
};
