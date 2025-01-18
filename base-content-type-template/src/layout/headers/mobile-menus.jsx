import Link from "next/link";
import React from "react";

const MobileMenus = ({categories}) => {
  return (
    <>
      <nav className="mean-nav">
        <ul>
          {categories.map((cat, i) => (
            <React.Fragment key={i}>
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
