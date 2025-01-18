import Link from "next/link";
import React, { useState } from "react";

// internal
import menu_data from "./menu-data";

const MobileMenus = ({categories}) => {
  console.log('menu_data', menu_data)
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <nav className="mean-nav">
        <ul>
          {categories.map((cat, i) => (
            <React.Fragment key={i}>
              {/* {menu.has_dropdown && (
                <li className="has-dropdown">
                  <Link href={menu.link}>{menu.title}</Link>
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, i) => (
                      <li key={i}>
                        <Link href={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${
                      navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                   
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fal fa-plus"></i>
                  </a>
                </li>
              )} */}
              {!cat?.has_dropdown && (
                <li>
                  <Link href={`/category/${cat.category_slug}/${cat.id}`}>{cat.category_name
                  }</Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
