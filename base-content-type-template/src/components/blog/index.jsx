
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import Postbox from "./postbox";

const Blog = ({title, posts, catPosts,categories}) => {
  return (
    <>
      {title !=='null' && <Breadcrumb title={title?title:'null'} subtitle="blog" />  }
      <Postbox posts={posts} catPosts={catPosts} categories={categories} />
    </>
  );
};

export default Blog;
