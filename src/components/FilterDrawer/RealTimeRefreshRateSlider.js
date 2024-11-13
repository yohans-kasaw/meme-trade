import { Slider } from "antd";

const refreshRates = [
  { label: "1s", value: 1 },
  { label: "30s", value: 30 },
  { label: "1m", value: 60 },
  { label: "3m", value: 180 },
  { label: "5m", value: 300 },
  { label: "15m", value: 900 },
  { label: "30m", value: 1800 },
  { label: "1h", value: 3600 },
  { label: "2h", value: 7200 },
  { label: "4h", value: 14400 },
  { label: "24h", value: 86400 },
];

const RealTimeRefreshRateSlider = ({
  refreshRateIndex,
  onRefreshRateChange,
}) => {
  return (
    <div className="flex flex-col items-center text-white space-y-2 w-full">
      <h3 className="text-center text-sm font-semibold text-base pb-5">
        Real Time Refresh Rate
      </h3>
      <Slider
        className="w-full"
        min={0}
        max={refreshRates.length - 1}
        step={1}
        value={refreshRateIndex}
        onChange={onRefreshRateChange}
        tooltip={{
          formatter: (value) => (<b className="bg-black-900 text-base p-2">{refreshRates[value].label}</b>),
        }}
        trackStyle={{ backgroundColor: "#22c55e", height: 12 }} // Adjust height for the green track
        railStyle={{ backgroundColor: "#000000", height: 12 }} // Adjust height for the black rail
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
      <div className="text-base font-bold pt-8 pb-2">
        Selected Refresh Rate: {refreshRates[refreshRateIndex].label}
      </div>
    </div>
  );
};

export default RealTimeRefreshRateSlider;
