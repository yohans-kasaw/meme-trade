import Alert from "@public/svg_icons/svg1.svg";
import Bell from "@public/svg_icons/svg2.svg";
import Decrease from "@public/svg_icons/svg3.svg";
import Increase from "@public/svg_icons/svg4.svg";
const SecondaryBar = () => {
  return (
    <div className="bg-primaryBlack px-4 py-3 flex items-center space-x-4 text-white border-b border-gray-700 overflow-hidden">
      {/* <div className="flex justify-between items-center bg-dark px-4 py-3 text-white shadow-md"></div> */}
      <div className="flex items-center space-x-4">
        {/* <Image src={Svg1} alt="Menu" width={30} height={30} /> */}
        <Alert />
        <div className="flex items-center space-x-2">
          {/* <Image src={Svg2} alt="Logo" width={20} height={20} /> */}
          <Bell />
          <span className="text-xs font-bold">TRUMP MC $300K</span>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Image src={Svg3} alt="Logo" width={20} height={20} /> */}
          <Decrease />
          <span className="text-xs font-bold">50%</span>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Image src={Svg2} alt="Logo" width={20} height={20} /> */}
          <Bell />
          <span className="text-xs font-bold">TRUMP MC $300K</span>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Image src={Svg4} alt="Logo" width={20} height={20} /> */}
          <Increase />
          <span className="text-xs font-bold">50%</span>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Image src={Svg2} alt="Logo" width={20} height={20} /> */}
          <Bell />
          <span className="text-xs font-bold">TRUMP MC $300K</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {/* <Image src={Svg4} alt="Logo" width={20} height={20} /> */}
        <Increase />
        <span className="text-xs font-bold">ABOVE MC $300K</span>
      </div>
    </div>
  );
};

export default SecondaryBar;
