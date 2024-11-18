import TokenCard from "@/components/TokenCard/TokenCard";
function TokenList({ tokens }) {
  return (
    <div className="flex flex-col gap-3 items-streach  text-white h-full h-[80vh] lg:h-[86vh] overflow-y-auto">
      {tokens.map((token) => (
        <div key={token.token_id} className="px-1">
          <TokenCard token={token} />
        </div>
      ))}
    </div>
  );
}

export default TokenList;
