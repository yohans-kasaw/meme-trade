import { useState } from "react";

const TokenFilterTopTenOption = () => {
  const [selectedOption, setSelectedOption] = useState("topTen");

  return (
    <div className="flex justify-start space-x-8 items-center">
      {/* Pump.fun Tokens */}
      <label className="flex items-center space-x-2 cursor-pointer text-xs">
        <span className="text-white">Top Ten</span>
        <input
          type="radio"
          value="topTen"
          checked={selectedOption === "topTen"}
          onChange={() => setSelectedOption("topTen")}
          className="hidden"
        />
        <div
          className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-all
            ${
              selectedOption === "topTen"
                ? "bg-green-500 text-white border-none"
                : "bg-black border-none"
            }`}
        >
          {selectedOption === "topTen" && <span>✓</span>}
        </div>
      </label>

      {/* Moonshot Tokens */}
      <label className="flex items-center space-x-2 cursor-pointer text-xs">
        <span className="text-white">1+ Social</span>
        <input
          type="radio"
          value="moonshot"
          checked={selectedOption === "onePlusSocial"}
          onChange={() => setSelectedOption("onePlusSocial")}
          className="hidden"
        />
        <div
          className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-all
            ${
              selectedOption === "onePlusSocial"
                ? "bg-green-500 text-white border-none"
                : "bg-black border-none"
            }`}
        >
          {selectedOption === "onePlusSocial" && <span>✓</span>}
        </div>
      </label>
    </div>
  );
};

export default TokenFilterTopTenOption;
