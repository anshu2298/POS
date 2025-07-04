import "./StatusButton.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaHourglassEnd } from "react-icons/fa";
const StatusButton = ({ status }) => {
  const getButtonConfig = () => {
    if (status === "Processing") {
      return {
        text: "Processing",
        className: "status-button processing",
        icon: "hourglass",
      };
    } else {
      return {
        text: "Order Done",
        className: "status-button done",
        icon: "checkmark",
      };
    }
  };

  const { text, className, icon } = getButtonConfig();

  return (
    <div className={className}>
      <span className='button-text'>{text}</span>
      {icon === "hourglass" && (
        <span className='icon hourglass'>
          <FaHourglassEnd />
        </span>
      )}
      {icon === "checkmark" && (
        <span className='icon checkmark'>
          <BsFillPatchCheckFill />
        </span>
      )}
    </div>
  );
};

export default StatusButton;
