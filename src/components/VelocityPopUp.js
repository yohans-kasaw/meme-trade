import { useState } from "react";
import { Progress } from "antd";

function VelocityPopUp({ velocity_model }) {
  const [activeInterval, setActiveInterval] = useState("1m");
  const { intervals, real_time } = velocity_model;

  const timeFrameToMinutes = (time_frame) => {
    const value = parseInt(time_frame, 10);
    const unit = time_frame.replace(value, "");

    switch (unit) {
      case "m":
        return value;
      case "h":
        return value * 60;
      case "d":
        return value * 24 * 60;
      default:
        return 0;
    }
  };

  const signals = Object.keys(intervals).map((time_frame) => ({
    time_frame,
    percent: intervals[time_frame].percentage_change,
    isActive: time_frame === activeInterval,
  }));

  const sortedSignals = [...signals].sort((a, b) => {
    return timeFrameToMinutes(a.time_frame) - timeFrameToMinutes(b.time_frame);
  });

  const handleTabClick = (time_frame) => {
    setActiveInterval(time_frame);
  };

  const activeData = intervals[activeInterval];

  return (
    <div className="text-white text-xs">
      <div className="flex justify-start items-center overflow-x-auto w-48 velocity-custom-scrollbar mx-auto">
        {sortedSignals.map((signal, index) => (
          <TimeFrameTab
            key={index}
            time_frame={signal.time_frame}
            percent={signal.percent}
            isActive={signal.isActive}
            onClick={() => handleTabClick(signal.time_frame)}
          />
        ))}
      </div>

      <div className="flex flex-row items-start font-bold mt-5">
        {/* RealTime Content */}
        <div className="p-1 mr-1 bg-darkGray rounded-md border border-secondary">
          <div className="mb-2 justify-center items-center">Real Time</div>
          <div className="flex flex-col items-center mb-1">
            <div className="text-midLightGray">TXNS</div>
            <div className="">{real_time.transactions}</div>
          </div>
          <div className="flex flex-col items-center mb-1">
            <div className="text-midLightGray">Volume</div>
            <div>{real_time.volume}</div>
          </div>
          <div className="flex flex-col items-center mb-1">
            <div className="text-midLightGray">Holders</div>
            <div>{real_time.holders}</div>
          </div>
          <div className="flex flex-col items-center mb-1">
            <div className="text-midLightGray">Mcap</div>
            <div>{real_time.market_cap}</div>
          </div>
        </div>

        {/* Intervals */}
        <div className="grow bg-darkGray px-2 py-1 rounded-md border border-midLightGray sm:w-[30%] w-[100%]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
              <div className="text-midLightGray">BUYS</div>
              <div>{activeData.buyers}</div>
            </div>
            <div className="px-3 border border-midLightGray rounded-md">
              {activeInterval}
            </div>
            <div className="flex flex-col items-end">
              <div className="text-midLightGray">SELLS</div>
              <div>{activeData.sellers}</div>
            </div>
          </div>
          <Divider leftPercent={100} rightPercent={100} />
          <div className="flex flex-row justify-between items-center">
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
          <div className="flex flex-row justify-between items-center">
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

const TimeFrameTab = ({ time_frame, percent, isActive, onClick }) => {
  const percentColor = percent < 0 ? "text-accentPink" : "text-primary";
  const tabStatus = isActive ? "border-primary" : "border-midGray";

  return (
    <div
      className={`flex flex-col tab ${tabStatus} rounded-md mx-1 text-center border px-2 py-1 mb-1`}
      onClick={onClick}
    >
      <span className="font-bold">{time_frame}</span>
      <span className={`percentage font-bold ${percentColor}`}>{percent}%</span>
    </div>
  );
};

const Divider = ({ leftPercent, rightPercent }) => {
  return (
    <div className="flex flex-row gap-1">
      <Progress
        percent={leftPercent}
        size={[70, 4]}
        showInfo={false}
        strokeColor="#44E19F"
      />

      <Progress
        percent={rightPercent}
        size={[70, 4]}
        showInfo={false}
        strokeColor="#FF2897"
      />
    </div>
  );
};

export default VelocityPopUp;
