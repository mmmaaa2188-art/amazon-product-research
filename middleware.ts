import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const isAuthenticated = await verifySessionToken(request.cookies.get("mjc_session")?.value);
  if (isAuthenticated) return NextResponse.next();
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", `${request.nextUrl.pathname}${request.nextUrl.search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!login|api/auth|_next/static|_next/image|favicon.svg).*)"],
};
