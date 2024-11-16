import DevIcon from "@public/svg_icons/dev_vector.svg";
import WalletTickIcon from "@public/svg_icons/wallet_tick.svg";

import StarVectorIcon from "@public/svg_icons/star_vector.svg";
import GlassEmojiIcon from "@public/svg_icons/glass_emoji.svg";

import DexIcon from "@public/svg_icons/dex_icon.svg";
import AdsIcon from "@public/svg_icons/ads_icon.svg";
import TrendIcon from "@public/svg_icons/trend_icon.svg";
import CtoIcon from "@public/svg_icons/cto_icon.svg";

import WarningIcon from "@public/svg_icons/warningIcon.svg";

const Footer = ({
  star_rating,
  insider_wallets_percentage,
  bonding_curve_progress,
  DEX_status,
  ADS_status,
  trending_status,
  CTO_status,
}) => {
  return (
    <div className="flex flex-row bg-darkGray justify-start items-center gap-[0.4vw]">
      <DevIcon />
      <div className="flex flex-row">
        <StarVectorIcon /> <div> {star_rating}/10</div>
      </div>
      <GlassEmojiIcon />
      <div className="flex flex-row">
        <WalletTickIcon /> <div>{insider_wallets_percentage}</div>
      </div>
      <div className="flex flex-row">
        <WarningIcon /> <div>{bonding_curve_progress}</div>
      </div>
      <div className={`${DEX_status === "Listed" ? "visible" : "invisible"}`}>
        <DexIcon />
      </div>
      <div className={`${ADS_status === "Active" ? "visible" : "invisible"}`}>
        <AdsIcon />
      </div>
      <div
        className={`${trending_status === "Trending" ? "visible" : "invisible"}`}
      >
        <TrendIcon />
      </div>

      <div className={`${CTO_status === "Verified" ? "visible" : "invisible"}`}>
        <CtoIcon />
      </div>
    </div>
  );
};

export default Footer;
