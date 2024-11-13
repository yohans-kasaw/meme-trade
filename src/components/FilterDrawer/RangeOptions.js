import RangeItem from "./RangeItem";

const rangeOptionLabels = [
  "Volume",
  "Buy Volume",
  "Sell Volume",
  "TXNS",
  "Market Cap",
  "Liquidity",
  "Bond Curve %",
  "Dev Holding %",
  "Holders",
];

const RangeOptions = ({ rangeOptions, onRangeOptionChange }) => {
  return (
    <div className="flex flex-col items-center  pt-10 pb-20">
      <div className="flex flex-col items-center gap-8 w-3/4">
        {rangeOptionLabels.map((label) => (
          <RangeItem
            key={label}
            label={label}
            values={rangeOptions[label] || { minValue: "", maxValue: "" }}
            onChange={(min, max) => onRangeOptionChange(label, min, max)}
          />
        ))}
      </div>
    </div>
  );
};

export default RangeOptions;
