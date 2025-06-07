import { useState } from "react";
import {
  getMenuItemsByCategory,
  getAllMenuItems,
} from "../../data";

import Header from "../components/Header/Header";
import { useCart } from "../context/CartContext";
import FoodSection from "../components/FoodSection/FoodSection";
import { CategoryTabs } from "../components/CategoryTabs/CategoryTabs";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("pizza");

  const { addToCart } = useCart();

  let foodItems = getAllMenuItems();

  if (searchItem.trim() !== "") {
    foodItems = foodItems.filter((item) =>
      item.name
        .toLowerCase()
        .includes(searchItem.toLowerCase())
    );
  } else if (activeCategory !== "all") {
    foodItems = getMenuItemsByCategory(activeCategory);
  }

  return (
    <div className='container'>
      <div className='main-content'>
        <Header
          searchItem={searchItem}
          setSearchItem={setSearchItem}
        />
        <CategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <FoodSection
          title='Popular Items'
          items={foodItems}
          onAddToCart={addToCart}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
