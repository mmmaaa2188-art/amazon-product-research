import { AppShell } from "@/components/app-shell";
import { KeywordWorkbench } from "@/components/keyword-workbench";
import { PageHeading } from "@/components/page-heading";
export default function Page(){return <AppShell><div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-7 lg:px-10"><PageHeading eyebrow="关键词资产" title="关键词筛选与分层" description="按需求、购买意图、自然排名、竞争度和 CPC 筛选词库，并将关键词分配给 Listing 与广告。"/><KeywordWorkbench/></div></AppShell>}
