import { useState } from 'react';
import { Button } from 'antd';
import BooleanOptions from './BooleanOptions';
import RealTimeRefreshRateSlider from './RealTimeRefreshRateSlider';
import RangeOptions from './RangeOptions';

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
    console.log('Applying filters:', filters);
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
    <div className="fixed right-0 top-10 w-1/4 h-full bg-darkGray text-white p-6 shadow-lg overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between mb-4 border-b border-gray-600 pb-2">
        <h3 className="text-sm">Token Filter</h3>
        <div className="space-x-4">
          <Button
            className="!text-white !text-sm"
            type="text"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            className="!bg-primary text-white !text-sm px-2"
            type="primary"
            onClick={handleApply}
          >
            Apply
          </Button>
        </div>
      </div>

      {/* Filter Options */}
      <div className="space-y-4">
        <BooleanOptions
          booleanOptions={filters.booleanOptions}
          onOptionChange={handleBooleanOptionChange}
        />
        <RealTimeRefreshRateSlider
          refreshRateIndex={filters.refreshRateIndex}
          onRefreshRateChange={handleRefreshRateChange}
        />
        <RangeOptions
          rangeOptions={filters.rangeOptions}
          onRangeOptionChange={handleRangeOptionChange}
        />
      </div>
    </div>
  );
};

export default FilterDrawer;
