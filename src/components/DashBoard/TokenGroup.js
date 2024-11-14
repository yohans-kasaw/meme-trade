import TokenFilterPanel from "@/components/DashBoard/TokenFilterPanel";
import TokenItem from "@/components/TokenCard/TokenItem";
import TokenList from "@/components/DashBoard/TokenList";

function TokenGroup({ tokens }) {
  return (
    <div className="flex flex-col gap-3 text-white text-xs justify-center items-stretch">
      <TokenFilterPanel/>
      <TokenList tokens={tokens} />
    </div>
  );
}

export default TokenGroup;
