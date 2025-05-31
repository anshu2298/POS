import "./FoodItem.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const FoodItem = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className='food-item'>
      <img
        src={image}
        alt={name}
        className='food-image'
      />
      <div className='food-details'>
        <div className='food-text'>
          <h3 className='food-name'>{name}</h3>
          <p className='food-price'>₹ {price}</p>
        </div>
        <div className='food-actions'>
          <button
            className='button'
            onClick={() => onAddToCart(id)}
            aria-label={`Add ${name} to cart`}
          >
            <FaEdit size={20} />
          </button>
          <button className='button'>
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
