import TokenItem from "@/components/TokenCard/TokenItem";
function TokenList({ tokens }) {
  return (
    <div className="flex flex-col gap-5 items-stretch text-white h-[88vh] md:h-[88vh] overflow-y-scroll">
      {tokens.map((token) => (
        <div key={token.token_id} className="px-1">
          <TokenItem token={token} />
        </div>
      ))}
    </div>
  );
}

export default TokenList;
