import { tailwindColors } from "@/lib/colors";
import React from "react";
import { Avatar, Progress } from "antd";
import TabletMedIcon from "../../public/svg_icons/tablet_med_icon.svg";

const AvatarWithProgress = ({ imageUrl, progress, sourceLink }) => {
  const size = 70;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Progress
        type="circle"
        percent={progress}
        width={size + 5} // adjust width to your needs
        strokeColor="#36ff62"
        trailColor="#2b382e"
        format={() => ""}
        style={{ transform: "rotate(180deg)" }}
      />
      <Avatar
        src={imageUrl ?? "/images/meme_fallback.png"}
        size={size} // ensure the size fits within the Progress circle
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "46%",
          transform: "translate(-50%, -50%)",
          padding: "4px",
        }}
      >
        <Avatar
          size={size - 40}
          style={{
            position: "relative",
            backgroundColor: tailwindColors.primaryBlack,
            fontSize: "10px",
            borderColor: tailwindColors.accentGreen,
            borderWidth: "1px",
          }}
        >
          <b>{progress}%</b>
        </Avatar>

        <Avatar
          size={size - 50}
          style={{
            backgroundColor: tailwindColors.primaryBlack,
            position: "absolute",
            top: "0",
            left: "80%",
            borderColor: tailwindColors.accentGreen,
            borderWidth: "1px",
          }}
        >
          <TabletMedIcon />
        </Avatar>
      </div>
    </div>
  );
};

export default AvatarWithProgress;
