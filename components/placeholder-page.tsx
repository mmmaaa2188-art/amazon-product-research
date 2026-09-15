import { AppShell } from "@/components/app-shell";

export function PlaceholderPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <AppShell><div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-7 lg:px-10 lg:py-10"><p className="text-sm font-semibold text-forest">{eyebrow}</p><h1 className="mt-2 text-3xl font-bold tracking-tight">{title}</h1><p className="mt-2 max-w-2xl text-[#6f7b74]">{description}</p><div className="mt-8 rounded-2xl border border-dashed border-[#cbd8d1] bg-white p-12 text-center"><p className="font-semibold">功能框架已就绪</p><p className="mt-2 text-sm text-[#7b8780]">该模块已接入统一界面和数据结构，可在下一阶段继续完善业务功能。</p></div></div></AppShell>;
}
