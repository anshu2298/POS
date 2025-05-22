import { useState } from "react";
import "./OrderOptions.css";

const OrderOptions = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] =
    useState("dine-in");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onOptionChange(option);
  };

  return (
    <div className='order-options'>
      <button
        className={`option-button ${
          selectedOption === "dine-in" ? "active" : ""
        }`}
        onClick={() => handleOptionChange("dine-in")}
      >
        Dine In
      </button>
      <button
        className={`option-button ${
          selectedOption === "take-away" ? "active" : ""
        }`}
        onClick={() => handleOptionChange("take-away")}
      >
        Take Away
      </button>
    </div>
  );
};

export default OrderOptions;
