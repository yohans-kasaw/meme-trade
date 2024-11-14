import TokenFilterPanel from "@/components/DashBoard/TokenFilterPanel";
import TokenItem from "@/components/TokenCard/TokenItem";

function TokenGroup({ tokens }) {
  return (
    <div className="flex flex-col gap-3 mb-10 items-stretch text-white px-1 min-h-[90vh]">
      <TokenFilterPanel/>
      <div className="flex flex-col gap-5 items-stretch text-white">
        {tokens.map((token) => (
          <TokenItem key={token.token_id} token={token} />
        ))}
      </div>
    </div>
  );
}

export default TokenGroup;
