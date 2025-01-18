import { baseUrl } from "@/utils/api/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedPostArea = ({ relatedPosts }) => {
  return (
    <>
      <section className="course-area">
        <div className="container mt-20">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="postbox__comment-form-title mb-20">
                  Related Posts
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {relatedPosts.slice(1, 3).map((post, i) => {
              const getDate = new Date(post.created_at);
              const options = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              const postDate = getDate.toLocaleDateString("en-US", options);
              return (
                <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                  <div
                    className="tpcourse mb-40 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".3s"
                  >
                    <div className="tpcourse__thumb p-relative w-img fix">
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
                    <div className="tpcourse__content-2">
                      <div className="tpcourse__category mb-10">
                        <ul className="tpcourse__price-list d-flex align-items-center">
                          <li>
                            <Link
                              className="c-color-yellow"
                              href={`/category/${post.categorys.category_slug}/${post.categorys.id}`}
                            >
                              {post?.categorys?.category_name}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="tpcourse__ava-title mb-15">
                        <h4 className="tpcourse__title tp-cours-title-color">
                          <Link href={`/post/${post?.slug}/${post.id}`}>
                            {post?.title}
                          </Link>
                        </h4>
                      </div>
                      <div className="tpcourse__meta-gap pb-15 mb-15">
                        <ul className="d-flex align-items-center">
                          <li>
                            <span>{postDate}</span>
                          </li>
                          <li>
                            <span>{post?.read_time} mins to read</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedPostArea;
