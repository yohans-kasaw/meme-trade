// RangeItem.jsx
import React from "react";

const RangeItem = ({ label, values, onChange }) => {
  const handleMinChange = (e) => {
    onChange(e.target.value, values.maxValue);
  };

  const handleMaxChange = (e) => {
    onChange(values.minValue, e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="">{label}</label>
      <div className="flex flex-row justify-between items-center gap-2">
        <input
          placeholder="Min"
          value={values.minValue}
          onChange={handleMinChange}
          className="w-full bg-black border border-midGray text-white rounded-lg py-2 text-center"
        />
        <input
          placeholder="Max"
          value={values.maxValue}
          onChange={handleMaxChange}
          className="w-full bg-black text-white border border-midGray rounded-lg py-2 text-center"
        />
      </div>
    </div>
  );
};

export default RangeItem;
