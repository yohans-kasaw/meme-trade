import OrderStatus from "./OrderStatus";

const ListOrderPanel = () => {
  return (
    <div className="fixed right-0 top-10 w-1/4 h-full bg-darkGray text-white p-6 shadow-lg overflow-y-auto">
      <div className="flex justify-between space-x-4 mb-2 border-b border-gray-600 pb-2">
        <h3 className="text-sm">List Order</h3>
      </div>

      {/* List Order */}
      <div className="flex flex-col justify-center text-white items-center">
        <div className="pb-4">
          <OrderStatus className="pb-2" label={"Volume"} ascending={false} />
          <OrderStatus label={"Buy Volume"} ascending={true} />
          <OrderStatus label={"Sell Volume"} ascending={true} />
          <OrderStatus label={"TXNS"} ascending={true} />
          <OrderStatus label={"Market Cap"} ascending={true} />
          <OrderStatus label={"Liquidity"} ascending={true} />
          <OrderStatus label={"Bond Cure %"} ascending={true} />
          <OrderStatus label={"Dev Holding %"} ascending={true} />
          <OrderStatus label={"Holders"} ascending={true} />
        </div>
      </div>
    </div>
  );
};

export default ListOrderPanel;
