import React from 'react';

const RangeItem = ({ label, values, onChange }) => {
  const handleMinChange = (e) => {
    onChange(e.target.value, values.maxValue);
  };

  const handleMaxChange = (e) => {
    onChange(values.minValue, e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className=" font-bold text-base">{label}</label>
      <div className="flex flex-row justify-between items-center gap-2">
        <input
          placeholder="Min"
          value={values.minValue}
          onChange={handleMinChange}
          className="w-full bg-black border-[1px] border-midGray  text-white rounded-[10px] py-2 font-bold text-base text-center"
        />
        <input
          placeholder="Max"
          value={values.maxValue}
          onChange={handleMaxChange}
          className="w-full bg-black text-white border-[1px] border-midGray rounded-[10px] py-2 font-bold text-base text-center"
        />
      </div>
    </div>
  );
};

export default RangeItem;
