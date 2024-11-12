import { Badge } from "antd";
import MessageIcon from "../../public/svg_icons/message_icon.svg";

const MessageBadge = ({ count }) => {
  return (
    <Badge
      count={count}
      style={{
        fontWeight: "bold",
        borderColor: "#000000",
        borderRadius: 5,
        backgroundColor: "#EF268E",
        color: "#000000",
      }}
      offset={[15, 12]}
    >
      {/* <Image src={MessageIcon} alt="Icon 3" width={24} height={24} /> */}
      <MessageIcon />
    </Badge>
  );
};

export default MessageBadge;
