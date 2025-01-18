import { allcategoryUrl, allpostsUrl } from "@/utils/api/api";
import SEO from "../common/seo";
import Blog from "../components/blog";
import Home from "../components/homes/home";
import Wrapper2 from "../layout/wrapper-2";
import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/router";
import { commonMetaData } from "../common/commonMetaData";

const index = ({ posts, categories }) => {
  const router = useRouter();
  const url = router.asPath;
  const meta = commonMetaData;

  return (
    <Wrapper2 categories={categories.categorys}>
      <SEO
        title={meta?.title}
        description={meta?.description}
        image={meta?.image}
        url={url}
      />
      <Blog
        title="null"
        posts={posts.posts}
        catPosts={posts.posts}
        categories={categories.categorys}
      />

      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </Wrapper2>
  );
};

export default index;

// get all posts and categories
export async function getStaticProps() {
  const res = await fetch(allpostsUrl);
  const posts = await res.json();

  const catRes = await fetch(allcategoryUrl);
  const categories = await catRes.json();

  return {
    props: {
      posts,
      categories,
    },
    revalidate: 10,
  };
}
