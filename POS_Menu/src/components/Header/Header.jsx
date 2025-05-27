import { Search } from "lucide-react";
import "./Header.css";
import { GoHomeFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning.";
  if (hour < 18) return "Good Afternoon.";
  return "Good Evening.";
};

const Header = ({ searchItem, setSearchItem }) => {
  const greeting = getGreeting();
  const location = useLocation();
  const navigate = useNavigate();

  const isCheckoutPage = location.pathname === "/checkout";

  const handleIconClick = () => {
    navigate(isCheckoutPage ? "/" : "/checkout");
  };

  return (
    <header className='header'>
      <div className='greeting-container'>
        <div>
          <h1 className='greeting'>{greeting}</h1>
          <p className='subtitle'>Place your order here</p>
        </div>
        {isCheckoutPage ? (
          <GoHomeFill
            size={30}
            onClick={handleIconClick}
            className='nav-icon'
          />
        ) : (
          <FaShoppingCart
            size={30}
            onClick={handleIconClick}
            className='nav-icon'
          />
        )}
      </div>
      <div className='search-container'>
        <Search
          size={20}
          className='search-icon'
        />
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
