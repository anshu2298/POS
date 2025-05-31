import { IoMdSearch } from "react-icons/io";
import "./Menu.css";
import FoodItem from "../../FoodItems/FoodItem.jsx";
import { getAllMenuItems } from "../../../../data.js";
const Menu = () => {
  const items = getAllMenuItems();
  const onAddToCart = () => {};
  return (
    <>
      <div className='card filter-box'>
        <input
          className='filter-input'
          type='text'
          placeholder='Search items...'
        />
        <IoMdSearch
          size={50}
          className='filter-icon'
        />
      </div>
      <div className='menu'>
        <div className='food-grid'>
          {items.map((item) => (
            <FoodItem
              key={item.id}
              {...item}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
