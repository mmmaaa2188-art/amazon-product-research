"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Box, Calculator, ChevronDown, CircleUserRound, Command, FilePenLine, LayoutDashboard, LogOut, Megaphone, Menu, PackageSearch, Search, Settings, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { opportunities } from "@/lib/mock-data";

const nav = [
  { href: "/", label: "运营驾驶舱", icon: LayoutDashboard },
  { href: "/opportunities", label: "选品中心", icon: Sparkles },
  { href: "/keyword-research", label: "关键词筛选", icon: Search },
  { href: "/asin-research", label: "竞品研究", icon: PackageSearch },
  { href: "/listing-studio", label: "Listing 工作室", icon: FilePenLine },
  { href: "/ads-optimizer", label: "广告优化", icon: Megaphone },
  { href: "/profit-calculator", label: "利润计算器", icon: Calculator },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = opportunities.filter((item) => `${item.productName} ${item.keyword} ${item.asin}`.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 8);

  return (
    <div className="min-h-screen bg-canvas">
      {open && <button className="fixed inset-0 z-30 bg-ink/30 lg:hidden" aria-label="Close navigation" onClick={() => setOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-[268px] flex-col border-r border-[#dce5e0] bg-[#f9fbfa] transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-20 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest text-lime"><Command size={20} strokeWidth={2.4} /></span>
            <span><span className="block text-[17px] font-bold tracking-tight">MJC 商策</span><span className="block text-xs text-[#738078]">Amazon US 智能运营</span></span>
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(false)} aria-label="Close navigation"><X size={20} /></button>
        </div>
        <nav className="mt-4 flex-1 space-y-1 px-3">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#96a19b]">工作台</p>
          {nav.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${active ? "bg-[#e8f4ee] text-forest" : "text-[#56635c] hover:bg-white hover:text-ink"}`}><Icon size={19} strokeWidth={active ? 2.3 : 1.8} />{label}</Link>;
          })}
        </nav>
        <div className="m-3 rounded-2xl border border-[#dce5e0] bg-white p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold"><BarChart3 size={17} className="text-forest" />数据完整度</div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[#e8eeeb]"><div className="h-full w-[72%] rounded-full bg-forest" /></div>
          <div className="mt-2 flex justify-between text-xs text-[#758178]"><span>72% 已补全</span><span>126 个候选</span></div>
        </div>
        <div className="border-t border-[#dce5e0] p-3">
          <div className="flex w-full items-center gap-3 rounded-xl p-3 text-left">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e2ece7] text-forest"><CircleUserRound size={20} /></span>
            <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold">MJC 美国站</span><span className="block truncate text-xs text-[#7a867f]">自有品牌工作区</span></span>
          </div>
        </div>
      </aside>
      <div className="lg:pl-[268px]">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#dce5e0]/80 bg-canvas/90 px-4 backdrop-blur-xl sm:px-7 lg:px-10">
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={22} /></button>
          <div className="hidden items-center gap-2 text-sm text-[#748078] sm:flex"><Box size={16} /><span>MJC 运营中枢</span><span>/</span><span className="font-medium text-ink">Amazon.com</span></div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setSearchOpen(true)} className="flex h-9 items-center gap-2 rounded-lg border border-[#d7e0db] bg-white px-3 text-sm text-[#68746d] shadow-sm"><Search size={15} />搜索选品</button>
            <Link href="/api/sellersprite/health" className="grid h-9 w-9 place-items-center rounded-lg border border-[#d7e0db] bg-white text-[#67736c]" aria-label="检查卖家精灵连接" title="检查卖家精灵连接"><Settings size={17} /></Link>
            <form action="/api/auth/logout" method="post"><button className="grid h-9 w-9 place-items-center rounded-lg border border-[#d7e0db] bg-white text-[#67736c]" aria-label="退出登录"><LogOut size={17}/></button></form>
          </div>
        </header>
        <main>{children}</main>
      </div>
      {searchOpen && <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-4 pt-[12vh]" onClick={() => setSearchOpen(false)}><div role="dialog" aria-modal="true" aria-label="搜索选品" className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-center gap-3"><Search size={20} className="text-forest"/><input autoFocus value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") setSearchOpen(false); }} placeholder="输入产品、关键词或 ASIN" className="h-11 flex-1 outline-none"/><button type="button" onClick={() => setSearchOpen(false)} aria-label="关闭搜索"><X size={20}/></button></div><div className="mt-3 max-h-[50vh] overflow-y-auto border-t border-[#e5ebe7] pt-2">{searchResults.map((item) => <Link key={item.id} href={`/opportunities/${item.id}`} onClick={() => setSearchOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-[#f2f7f4]"><span className="block font-semibold">{item.productName}</span><span className="text-xs text-[#748078]">{item.keyword} · {item.asin}</span></Link>)}{searchResults.length === 0 && <p className="px-3 py-5 text-sm text-[#748078]">没有匹配的示例选品。</p>}</div><p className="mt-3 text-xs text-[#879189]">当前仅搜索站内示例选品，不搜索卖家精灵实时数据。</p></div></div>}
    </div>
  );
}
