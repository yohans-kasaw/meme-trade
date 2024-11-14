// RealTimeRefreshRateSlider.jsx
import { Slider } from "antd";
import { refreshRates } from "../../lib/constants";

const RealTimeRefreshRateSlider = ({
  refreshRateIndex,
  onRefreshRateChange,
}) => {
  return (
    <div className="flex flex-col items-center text-white w-full">
      <div className="text-center font-semibold pb-3">
        Real Time Refresh Rate
      </div>
      <Slider
        className="w-full"
        min={0}
        max={refreshRates.length - 1}
        step={1}
        value={refreshRateIndex}
        onChange={onRefreshRateChange}
        tooltip={{
          formatter: (value) => (
            <b className="bg-black-900 p-2">
              {refreshRates[value].label}
            </b>
          ),
        }}
        trackStyle={{ backgroundColor: "#22c55e", height: 8 }}
        railStyle={{ backgroundColor: "#000000", height: 8 }}
        handleStyle={{
          borderColor: "#000000",
          backgroundColor: "#000000",
          transform: "translateY(-25%)",
          borderWidth: 15,
          borderRadius: "50%",
          width: 15,
          height: 15,
          overflow: "hidden",
        }}
      />
      <div className="font-bold pb-6">
        Selected Refresh Rate: {refreshRates[refreshRateIndex].label}
      </div>
    </div>
  );
};

export default RealTimeRefreshRateSlider;
