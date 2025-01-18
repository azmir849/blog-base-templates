import Link from "next/link";
import React from "react";
import { allcategoryUrl } from "@/utils/api/api";

const NavMenu = ({categories}) => {
 
  return (
    <>
      <ul>
          <li className="has-dropdown">
            <Link href='/'>Home</Link>
          </li>
          {categories && categories.length>0 && categories.map((cat,i)=>{
            if(cat?.category_position ==='header'){
              return(
              <li className="has-dropdown" key={i}>
                <Link
                 href={`/category-header/${cat.category_slug}/${cat.id}`}>{cat?.category_name}</Link>
              </li>
            )
            }
          })}
        
       
      </ul>
    </>
  );
};

export default NavMenu;

// get all posts and categories
export async function getStaticProps() {
  const catRes = await fetch(allcategoryUrl);
  const categories = await catRes.json()

  return {
      props: {
          categories,
      },
      revalidate: 10,
  };
}
