import React, { useState } from "react";
import { Avatar } from "antd";
import Image from "next/image";
import SecondLogo from "../../public/svg_icons/second_logo.svg";
import AARCXIOLogo from "../../public/svg_icons/AARCXIO.svg";
import FireCallBadge from "./FireCallBadge";
import MessageBadge from "./MessageBadge";
import PumpBadge from "./PumpBadge";
import TradingSignalBadge from "./TradingSignalBadge";
import SearchIcon from "../../public/svg_icons/SearchIcon.svg";
import SearchIconButton from "../../public/svg_icons/SearchIconButton.svg";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      onSearch(trimmedTerm);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="flex items-center bg-primaryBlack rounded-[6px] border-[2px] border-midGray py-0.5 px-1">
      <div className="pl-12 pr-1">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-primaryBlack text-white outline-none flex-grow text-xs font-bold placeholder-white placeholder:font-bold"
      />
      <button onClick={handleSearchClick} className="p-0.5 ml-2">
        <SearchIconButton />
      </button>
    </div>
  );
}

const AppBar = ({
  user,
  onSearch,
  badgeCounts = { fireCall: 0, signalsCount: 0, pump: 0, message: 0 },
}) => (
  <div className="flex justify-between items-center bg-darkGray px-4 py-1 text-white shadow-md">
    {/* Left Section - Menu and Logo */}

    <div className="flex items-center gap-2 flex-grow lg:flex-grow-0">
      {/* Collapse Icon */}
      <Image
        src="/svg_icons/CollapseIcon.png"
        width={20}
        height={20}
        alt="Collapse Icon"
      />
      {/* Logo - Hidden on screens smaller than md */}
      <div className="hidden md:flex items-center gap-1">
        <SecondLogo />
        <AARCXIOLogo />
      </div>
      {/* Search Bar */}
      <div className="flex-grow">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>

    {/* Right Section - Icons and Profile (Hidden on screens smaller than lg) */}
    <div className="hidden lg:flex items-center space-x-12">
      <FireCallBadge count={badgeCounts.fireCall} />
      <PumpBadge count={badgeCounts.pump} />
      <TradingSignalBadge count={badgeCounts.signalsCount} />
      <MessageBadge count={badgeCounts.message} />
      <Avatar
        src={user?.profile_picture || "/images/profile_avatar_fallback.jpg"}
        size={40}
        className="rounded-full"
        alt="User Avatar"
      />
    </div>
  </div>
);

export default AppBar;
