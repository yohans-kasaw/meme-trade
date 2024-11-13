import { useState } from "react";
import SortingOptionItem from "./SortingOptionItem";
import { Button } from "antd";

const SortingOptionsDrawer = ({ options, onChange }) => {
  const [sortingOptions, setSortingOptions] = useState(options);

  const handleOptionChange = (changedOption) => {
    const updatedOptions = sortingOptions.map((option) =>
      option.label === changedOption.label ? changedOption : option,
    );
    setSortingOptions(updatedOptions);
    if (onChange) {
      onChange(updatedOptions);
    }
  };

  const handleApply = () => {
    // Implement the apply logic
    console.log("Applying filters:", filters);
  };

  const handleCancel = () => {
    // Reset filters or close drawer
    console.log("Cancelling filters");
  };

  return (
    <div className="bg-darkGray text-white p-6 shadow-lg overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-4 border-b-2 border-accentMidGray pb-4 font-bold">
        <h3 className="">Token Filters</h3>
        <div className="flex gap-2 items-center">
          <Button
            className="!text-white !text-base !text-[12px]"
            type="text"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            className="!bg-green-700 !text-white !py-4 !px-6 !text-[14px] !font-bold"
            type="primary"
            onClick={handleApply}
          >
            Apply
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          {sortingOptions.map((option) => (
            <SortingOptionItem
              key={option.label}
              option={option}
              onOptionChange={handleOptionChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

SortingOptionsDrawer.defaultProps = {
  options: [
    { label: "Volume", selected: false, ascending: true },
    { label: "Buy Volume", selected: false, ascending: true },
    { label: "Sell Volume", selected: false, ascending: true },
    { label: "TXNS", selected: false, ascending: true },
    { label: "Market Cap", selected: false, ascending: true },
    { label: "Liquidity", selected: false, ascending: true },
    { label: "Bond Cure %", selected: false, ascending: true },
    { label: "Dev Holding %", selected: false, ascending: true },
    { label: "Holders", selected: false, ascending: true },
  ],
  onChange: null,
};

export default SortingOptionsDrawer;
