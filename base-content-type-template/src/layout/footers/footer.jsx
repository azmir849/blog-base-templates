import Link from "next/link";
import React from "react";

// footer bottom data
const footer_bottom = [
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms of Use", link: "/terms-of-use" },
];


const Footer = () => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;

  return (
    <>
      <footer>
        <div
          className="footer-bg theme-bg-secondary"
          // style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
        >
          <div className="f-copyright pt-60 pb-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="f-copyright__dom">
                    <span>
                      {appName} {new Date().getFullYear()}, All Rights Reserved
                    </span>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                  <div className="f-copyright__list f-bottom-list">
                    <ul className="d-flex align-items-center">
                      {footer_bottom.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
