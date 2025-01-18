
import React from "react";
import PostboxBlogDetails from "./postbox-blog-details";

const BlogDetails = ({posts,categories,post,comments, relatedPosts}) => {
  return (
      <PostboxBlogDetails  posts={posts} categories={categories} post={post} comments={comments} relatedPosts={relatedPosts} />
  );
};

export default BlogDetails;
