import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";
import MainLogo from "../../public/svg_icons/main_logo.svg";
import SecondLogo from "../../public/svg_icons/second_logo.svg";
import FireCallBadge from "./FireCallBadge";
import MessageBadge from "./MessageBadge";
import NotificationBadge from "./NotificationBadge";
import PumpBadge from "./PumpBadge";

const AppBar = () => (
  <div className="flex justify-between items-center bg-darkGray px-4 py-3 text-white shadow-md">
    {/* Left Section - Menu and Logo */}

    <div className="flex items-center space-x-8">
      <MainLogo />
      <div className="flex items-center space-x-2">
        <SecondLogo />
        <span className="text-xl font-bold">AARCXIO</span>
      </div>
    </div>

    <div className="w-1/5"></div>

    {/* Center - Search Bar */}
    <Input
      placeholder="               Search"
      suffix={
        <SearchOutlined
          className="bg-darkGray"
          style={{ cursor: "pointer" }}
          onClick={() => console.log("Search clicked")}
        />
      }
      style={{ backgroundColor: "#00000000" }}
      className="bg-primaryBlack w-1/5 mx-auto"
    />

    <div className="w-1/5"></div>

    {/* Right Section - Icons and Profile */}

    <div className="flex items-center space-x-12">
      <FireCallBadge count={5} />
      <NotificationBadge count={5} />
      <PumpBadge count={5} />
      <MessageBadge count={5} />

      {/* Profile Icon */}

      <Avatar
        src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        size={30}
        className="rounded-full"
      />
    </div>
  </div>
);

export default AppBar;
