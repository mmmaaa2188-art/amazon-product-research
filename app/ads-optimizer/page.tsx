import { AppShell } from "@/components/app-shell";
import { AdsOptimizer } from "@/components/ads-optimizer";
import { PageHeading } from "@/components/page-heading";
export default function Page(){return <AppShell><div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-7 lg:px-10"><PageHeading eyebrow="PPC 执行中枢" title="广告诊断与优化" description="逐层识别浪费词和增长词，给出新增投放、否词、调价、预算与暂停建议。"/><AdsOptimizer/></div></AppShell>}
