import "./DeliveryDetails.css";
import { CiClock2 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const DeliveryDetails = ({ address, estimatedTime }) => {
  return (
    <div className='delivery-details'>
      <div className='address-container'>
        <div className='icon-container location'>
          <FaLocationDot />
        </div>
        <p>{address}</p>
      </div>

      <div className='time-container'>
        <div className='icon-container time'>
          <CiClock2 />
        </div>
        <p>Delivery in {estimatedTime} mins</p>
      </div>
    </div>
  );
};

export default DeliveryDetails;
