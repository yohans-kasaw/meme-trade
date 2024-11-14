// BooleanOptions.jsx
import { Checkbox, ConfigProvider } from "antd";
import { booleanOptionsList } from "../../lib/constants";

const BooleanOptions = ({ booleanOptions, onOptionChange }) => {
  return (
    <div className="flex flex-wrap flex-row gap-2 justify-start">
      {booleanOptionsList.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-[1px] cursor-pointer"
        >
          <span className="flex items-center justify-center w-8 h-8 scale-[1.25]">
            {option.icon ? (
              <div className="scale-200">{option.icon}</div>
            ) : (
              <div className="scale-150">{option.emoji}</div>
            )}
          </span>
          <span className="text-white font-bold pr-1">{option.label}</span>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#00b96b",
                colorBgContainer: "#000000",
              },
            }}
          >
            <Checkbox
              checked={booleanOptions[option.value]}
              onChange={(e) => onOptionChange(option.value, e.target.checked)}
              className="scale-200"
            />
          </ConfigProvider>
        </label>
      ))}
    </div>
  );
};

export default BooleanOptions;
