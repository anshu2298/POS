import FoodItem from "../FoodItem/FoodItem";
import "./FoodSection.css";
const FoodSection = ({ title, items, onAddToCart }) => {
  return (
    <section className='food-section'>
      <h2 className='section-title'>{title}</h2>
      <div className='food-grid'>
        {items.map((item) => (
          <FoodItem
            key={item.id}
            {...item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default FoodSection;
