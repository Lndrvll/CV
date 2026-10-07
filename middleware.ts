
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. ABSOLUTE BYPASS: Home page and static assets
  // We check for exactly "/" or common static paths to ensure NO auth logic ever runs here
  if (
    pathname === "/" || 
    pathname === "/public-home" ||
    pathname.startsWith("/_next") || 
    pathname.startsWith("/static") || 
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/api/public")
  ) {
    return NextResponse.next();
  }

  // 2. Protect all lens routes
  if (pathname.startsWith("/lenses")) {
    const token = request.cookies.get("auth0-token")?.value;
    
    // If not logged in, send them to the welcome page
    if (!token) {
      return NextResponse.redirect(new URL("/welcome", request.url));
    }

    // Auto-router logic for /lenses/auto
    if (pathname === "/lenses/auto") {
      const searchParams = request.nextUrl.searchParams;
      const email = searchParams.get("email") || "user@example.com";
      const domain = email.split("@")[1];

      try {
        const classifyRes = await fetch(new URL("/api/classify", request.url), {
          method: "POST",
          body: JSON.stringify({ domain }),
          headers: { "Content-Type": "application/json" },
        });
        const { role } = await classifyRes.json();

        if (role === "cyber") return NextResponse.redirect(new URL("/lenses/cyber?role=cyber", request.url));
        if (role === "av") return NextResponse.redirect(new URL("/lenses/av?role=av", request.url));
      } catch (e) {
        console.error("Classifier error:", e);
      }
    }
  }

  return NextResponse.next();
}

