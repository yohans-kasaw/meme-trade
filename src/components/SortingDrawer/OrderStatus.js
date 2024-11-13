import DecreasePyramid from "../../public/svg_icons/decrease_pyramid.svg";
import IncreasePyramid from "../../public/svg_icons/increase_pyramid.svg";
import SecondaryTick from "../../public/svg_icons/secondary_tick.svg";

const OrderStatus = ({ label, ascending }) => {
  return (
    <div className="flex flex-col justify-center  mb-4 w-3/4 space-y-2">
      <label className="text-white  text-xs">{label}</label>
      {ascending ? (
        <div className="flex items-center space-x-2">
          <div className="w-full">
            <SecondaryTick />
          </div>

          <div className="w-full">
            <IncreasePyramid />
          </div>

          <label className="text-white  text-xs">Ascending</label>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="w-full">
            <SecondaryTick />
          </div>

          <div className="w-full">
            <DecreasePyramid />
          </div>

          <label className="text-white text-xs">Descending</label>
        </div>
      )}
    </div>
  );
};

export default OrderStatus;
