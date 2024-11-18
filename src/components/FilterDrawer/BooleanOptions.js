// BooleanOptions.jsx
import React from "react";
import { booleanOptionsList } from "@/lib/constants";
import CheckBoxChecked from "@public/svg_icons/checkBoxChecked.svg";
import CheckBoxUnchecked from "@public/svg_icons/checkBoxUnchecked.svg";

const BooleanOptions = ({ booleanOptions, onOptionChange }) => {
  return (
    <div className="flex flex-wrap flex-row gap-2 justify-start h-full">
      {booleanOptionsList.map((option) => (
        <div key={option.value} className="flex items-center gap-2">
          {/* Option Icon or Emoji */}
          <span className="flex items-center justify-center w-8 h-8 scale-[1.25]">
            {option.icon ? (
              <div>{option.icon}</div>
            ) : (
              <div>{option.emoji}</div>
            )}
          </span>

          {/* Option Label */}
          <span className="text-white pr-1">{option.label}</span>

          {/* Custom Checkbox SVG with onClick */}
          <span className="">
            {booleanOptions[option.value] ? (
              <CheckBoxChecked
                className="cursor-pointer"
                onClick={() => onOptionChange(option.value, false)}
                aria-label={`Uncheck ${option.label}`}
              />
            ) : (
              <CheckBoxUnchecked
                className="cursor-pointer"
                onClick={() => onOptionChange(option.value, true)}
                aria-label={`Check ${option.label}`}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BooleanOptions;
