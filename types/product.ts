export type OpportunityStatus = "Watching" | "Validating" | "Shortlisted" | "Rejected";

export interface ProductOpportunity {
  id: string;
  productName: string;
  keyword: string;
  asin: string;
  category: string;
  price: number;
  estimatedMonthlySales: number;
  estimatedMonthlyRevenue: number;
  reviewCount: number;
  rating: number;
  bsr: number;
  searchVolume: number;
  estimatedCpc: number;
  productCost: number;
  shippingCost: number;
  fbaFee: number;
  referralFee: number;
  netProfit: number;
  profitMargin: number;
  breakEvenAcos: number;
  breakEvenCpc: number;
  demandScore: number;
  competitionScore: number;
  profitScore: number;
  seasonalityScore: number;
  opportunityScore: number;
  status: OpportunityStatus;
  createdAt: string;
}
