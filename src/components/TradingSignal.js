import SignalCall from "./SignalCall";
import NotificationIcon from "../../public/svg_icons/notification.svg";
import SolanaChainIcon from "../../public/svg_icons/solana-signal.svg";
import DownArrowIcon from "../../public/svg_icons/down_arrow.svg";

const TradingSignal = ({ signals }) => {
  const handleClick = () => {
    console.log("Show Filter");
  };

  return (
    <div className="text-white mx-3">
      <div className="flex flex-row items-center my-4 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <NotificationIcon />
          <div className="rounded-lg bg-[#00C2FF] px-2">{signals.length}</div>
        </div>
        <button
          className="border border-gray-500 bg-[#292828] rounded-lg px-4 py-2 flex items-center"
          onClick={handleClick}
        >
          <SolanaChainIcon className="mr-2" />
          <DownArrowIcon />
        </button>
      </div>

      {/* list of signals */}
      <div className="flex flex-col gap-1">
        {signals.map((signal, index) => (
          <SignalCall key={index} signal={signal} />
        ))}
      </div>
    </div>
  );
};

export default TradingSignal;
