import Footer from "./Footer";

import TokenDetails from "@/components/TokenCard/TokenDetails";
import TokenProfile from "@/components/TokenCard/TokenProfile";

import TokenVolumeAndActions from "@/components/TokenCard/TokenVolumeAndActions";

const TokenCard = ({ token }) => {
  return (
    <div>
      <div className="flex flex-col bg-red-400">
        <div className="flex flex-row justify-between">
          <div className="bg-yellow-300">
            <TokenProfile {...token} />
          </div>
          <div className="bg-red-300  flex-grow">
            <TokenDetails {...token} />
          </div>
          <div className="bg-green-300">
            <TokenVolumeAndActions {...token} />
          </div>
        </div>
        <Footer {...token} />
      </div>
    </div>
  );
};

export default TokenCard;
