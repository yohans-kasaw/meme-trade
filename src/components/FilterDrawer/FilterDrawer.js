import { useState } from "react";
import { Button } from "antd";
import BooleanOptions from "./BooleanOptions";
import RealTimeRefreshRateSlider from "./RealTimeRefreshRateSlider";
import RangeOptions from "./RangeOptions";

const FilterDrawer = () => {
  const [filters, setFilters] = useState({
    booleanOptions: {
      isPumpFun: false,
      isMoonShot: false,
      isGraduated: false,
      isTop10Holder: false,
      isOnePlusSocial: false,
      // Add more options here if needed
    },
    refreshRateIndex: 0, // Default to the first refresh rate
    rangeOptions: {},
  });

  const handleBooleanOptionChange = (option, value) => {
    setFilters((prev) => ({
      ...prev,
      booleanOptions: {
        ...prev.booleanOptions,
        [option]: value,
      },
    }));
  };

  const handleRefreshRateChange = (value) => {
    setFilters((prev) => ({ ...prev, refreshRateIndex: value }));
  };

  const handleRangeOptionChange = (label, minValue, maxValue) => {
    setFilters((prev) => ({
      ...prev,
      rangeOptions: { ...prev.rangeOptions, [label]: { minValue, maxValue } },
    }));
  };

  const handleApply = () => {
    // Implement the apply logic
    console.log("Applying filters:", filters);
  };

  const handleCancel = () => {
    // Reset filters or close drawer
    setFilters({
      booleanOptions: {
        isPumpFun: false,
        isMoonShot: false,
        isGraduated: false,
        isTop10Holder: false,
        isOnePlusSocial: false,
      },
      refreshRateIndex: 0,
      rangeOptions: {},
    });
  };

  return (
    <div className="bg-darkGray text-white p-2 shadow-lg overflow-y-auto text-base">
      {/* Header */}
      <div className="flex justify-between items-end mb-4 border-b-2 border-accentMidGray pb-4 font-bold">
        <h3 className="">Token Filters</h3>
        <div className="">
          <Button
            className="!text-white !text-base !font-bold !text-[12px]"
            type="text"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            className="!bg-accentGreen !text-black !py-6 !text-[14px] !font-bold"
            type="primary"
            onClick={handleApply}
          >
            Apply
          </Button>
        </div>
      </div>

      {/* Filter Options */}
      <div className="space-y-4">
        <div className="border-b-2 border-accentMidGray pb-8">
          <BooleanOptions
            booleanOptions={filters.booleanOptions}
            onOptionChange={handleBooleanOptionChange}
          />
        </div>
        <div className="border-b-2 border-accentMidGray pb-4">
        <RealTimeRefreshRateSlider
          refreshRateIndex={filters.refreshRateIndex}
          onRefreshRateChange={handleRefreshRateChange}
        />
        </div>
        <RangeOptions
          rangeOptions={filters.rangeOptions}
          onRangeOptionChange={handleRangeOptionChange}
        />
      </div>
    </div>
  );
};

export default FilterDrawer;
