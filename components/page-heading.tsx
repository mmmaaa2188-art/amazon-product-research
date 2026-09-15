export function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
  return <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold text-forest">{eyebrow}</p><h1 className="mt-2 text-3xl font-bold tracking-[-0.035em]">{title}</h1><p className="mt-2 max-w-3xl text-base text-[#6f7b74]">{description}</p></div>{action}</div>;
}
