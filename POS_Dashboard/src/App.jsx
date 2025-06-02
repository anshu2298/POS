import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/layouts/Dashboard/Dashboard";
import Orders from "./components/layouts/Orders/Orders";
import Tables from "./components/layouts/Tables/Tables";
import Menu from "./components/layouts/Menu/Menu";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  return (
    <>
      <div className='app'>
        <Toaster />
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
        <main className='main-content'>
          {activeMenu === "dashboard" && <Dashboard />}
          {activeMenu === "tables" && <Tables />}
          {activeMenu === "orders" && <Orders />}
          {activeMenu === "menu" && <Menu />}
        </main>
      </div>
    </>
  );
};

export default App;
