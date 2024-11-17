// TokenActions.js
import React from "react";
import VolumeDisplay from "@public/svg_icons/volume_display.svg";
import AlarmIcon from "@public/svg_icons/alarm_btn.svg";
import VelocityIcon from "@public/svg_icons/velocity_btn.svg";
import VelocityPopUp from "@/components/Popups/VelocityPopUp";

import { Drawer, Popover } from "antd";
import { useState } from "react";
import AlertDrawer from "@/components/AlertDrawer/AlertDrawer";

import { useMediaQuery } from "react-responsive";

const TokenActions = ({
  total_volume,
  user_alarm,
  velocity,
  velocity_model,
}) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const [open, setOpen] = useState(false);
  const [isAlarmDrawerVisible, setIsAlarmDrawerVisible] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const showAlarmDrawer = () => {
    setIsAlarmDrawerVisible(true);
  };

  const onCloseAlarmDrawer = () => {
    setIsAlarmDrawerVisible(false);
  };

  return (
    <div className="h-full">
      <div className="flex flex-col h-full justify-between">
        <div className="flex-grow flex justify-center items-center">
          <div className="">
            <div
              className="grid" 
              style={{
                gridTemplateAreas: "'stack'",
                justifyItems: "right",
                alignItems: "center",
              }}
            >
              <VolumeDisplay
                className="x-big-icon"
                style={{ gridArea: "stack" }}
              />
              <div
                className="text-accentBrightGreen pr-1 font-bold"
                style={{ gridArea: "stack" }}
              >
                {total_volume}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end">
          <div className="flex flex-row justify-end gap-0.5">
            <div
              onClick={user_alarm ? showAlarmDrawer : undefined}
              className={`cursor-pointer ${user_alarm ? "visible" : "invisible"}`}
              title="Set Alarm"
            >
              <AlarmIcon className="big-icon" />
            </div>

            <Popover
              content={<VelocityPopUp velocity_model={velocity_model} />}
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
              color="#1B1B1B"
              overlayClassName="velocity-custom-popover"
            >
              <div
                className={`cursor-pointer ${velocity ? "visible" : "invisible"}`}
                title="Velocity Settings"
              >
                <VelocityIcon className="big-icon" />
              </div>
            </Popover>
          </div>
        </div>
      </div>

      {/* Alarm Drawer */}
      <Drawer
        onClose={onCloseAlarmDrawer}
        open={isAlarmDrawerVisible}
        placement={isLargeScreen ? "right" : "bottom"}
        closable={false}
        styles={{ body: { padding: 0 } }}
        height="90%"
        maskClosable={true}
      >
        <AlertDrawer />
      </Drawer>
    </div>
  );
};

export default TokenActions;
