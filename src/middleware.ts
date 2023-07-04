import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/signin")) {
    console.log("página signin");
    try {
      await verifyAuth(request);
      console.log("página signin - usuário logado");
      return NextResponse.redirect(new URL("/", request.url));
    } catch (err) {
      console.log("página signin - usuário não logado");
      return NextResponse.next();
    }
  } else {
    try {
      console.log("página não signin");
      await verifyAuth(request);
      console.log("página não signin - usuário logado");
      return NextResponse.next();
    } catch (err) {
      console.log("página não signin - usuário não logado");
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }
}

export const config = {
  matcher: ["/", "/signin"],
};
