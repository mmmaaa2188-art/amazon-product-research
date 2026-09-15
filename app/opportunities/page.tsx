import { AppShell } from "@/components/app-shell";
import { OpportunityCenter } from "@/components/opportunity-center";
import { PageHeading } from "@/components/page-heading";
export default function Page(){return <AppShell><div className="mx-auto max-w-[1800px] px-4 py-8 sm:px-7 lg:px-10"><PageHeading eyebrow="美国站 · 精铺模式" title="额度受控选品中心" description="批量获取、逐层淘汰、少量验证：寻找真实需求、低 Review 门槛、物流友好且广告成本可控的产品。"/><OpportunityCenter/></div></AppShell>}
