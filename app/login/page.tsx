import { Suspense } from "react";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top_left,#e2f5e9,transparent_42%),#f4f7f5] px-4 py-10"><Suspense><LoginForm/></Suspense></main>;
}
