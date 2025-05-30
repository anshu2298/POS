import "./OrderItems.css";
const OrderItems = ({ items }) => {
  return (
    <div className='order-items'>
      <ul className='items-list'>
        {items.map((item, index) => (
          <li
            key={index}
            className='item'
          >
            <p className='item-name'>{item.name}</p>
            <p className='quantity'>x{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderItems;
