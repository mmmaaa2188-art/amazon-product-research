"use client";

import Link from "next/link";
import { Download, Plus } from "lucide-react";
import { opportunities } from "@/lib/mock-data";
import { downloadCsv } from "@/lib/download-csv";

export function DashboardActions() {
  const exportReport = () => downloadCsv(
    `选品概览-${new Date().toISOString().slice(0, 10)}.csv`,
    ["产品", "关键词", "ASIN", "类目", "售价", "预估月销量", "预估月营收", "评论数", "利润率", "机会分", "状态"],
    opportunities.map((item) => [item.productName, item.keyword, item.asin, item.category, item.price, item.estimatedMonthlySales, item.estimatedMonthlyRevenue, item.reviewCount, item.profitMargin, item.opportunityScore, item.status]),
  );

  return <div className="flex gap-2">
    <button type="button" onClick={exportReport} className="flex h-10 items-center gap-2 rounded-lg border border-[#d4ded8] bg-white px-3.5 text-sm font-semibold shadow-sm"><Download size={16}/>导出选品概览</button>
    <Link href="/opportunities" className="flex h-10 items-center gap-2 rounded-lg bg-forest px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#0b5a41]"><Plus size={17}/>开始选品研究</Link>
  </div>;
}
