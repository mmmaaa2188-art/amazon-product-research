import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { DashboardActions } from "@/components/dashboard/dashboard-actions";
import { CategoryChart, OpportunityTrendChart } from "@/components/dashboard/dashboard-charts";
import { OpportunityTable } from "@/components/dashboard/opportunity-table";

const metrics = [
  { label: "跟踪中的选品", value: "126", change: "+14", trend: "up", note: "本月新增" },
  { label: "候选月营收潜力", value: "$218K", change: "+18.2%", trend: "up", note: "模型估算" },
  { label: "平均机会分", value: "78.4", change: "+4.6", trend: "up", note: "较上月" },
  { label: "等待决策", value: "18", change: "-2", trend: "down", note: "需完成利润验证" },
];

export default function DashboardPage() {
  return <AppShell><div className="mx-auto max-w-[1600px] px-4 py-7 sm:px-7 lg:px-10 lg:py-9">
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><div className="mb-2 flex items-center gap-2 text-sm font-semibold text-forest"><Sparkles size={15}/>今日经营决策</div><h1 className="text-3xl font-bold tracking-[-0.035em] sm:text-[34px]">早上好，MJC。</h1><p className="mt-2 text-base text-[#6f7b74]">从选品到广告，把今天最值得处理的机会放在这里。</p></div><DashboardActions/></div>
    <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((metric) => <div key={metric.label} className="rounded-2xl border border-[#dce5e0] bg-white p-5 shadow-panel"><p className="text-sm font-medium text-[#6f7b74]">{metric.label}</p><div className="mt-3 flex items-end justify-between"><span className="text-[30px] font-bold tracking-[-0.04em]">{metric.value}</span><span className={`mb-1 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold ${metric.trend === "up" ? "bg-[#e7f6ed] text-forest" : "bg-[#fcece9] text-[#b54837]"}`}>{metric.trend === "up" ? <ArrowUpRight size={13}/> : <ArrowDownRight size={13}/>} {metric.change}</span></div><p className="mt-2 text-xs text-[#8a958e]">{metric.note}</p></div>)}</div>
    <div className="mb-6 grid gap-4 xl:grid-cols-[1.65fr_1fr]"><section className="rounded-2xl border border-[#dce5e0] bg-white p-5 shadow-panel sm:p-6"><div className="mb-4 flex items-start justify-between"><div><h2 className="text-base font-bold">候选营收潜力</h2><p className="mt-1 text-sm text-[#7a867f]">已入围产品的预估月营收变化</p></div><select className="rounded-lg border border-[#d8e1dc] bg-white px-2.5 py-2 text-xs font-medium"><option>近 6 个月</option></select></div><div className="h-[245px]"><OpportunityTrendChart/></div></section><section className="rounded-2xl border border-[#dce5e0] bg-white p-5 shadow-panel sm:p-6"><div><h2 className="text-base font-bold">研究类目分布</h2><p className="mt-1 text-sm text-[#7a867f]">当前候选池占比</p></div><div className="mt-3 h-[245px]"><CategoryChart/></div></section></div>
    <OpportunityTable/>
  </div></AppShell>;
}
