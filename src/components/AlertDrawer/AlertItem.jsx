import RefreshIcon from "@public/svg_icons/refresh_icon.svg";
import EditIcon from "@public/svg_icons/edit_icon.svg";
import DeleteIcon from "@public/svg_icons/delete_icon.svg";
import TriggeredIcon from "@public/svg_icons/alarm_icon_pink.svg";
import ActiveIcon from "@public/svg_icons/alarm_icon_green.svg";

const AlertItem = ({
  title,
  type,
  condition,
  amount,
  percentage,
  status,
  createdTime,
  onEdit,
  onRefresh,
  onDelete,
}) => {
  const isTriggered = status === "Triggered";

  return (
    <div className="bg-primaryBlack  py-3 px-4 shadow-md flex flex-col text-white gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <AlarmIcon className="w-5 h-5" /> */}
          <h3 className="font-bold text-xs">{title}</h3>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onEdit} className="hover:text-accentGreen">
            <EditIcon />
          </button>
          <button onClick={onRefresh} className="hover:text-blue-400">
            <RefreshIcon />
          </button>
          <button onClick={onDelete} className="hover:text-red-500">
            <DeleteIcon />
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="text-xs mb-1 font-semibold">
          Alert me when: <span className="text-accentLime">{type}</span>
        </p>
        <p
          className={`text-xs font-bold ${
            condition.includes("Down") ? "text-accentPink" : "text-accentGreen"
          }`}
        >
          goes {condition.toUpperCase()}{" "}
          <span className="text-white">
            {amount.toLocaleString()} or {percentage}%
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end pt-2 text-xs font-semibold gap-3">
        <div>
          <span className="text-grayText">Created </span>
          <span> {createdTime} ago</span>
        </div>

        <div className="flex items-center gap-2">
          {isTriggered ? (
            <>
              <TriggeredIcon />
              <span className="text-white ">Triggered</span>
            </>
          ) : (
            <>
              <ActiveIcon />
              <span className="text-white">Active</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertItem;
