import SEO from "@/src/common/seo";
import BlogDetails from "@/src/components/blog-details";
import Wrapper2 from "@/src/layout/wrapper";
import {
  allcategoryUrl,
  allpostsUrl,
  singlePostUrl,
  tagpostsUrl,
} from "@/utils/api/api";
import { useRouter } from "next/router";
import React from "react";

const index = ({ posts, categories, postDetails, relatedPosts }) => {
  const metaDetails = postDetails?.posts;
  const router = useRouter();
  const url = router.asPath;
  return (
    <Wrapper2 categories={categories.categorys}>
      <SEO
        title={metaDetails?.title}
        description={metaDetails?.meta_des}
        image={metaDetails?.image}
        url={url}
      />
      <BlogDetails
        posts={posts.posts}
        categories={categories.categorys}
        post={postDetails.posts}
        comments={postDetails.comments}
        relatedPosts={relatedPosts.posts}
      />
    </Wrapper2>
  );
};

export default index;

// get all posts and categories
export async function getStaticProps({ params }) {
  const res = await fetch(allpostsUrl);
  const posts = await res.json();

  const catRes = await fetch(allcategoryUrl);
  const categories = await catRes.json();

  const postDetailsRes = await fetch(`${singlePostUrl}/${params.id}`);
  const postDetails = await postDetailsRes.json();

  const relatedPostsRes = await fetch(
    `${tagpostsUrl}/${postDetails.posts.categorys.id}`
  );
  const relatedPosts = await relatedPostsRes.json();
  return {
    props: {
      posts,
      categories,
      postDetails,
      relatedPosts,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch(allpostsUrl);
  const posts = await res.json();
  // console.log('posts', posts)
  const paths = [];
  posts.posts.forEach((post) => paths.push(`/post/${post.slug}/${post.id}`));

  return {
    paths,
    fallback: true,
  };
}
