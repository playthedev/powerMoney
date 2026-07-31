export type Stock = {
  symbol: string;
  name: string;
  sector: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
  peRatio: number;
  high52w: number;
  low52w: number;
  volume: string;
  about: string;
  series: number[];
};

function series(base: number, points: number, volatility: number, drift: number) {
  const out: number[] = [];
  let v = base;
  for (let i = 0; i < points; i++) {
    const wave = Math.sin(i / 3.2) * volatility;
    v = v + drift + wave * 0.4;
    out.push(Math.round(v * 100) / 100);
  }
  return out;
}

export const stocks: Stock[] = [
  {
    symbol: "RELIND",
    name: "Reliance Industries Ltd.",
    sector: "Energy & Retail",
    price: 2952.4,
    change: 34.2,
    changePercent: 1.17,
    marketCap: "₹19,98,340 Cr",
    peRatio: 27.8,
    high52w: 3024.9,
    low52w: 2221.0,
    volume: "48.2L",
    about:
      "A diversified conglomerate spanning energy, petrochemicals, retail and digital services, among the most widely held stocks on Indian exchanges.",
    series: series(2900, 24, 24, 2.2),
  },
  {
    symbol: "TCSLTD",
    name: "Tata Consultancy Services",
    sector: "IT Services",
    price: 4123.75,
    change: -18.5,
    changePercent: -0.45,
    marketCap: "₹14,92,110 Cr",
    peRatio: 29.4,
    high52w: 4592.25,
    low52w: 3311.0,
    volume: "12.6L",
    about:
      "India's largest IT services exporter, offering consulting, technology and outsourcing services to global enterprises.",
    series: series(4150, 24, 30, -1.1),
  },
  {
    symbol: "HDFCBK",
    name: "HDFC Bank Ltd.",
    sector: "Private Banking",
    price: 1687.9,
    change: 9.15,
    changePercent: 0.55,
    marketCap: "₹12,84,900 Cr",
    peRatio: 19.6,
    high52w: 1791.0,
    low52w: 1363.45,
    volume: "1.2Cr",
    about:
      "India's largest private-sector bank by assets, offering retail, wholesale and treasury banking services nationwide.",
    series: series(1660, 24, 18, 1.4),
  },
  {
    symbol: "INFY",
    name: "Infosys Ltd.",
    sector: "IT Services",
    price: 1834.2,
    change: 22.6,
    changePercent: 1.25,
    marketCap: "₹7,61,230 Cr",
    peRatio: 26.1,
    high52w: 2011.0,
    low52w: 1358.35,
    volume: "68.4L",
    about:
      "A global leader in next-generation digital services and consulting, helping enterprises navigate their digital transformation.",
    series: series(1800, 24, 22, 1.6),
  },
  {
    symbol: "ICICIBK",
    name: "ICICI Bank Ltd.",
    sector: "Private Banking",
    price: 1298.55,
    change: -4.2,
    changePercent: -0.32,
    marketCap: "₹9,13,400 Cr",
    peRatio: 18.2,
    high52w: 1362.35,
    low52w: 998.1,
    volume: "95.1L",
    about:
      "A leading private-sector bank offering a wide range of banking products through specialised subsidiaries.",
    series: series(1305, 24, 14, -0.6),
  },
  {
    symbol: "BHARTI",
    name: "Bharti Airtel Ltd.",
    sector: "Telecom",
    price: 1589.3,
    change: 12.75,
    changePercent: 0.81,
    marketCap: "₹9,52,600 Cr",
    peRatio: 68.4,
    high52w: 1779.0,
    low52w: 1050.55,
    volume: "38.7L",
    about:
      "A leading telecommunications provider with mobile, home broadband and digital TV services across India and Africa.",
    series: series(1560, 24, 20, 1.3),
  },
  {
    symbol: "ITCLTD",
    name: "ITC Ltd.",
    sector: "FMCG & Diversified",
    price: 462.15,
    change: 3.05,
    changePercent: 0.66,
    marketCap: "₹5,78,900 Cr",
    peRatio: 24.7,
    high52w: 528.7,
    low52w: 393.75,
    volume: "1.6Cr",
    about:
      "A diversified conglomerate with a leadership position in FMCG, hotels, paperboards, packaging and agri-business.",
    series: series(455, 24, 8, 0.4),
  },
  {
    symbol: "LTIM",
    name: "LTIMindtree Ltd.",
    sector: "IT Services",
    price: 5342.6,
    change: -46.4,
    changePercent: -0.86,
    marketCap: "₹1,58,200 Cr",
    peRatio: 31.5,
    high52w: 6244.9,
    low52w: 4360.0,
    volume: "3.1L",
    about:
      "A digital technology consulting and solutions provider formed from the merger of Larsen & Toubro Infotech and Mindtree.",
    series: series(5380, 24, 60, -2.4),
  },
];

export function getStockBySymbol(symbol: string) {
  return stocks.find((s) => s.symbol.toLowerCase() === symbol.toLowerCase());
}
