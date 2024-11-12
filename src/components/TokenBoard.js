import { Tabs, Segmented } from "antd";
import TokenFilterPanel from "./TokenFilterPanel";
import TokenGroup from "./TokenGroup";
import { useState } from "react";
import { CountBadge } from "./TokenFilterPanel";

const CustomSegmented = ({ value, onChange, options = [] }) => {
  const [selected, setSelected] = useState(value || options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option);
  };

  return (
    <div className="flex justify-center  overflow-hidden gap-2 mb-4">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(option)}
          className={`transition-colors duration-200 text-white rounded-sm text-primaryBlack px-4 text-lg ${
            selected === option ? "bg-accentLime text-midGray" : "bg-midGray"
          }`}
        >
          {option != "4" && option}
          {option == "4" && "Alarm"}

        </button>
      ))}
    </div>
  );
};

function TokenBoard({ tokens }) {
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
      children: <div className="min-h-[90vh] text-white">Alarm</div>,
    },
  ];

  const [alignValue, setAlignValue] = useState("1");
  return (
    <div>
      {/* Display side by side on medium to large screens */}
      <div className="hidden md:flex flex-row gap-3.5 mb-10 items-stretch text-white px-1">
        <TokenGroup tokens={TokenSortedByName} />
        <TokenGroup tokens={TokenSortedByStar} />
        <TokenGroup tokens={TokenSortedByPrice} />
      </div>

      {/* Display as tabs on small screens */}
      <div className="md:hidden text-white">
        <Tabs
          defaultActiveKey="1"
          type="card"
          tabPosition="bottom"
          items={tabItems}
          activeKey={alignValue}
          animated={true}
          renderTabBar={(props) => null}
        />
        <CustomSegmented
          value={alignValue}
          onChange={setAlignValue}
          options={["1", "2", "3", "4"]}
        />
      </div>
    </div>
  );
}

export default TokenBoard;
