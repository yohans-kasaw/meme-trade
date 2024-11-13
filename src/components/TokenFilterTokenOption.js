import { useState } from "react";
import MoonshotTokenIcon from "../../public/svg_icons/moonshot_token.svg";
import PumPFunTokenIcon from "../../public/svg_icons/pump.fun_token.svg";

const TokenFilterTokenOption = () => {
  const [selectedOption, setSelectedOption] = useState("pumpFun");

  return (
    <div className="flex justify-center space-x-8 items-center">
      {/* Pump.fun Tokens */}
      <label className="flex items-center space-x-2 cursor-pointer text-xs">
        <PumPFunTokenIcon />
        <span className="text-white">Pump.fun Tokens</span>
        <input
          type="radio"
          value="pumpFun"
          checked={selectedOption === "pumpFun"}
          onChange={() => setSelectedOption("pumpFun")}
          className="hidden"
        />
        <div
          className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-all
            ${
              selectedOption === "pumpFun"
                ? "bg-green-500 text-white border-none"
                : "bg-black border-none"
            }`}
        >
          {selectedOption === "pumpFun" && <span>✓</span>}
        </div>
      </label>

      {/* Moonshot Tokens */}
      <label className="flex items-center space-x-2 cursor-pointer text-xs">
        <MoonshotTokenIcon />
        <span className="text-white">Moonshot Tokens</span>
        <input
          type="radio"
          value="moonshot"
          checked={selectedOption === "moonshot"}
          onChange={() => setSelectedOption("moonshot")}
          className="hidden"
        />
        <div
          className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-all
            ${
              selectedOption === "moonshot"
                ? "bg-green-500 text-white border-none"
                : "bg-black border-none"
            }`}
        >
          {selectedOption === "moonshot" && <span>✓</span>}
        </div>
      </label>
    </div>
  );
};

export default TokenFilterTokenOption;
