import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const logged = req.cookies.token === "qwerty";
  if (req.nextUrl.pathname === "/login" && logged) return NextResponse.redirect("http://localhost:3000/");
}
