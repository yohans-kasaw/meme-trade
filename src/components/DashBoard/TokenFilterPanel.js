import React, { useState } from "react";
import { Drawer } from "antd";
import DownPiramidIcon from "@public/svg_icons/down_piramid.svg";
import SortSettingIcon from "@public/svg_icons/sort_setting.svg";
import FilterSettingIcon from "@public/svg_icons/filter_setting_icon.svg";
import { useMediaQuery } from "react-responsive";
import { CountBadge } from "@/components/Badges/CountBadge";

import SolanaChainIcon from "@public/svg_icons/Solana-chain_filter.svg";

import FilterDrawer from "@/components/FilterDrawer/FilterDrawer";
import SortingOptionsDrawer from "@/components/SortingDrawer/SortingOptionsDrawer";

export function FilterButton({
  children,
  gapClass = "gap-3",
  additionalClass = "",
  onClick,
}) {
  return (
    <div
      className={`flex flex-row justify-start items-center ${gapClass} bg-darkGray rounded-[6%] border-[1px] border-midGray py-0.5 ${additionalClass}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function TokenFilterPanel() {
  const [filterDrawerVisible, setFilterDrawerVisible] = useState(false);
  const [sortingDrawerVisible, setSortingDrawerVisible] = useState(false);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const openFilterDrawer = () => {
    setFilterDrawerVisible(true);
  };

  const closeFilterDrawer = () => {
    setFilterDrawerVisible(false);
  };

  const openSortingDrawer = () => {
    setSortingDrawerVisible(true);
  };

  const closeSortingDrawer = () => {
    setSortingDrawerVisible(false);
  };

  return (
    <>
      <div className="text-white flex justify-center gap-1.5 p-1">
        <FilterButton gapClass="px-[2%] gap-1">
          <SolanaChainIcon />
          <DownPiramidIcon style={{ transform: "scale(0.7)" }} />
        </FilterButton>
        <FilterButton additionalClass="pr-1 py-2" onClick={openFilterDrawer}>
          <FilterSettingIcon style={{width:"4vw"}}/>
          <CountBadge count={5} />
        </FilterButton>
        <FilterButton additionalClass="pr-1" onClick={openSortingDrawer}>
          <SortSettingIcon style={{width:"4vw"}}/>
          <CountBadge count={5} />
        </FilterButton>
      </div>

      {/* Filter Drawer */}
      <Drawer
        placement={isLargeScreen ? "right" : "bottom"}
        closable={false}
        onClose={closeFilterDrawer}
        open={filterDrawerVisible}
        styles={{ body: { padding: 0 } }}
        height="90%"
        width="25%"
        maskClosable={true}
      >
        <FilterDrawer />
      </Drawer>

      {/* Sorting Options Drawer */}
      <Drawer
        placement={isLargeScreen ? "right" : "bottom"}
        closable={false}
        onClose={closeSortingDrawer}
        open={sortingDrawerVisible}
        styles={{ body: { padding: 0 } }}
        height="90%"
        width="25%"
        maskClosable={true}
      >
        <SortingOptionsDrawer />
      </Drawer>
    </>
  );
}

export default TokenFilterPanel;
