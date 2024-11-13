import { useState } from "react";
import { Progress } from "antd";

function VelocityPopUp({ velocity_model }) {
  const [activeInterval, setActiveInterval] = useState("1m");
  const { intervals, real_time } = velocity_model;

  const signals = Object.keys(intervals).map((minute) => ({
    minute,
    percent: intervals[minute].percentage_change,
    isActive: minute === activeInterval,
  }));

  const handleTabClick = (minute) => {
    setActiveInterval(minute);
  };

  const activeData = intervals[activeInterval];

  return (
    <div className="p-4 text-white">
      <div className="sm:flex grid grid-cols-2 justify-start overflow-x-auto w-96 custom-scrollbar">
        {signals.map((signal, index) => (
          <MinutePercentTab
            key={index}
            minute={signal.minute}
            percent={signal.percent}
            isActive={signal.isActive}
            onClick={() => handleTabClick(signal.minute)}
          />
        ))}
      </div>

      <div className="flex sm:flex-row flex-col items-start text-sm font-bold mt-8">
        {/* RealTime Content */}
        <div className="p-1 mr-1 bg-darkGray rounded-md border border-secondary items-center justify-center sm:w-[22%] w-[100%] mb-2">
          <div className="flex justify-center mb-2">Real Time</div>
          <div className="flex flex-col items-center mb-2">
            <div className="text-midLightGray">TXNS</div>
            <div className="">{real_time.transactions}</div>
          </div>
          <div className="flex flex-col items-center mb-2">
            <div className="text-midLightGray">Volume</div>
            <div>{real_time.volume}</div>
          </div>
          <div className="flex flex-col items-center mb-2">
            <div className="text-midLightGray">Holders</div>
            <div>{real_time.holders}</div>
          </div>
          <div className="flex flex-col items-center mb-2">
            <div className="text-midLightGray">Mcap</div>
            <div>{real_time.market_cap}</div>
          </div>
        </div>

        {/* Intervals */}
        <div className="grow bg-darkGray px-2 py-1 rounded-md border border-midLightGray sm:w-[30%] w-[100%]">
          <div className="flex flex-row justify-between items-center mb-1">
            <div className="flex flex-col items-start">
              <div className="text-midLightGray">BUYS</div>
              <div>{activeData.buyers}</div>
            </div>
            <div className="px-5 py-1 border border-midLightGray rounded-lg">
              {activeInterval}
            </div>
            <div className="flex flex-col items-end">
              <div className="text-midLightGray">SELLS</div>
              <div>{activeData.sellers}</div>
            </div>
          </div>
          <Divider leftPercent={100} rightPercent={100} />
          <div className="flex flex-row justify-between items-center mb-1">
            <div className="flex flex-col items-start">
              <div className="text-midLightGray">BUY VOL</div>
              <div>{activeData.buy_volume}</div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-midLightGray">SELL VOL</div>
              <div>{activeData.sell_volume}</div>
            </div>
          </div>
          <Divider leftPercent={100} rightPercent={100} />
          <div className="flex flex-row justify-between items-center mb-1">
            <div className="flex flex-col items-start">
              <div className="text-midLightGray">BUYERS</div>
              <div>{activeData.buyers}</div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-midLightGray">SELLERS</div>
              <div>{activeData.sellers}</div>
            </div>
          </div>

          <Divider leftPercent={100} rightPercent={100} />
        </div>
      </div>
    </div>
  );
}

const MinutePercentTab = ({ minute, percent, isActive, onClick }) => {
  const percentColor = percent < 0 ? "text-accentPink" : "text-primary";
  const tabStatus = isActive ? "border-primary" : "border-midGray";

  return (
    <div
      className={`flex flex-col tab ${tabStatus} rounded-md mx-1 text-center border px-2 py-1 mb-1`}
      onClick={onClick}
    >
      <span className="text-sm font-bold">{minute}</span>
      <span className={`percentage text-sm font-bold ${percentColor}`}>
        {percent}%
      </span>
    </div>
  );
};

const Divider = ({ leftPercent, rightPercent }) => {
  return (
    <div className="flex flex-row gap-1 mb-2">
      <Progress
        percent={leftPercent}
        size="small"
        showInfo={false}
        strokeColor="#44E19F"
      />

      <Progress
        percent={rightPercent}
        size="small"
        showInfo={false}
        strokeColor="#FF2897"
      />
    </div>
  );
};
export default VelocityPopUp;
