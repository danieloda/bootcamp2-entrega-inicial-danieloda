// Mock data to simulate Ibovespa shares
const mockShares = [
  { codigo: "PETR4", partPct: 6.42 },
  { codigo: "VALE3", partPct: 11.35 },
  { codigo: "ITUB4", partPct: 8.05 },
  { codigo: "BBDC4", partPct: 4.01 },
  { codigo: "ABEV3", partPct: 2.51 }
];

// Save mock data to chrome.storage.local
chrome.storage.local.set({ ibov_shares: mockShares }, () => {
  console.log("[B3 MOCK] Ibovespa shares saved to storage:", mockShares);
});
