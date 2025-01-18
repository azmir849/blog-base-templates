import Link from "next/link";
import React from "react";
import MobileMenus from "./mobile-menus";
import Subscribe from "@/src/components/blog/subscribe";

const Sidebar = ({ isActive, setIsActive, categories }) => {
  return (
    <>
      <div className={`tp-sidebar-menu ${isActive ? "sidebar-opened" : ""}`}>
        <button className="sidebar-close" onClick={() => setIsActive(false)}>
          <i className="icon_close"></i>
        </button>
        <div className="side-logo mb-30">
          <Link href="/">
            <img src="/assets/img/logo/logo-black.png" alt="logo" />
          </Link>
        </div>
        <div className="mobile-menu mean-container">
          <MobileMenus categories={categories} />
        </div>
        <div className="sidebar-info">
          <Subscribe />
        </div>
      </div>
      <div
        className={`body-overlay ${isActive ? "opened" : ""} `}
        onClick={() => setIsActive(false)}
      ></div>
    </>
  );
};
export default Sidebar;
