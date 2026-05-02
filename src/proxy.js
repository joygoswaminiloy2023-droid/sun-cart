import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // Ensure this path matches your structure
import { headers } from "next/headers";

export async function proxy(request) {
  // Use the standard BetterAuth session check for middleware
  const session = await auth.api.getSession({
    headers: await headers(), 
  });

  if (session) {
    return NextResponse.next();
  }

  // Redirect to Login if no session exists
  return NextResponse.redirect(new URL('/Login', request.url));
}

export const config = {
  // Matches root and the Popularproducts dynamic routes
  matcher: ['/', '/Popularproducts/:path*'],
};