import { useState } from "react";

import NotificationIcon from "@public/svg_icons/notification.svg";
import TradingSignalBadge from "../Badges/TradingSignalBadge";

const CustomSegmented = ({ value, onChange, signalsCount, options = [] }) => {
  const [selected, setSelected] = useState(value || options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option);
  };

  return (
    <div className="sticky bottom-0 pb-2 mt-1 flex justify-center  overflow-hidden gap-2 bg-black pt-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(option)}
          className={`rounded-sm text-primaryBlack px-4 py-2 ${
            selected === option
              ? selected == "4"
                ? "border-2 border-accentLime"
                : "bg-accentLime text-midGray"
              : "bg-midGray text-white"
          }`}
        >
          {option != "4" && option}
          {option == "4" && <div className="pr-2"> <TradingSignalBadge count={signalsCount} small={true}/> </div>}
        </button>
      ))}
    </div>
  );
};

export default CustomSegmented;
