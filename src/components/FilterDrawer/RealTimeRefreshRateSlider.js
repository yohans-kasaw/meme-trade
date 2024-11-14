// RealTimeRefreshRateSlider.jsx
import { Slider, ConfigProvider } from "antd";
import { refreshRates } from "@/lib/constants";
import { tailwindColors } from "@/lib/colors";

const RealTimeRefreshRateSlider = ({
  refreshRateIndex,
  onRefreshRateChange,
}) => {
  return (
    <div className="flex flex-col items-center text-white w-full">
      <div className="text-center font-semibold pb-3">
        Real Time Refresh Rate
      </div>
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              railSize: 6,
              trackBg: tailwindColors.accentGreen,
              railBg: tailwindColors.midGray,
              handleSize: 20,
              handleColor: tailwindColors.accentGreen,
              dotActiveBorderColor: tailwindColors.accentGreen,
              handleActiveOutlineColor: tailwindColors.accentGreen,
              dotBorderColor: tailwindColors.primaryBlack,
            },
          },
        }}
      >
        <Slider
          className="custom-slider w-full"
          min={0}
          max={refreshRates.length - 1}
          step={1}
          value={refreshRateIndex}
          onChange={onRefreshRateChange}
          tooltip={{
            formatter: (value) => (
              <b className="bg-black-900 p-2">{refreshRates[value].label}</b>
            ),
          }}
        />
      </ConfigProvider>
      <div className="font-bold pb-6">
        Selected Refresh Rate: {refreshRates[refreshRateIndex].label}
      </div>
    </div>
  );
};

export default RealTimeRefreshRateSlider;
