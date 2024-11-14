import SignalItem from "@/components/DashBoard/SignalItem";
import NotificationIcon from "@public/svg_icons/notification.svg";
import DownPiramidIcon from "@public/svg_icons/down_piramid.svg";

import Image from "next/image";

const TradingSignal = ({ signals }) => {
  const handleClick = () => {
    console.log("Show Filter");
  };

  return (
    <div className="flex flex-col gap-3 text-white text-xs justify-center p-2">
      <div className="flex flex-row items-center justify-between px-1">
        <div className="flex flex-row gap-0 items-center">
          <NotificationIcon style={{ transform: "scale(0.7)" }} />
          <div className="bg-accentBlue rounded-sm text-primaryBlack px-1 text-xs">{signals.length}</div>
        </div>
        <div
          className="flex flex-row justify-start items-center gap-2 bg-darkGray rounded-[6px] border-[1px] border-midGray pl-2 py-1"
          onClick={handleClick}
        >
          <Image
            src={"/svg_icons/Solana-chain-image.png"}
            width={15}
            height={15}
          />
          <DownPiramidIcon style={{ transform: "scale(0.7)" }} />
        </div>
      </div>

      {/* list of signals */}
      <div className="flex flex-col gap-1 h-[86vh] overflow-y-scroll">
        {signals.map((signal, index) => (
          <SignalItem key={index} signal={signal} />
        ))}
      </div>
    </div>
  );
};

export default TradingSignal;
