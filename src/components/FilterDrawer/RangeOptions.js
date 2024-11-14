// RangeOptions.jsx
import RangeItem from "@/components/FilterDrawer/RangeItem";
import { rangeOptionLabels } from "@/lib/constants";

const RangeOptions = ({ rangeOptions, onRangeOptionChange }) => {
  return (
    <div className="flex flex-col items-center pt-2 pb-20">
      <div className="flex flex-col items-center gap-6 w-3/4">
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
