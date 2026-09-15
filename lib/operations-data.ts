export const keywordRows = [
  { keyword: "magnetic cable organizer", volume: 32700, purchaseRate: 8.4, spr: 18, cpc: 1.08, naturalRank: 12, trend: 18, score: 91, priority: "P1 核心词", intent: "核心品类" },
  { keyword: "cord holder for desk", volume: 22600, purchaseRate: 7.6, spr: 21, cpc: 0.92, naturalRank: 28, trend: 11, score: 84, priority: "P1 核心词", intent: "场景词" },
  { keyword: "desk cable management clips", volume: 14800, purchaseRate: 9.1, spr: 14, cpc: 0.78, naturalRank: 36, trend: 24, score: 82, priority: "P2 长尾词", intent: "功能词" },
  { keyword: "wire organizer magnetic", volume: 8900, purchaseRate: 6.8, spr: 11, cpc: 0.66, naturalRank: 44, trend: 7, score: 75, priority: "P2 长尾词", intent: "属性词" },
  { keyword: "cable clip nightstand", volume: 4400, purchaseRate: 10.2, spr: 8, cpc: 0.51, naturalRank: 63, trend: 31, score: 73, priority: "P2 长尾词", intent: "场景词" },
  { keyword: "phone charger holder desk", volume: 12100, purchaseRate: 3.1, spr: 42, cpc: 1.46, naturalRank: 118, trend: -8, score: 39, priority: "P3 观察词", intent: "扩展词" },
];

export const adActions = [
  { keyword: "desk cable management clips", type: "新增投放", match: "Exact", spend: 0, sales: 0, acos: 0, currentBid: 0, suggestedBid: 0.82, reason: "高购买率、竞争低、搜索趋势上升" },
  { keyword: "cheap cord clips", type: "否定关键词", match: "Phrase Neg", spend: 46.2, sales: 0, acos: 0, currentBid: 0.91, suggestedBid: 0, reason: "38 次点击无订单，低价意图不匹配" },
  { keyword: "magnetic cable organizer", type: "加预算提价", match: "Exact", spend: 186.4, sales: 822, acos: 22.7, currentBid: 1.08, suggestedBid: 1.24, reason: "ACOS 健康，自然排名下降 7 位" },
  { keyword: "cord holder for desk", type: "维持", match: "Exact", spend: 98.5, sales: 436, acos: 22.6, currentBid: 0.92, suggestedBid: 0.92, reason: "排名与转化稳定" },
  { keyword: "phone charger holder desk", type: "降价", match: "Broad", spend: 124.8, sales: 216, acos: 57.8, currentBid: 1.46, suggestedBid: 0.95, reason: "ACOS 超盈亏线且相关性偏弱" },
];
