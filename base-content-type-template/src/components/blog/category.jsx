import Link from "next/link";
import React from "react";

const Category = ({categories}) => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-10">Tags</h3>
        <div className="sidebar__widget-content">
          <ul>
            {categories && categories.length>0 &&  categories.map((cat, i) =>{
              if(cat?.category_position ==='tag'){
                return(
                  <li key={i}>
                    <Link href={`/category/${cat.category_slug}/${cat.id}`}>
                      {cat?.category_name} <span>({cat?.count_posts})</span>
                    </Link>
                  </li>
                 )
               }
              }
             )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
