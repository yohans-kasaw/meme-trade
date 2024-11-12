import DownPiramidIcon from "../../public/svg_icons/down_piramid.svg";
import SortSettingIcon from "../../public/svg_icons/sort_setting.svg";
import FilterSettingIcon from "../../public/svg_icons/filter_setting_icon.svg";
import Image from "next/image";

export function CountBadge({ count }) {
  return (
    <div className="bg-accentLime rounded-sm text-primaryBlack px-1 text-xs">
      <div className="font-bold">{count}</div>
    </div>
  );
}

export function FilterButton({ children, gapClass = "gap-3", additionalClass = "" }) {
  return (
    <div
      className={`flex flex-row justify-start items-center ${gapClass} bg-darkGray rounded-[6px] border-[1px] border-midGray py-0.5 ${additionalClass}`}
    >
      {children}
    </div>
  );
}

function ScaledIcon({ Icon, Scale = 0.7 }) {
  return <Icon style={{ transform: `scale(${Scale})` }} />;
}

function TokenFilterPanel() {
  return (
    <div className="text-white flex justify-center items-stretch gap-1.5 p-1 pt-2">
      <FilterButton gapClass="gap-1" additionalClass="pl-2">
        <Image
          src={"/svg_icons/Solana-chain-image.png"}
          width={15}
          height={15}
        />
        <ScaledIcon Icon={DownPiramidIcon} />
      </FilterButton>
      <FilterButton additionalClass="pr-1">
        <ScaledIcon Icon={FilterSettingIcon} />
        <CountBadge count={5} />
      </FilterButton>
      <FilterButton additionalClass="pr-1">
        <ScaledIcon Icon={SortSettingIcon} />
        <CountBadge count={5} />
      </FilterButton>
    </div>
  );
}

export default TokenFilterPanel;
