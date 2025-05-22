import React from "react";
import "./DeliveryDetails.css";

const DeliveryDetails = ({ address, estimatedTime }) => {
  return (
    <div className='delivery-details'>
      <div className='address-container'>
        <div className='icon-container location'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
            <circle
              cx='12'
              cy='10'
              r='3'
            ></circle>
          </svg>
        </div>
        <p>{address}</p>
      </div>

      <div className='time-container'>
        <div className='icon-container time'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
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
            <polyline points='12 6 12 12 16 14'></polyline>
          </svg>
        </div>
        <p>Delivery in {estimatedTime} mins</p>
      </div>
    </div>
  );
};

export default DeliveryDetails;
