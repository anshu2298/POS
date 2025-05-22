import { useState } from "react";
import "./CartItem.css";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { id, name, price, image, size } = item;
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(id, newQuantity);
    }
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle
                cx='12'
                cy='12'
                r='10'
              ></circle>
              <line
                x1='15'
                y1='9'
                x2='9'
                y2='15'
              ></line>
              <line
                x1='9'
                y1='9'
                x2='15'
                y2='15'
              ></line>
            </svg>
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
            <span className='quantity'>{quantity}</span>
            <button
              className='quantity-button'
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>

        <div className='cart-item-note'>
          <input
            type='text'
            placeholder='Add cooking instructions (optional)'
            value={note}
            onChange={handleNoteChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
