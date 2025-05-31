import { IoMdSearch } from "react-icons/io";
import "./Menu.css";
import FoodItem from "../../FoodItems/FoodItem.jsx";
import { searchMenuItems } from "../../../../data.js";
import { useState } from "react";
const Menu = () => {
  const [searchItem, setSearchItem] = useState("");
  const items = searchMenuItems(searchItem);
  return (
    <>
      <div className='card filter-box'>
        <input
          className='filter-input'
          type='text'
          placeholder='Search items...'
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
