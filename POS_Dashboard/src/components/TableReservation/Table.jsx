import React from "react";
import "./TableReservation.css";

const Table = ({ number, reserved, onClick }) => {
  return (
    <div
      className={`table ${
        reserved ? "reserved" : "available"
      }`}
      onClick={onClick}
    >
      <div className='table-content'>
        <span className='table-label'>Table</span>
        <span className='table-number'>{number}</span>
      </div>
    </div>
  );
};

export default Table;
