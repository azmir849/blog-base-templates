import { allcategoryUrl, searchPostUrl } from "@/utils/api/api";
import SEO from '@/src/common/seo';
import Blog from '@/src/components/blog';
import WrapperTwo from '@/src/layout/wrapper';
import { commonMetaData } from "@/src/common/commonMetaData";
import { useRouter } from "next/router";


const index = ({ posts, categories, title}) => {
   const router = useRouter();
    const url = router.asPath;
    const meta = commonMetaData;
  return (
    <WrapperTwo categories={categories.categorys}>
      <SEO
        title={meta?.title}
        description={meta?.description}
        image={meta?.image}
        url={url}
      />
      <Blog title={title} posts={posts.posts} catPosts={posts.posts} categories={categories.categorys} />
    </WrapperTwo>
  );
};

export default index;

export async function getServerSideProps({params}) {

  const res = await fetch(`${searchPostUrl}/${params.query}`);
  const posts = await res.json();

  const catRes = await fetch(allcategoryUrl);
  const categories = await catRes.json()
  const title = params.query
  return {
    props: {
        posts,categories,title
    },
 };

}


