// SortingOptionsDrawer.jsx
import { useState } from "react";
import SortingOptionItem from "./SortingOptionItem";
import DrawerHeader from "../Common/DrawerHeader";
import { rangeOptionLabels } from "../../lib/constants";

const getDefaultSortingOptions = () =>
  rangeOptionLabels.map((label) => ({
    label,
    selected: false,
    ascending: true,
  }));

const SortingOptionsDrawer = ({ onChange }) => {
  const [sortingOptions, setSortingOptions] = useState(
    getDefaultSortingOptions()
  );

  const handleOptionChange = (changedOption) => {
    const updatedOptions = sortingOptions.map((option) =>
      option.label === changedOption.label ? changedOption : option
    );
    setSortingOptions(updatedOptions);
    if (onChange) {
      onChange(updatedOptions);
    }
  };

  const handleApply = () => {
    console.log("Applying sorting options:", sortingOptions);
  };

  const handleCancel = () => {
    setSortingOptions(getDefaultSortingOptions());
  };

  return (
    <div className="bg-darkGray text-white p-6 shadow-lg overflow-y-auto">
      <DrawerHeader
        title="Sorting Options"
        onApply={handleApply}
        onCancel={handleCancel}
      />
      <div className="flex justify-center">
        <div className="flex flex-col gap-4">
          {sortingOptions.map((option) => (
            <SortingOptionItem
              key={option.label}
              option={option}
              onOptionChange={handleOptionChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingOptionsDrawer;
