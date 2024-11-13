// RealTimeRefreshRateSlider.jsx
import { Slider } from "antd";
import { refreshRates } from "../../lib/constants";

const RealTimeRefreshRateSlider = ({
  refreshRateIndex,
  onRefreshRateChange,
}) => {
  return (
    <div className="flex flex-col items-center text-white space-y-2 w-full">
      <div className="text-center font-semibold pb-5">
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
        trackStyle={{ backgroundColor: "#22c55e", height: 12 }}
        railStyle={{ backgroundColor: "#000000", height: 12 }}
        handleStyle={{
          borderColor: "#000000",
          backgroundColor: "#000000",
          transform: "translateY(-25%)",
          borderWidth: 20,
          borderRadius: "50%",
          width: 35,
          height: 35,
          overflow: "hidden",
        }}
      />
      <div className="font-bold pt-8 pb-2">
        Selected Refresh Rate: {refreshRates[refreshRateIndex].label}
      </div>
    </div>
  );
};

export default RealTimeRefreshRateSlider;
