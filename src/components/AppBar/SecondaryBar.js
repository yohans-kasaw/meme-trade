import Alert from "@public/svg_icons/svg1.svg";
import Bell from "@public/svg_icons/svg2.svg";
import Decrease from "@public/svg_icons/svg3.svg";
import Increase from "@public/svg_icons/svg4.svg";
import { useSelector } from "react-redux";

const IconTextPair = ({ Icon, text }) => (
  <div className="flex items-center gap-1">
    <Icon />
    {text}
  </div>
);

const getIconForCondition = (metric, movement) => {
  if (metric === "Market Cap") {
    return movement.includes("Over") ? Increase : Decrease;
  } else if (metric === "Volume") {
    return movement.includes("Up") ? Increase : Decrease;
  }
  return Bell; // Default icon
};

const AlarmText = ({ token, alert_conditions }) => {
  const { token_name, market_cap, total_volume } = token;
  const { metric } = alert_conditions;
  const value = metric === "Market Cap" ? market_cap : total_volume;
  const metricLabel = metric === "Market Cap" ? "MC" : "TV";

  return (
    <span className="text-xs">
      {token_name}{" "}
      <span className="text-green-700">{metricLabel}</span>{" "}
      <span className="text-accentLime">{value}</span>
    </span>
  );
};

const SecondaryBar = () => {
  const alarms = useSelector((state) => state.userAlarms.items);

  return (
    <div className="bg-primaryBlack px-4 py-1 flex items-center gap-1 text-white overflow-x-scroll">
      <div className="flex flex-row items-center gap-10 flex-nowrap whitespace-nowrap">
        <Alert />
        {alarms.map((alarm, index) => {
          const Icon = getIconForCondition(
            alarm.alert_conditions.metric,
            alarm.alert_conditions.movement
          );
          const text = AlarmText(alarm);
          return <IconTextPair key={index} Icon={Icon} text={text} />;
        })}
      </div>
    </div>
  );
};

export default SecondaryBar;
