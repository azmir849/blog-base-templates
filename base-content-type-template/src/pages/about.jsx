import React from "react";
import SEO from "../common/seo";
import About from "../components/about";
import WrapperTwo from "../layout/wrapper";
import { allcategoryUrl, allpostsUrl, settingUrl } from "@/utils/api/api";
import { useRouter } from "next/router";
import { commonMetaData } from "../common/commonMetaData";

const index = ({ categories,settingData}) => {
   const router = useRouter();
    const url = router.asPath;
    const meta = commonMetaData;
  return (
    <WrapperTwo categories={categories.categorys} settingData={settingData}>
       <SEO
        title={meta?.title}
        description={meta?.description}
        image={meta?.image}
        url={url}
      />
      <About pageTitle={"About"} settingData={settingData} />
    </WrapperTwo>
  );
};

export default index;

// get all posts and categories
export async function getStaticProps() {
  const res = await fetch(allpostsUrl);
  const posts = await res.json();

  const catRes = await fetch(allcategoryUrl);
  const categories = await catRes.json()

  const settingRes = await fetch(settingUrl);
  const settingData = await settingRes.json()

  return {
      props: {
          posts,categories,settingData
      },
      revalidate: 10,
  };
}