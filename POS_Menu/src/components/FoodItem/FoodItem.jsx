import { Plus } from "lucide-react";
import "./FoodItem.css";
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
        <button
          className='add-button'
          onClick={() => onAddToCart(id)}
          aria-label={`Add ${name} to cart`}
        >
          <Plus size={30} />
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
