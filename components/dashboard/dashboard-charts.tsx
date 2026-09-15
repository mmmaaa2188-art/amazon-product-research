"use client";

import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { categoryData, trendData } from "@/lib/mock-data";

const currencyTick = (value: number) => `$${value}k`;

export function OpportunityTrendChart() {
  return <ResponsiveContainer width="100%" height="100%"><AreaChart data={trendData} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}><defs><linearGradient id="opportunityFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f6b4d" stopOpacity={0.24}/><stop offset="95%" stopColor="#0f6b4d" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#e6ece8" vertical={false}/><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#7a867f", fontSize: 12 }} dy={8}/><YAxis width={48} tickFormatter={currencyTick} axisLine={false} tickLine={false} tick={{ fill: "#7a867f", fontSize: 12 }}/><Tooltip contentStyle={{ border: "1px solid #dce5e0", borderRadius: 12, boxShadow: "0 8px 30px rgba(0,0,0,.08)" }} formatter={(value) => [`$${value}k`, "月营收潜力"]}/><Area type="monotone" dataKey="revenue" stroke="#0f6b4d" strokeWidth={2.5} fill="url(#opportunityFill)" activeDot={{ r: 5, fill: "#c8f26b", stroke: "#0f6b4d", strokeWidth: 2 }}/></AreaChart></ResponsiveContainer>;
}

export function CategoryChart() {
  return <div className="flex h-full flex-col sm:flex-row sm:items-center"><div className="h-44 flex-1"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={categoryData} dataKey="value" innerRadius={52} outerRadius={75} paddingAngle={3} stroke="none">{categoryData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}</Pie><Tooltip formatter={(value) => [`${value}%`, "占比"]} contentStyle={{ border: "1px solid #dce5e0", borderRadius: 12 }}/></PieChart></ResponsiveContainer></div><div className="grid flex-1 gap-2.5">{categoryData.map((item) => <div key={item.name} className="flex items-center justify-between gap-4 text-xs"><span className="flex items-center gap-2 text-[#657169]"><i className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />{item.name}</span><span className="font-semibold text-ink">{item.value}%</span></div>)}</div></div>;
}
