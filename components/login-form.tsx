"use client";

import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault(); setError(""); setLoading(true);
    const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    setLoading(false);
    if (!response.ok) { setError("密码不正确，请重新输入。"); return; }
    const next = searchParams.get("next");
    router.replace(next?.startsWith("/") && !next.startsWith("//") ? next : "/");
    router.refresh();
  }

  return <form onSubmit={submit} className="w-full max-w-[420px] rounded-3xl border border-[#d7e2dc] bg-white p-7 shadow-panel sm:p-9">
    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-lime"><LockKeyhole size={23}/></div>
    <h1 className="mt-6 text-2xl font-bold tracking-tight">进入 MJC 商策</h1>
    <p className="mt-2 text-sm leading-6 text-[#6f7b74]">这是受保护的内部运营工作台，请输入访问密码。</p>
    <label className="mt-7 block text-sm font-semibold">访问密码<div className="relative mt-2"><input autoFocus required value={password} onChange={e=>setPassword(e.target.value)} type={show?"text":"password"} autoComplete="current-password" className="h-12 w-full rounded-xl border border-[#cfdad4] px-4 pr-12 outline-none transition focus:border-forest focus:ring-2 focus:ring-[#dff5e9]" placeholder="请输入密码"/><button type="button" onClick={()=>setShow(v=>!v)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-[#6f7b74]" aria-label={show?"隐藏密码":"显示密码"}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label>
    {error&&<p role="alert" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
    <button disabled={loading} className="mt-5 h-12 w-full rounded-xl bg-forest font-semibold text-white transition hover:bg-[#0b5a41] disabled:opacity-60">{loading?"正在验证…":"登录工作台"}</button>
    <p className="mt-5 text-center text-xs text-[#8a958e]">会话将在 12 小时后自动失效</p>
  </form>;
}
