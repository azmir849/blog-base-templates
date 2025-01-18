import React from "react";

const features = ({post}) => {
  return (
    <>
      <section
        className={`choose-area bg-bottom  wow fadeInUp`}
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25 mt-25">
                  <span className="tp-sub-title-box mb-15">Key Features</span>
                </div>
                <div className="tp-choose-list tp-choose-bg mb-60">
                  <ul>
                      {post?.key_f_1 !=='null' && <li>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                            {post?.key_f_1}
                        </div>
                      </li>}
                      {post?.key_f_2 !=='null' && <li>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                            {post?.key_f_2}
                        </div>
                      </li>}
                      {post?.key_f_3 !=='null' && <li>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                            {post?.key_f_3}
                        </div>
                      </li>}
                      {post?.key_f_4 !=='null' && <li>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                            {post?.key_f_4}
                        </div>
                      </li>}
                      {post?.key_f_5 !=='null' && <li>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                            {post?.key_f_5}
                        </div>
                      </li>}
                      {post?.key_f_6 !=='null' && <li>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                            {post?.key_f_6}
                        </div>
                      </li>}
                      {post?.key_f_7 !=='null' && <li>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                            {post?.key_f_7}
                        </div>
                      </li>}
                      {post?.key_f_8 !=='null' && <li>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                            {post?.key_f_8}
                        </div>
                      </li>}
                      
                  
                  </ul>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default features;
