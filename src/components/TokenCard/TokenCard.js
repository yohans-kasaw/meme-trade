import Footer from "./Footer";

import TokenDetails from "@/components/TokenCard/TokenDetails";
import TokenProfile from "@/components/TokenCard/TokenProfile";

import TokenVolumeAndActions from "@/components/TokenCard/TokenVolumeAndActions";

const TokenCard = ({ token }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between gap-2 items-stretch bg-darkGray">
          <div className="">
            <TokenProfile {...token} />
          </div>
          <div className="flex-grow">
            <TokenDetails {...token} />
          </div>
          <div className="">
            <TokenVolumeAndActions {...token} />
          </div>
        </div>
        <Footer {...token} />
      </div>
    </div>
  );
};

export default TokenCard;
