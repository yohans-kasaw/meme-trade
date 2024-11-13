import { Slider } from 'antd';

const refreshRates = [
  { label: '1s', value: 1 },
  { label: '30s', value: 30 },
  { label: '1m', value: 60 },
  { label: '3m', value: 180 },
  { label: '5m', value: 300 },
  { label: '15m', value: 900 },
  { label: '30m', value: 1800 },
  { label: '1h', value: 3600 },
  { label: '2h', value: 7200 },
  { label: '4h', value: 14400 },
  { label: '24h', value: 86400 },
];

const RealTimeRefreshRateSlider = ({ refreshRateIndex, onRefreshRateChange }) => {
  const marks = refreshRates.reduce((acc, rate, index) => {
    acc[index] = rate.label;
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center text-white space-y-2 w-full">
      <h3 className="text-center text-sm font-semibold">
        Real Time Refresh Rate
      </h3>
      <Slider
        className="w-full"
        min={0}
        max={refreshRates.length - 1}
        step={1}
        value={refreshRateIndex}
        onChange={onRefreshRateChange}
        marks={marks}
        tooltip={{ formatter: null }}
      />
      <div className="text-xs">
        Selected Refresh Rate: {refreshRates[refreshRateIndex].label}
      </div>
    </div>
  );
};

export default RealTimeRefreshRateSlider;
