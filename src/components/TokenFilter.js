import { Button } from "antd";
import FilterOptions from "./FilterOptions";
import RealTimeRefreshRateSlider from "./RealTimeRefreshRateSlider";
import TokenFilterTokenOption from "./TokenFilterTokenOption";
import TokenFilterTopTenOption from "./TokenFilterTopTenOption";

const TokenFilterBar = () => {
  return (
    <div className="fixed right-0 top-10 w-1/4 h-full bg-darkGray text-white p-6 shadow-lg overflow-y-auto">
      {/* Top right buttons */}
      <div className="flex justify-between space-x-4 mb-2 border-b border-gray-600 pb-2">
        <h3 className="text-sm">Token Filter</h3>

        <div className="space-x-4">
          <Button
            className="!text-white bg-transparent border-none shadow-none hover:bg-gray-700 hover:text-white !text-sm"
            type="text"
          >
            Cancel
          </Button>
          <Button
            className="!bg-primary text-white !text-sm px-2"
            type="primary"
          >
            Apply
          </Button>
        </div>
      </div>

      {/* Filter Options */}
      <div className="space-y-4">
        <div className="mb-2">
          <TokenFilterTokenOption />
          {/* Add input/selection for Filter Option 1 here */}
        </div>

        <div className="border-b border-gray-600 pb-2">
          <TokenFilterTopTenOption />
          {/* Add input/selection for Filter Option 2 here */}
        </div>

        <div className="border-b border-gray-600 pb-2">
          <RealTimeRefreshRateSlider />
          {/* Add input/selection for Filter Option 3 here */}
        </div>

        <div className="pb-4">
          {/* <h3 className="text-lg font-semibold">Filter Option 4</h3> */}
          <FilterOptions />
          {/* Add input/selection for Filter Option 4 here */}
        </div>
      </div>
    </div>
  );
};

export default TokenFilterBar;
