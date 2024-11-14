import { Badge } from "antd";
import PumpIcon from "@public/svg_icons/pump_icon.svg";

const TradingSignalBadge = ({ count }) => {
  return (
    <Badge
      count={count}
      style={{
        fontWeight: "bold",
        borderColor: "#000000",
        borderRadius: 5,
        backgroundColor: "#00C2FF",
        color: "#000000",
      }}
      offset={[15, 10]}
    >
      {/* <Image src={PumpIcon} alt="Icon 3" width={24} height={24} /> */}
      <PumpIcon />
    </Badge>
  );
};

export default TradingSignalBadge;
