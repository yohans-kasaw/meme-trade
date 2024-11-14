// SortingOptionItem.jsx
import PropTypes from "prop-types";
import { Checkbox, ConfigProvider } from "antd";
import DecreasePyramid from "@public/svg_icons/decrease_icon.svg";
import IncreasePyramid from "@public/svg_icons/increase_icon.svg";

const SortingOptionItem = ({ option, onOptionChange }) => {
  const { label, selected, ascending } = option;

  const handleCheckboxChange = (e) => {
    onOptionChange({ ...option, selected: e.target.checked });
  };

  const toggleOrder = () => {
    onOptionChange({ ...option, ascending: !ascending });
  };

  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <label className="text-white">{label}</label>
      <div className="flex items-center ml-2 gap-2">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00b96b",
              colorBgContainer: "#000000",
              colorBorder: "#000000",
            },
          }}
        >
          <Checkbox
            checked={selected}
            onChange={handleCheckboxChange}
            aria-label={`Select ${label}`}
            className="scale-[1.2]"
          />
        </ConfigProvider>
        <div
          className="cursor-pointer pl-3"
          onClick={toggleOrder}
          aria-label={`Toggle order for ${label}`}
        >
          {ascending ? <IncreasePyramid /> : <DecreasePyramid />}
        </div>
        <label className="text-white text-xs font-bold">
          {ascending ? "Ascending" : "Descending"}
        </label>
      </div>
    </div>
  );
};

SortingOptionItem.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    ascending: PropTypes.bool.isRequired,
  }).isRequired,
  onOptionChange: PropTypes.func.isRequired,
};

export default SortingOptionItem;
