import React from "react";
import parser from 'html-react-parser'


const ChooseArea = ({style_about, style_2, pageTitle, settingData}) => {
  return (
    <>
      <section
        className={`choose-area bg-bottom ${style_about ? "pb-120" : "grey-bg"} ${style_2 ? "pt-120 pb-90" : ""} wow fadeInUp`}
        data-wow-duration=".8s"
        data-wow-delay=".4s"
        style={{ backgroundImage: style_about ? null : `url(/assets/img/bg/shape-bg-1.png)`  }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25">
                  <span className="tp-sub-title-box mb-15">{pageTitle}</span>
                  {pageTitle ==='About' && <>{parser(settingData?.settings?.about_desc)}</>}
                  {pageTitle ==='Privacy Policy' && <>{parser(settingData?.settings?.privacy_desc)}</>}
                  {pageTitle ==='Terms of Use' && <>{parser(settingData?.settings?.terms_desc)}</>}
                  {/* <p>{des}</p> */}
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;
