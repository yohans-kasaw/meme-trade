import React from "react";
import PumpFunIcon from "../../../public/svg_icons/PumpFunIcon.svg";
import MoonShotIcon from "../../../public/svg_icons/moon_shot.svg";
import { tailwindColors } from "@/lib/colors";
import { Checkbox, ConfigProvider } from "antd";

const BooleanOptions = ({ booleanOptions, onOptionChange }) => {
  const options = [
    { label: "Pump.Fun", value: "isPumpFun", icon: <PumpFunIcon /> },
    { label: "MoonShot", value: "isMoonShot", icon: <MoonShotIcon /> },
    { label: "Graduated", value: "isGraduated", emoji: "🎓" },
    { label: "Top 10 Holder", value: "isTop10Holder", emoji: "🏅" },
    { label: "1+ Social", value: "isOnePlusSocial", emoji: "📱" },
    // Add more options here if needed
  ];

  return (
    <div className="flex flex-wrap flex-row gap-4 pt-4 pb-6 justify-start">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* Icon or Emoji */}
          <span className="flex items-center justify-center w-8 h-8 ">
            {option.icon ? (
              <div className="scale-[2]">{option.icon}</div>
            ) : (
              <div className="scale-[1.5]"> {option.emoji} </div>
            )}
          </span>

          {/* Label */}
          <span className="text-white text-base font-bold pr-2">{option.label}</span>

          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#00b96b", // Green color for checked state
                colorBgContainer: "#000000", // Black background for checked state
              },
            }}
          >
            <Checkbox
              checked={booleanOptions[option.value]}
              onChange={(e) => onOptionChange(option.value, e.target.checked)}
              className="scale-[2]"
            />
          </ConfigProvider>
        </label>
      ))}
    </div>
  );
};

export default BooleanOptions;
