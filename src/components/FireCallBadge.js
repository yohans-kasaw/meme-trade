import { Badge } from "antd";
import FireIcon from "../../public/svg_icons/fire_icon.svg";

const FireCallBadge = ({ count }) => {
  return (
    <div className="flex items-center space-x-8 w-1/6">
      <Badge
        count={count}
        style={{
          fontWeight: "bold",
          borderColor: "#000000",
          borderRadius: 5,
          backgroundColor: "#EF268E",
          color: "#000000",
        }}
        offset={[15, 15]}
      >
        <FireIcon />
      </Badge>
      <span className="text-sm font-bold text-accent w-full">Fire</span>
    </div>
  );
};

export default FireCallBadge;
