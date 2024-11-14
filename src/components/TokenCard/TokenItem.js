import AvatarWithProgress from "./AvatarWithProgress";
import VolumeDisplay from "@public/svg_icons/volume_display.svg";

import SolanaChainIcon from "@public/svg_icons/Solana-chain.svg";
import EthereumChainIcon from "@public/svg_icons/Solana-chain.svg";
import ChartLinkIcon from "@public/svg_icons/chartLink.svg";

import TokenTeleIcon from "@public/svg_icons/tokentele_btn.svg";
import TokenWebIcon from "@public/svg_icons/tokenweb_btn.svg";
import TokenXIcon from "@public/svg_icons/tokenx_btn.svg";
import TokenSourceIcon from "@public/svg_icons/pump_btn.svg";

import AlarmIcon from "@public/svg_icons/alarm_btn.svg";
import VelocityIcon from "@public/svg_icons/velocity_btn.svg";

import PeopleIcon from "@public/svg_icons/people.svg";
import PersonTickIcon from "@public/svg_icons/person_tick.svg";
import CommentsIcon from "@public/svg_icons/comments_icon.svg";
import MCIcon from "@public/svg_icons/MC.svg";
import PersonRichIcon from "@public/svg_icons/person_rich.svg";
import MushroomIcon from "@public/svg_icons/messhroom.svg";

import DevIcon from "@public/svg_icons/dev_vector.svg";
import WalletTickIcon from "@public/svg_icons/wallet_tick.svg";

import StarVectorIcon from "@public/svg_icons/star_vector.svg";
import GlassEmojiIcon from "@public/svg_icons/glass_emoji.svg";

import DexIcon from "@public/svg_icons/dex_icon.svg";
import AdsIcon from "@public/svg_icons/ads_icon.svg";
import TrendIcon from "@public/svg_icons/trend_icon.svg";
import CtoIcon from "@public/svg_icons/cto_icon.svg";

import WarningIcon from "@public/svg_icons/warningIcon.svg";
import VelocityPopUp from "@/components/Popups/VelocityPopUp";
import { Drawer, Popover } from "antd";
import { useState } from "react";
import AlertDrawer from "@/components/AlertDrawer/AlertDrawer";

import { useMediaQuery } from 'react-responsive';

const TokenItem = ({ token }) => {
  const progress = parseFloat(token.bonding_curve_progress.replace("%", ""));
  const chainIcon =
    token.chain === "Ethereum" ? <EthereumChainIcon /> : <SolanaChainIcon />;

  const [open, setOpen] = useState(false);
  const [isAlarmDrawerVisible, setIsAlarmDrawerVisible] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const showAlarmDrawer = () => {
    setIsAlarmDrawerVisible(true);
  };

  const onCloseAlarmDrawer = () => {
    setIsAlarmDrawerVisible(false);
  };

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div>
      <div className="flex flex-col gap-0.5 items-stretch text-white">
        <div className="bg-darkGray rounded-sm py-1 pr-1">
          {/* Header */}
          <div className="flex flex-row">
            {/* ProfileSection */}
            <div className="flex flex-col pr-2 pl-1.5">
              <div className="flex-grow">
                <AvatarWithProgress
                  imageUrl={
                    token.external_links.image_link || "/images/meme_fallback.png"
                  }
                  progress={progress}
                  sourceLink={token.source}
                />
              </div>
              <div className="flex flex-row items-center justify-between h-full">
                {chainIcon}
                <a
                  href={token.external_links.chart_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChartLinkIcon />
                </a>
              </div>
            </div>

            {/* MainContent */}
            <div className="flex-grow flex flex-col gap-1">
              <div className="flex flex-row">
                {/* SubContent */}
                <div className="flex-grow flex flex-col gap-0.5">
                  <div className="flex flex-row justify-start gap-1 font-bold text-xs">
                    <div>{token.token_ticker}</div>
                    <div className="text-accentGreen w-14 truncate">
                      {token.token_name}
                    </div>
                    <div className="flex flex-row items-center gap-0.5">
                      <CommentsIcon />
                      {token.comments_count}
                    </div>
                  </div>
                  <div className="flex flex-row justify-start gap-2 font-bold text-xs">
                    <div>
                      <div className="border border-accentBlue rounded px-0.5 text-accentBrightGreen">
                        {token.time_from_creation}
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-0.5 text-accentPink">
                      <PersonRichIcon /> {token.top_10_holders_percentage}
                    </div>
                    <div className="flex flex-row items-center gap-0.5 text-accentGreen">
                      <MushroomIcon /> {token.developer_percentage}
                    </div>
                  </div>
                  <div className="flex flex-row justify-start gap-2 font-bold text-xs">
                    <div className="flex flex-row items-center gap-0.5">
                      <PeopleIcon /> {token.total_holders}
                    </div>
                    <div className="flex flex-row items-center gap-0.5">
                      <PersonTickIcon /> {token.unique_holders}
                    </div>
                    <div className="flex flex-row items-center gap-0.5 text-accentBrightGreen">
                      <MCIcon /> {token.market_cap}
                    </div>
                  </div>
                </div>

                {/* RightSection */}
                <div className="flex items-center">
                  <div className="relative">
                    <VolumeDisplay />
                    <div
                      className="absolute text-accentBrightGreen font-bold"
                      style={{
                        transform: "translate(50%, -50%)",
                        top: "50%",
                        left: "0",
                        width: "2.8rem",
                        textAlign: "right",
                      }}
                    >
                      {token.total_volume}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                {/* First group */}
                <div className="flex flex-row justify-start gap-1">
                  <a
                    href={token.external_links.social_1 || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={!token.external_links.social_1 ? "hidden" : ""}
                  >
                    <TokenXIcon />
                  </a>
                  <a
                    href={token.external_links.social_2 || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={!token.external_links.social_2 ? "hidden" : ""}
                  >
                    <TokenTeleIcon />
                  </a>
                  <a
                    href={token.external_links.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={!token.external_links.website ? "hidden" : ""}
                  >
                    <TokenWebIcon />
                  </a>
                  <a
                    href={token.source || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={!token.source ? "hidden" : ""}
                  >
                    <TokenSourceIcon />
                  </a>
                </div>
                {/* Second group */}
                <div className="flex flex-row gap-0.5 items-stretch">
                  <div
                    className={!token.user_alarm ? "hidden" : ""}
                    onClick={showAlarmDrawer}
                    style={{ cursor: "pointer" }} // Optional: change cursor to pointer
                  >
                    <AlarmIcon />
                  </div>
                  <div className={!token.velocity ? "hidden" : ""}>
                    <Popover
                      content={
                        <VelocityPopUp velocity_model={token.velocity_model} />
                      }
                      trigger="click"
                      open={open}
                      onOpenChange={handleOpenChange}
                      color="#1B1B1B"
                      overlayClassName="velocity-custom-popover"
                    >
                      <VelocityIcon />
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-row justify-center gap-0.5 items-center bg-darkGray rounded-sm px-1 py-1">
          <DevIcon />
          <div className="flex flex-row items-center gap-0.5 font-bold text-xs">
            <StarVectorIcon /> {token.star_rating}/10
          </div>
          <GlassEmojiIcon />
          <div className="flex flex-row items-center gap-0.5 font-bold text-xs">
            <WalletTickIcon /> {token.insider_wallets_percentage}
          </div>
          <div className="flex flex-row items-center gap-0.5 font-bold text-xs">
            <WarningIcon /> {token.bonding_curve_progress}
          </div>
          <div className={token.DEX_status === "Listed" ? "" : "hidden"}>
            <DexIcon />
          </div>
          <div className={token.ADS_status === "Active" ? "" : "hidden"}>
            <AdsIcon />
          </div>
          <div className={token.trending_status === "Trending" ? "" : "hidden"}>
            <TrendIcon />
          </div>
          <div className={token.CTO_status === "Verified" ? "" : "hidden"}>
            <CtoIcon />
          </div>
        </div>
      </div>

      {/* Alarm Drawer */}
      <Drawer
        placement={isLargeScreen ? "right":"bottom"}
        closable={false}
        onClose={onCloseAlarmDrawer}
        visible={isAlarmDrawerVisible}
        bodyStyle={{ padding: 0 }}
        height="90%"
        maskClosable={true}
      >
        <AlertDrawer />
      </Drawer>
    </div>
  );
};

export default TokenItem;
