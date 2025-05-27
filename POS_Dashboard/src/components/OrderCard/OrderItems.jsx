import "./OrderItems.css";

const OrderItems = ({ items }) => {
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className='order-items'>
      {Object.entries(groupedItems).map(
        ([category, categoryItems]) => (
          <div
            key={category}
            className='category-section'
          >
            <ul className='items-list'>
              {categoryItems.map((item, index) => (
                <li
                  key={index}
                  className='item'
                >
                  <p className='quantity'>1 x</p>
                  <p className='item-name'>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default OrderItems;
