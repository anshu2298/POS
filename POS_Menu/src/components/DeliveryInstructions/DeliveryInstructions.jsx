import { useState } from "react";
import "./DeliveryInstructions.css";
const DeliveryInstructions = () => {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className='cart-item-note'>
      <input
        type='text'
        placeholder='Add cooking instructions (optional)'
        value={note}
        onChange={handleNoteChange}
      />
    </div>
  );
};

export default DeliveryInstructions;
