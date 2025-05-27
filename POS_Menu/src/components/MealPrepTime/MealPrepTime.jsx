import { CiClock2 } from "react-icons/ci";

const MealPrepTime = ({ estimatedTime }) => {
  return (
    <div className='delivery-details'>
      <div className='time-container'>
        <div className='icon-container time'>
          <CiClock2 />
        </div>
        <p>Delivery in {estimatedTime} mins</p>
      </div>
    </div>
  );
};

export default MealPrepTime;
