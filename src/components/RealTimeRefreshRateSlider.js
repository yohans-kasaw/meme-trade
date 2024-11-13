import { Slider } from "antd";
import { useState } from "react";

const refreshRateMarks = {
  0: "15m",
  10: "5m",
  20: "3m",
  30: "1m",
  40: "30s",
  50: "1s",
  60: "30m",
  70: "1h",
  80: "2h",
  90: "4h",
  100: "24h",
};

const RealTimeRefreshRateSlider = () => {
  const [refreshRate, setRefreshRate] = useState(50); // Default slider position for "1s"

  return (
    <div className="flex flex-col items-center text-white space-y-2 w-full">
      <h3 className="text-center text-sm font-semibold">
        Real Time Refresh Rate
      </h3>

      <Slider
        className="w-full"
        min={0}
        max={100}
        step={10}
        value={refreshRate}
        onChange={setRefreshRate}
        tooltip={{ formatter: null }}
        dots={false}
        // trackStyle={{ backgroundColor: "#22c55e" }} // Green solid part
        // railStyle={{ backgroundColor: "#000000", height: 6 }} // Black rail background
        // handle={
        //   <div
        //     style={{
        //       borderColor: "#22c55e",
        //       borderWidth: 2,
        //       width: 18,
        //       height: 18,
        //       boxShadow: "none",
        //     }}
        //   />
        // }
        styles={{
          handleColor: {
            
          },
          track: {
            backgroundColor: "#22c55e",
          },
          tracks: {
            backgroundColor: "#22c55e",
          },
        }}
      />

      <div className="flex w-full justify-between">
        {Object.values(refreshRateMarks).map((mark, index) => (
          <span key={index} className="text-xs">
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RealTimeRefreshRateSlider;
