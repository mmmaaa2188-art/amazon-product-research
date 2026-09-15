import { ProductOpportunity } from "@/types/product";

export const opportunities: ProductOpportunity[] = [
  { id: "1", productName: "磁吸式桌面理线器", keyword: "magnetic cable organizer desk", asin: "B0D7MC810A", category: "办公用品", price: 24.99, estimatedMonthlySales: 1240, estimatedMonthlyRevenue: 30988, reviewCount: 184, rating: 4.6, bsr: 2840, searchVolume: 32700, estimatedCpc: 1.08, productCost: 4.1, shippingCost: 1.25, fbaFee: 4.62, referralFee: 3.75, netProfit: 11.27, profitMargin: 45.1, breakEvenAcos: 45.1, breakEvenCpc: 2.03, demandScore: 91, competitionScore: 78, profitScore: 92, seasonalityScore: 88, opportunityScore: 89, status: "Shortlisted", createdAt: "2026-09-08" },
  { id: "2", productName: "硅胶空气炸锅内胆", keyword: "silicone air fryer basket square", asin: "B0DJAF228Q", category: "厨房与餐饮", price: 18.95, estimatedMonthlySales: 1880, estimatedMonthlyRevenue: 35626, reviewCount: 326, rating: 4.5, bsr: 1422, searchVolume: 49800, estimatedCpc: 0.92, productCost: 3.2, shippingCost: 0.94, fbaFee: 3.86, referralFee: 2.84, netProfit: 8.11, profitMargin: 42.8, breakEvenAcos: 42.8, breakEvenCpc: 1.55, demandScore: 94, competitionScore: 67, profitScore: 84, seasonalityScore: 91, opportunityScore: 86, status: "Validating", createdAt: "2026-09-07" },
  { id: "3", productName: "便携旅行首饰盒", keyword: "travel jewelry case organizer", asin: "B0F1TJ342M", category: "服饰配件", price: 21.99, estimatedMonthlySales: 920, estimatedMonthlyRevenue: 20231, reviewCount: 98, rating: 4.7, bsr: 4960, searchVolume: 27100, estimatedCpc: 0.86, productCost: 3.85, shippingCost: 1.18, fbaFee: 4.12, referralFee: 3.3, netProfit: 9.54, profitMargin: 43.4, breakEvenAcos: 43.4, breakEvenCpc: 1.74, demandScore: 85, competitionScore: 83, profitScore: 87, seasonalityScore: 76, opportunityScore: 84, status: "Shortlisted", createdAt: "2026-09-06" },
  { id: "4", productName: "橱柜水槽防水垫", keyword: "under sink mat waterproof", asin: "B0C9US553X", category: "家居与厨房", price: 29.95, estimatedMonthlySales: 760, estimatedMonthlyRevenue: 22762, reviewCount: 241, rating: 4.4, bsr: 7360, searchVolume: 22100, estimatedCpc: 1.22, productCost: 6.3, shippingCost: 1.72, fbaFee: 5.08, referralFee: 4.49, netProfit: 12.36, profitMargin: 41.3, breakEvenAcos: 41.3, breakEvenCpc: 2.01, demandScore: 79, competitionScore: 75, profitScore: 89, seasonalityScore: 93, opportunityScore: 83, status: "Watching", createdAt: "2026-09-04" },
  { id: "5", productName: "宠物舔食垫套装", keyword: "lick mat for dogs anxiety", asin: "B0E2LM740P", category: "宠物用品", price: 16.99, estimatedMonthlySales: 1420, estimatedMonthlyRevenue: 24126, reviewCount: 510, rating: 4.3, bsr: 2180, searchVolume: 38400, estimatedCpc: 0.74, productCost: 2.72, shippingCost: 0.81, fbaFee: 3.48, referralFee: 2.55, netProfit: 7.43, profitMargin: 43.7, breakEvenAcos: 43.7, breakEvenCpc: 1.31, demandScore: 88, competitionScore: 61, profitScore: 81, seasonalityScore: 87, opportunityScore: 80, status: "Watching", createdAt: "2026-09-03" },
  { id: "6", productName: "笔记本电脑清洁套装", keyword: "laptop cleaning kit screen", asin: "B0E8LC119R", category: "电子产品", price: 19.99, estimatedMonthlySales: 650, estimatedMonthlyRevenue: 12994, reviewCount: 72, rating: 4.6, bsr: 8860, searchVolume: 18600, estimatedCpc: 1.34, productCost: 3.4, shippingCost: 0.98, fbaFee: 3.72, referralFee: 3.0, netProfit: 8.89, profitMargin: 44.5, breakEvenAcos: 44.5, breakEvenCpc: 1.68, demandScore: 72, competitionScore: 88, profitScore: 85, seasonalityScore: 82, opportunityScore: 79, status: "Validating", createdAt: "2026-09-02" },
];

export const trendData = [
  { month: "4月", opportunities: 18, revenue: 84 }, { month: "5月", opportunities: 24, revenue: 112 },
  { month: "6月", opportunities: 21, revenue: 98 }, { month: "7月", opportunities: 32, revenue: 147 },
  { month: "8月", opportunities: 38, revenue: 176 }, { month: "9月", opportunities: 46, revenue: 218 },
];

export const categoryData = [
  { name: "家居与厨房", value: 31, color: "#0f6b4d" }, { name: "办公用品", value: 23, color: "#58a886" },
  { name: "宠物用品", value: 18, color: "#c8f26b" }, { name: "电子产品", value: 15, color: "#f2bb4b" },
  { name: "其他", value: 13, color: "#dce5e0" },
];
