import "./UserDetails.css";
import { IoIosSave } from "react-icons/io";
import { useState } from "react";

const UserDetails = ({ orderOption, onFormSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      phoneNumber,
      address: orderOption === "take-away" ? address : "",
      tableNumber:
        orderOption === "dine-in" ? tableNumber : "",
    };
    console.log("User Details (local log):", formData);
    onFormSubmit(formData);
  };

  return (
    <div className='user-details'>
      <h3>Your details</h3>
      <form
        className='user-details-form'
        onSubmit={handleSubmit}
      >
        <div className='form-group'>
          <div className='input'>
            <input
              name='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='phone-input'>
            <p>+91</p>
            <input
              id='phoneNumber'
              name='phoneNumber'
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(e.target.value)
              }
              required
              maxLength='10'
            />
          </div>
          {orderOption === "take-away" ? (
            <div className='input'>
              <input
                name='address'
                placeholder='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          ) : (
            <div className='input'>
              <input
                name='tableNumber'
                placeholder='Table Number'
                value={tableNumber}
                type='number'
                onChange={(e) =>
                  setTableNumber(e.target.value)
                }
                required
              />
            </div>
          )}
        </div>
        <div className='button-row'>
          <button
            type='submit'
            className='submit-button'
          >
            <IoIosSave />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
