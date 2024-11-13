import PumpFunIcon from "../../public/svg_icons/PumpFunIcon.svg";
import MoonShotIcon from "../../public/svg_icons/moon_shot.svg";

export const booleanOptionsList = [
  { label: "Pump.Fun", value: "isPumpFun", icon: <PumpFunIcon /> },
  { label: "MoonShot", value: "isMoonShot", emoji: "🌙" },
  { label: "Graduated", value: "isGraduated", emoji: "🎓" },
  { label: "Top 10 Holder", value: "isTop10Holder", emoji: "🏅" },
  { label: "1+ Social", value: "isOnePlusSocial", emoji: "📱" },
];

export const rangeOptionLabels = [
  "Volume",
  "Buy Volume",
  "Sell Volume",
  "TXNS",
  "Market Cap",
  "Liquidity",
  "Bond Curve %",
  "Dev Holding %",
  "Holders",
];

export const refreshRates = [
  { label: "1s", value: 1 },
  { label: "30s", value: 30 },
  { label: "1m", value: 60 },
  { label: "3m", value: 180 },
  { label: "5m", value: 300 },
  { label: "15m", value: 900 },
  { label: "30m", value: 1800 },
  { label: "1h", value: 3600 },
  { label: "2h", value: 7200 },
  { label: "4h", value: 14400 },
  { label: "24h", value: 86400 },
];
