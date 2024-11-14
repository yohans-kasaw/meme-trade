import React, { useState } from "react";
import { Select, Input, Button } from "antd";

import AlarmIcon from "@public/svg_icons/alarm-icon-white.svg";
import AlertItem from "./AlertItem";
import "antd/dist/reset.css";

const { Option } = Select;

const AlertDrawer = () => {
  const [type, setType] = useState("Market Cap");
  const [movement, setMovement] = useState("Down More Than");
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState("0");
  const [alarms, setAlarms] = useState([]);

  // Handle form submission
  const handleAddAlarm = () => {
    const newAlarm = {
      title: "TRUMP RAVE",
      type,
      condition: movement,
      amount: amount || 0,
      percentage: percentage || 0,
      status: "Active",
      createdTime: "Just now",
    };

    setAlarms([...alarms, newAlarm]);
    clearForm();
  };

  // Clear form fields
  const clearForm = () => {
    setAmount("");
    setPercentage("");
  };

  // Handle delete alarm
  const handleDeleteAlarm = (index) => {
    const updatedAlarms = alarms.filter((_, i) => i !== index);
    setAlarms(updatedAlarms);
  };

  return (
    <div className="bg-darkGray text-white shadow-md h-full">
      {/* Form Section */}
      <div className="flex items-streach justify-between  border-b-[1px] ">
        <div className="flex flex-row bg-[#006F9280] w-1/2  pb-[4px] pl-2">
          <div className="flex items-end text-[20px] font-semibold">
            {"Alarms"}
            <span className="ml-2 flex items-end">
              <AlarmIcon />
            </span>
          </div>
        </div>

        <div className="flex justify-end gap-3 items-center w-1/2 py-2 pr-2">
          <div
            onClick={clearForm}
            type="text"
            className="!text-white !font-bold !text-[12px]"
          >
            Cancel
          </div>
          <Button
            onClick={handleAddAlarm}
            className="!bg-green-700  !text-white !text-[14px] !py-2 !px-4 !font-bold"
            type="primary"
            size="large"
          >
            Apply
          </Button>
        </div>
      </div>

      {/* Header */}

      <div className="mb-6 p-4 border-b-[1px] text-xs">
        {/* Form Row */}
        <div className="flex flex-col md:flex-row justify-between mb-4 w-full">
          {/* Type and Movement Selectors */}
          <div className="flex flex-col items-start gap-6">
            {/* Type Select */}
            <div className="w-40">
              <label className="block  mb-1">Type</label>
              <Select
                value={type}
                onChange={setType}
                className="custom-select w-full"
                popupClassName="custom-select-dropdown"
              >
                <Option value="Market Cap">Market Cap</Option>
                <Option value="Volume">Volume</Option>
              </Select>
            </div>

            {/* Movement Select */}
            <div className="w-40">
              <label className="block  mb-1">Movement</label>
              <Select
                value={movement}
                onChange={setMovement}
                className="custom-select w-full"
                popupClassName="custom-select-dropdown"
              >
                <Option value="Goes Over">Goes Over</Option>
                <Option value="Goes Under">Goes Under</Option>
                <Option value="Up More Than">Up More Than</Option>
                <Option value="Down More Than">Down More Than</Option>
              </Select>
            </div>
          </div>
        </div>

        {/* Amount and Percentage Inputs */}
        <div>
          <label className="block text-xs mb-1">Amount</label>
          <div className="flex gap-4 mb-4 items-center">
            <Input
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              prefix={
                <span
                  style={{
                    backgroundColor: "#006F92",
                    color: "white",
                    padding: "0 5px",
                    borderRadius: "4px",
                  }}
                >
                  #
                </span>
              }
              style={{
                width: "220px",
                backgroundColor: "black",
                color: "white",
              }}
            />
            <Input
              placeholder="Percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              prefix={
                <span
                  style={{
                    backgroundColor: "#006F92",
                    color: "white",
                    padding: "0 5px",
                    borderRadius: "4px",
                  }}
                >
                  %
                </span>
              }
              style={{
                width: "120px",
                backgroundColor: "black",
                color: "white",
              }}
            />
          </div>
        </div>
      </div>

      {/* Alarms List */}
      <div className="flex flex-col gap-4 p-2 max-h-screen overflow-auto velocity-custom-scrollbar">
        {alarms.map((alarm, index) => (
          <AlertItem
            key={index}
            title={alarm.title}
            type={alarm.type}
            condition={alarm.condition}
            amount={alarm.amount}
            percentage={alarm.percentage}
            status={alarm.status}
            createdTime={alarm.createdTime}
            onEdit={() => alert("Edit Alarm")}
            onRefresh={() => alert("Refresh Alarm")}
            onDelete={() => handleDeleteAlarm(index)}
          />
        ))}
      </div>

      {/* Custom Styles for Dropdown and Inputs */}
      <style>
        {`
            /* Style for the Select component */
            .custom-select .ant-select-selector {
              background-color: black !important;
              color: white !important;
              border: 1px solid #444 !important;
            }
            .custom-select .ant-select-selection-item {
              color: white !important;
            }
            .custom-select .ant-select-arrow {
              color: white !important;
            }

            /* Style for the Dropdown Popup */
            .custom-select-dropdown {
              background-color: black !important;
              padding: 10px !important;
            }
            .custom-select-dropdown .ant-select-item-option {
              background-color: #006F92 !important;
              color: white !important;
              margin: 5px 0 !important;
              border-radius: 4px;
            }
            .custom-select-dropdown .ant-select-item-option-active {
              background-color: #005bb5 !important;
            }
            .custom-select-dropdown .ant-select-item-option-selected {
              background-color: #005bb5 !important;
            }

            /* Adjusting the option height */
            .custom-select-dropdown .ant-select-item-option {
              height: auto !important;
              line-height: normal !important;
              padding: 8px 12px !important;
            }
          `}
      </style>
    </div>
  );
};

export default AlertDrawer;
