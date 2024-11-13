import React from 'react';

const RangeItem = ({ label, values, onChange }) => {
  const handleMinChange = (e) => {
    onChange(e.target.value, values.maxValue);
  };

  const handleMaxChange = (e) => {
    onChange(values.minValue, e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2 mb-4 w-3/4">
      <label className="font-semibold text-xs">{label}</label>
      <div className="flex space-x-2">
        <input
          type="number"
          placeholder="Min"
          value={values.minValue}
          onChange={handleMinChange}
          className="w-full bg-black text-white rounded text-center text-xs"
        />
        <input
          type="number"
          placeholder="Max"
          value={values.maxValue}
          onChange={handleMaxChange}
          className="w-full bg-black text-white rounded text-center text-xs"
        />
      </div>
    </div>
  );
};

export default RangeItem;
