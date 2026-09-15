import { AppShell } from "@/components/app-shell";
import { ListingStudio } from "@/components/listing-studio";
import { PageHeading } from "@/components/page-heading";
export default function Page(){return <AppShell><div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-7 lg:px-10"><PageHeading eyebrow="A10 / COSMO / Rufus" title="Listing 文案工作室" description="基于已验证词库和产品真实事实，生成美国站标题、五点描述与后台搜索词。"/><ListingStudio/></div></AppShell>}
