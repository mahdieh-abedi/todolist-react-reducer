import "./Menu.css";

import { Outlet } from "react-router-dom";

import { ToggleMode, MenuTabs } from "..";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <MenuTabs />
        <ToggleMode />
      </div>
      <Outlet />
    </>
  );
};
export default Menu;
