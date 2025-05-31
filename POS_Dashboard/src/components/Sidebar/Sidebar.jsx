import { FaChair } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

import { RiDashboardFill } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <RiDashboardFill />,
    },
    {
      id: "tables",
      label: "Tables",
      icon: <FaChair />,
    },
    {
      id: "orders",
      label: "Orders",
      icon: <FaBook />,
    },
    {
      id: "menu",
      label: "Menu",
      icon: <MdRestaurantMenu />,
    },
  ];

  return (
    <aside className='sidebar'>
      <div className='sidebar-header'></div>
      <div className='sidebar-menu'>
        <nav className='sidebar-nav'>
          <ul className='menu-list'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`menu-item ${
                  activeMenu === item.id ? "active" : ""
                }`}
                onClick={() => setActiveMenu(item.id)}
              >
                <span className='menu-icon'>
                  {item.icon}
                </span>
              </li>
            ))}
          </ul>
        </nav>
        <div className='sidebar-footer'></div>
      </div>
    </aside>
  );
};

export default Sidebar;
