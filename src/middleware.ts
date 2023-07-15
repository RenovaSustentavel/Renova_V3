import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/signin") {
    try {
      await verifyAuth(request);
      return NextResponse.redirect(new URL("/", request.url));
    } catch (err) {
      return NextResponse.next();
    }
  } else if (request.nextUrl.pathname.startsWith("/api")) {
    try {
      await verifyAuth(request);
      return NextResponse.next();
    } catch (err) {
      return NextResponse.json({ error: "Not authorized" }, { status: 401 });
    }
  } else {
    try {
      await verifyAuth(request);
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }
}

export const config = {
  matcher: ["/", "/signin", "/api/cliente"],
};
