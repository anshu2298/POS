import { defaultCategories } from "../../../data";
import "./CategoryTabs.css";
export const CategoryTabs = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className='category-tabs'>
      {defaultCategories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            className={`tab ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            <Icon className='icon' />

            <span className='label'>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
};
