import "./UserDetails.css";
import { IoIosSave } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";

const UserDetails = ({ orderOption, setUserDetails }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      phoneNumber,
      address: orderOption === "take-away" ? address : "",
      occupancy:
        orderOption === "dine-in" ? occupancy : null,
    };
    setUserDetails(formData);
    toast.success("User details saved!");
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
                placeholder='Table for'
                value={occupancy}
                type='number'
                disabled={isSubmitted}
                onChange={(e) =>
                  setOccupancy(e.target.value)
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
