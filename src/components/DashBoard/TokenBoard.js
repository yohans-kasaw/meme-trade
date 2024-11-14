import { Tabs } from "antd";
import TokenGroup from "@/components/DashBoard/TokenGroup";
import { useState } from "react";
import TradingSignal from "@/components/DashBoard/TradingSignal";
import TabSegments from "@/components/DashBoard//TabSegments";

function TokenBoard({ tokens, signals }) {
  // Sorting tokens in different ways
  const TokenSortedByPrice = [...tokens.slice(0, 3)].sort(
    (a, b) => a.price - b.price,
  );
  const TokenSortedByStar = [...tokens].sort(
    (a, b) => a.star_rating - b.star_rating,
  );
  const TokenSortedByName = [...tokens].sort((a, b) =>
    a.token_name.localeCompare(b.token_name),
  );

  // Tab items for Ant Design Tabs component
  const tabItems = [
    {
      key: "1",
      label: "1",
      children: <TokenGroup tokens={TokenSortedByName} />,
    },
    {
      key: "2",
      label: "2",
      children: <TokenGroup tokens={TokenSortedByStar} />,
    },
    {
      key: "3",
      label: "3",
      children: <TokenGroup tokens={TokenSortedByPrice} />,
    },
    {
      key: "4",
      label: "4",
      children: <TradingSignal signals={signals} />,
    },
  ];

  const [alignValue, setAlignValue] = useState("1");
  return (
    <div>
      {/* Display side by side on medium to large screens */}
      <div className="hidden lg:flex flex-row gap-3.5 mb-10 items-stretch text-white px-1 overflow-x-scroll">
        {tabItems.map((item, index) => (
          <div key={index} className="flex-1 basis-0">
            {item.children}
          </div>
        ))}
      </div>

      {/* Display as tabs on small screens */}
      <div className="lg:hidden text-white md:max-w-[70vw] md:m-auto">
        <Tabs
          defaultActiveKey="1"
          type="card"
          tabPosition="bottom"
          items={tabItems}
          activeKey={alignValue}
          animated={true}
          renderTabBar={() => null}
        />
        <TabSegments
          value={alignValue}
          onChange={setAlignValue}
          signalsCount={signals.length}
          options={["1", "2", "3", "4"]}
        />
      </div>
    </div>
  );
}

export default TokenBoard;

