import Link from "next/link";
import { useState } from "react";
import Category from "./category";
import RecentPost from "./recent-post";
import Tags from "./tags";
import Subscribe from "./subscribe";
import { baseUrl } from "@/utils/api/api";
import { Box, Pagination } from "@mui/material";
import Image from "next/image";
import parser from "html-react-parser";


const ITEMS_PER_PAGE = Number(process.env.NEXT_PUBLIC_ITEM_PER_PAGE) ;
const descriptionLimit = Number(process.env.NEXT_PUBLIC_DESCRIPTION_LIMIT) ;

const Postbox = ({ posts, catPosts, categories }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPosts = catPosts.length;
  const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visiblePosts = catPosts.slice(startIndex, endIndex);

  return (
    <>
      <div
        className="postbox__area pb-20 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox__wrapper">
                {visiblePosts &&
                  visiblePosts.map((post, i) => {
                    const getDate = new Date(post.created_at);
                    const options = {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    };
                    const postDate = getDate.toLocaleDateString(
                      "en-US",
                      options
                    );

                    const croppedDes = post?.description.substring(0,descriptionLimit)
                    const description = `${croppedDes} <span className='read-more'> ... Read More</span>`

                    return (
                      <div className="row blogcard__wrapper" key={post.id}>
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 blog-image">
                          <Link href={`/post/${post?.slug}/${post.id}`}>
                            {/* <img
                              src={`${baseUrl}/storage/${post?.image}`}
                              alt={post?.title}
                            /> */}
                            <Image
                              src={`${baseUrl}/storage/${post?.image}`}
                              alt={post?.title}
                              priority
                              quality={100} 
                              width={100}
                              height={100}
                            />
                          </Link>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12">
                          <article
                            key={i}
                            className="postbox__item format-image transition-3"
                          >
                            <div className="postbox__content">
                              <Link
                                href={`/category/${post.categorys.category_slug}/${post.categorys.id}`}
                              >
                                <div className="blog-cat-name">
                                  {post?.categorys?.category_name && (
                                    <span>
                                      {post?.categorys?.category_name}
                                    </span>
                                  )}
                                </div>
                              </Link>
                              <h3 className="postbox__title">
                                <Link href={`/post/${post?.slug}/${post.id}`}>
                                  {post?.title}
                                </Link>
                              </h3>
                              <div className="postbox__text postbox__description mb-1">
                                <Link href={`/post/${post?.slug}/${post.id}`}>
                                  {description && <>{parser(description)}</>}
                                </Link>
                              </div>
                              <div className="postbox__meta">
                                <span>
                                  {post?.read_time && (
                                    <>
                                      <i className="fi fi-rr-info"></i>{" "}
                                      {post?.read_time} mins to read
                                    </>
                                  )}
                                </span>
                                <span>
                                  <i className="fi fi-rr-calendar"></i>{" "}
                                  {postDate}
                                </span>
                              </div>
                              {/* <div className="postbox__read-more">
                              <Link href="/blog-details" className="tp-btn">
                                read more
                              </Link>
                            </div> */}
                            </div>
                          </article>
                        </div>
                      </div>
                    );
                  })}

                {visiblePosts && visiblePosts.length === 0 && (
                  <h5 className="disabled" disabled>
                    No posts found...
                  </h5>
                )}

                {/* pagination */}
                {/* <div className="row">
                <div className="col-lg-12">
                  <div className="blog-btn text-center">
                    <div className="load-btn">
                      LOAD MORE
                    </div>
                  </div>
                </div>
              </div> */}
                {catPosts && catPosts.length > ITEMS_PER_PAGE && (
                  <div className="row">
                    <div className="col-lg-12">
                      <Box
                        sx={{ mt: 5 }}
                        display="flex"
                        justifyContent="center"
                        justifyItems="center"
                      >
                        <Pagination
                          page={currentPage}
                          count={totalPages}
                          onChange={handlePageChange}
                          variant="outlined"
                          shape="rounded"
                          color="primary"
                          size="large"
                        />
                      </Box>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper">
                {/* <BlogSearch /> */}
                <Category categories={categories} />
                <Tags categories={categories} />
                {/* <RecentPost /> */}

                {/* <Tags /> */}
              </div>

              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="sidebar__wrapper">
                  <RecentPost posts={posts} />
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="sidebar__wrapper">
                  <Subscribe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postbox;
