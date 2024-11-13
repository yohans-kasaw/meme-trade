import { Badge } from "antd";
import NotificationIcon from "../../public/svg_icons/notification_icon.svg";

const PumpBadge  = ({ count }) => {
  return (
    <Badge
      count={count}
      style={{
        fontWeight: "bold",
        borderColor: "#000000",
        borderRadius: 5,
        backgroundColor: "#CDD500",
        color: "#000000",
      }}
      offset={[15, 8]}
    >
      {/* <Image src={NotificationIcon} alt="Icon 2" width={24} height={24} /> */}

      <NotificationIcon />
    </Badge>
  );
};

export default PumpBadge ;
