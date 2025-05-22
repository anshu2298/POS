import { Search } from "lucide-react";
import "./Header.css";
const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const Header = ({ searchItem, setSearchItem }) => {
  const greeting = getGreeting();

  return (
    <header className='header'>
      <h1 className='greeting'>{greeting}</h1>
      <p className='subtitle'>Place your order here</p>
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
