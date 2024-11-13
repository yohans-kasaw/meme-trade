import { Button } from "antd";

const DrawerHeader = ({ title, onApply, onCancel }) => (
  <div className="flex justify-between items-end mb-4 border-b-2 border-accentMidGray pb-4 font-bold">
    <h3>{title}</h3>
    <div className="flex gap-2 items-center">
      <Button className="!text-white" type="text" onClick={onCancel}>
        Cancel
      </Button>
      <Button
        className="!bg-green-700 !text-white !py-4 !px-6 !font-bold"
        type="primary"
        onClick={onApply}
      >
        Apply
      </Button>
    </div>
  </div>
);

export default DrawerHeader;
