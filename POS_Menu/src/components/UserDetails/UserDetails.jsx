import "./UserDetails.css";
import { IoIosSave } from "react-icons/io";
import { useState } from "react";

const UserDetails = ({ orderOption, onFormSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      phoneNumber,
      address: orderOption === "take-away" ? address : "",
      tableNumber:
        orderOption === "dine-in" ? tableNumber : null,
    };
    onFormSubmit(formData);
    setIsSubmitted(true);
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
              disabled={isSubmitted}
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
              disabled={isSubmitted}
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
                disabled={isSubmitted}
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
                disabled={isSubmitted}
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
            disabled={isSubmitted}
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
