import { NextResponse } from "next/server";
import { createSessionToken, hashPassword } from "@/lib/auth";

export const runtime = "edge";

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: "" }));
  const expectedHash = process.env.APP_PASSWORD_HASH;
  if (!expectedHash || typeof password !== "string" || await hashPassword(password) !== expectedHash) {
    return NextResponse.json({ ok: false, message: "密码不正确" }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set("mjc_session", await createSessionToken(), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
