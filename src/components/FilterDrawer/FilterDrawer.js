// FilterDrawer.jsx
import { useState } from "react";
import BooleanOptions from "./BooleanOptions";
import RealTimeRefreshRateSlider from "./RealTimeRefreshRateSlider";
import RangeOptions from "./RangeOptions";
import DrawerHeader from "../Common/DrawerHeader";
import { booleanOptionsList } from "../../lib/constants";

const getDefaultBooleanOptions = () =>
  booleanOptionsList.reduce((acc, option) => {
    acc[option.value] = false;
    return acc;
  }, {});

const FilterDrawer = () => {
  const [filters, setFilters] = useState({
    booleanOptions: getDefaultBooleanOptions(),
    refreshRateIndex: 0,
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
    console.log("Applying filters:", filters);
  };

  const handleCancel = () => {
    setFilters({
      booleanOptions: getDefaultBooleanOptions(),
      refreshRateIndex: 0,
      rangeOptions: {},
    });
  };

  return (
    <div className="bg-darkGray text-white p-2 px-6 shadow-lg overflow-y-auto text-xs">
      <DrawerHeader
        title="Token Filters"
        onApply={handleApply}
        onCancel={handleCancel}
      />
      <div className="space-y-4">
        <div className="border-b-[1px] border-midGray pb-4">
          <BooleanOptions
            booleanOptions={filters.booleanOptions}
            onOptionChange={handleBooleanOptionChange}
          />
        </div>
        <div className="border-b-[1px] border-midGray pb-1">
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
