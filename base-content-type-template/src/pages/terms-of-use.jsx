import React from "react";
import SEO from "../common/seo";
import About from "../components/about";
import WrapperTwo from "../layout/wrapper";
import { allcategoryUrl, allpostsUrl, settingUrl } from "@/utils/api/api";
import { commonMetaData } from "../common/commonMetaData";
import { useRouter } from "next/router";

const index = ({categories,settingData}) => {
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
      <About pageTitle={"Terms of Use"} settingData={settingData} />
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