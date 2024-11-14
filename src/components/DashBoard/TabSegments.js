import { useState } from "react";
import NotificationIcon from "@public/svg_icons/notification.svg";

const CustomSegmented = ({ value, onChange, signalsCount, options = [] }) => {
  const [selected, setSelected] = useState(value || options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option);
  };

  return (
    <div className="sticky bottom-0 mt-4 flex justify-center  overflow-hidden gap-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(option)}
          className={`transition-colors duration-200 rounded-sm text-primaryBlack px-4 text-lg ${
            selected === option
              ? selected == "4"
                ? "border-2 border-accentLime"
                : "bg-accentLime text-midGray"
              : "bg-midGray text-white"
          }`}
        >
          {option != "4" && option}
          {option == "4" && (
            <div className="flex flex-row items-center justify-start">
                <NotificationIcon style={{ transform: "scale(0.7)" }} />
              <div
                className="bg-accentBlue rounded-sm text-primaryBlack px-2 ml-[-10px]"
                style={{ transform: "scale(0.6)" }}
              >
                {signalsCount}
              </div>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default CustomSegmented;
