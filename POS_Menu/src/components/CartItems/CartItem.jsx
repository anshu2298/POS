import "./CartItem.css";
import { IoCloseCircle } from "react-icons/io5";
const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { id, name, price, image, size } = item;

  const handleIncrement = () => {
    onQuantityChange(id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(id, item.quantity - 1);
    }
  };

  return (
    <div className='cart-item'>
      <div className='cart-item-image-container'>
        <img
          src={image}
          alt={name}
          className='cart-item-image'
        />
      </div>
      <div className='cart-item-details'>
        <div className='cart-item-header'>
          <div>
            <h3 className='cart-item-name'>{name}</h3>
            <p className='cart-item-price'>
              ₹ {price.toFixed(2)}
            </p>
          </div>
          <button
            className='remove-button'
            onClick={() => onRemove(id)}
          >
            <IoCloseCircle size={30} />
          </button>
        </div>

        <div className='cart-item-size'>{size}</div>

        <div className='cart-item-actions'>
          <div className='quantity-control'>
            <button
              className='quantity-button'
              onClick={handleDecrement}
            >
              −
            </button>
            <span className='quantity'>
              {item.quantity}
            </span>
            <button
              className='quantity-button'
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
