// TokenDisplay.js
import React from "react";
import AvatarWithProgress from "@/components/TokenCard/AvatarWithProgress";

import ChartLinkIcon from "@public/svg_icons/chartLink.svg";
import SolanaChainIcon from "@public/svg_icons/Solana-chain_filter.svg";

const TokenProfile = ({ external_links, source, bonding_curve_progress}) => {
  const progress = parseFloat(bonding_curve_progress.replace("%", ""));
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <AvatarWithProgress
          imageUrl={external_links.image_link || "/images/meme_fallback.png"}
          progress={progress}
          sourceLink={source}
        />
      </div>
      <div className="flex flex-row items-center justify-between h-full">
        <SolanaChainIcon />
        <a
          href={external_links.chart_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ChartLinkIcon />
        </a>
      </div>
    </div>
  );
};

export default TokenProfile;
