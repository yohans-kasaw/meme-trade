// SortingOptionItem.jsx
import PropTypes from "prop-types";
import React from "react";
import IncreasePyramid from "@public/svg_icons/increase_icon.svg";
import DecreasePyramid from "@public/svg_icons/decrease_icon.svg";
import CheckBoxChecked from "@public/svg_icons/checkBoxChecked.svg";
import CheckBoxUnchecked from "@public/svg_icons/checkBoxUnchecked.svg";

const SortingOptionItem = ({ option, onOptionChange }) => {
  const { label, selected, ascending } = option;

  // Handler to toggle the 'selected' state
  const handleSelectToggle = () => {
    onOptionChange({ ...option, selected: !selected });
  };

  // Handler to toggle the 'ascending' state
  const toggleOrder = () => {
    onOptionChange({ ...option, ascending: !ascending });
  };

  return (
    <div className="flex flex-col justify-start items-start gap-1">
      {/* Option Label */}
      <label className="text-white !text-xs py-2">{label}</label>

      <div className="flex items-center ml-2 gap-2">
        {/* Custom Checkbox Button */}
        <button
          type="button"
          onClick={handleSelectToggle}
          className="w-6 h-6 flex-shrink-0 focus:outline-none"
          aria-pressed={selected}
          aria-label={`${selected ? 'Deselect' : 'Select'} ${label}`}
        >
          {selected ? (
            <CheckBoxChecked className="w-full h-full cursor-pointer" />
          ) : (
            <CheckBoxUnchecked className="w-full h-full cursor-pointer" />
          )}
        </button>

        {/* Order Toggle Button */}
        <button
          type="button"
          onClick={toggleOrder}
          className="flex items-center cursor-pointer pl-3 focus:outline-none"
          aria-label={`Toggle order for ${label}`}
        >
          {ascending ? <IncreasePyramid /> : <DecreasePyramid />}
        </button>

        {/* Order Label */}
        <span className="text-white text-xs">
          {ascending ? "Ascending" : "Descending"}
        </span>
      </div>
    </div>
  );
};

SortingOptionItem.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    ascending: PropTypes.bool.isRequired,
  }).isRequired,
  onOptionChange: PropTypes.func.isRequired,
};

export default SortingOptionItem;
