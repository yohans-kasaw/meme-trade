import AvatarWithProgress from "./AvatarWithProgress";
import VolumeDisplay from "../../public/svg_icons/volume_display.svg";

import SolanaChainIcon from "../../public/svg_icons/Solana-chain.svg";
import ChartLinkIcon from "../../public/svg_icons/chartLink.svg";

import TokenTeleIcon from "../../public/svg_icons/tokentele_btn.svg";
import TokenWebIcon from "../../public/svg_icons/tokenweb_btn.svg";
import TokenXIcon from "../../public/svg_icons/tokenx_btn.svg";
import TokenSourceIcon from "../../public/svg_icons/pump_btn.svg";

import AlarmIcon from "../../public/svg_icons/alarm_btn.svg";
import VelocityIcon from "../../public/svg_icons/velocity_btn.svg";

import PeopleIcon from "../../public/svg_icons/people.svg";
import PersonTickIcon from "../../public/svg_icons/person_tick.svg";
import CommentsIcon from "../../public/svg_icons/comments_icon.svg";
import MCIcon from "../../public/svg_icons/MC.svg";
import PersonRichIcon from "../../public/svg_icons/person_rich.svg";
import MushroomIcon from "../../public/svg_icons/messhroom.svg";

import DevIcon from "../../public/svg_icons/dev_vector.svg";
import WalletTickIcon from "../../public/svg_icons/wallet_tick.svg";

import StarVectorIcon from "../../public/svg_icons/star_vector.svg";
import GlassEmojiIcon from "../../public/svg_icons/glass_emoji.svg";

import DexIcon from "../../public/svg_icons/dex_icon.svg";
import AdsIcon from "../../public/svg_icons/ads_icon.svg";
import TrendIcon from "../../public/svg_icons/trend_icon.svg";
import CtoIcon from "../../public/svg_icons/cto_icon.svg";

import WarningIcon from "../../public/svg_icons/warningIcon.svg";

const TokenItem = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 items-stretch text-white">
        <div className="bg-midGray rounded-sm py-1">
          {/* Header */}
          <div className="flex flex-row">
            {/* ProfileSection */}
            <div className="flex flex-col pr-2 pl-1.5">
              <div className="flex-grow">
                <AvatarWithProgress
                  imageUrl="/images/meme_fallback.png"
                  progress={55}
                  sourceLink="https://github.com/yohansh/wicked-ape-challenge"
                />
              </div>
              <div className="flex flex-row items-center justify-between h-full">
                <SolanaChainIcon />
                <ChartLinkIcon />
              </div>
            </div>

            {/* MainContent */}
            <div className="flex-grow flex flex-col gap-1">
              <div className="flex flex-row">
                {/* SubContent */}
                <div className="flex-grow flex flex-col gap-0.5">
                  <div className="flex flex-row justify-start gap-1 font-bold text-xs">
                    <div>TRUMP</div>
                    <div className="text-accentGreen w-20 truncate">
                      TRUMP RAVEN long text to truncate
                    </div>
                    <div className="flex flex-row items-center gap-0.5">
                      <CommentsIcon />
                      36
                    </div>
                  </div>
                  <div className="flex flex-row justify-start gap-2 font-bold text-xs">
                    <div>
                      <div className="border border-accentBlue rounded px-0.5 text-accentBrightGreen">
                        1s
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-0.5 text-accentPink">
                      <PersonRichIcon /> 32%
                    </div>
                    <div className="flex flex-row items-center gap-0.5 text-accentGreen">
                      <MushroomIcon /> 99%
                    </div>
                  </div>
                  <div className="flex flex-row justify-start gap-2 font-bold text-xs">
                    <div className="flex flex-row items-center gap-0.5">
                      <PeopleIcon /> 340
                    </div>
                    <div className="flex flex-row items-center gap-0.5">
                      <PersonTickIcon /> 100
                    </div>
                    <div className="flex flex-row items-center gap-0.5 text-accentBrightGreen">
                      <MCIcon /> $300K
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
                        left: "10%",
                      }}
                    >
                      200K
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                {/* First group */}
                <div className="flex flex-row justify-start gap-1">
                  <TokenXIcon />
                  <TokenTeleIcon />
                  <TokenWebIcon />
                  <TokenSourceIcon />
                </div>
                {/* Second group */}
                <div className="flex flex-row gap-0.5 items-stretch">
                  <AlarmIcon />
                  <VelocityIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-row justify-center gap-0.5 items-center bg-midGray rounded-sm px-1 py-1">
          <DevIcon />
          <div className="flex flex-row items-center gap-0.5 font-bold text-xs">
            <StarVectorIcon /> 5/10
          </div>
          <GlassEmojiIcon />
          <div className="flex flex-row items-center gap-0.5 font-bold text-xs">
            <WalletTickIcon /> 1000
          </div>
          <div className="flex flex-row items-center gap-0.5 font-bold text-xs">
            <WarningIcon /> 50%
          </div>
          <DexIcon />
          <AdsIcon />
          <TrendIcon />
          <CtoIcon />
        </div>
      </div>
    </div>
  );
};

export default TokenItem;
