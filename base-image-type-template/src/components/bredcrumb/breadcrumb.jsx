import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, subtitle, isDbbl = "" }) => {
  function formatText(input) {
    const words = input.replace(/-/g, ' ').split(' ');
      const formattedText = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  
    return formattedText;
  }
  
  return (
    <section
      className="breadcrumb__area include-bg"
      // style={{
      //   backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)`,
      // }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
            {title !=='null' && <h3 className="breadcrumb__title mb-10">Posts of {formatText(title)}</h3>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
