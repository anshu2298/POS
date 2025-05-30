import "./OrderSummary.css";

const OrderSummary = ({
  subtotal,
  deliveryCharge,
  taxes,
  orderOption,
}) => {
  const grandTotal = subtotal + deliveryCharge + taxes;

  return (
    <div className='order-summary'>
      <div className='summary-row'>
        <span className='summary-label'>Item Total</span>
        <span className='summary-value'>
          ₹{subtotal.toFixed(2)}
        </span>
      </div>
      {orderOption === "take-away" && (
        <div className='summary-row'>
          <span className='summary-label'>
            Delivery Charge
          </span>
          <span className='summary-value'>
            ₹{deliveryCharge.toFixed(2)}
          </span>
        </div>
      )}

      <div className='summary-row'>
        <span className='summary-label'>Taxes</span>
        <span className='summary-value'>
          ₹{taxes.toFixed(2)}
        </span>
      </div>

      <div className='summary-row grand-total'>
        <span className='summary-label'>Grand Total</span>
        <span className='summary-value'>
          ₹{grandTotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
