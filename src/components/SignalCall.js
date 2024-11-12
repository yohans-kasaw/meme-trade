import TabletMedIcon from "../../public/svg_icons/tablet_med_icon.svg";
import MoonShotIcon from "../../public/svg_icons/moon_shot.svg";

function SignalCall({ signal }) {
  return (
    <div className="my-1 text-white text-xs font-bold">
      {/* Signal Type */}
      <div
        className={`flex items-center py-1 mb-2 border ${
          signal.call_type === "Pump" ? "border-primary" : "border-secondary"
        }`}
      >
        <div className="ml-2 border border-primary rounded-full p-1 flex items-center justify-center">
          {signal.call_type === "Pump" ? <TabletMedIcon /> : <MoonShotIcon />}
        </div>
        <span className="font-bold ml-5 md:ml-10">
          {signal.call_type === "Pump" ? "PUMP CALL" : "MOONSHOT CALL"}
        </span>
      </div>

      {/* Signal Content */}
      <div className="flex flex-col">
        <p>
          <span className="text-accentPink">☘️ ({signal.status}):</span>{" "}
          <span className="text-primary">${signal.symbol}</span> got{" "}
          {signal.calls_received} more call
        </p>
        <p>From: {signal.source}</p>
        <p>⚡ Avg CPW: {signal.average_cdpv}</p>
        <p>Total calls: {signal.total_calls}</p>

        <p className="text-accentBlue my-4 break-words">
          {signal.token_info.source}
        </p>

        <p>
          🕚 Volume: 6h: {signal.token_info.buy_volume.value} | 1h:{" "}
          {signal.token_info.sell_volume.value}
        </p>
        <p>
          🔒 MCap: {signal.token_info.market_cap} | Liquid: $
          {signal.token_info.total_volume}
        </p>
        <p>🔰 Chain: #{signal.token_info.chain}</p>
        <p>🔰 Name: {signal.token_info.token_name}</p>
      </div>
    </div>
  );
}

export default SignalCall;
