import TabletMedIcon from "../../public/svg_icons/tablet_med_icon.svg";
import MoonShotIcon from "../../public/svg_icons/moon_shot.svg";

function SignalCall({ signal }) {
  return (
    <div className="my-1 text-white">
      {/* Signal Type */}
      <div className="flex items-center border border-green-500 py-1 mb-2">
        <div className=" ml-2 border border-green-500 rounded-full p-1 flex items-center justify-center">
          {signal.call_type === "pump" ? <TabletMedIcon /> : <MoonShotIcon />}
        </div>
        <span className="md:text-lg font-bold ml-5 md:ml-10">
          {signal.call_type === "pump" ? "PUMP CALL" : "MOONSHOT CALL"}
        </span>
      </div>

      {/* Signal Content */}
      <div className="md:text-lg flex flex-col">
        <p>
          <span className="text-pink-500">☘️ ({signal.status}):</span>{" "}
          <span className="text-green-500">${signal.symbol}</span> got{" "}
          {signal.calls_received} more call
        </p>
        <p>From: {signal.source}</p>
        <p>⚡ Avg CPW: {signal.average_cdpv}</p>
        <p>Total calls: {signal.total_calls}</p>

        <p className="text-[#00C2FF] my-4 break-words">
          {signal.token_info.source}
        </p>

        <p>
          🕚 Volume: 6h: {signal.token_info.buy_volume.value} | 1h:{" "}
          {signal.token_info.sell_volume.value}
        </p>
        <p>
          🔒MCap: {signal.token_info.market_cap} | Liquid: $
          {signal.token_info.total_volume}
        </p>
        <p>🔰Chain: #{signal.token_info.chain}</p>
        <p>🔰Name: {signal.token_info.token_name}</p>
      </div>
    </div>
  );
}

export default SignalCall;
