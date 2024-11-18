import { tailwindColors } from "@/lib/colors";
import { Avatar, Progress } from "antd";
import TabletMedIcon from "@public/svg_icons/tablet_med_icon.svg";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const AvatarWithProgress = ({ imageUrl, progress, sourceLink }) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const avatarSize = Math.min(Math.max(75, viewWidth * 0.05), 180);

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center overflow-none">
      <div
        style={{
          display: "grid",
          gridTemplateAreas: "'stack'",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ gridArea: "stack" }}
          className="w-full h-full flex justify-center items-center overflow-hidden"
        >
          <Avatar
            src={imageUrl ?? "/images/meme_fallback.png"}
            size={avatarSize}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <Progress
          type="circle"
          percent={progress}
          size={{}} // don't remove this, this makes it able to get overridden
          strokeColor="#36ff62"
          trailColor="#2b382e"
          format={() => ""}
          className="xx-big-icon rotate-180"
          style={{ gridArea: "stack" }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateAreas: "'stack'",
            alignItems: "center",
            justifyItems: "center",
            gridArea: "stack",
            alignSelf: "end",
            marginBottom: "-15%",
          }}
        >
          <Avatar
            size={avatarSize / 2.4}
            style={{
              gridArea: "stack",
              backgroundColor: "#000000",
              borderColor: tailwindColors.accentGreen,
            }}
          >
            <b>{progress}%</b>
          </Avatar>

          <Avatar
            size={avatarSize / 3.8}
            style={{
              gridArea: "stack",
              justifySelf: "end",
              alignSelf: "start",
              marginRight: "-45%",
              marginTop: "-15%",
              backgroundColor: "#000000",
              borderColor: tailwindColors.accentGreen,
            }}
          >
            <a href={sourceLink}>
              <TabletMedIcon />
            </a>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default AvatarWithProgress;
