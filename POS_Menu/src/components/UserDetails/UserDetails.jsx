import React from "react";
import "./UserDetails.css";

const UserDetails = ({ name, phone }) => {
  return (
    <div className='user-details'>
      <h3>Your details</h3>
      <p>
        {name}, {phone}
      </p>
    </div>
  );
};

export default UserDetails;
