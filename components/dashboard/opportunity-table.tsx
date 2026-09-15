"use client";

import Link from "next/link";
import { ArrowUpDown, ChevronRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { opportunities } from "@/lib/mock-data";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });
const statusLabels = { Watching: "观察中", Validating: "验证中", Shortlisted: "已入围", Rejected: "已淘汰" } as const;

export function OpportunityTable() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("全部状态");
  const rows = useMemo(() => opportunities.filter((o) => (status === "全部状态" || o.status === status) && `${o.productName} ${o.keyword} ${o.asin}`.toLowerCase().includes(query.toLowerCase())), [query, status]);
  return <section className="overflow-hidden rounded-2xl border border-[#dce5e0] bg-white shadow-panel">
    <div className="flex flex-col gap-4 border-b border-[#e4eae7] p-5 sm:flex-row sm:items-center sm:justify-between">
      <div><h2 className="text-base font-bold">优先选品机会</h2><p className="mt-1 text-sm text-[#7a867f]">综合需求、竞争、利润和季节性排序。</p></div>
      <div className="flex gap-2"><label className="flex h-10 flex-1 items-center gap-2 rounded-lg border border-[#d8e1dc] px-3 text-sm sm:w-52"><Search size={15} className="text-[#849087]"/><input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-transparent outline-none" placeholder="搜索产品或 ASIN" aria-label="搜索产品"/></label><select value={status} onChange={(e) => setStatus(e.target.value)} className="h-10 rounded-lg border border-[#d8e1dc] bg-white px-3 text-sm outline-none" aria-label="按状态筛选"><option value="全部状态">全部状态</option><option value="Watching">观察中</option><option value="Validating">验证中</option><option value="Shortlisted">已入围</option></select></div>
    </div>
    <div className="overflow-x-auto scrollbar-thin"><table className="w-full min-w-[980px] text-left"><thead><tr className="border-b border-[#e5ebe7] bg-[#fafcfb] text-xs font-semibold uppercase tracking-[0.06em] text-[#7d8982]"><th className="px-5 py-3.5">产品</th><th className="px-4 py-3.5">售价</th><th className="px-4 py-3.5">预估月销量</th><th className="px-4 py-3.5">预估月营收</th><th className="px-4 py-3.5">评论</th><th className="px-4 py-3.5">利润率</th><th className="px-4 py-3.5"><span className="flex items-center gap-1">机会分 <ArrowUpDown size={13}/></span></th><th className="px-4 py-3.5">状态</th><th className="px-3 py-3.5" /></tr></thead><tbody>{rows.map((item) => <tr key={item.id} className="group border-b border-[#edf1ef] text-sm last:border-0 hover:bg-[#fbfdfc]"><td className="px-5 py-4"><div className="font-semibold text-ink">{item.productName}</div><div className="mt-1 max-w-[250px] truncate text-xs text-[#7b8780]">{item.keyword} · {item.asin}</div></td><td className="px-4 py-4 font-medium">${item.price}</td><td className="px-4 py-4">{compact.format(item.estimatedMonthlySales)}</td><td className="px-4 py-4 font-semibold">{money.format(item.estimatedMonthlyRevenue)}</td><td className="px-4 py-4"><span>{item.reviewCount}</span><span className="ml-1 text-xs text-amber-500">★ {item.rating}</span></td><td className="px-4 py-4"><span className="rounded-md bg-[#eaf7ef] px-2 py-1 font-semibold text-forest">{item.profitMargin}%</span></td><td className="px-4 py-4"><div className="flex items-center gap-2"><div className="h-1.5 w-14 overflow-hidden rounded-full bg-[#e7ece9]"><div className="h-full rounded-full bg-forest" style={{ width: `${item.opportunityScore}%` }}/></div><b>{item.opportunityScore}</b></div></td><td className="px-4 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${item.status === "Shortlisted" ? "bg-forest text-white" : item.status === "Validating" ? "bg-[#fff3d9] text-[#926200]" : "bg-[#edf1ef] text-[#5f6b64]"}`}>{statusLabels[item.status]}</span></td><td className="px-3 py-4"><Link href={`/opportunities/${item.id}`} className="grid h-8 w-8 place-items-center rounded-lg text-[#88928c] hover:bg-[#edf4f0] hover:text-forest" aria-label={`查看 ${item.productName}`}><ChevronRight size={17}/></Link></td></tr>)}{rows.length === 0 && <tr><td colSpan={9} className="px-5 py-12 text-center text-sm text-[#7b8780]">没有符合当前筛选条件的选品机会。</td></tr>}</tbody></table></div>
    <div className="flex items-center justify-between border-t border-[#e4eae7] px-5 py-3 text-sm"><span className="text-[#77837c]">显示 {rows.length} 条，共 126 条选品机会</span><Link href="/opportunities" className="font-semibold text-forest hover:underline">查看全部选品</Link></div>
  </section>;
}
