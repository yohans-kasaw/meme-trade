import SingleFilterOption from "./SingleFilterOption";

const FilterOptions = () => {
  return (
    <div className="flex flex-col justify-center text-white items-center">
      {/* Different Volume Inputs */}
      <SingleFilterOption label="Volume" />
      <SingleFilterOption label="Buy Volume" />
      <SingleFilterOption label="Sell Volume" />
      <SingleFilterOption label="TXNS" />
      <SingleFilterOption label="Market Cap" />
      <SingleFilterOption label="Liquidity" />
      <SingleFilterOption label="Bond Cure %" />
      <SingleFilterOption label="Dev Holding %" />
      <SingleFilterOption label="Holders" />
      {/* Add more as needed */}
    </div>
  );
};

export default FilterOptions;
