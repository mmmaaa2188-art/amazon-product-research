import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MJC 商策 | 亚马逊美国站智能运营",
  description: "专属亚马逊美国站选品、关键词、Listing 与广告优化工作台。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
