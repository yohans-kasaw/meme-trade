import { Button } from "antd";

const DrawerHeader = ({ title, onApply, onCancel }) => (
  <div className="flex justify-between items-streach mb-4 border-b-2 border-accentMidGray h-[3vw] !text-xs">
    <div className="flex justify-end items-end gap-2">
      <h1 className="font-semibold">{title}</h1>
    </div>

    <div className="flex gap-2 items-center">
      <Button className="!text-white !text-xs" type="text" onClick={onCancel}>
        Cancel
      </Button>
      <Button
        className="!bg-green-700 !text-white !text-xs !py-[0.6vw] !px-[0.6vw] !font-bold"
        type="primary"
        onClick={onApply}
      >
        Apply
      </Button>
    </div>
  </div>
);

export default DrawerHeader;
