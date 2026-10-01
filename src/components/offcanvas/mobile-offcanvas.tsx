import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube, Vimeo, Linkdin } from "../svg";

// images
import logo from "@/assets/img/logo/logo-white.png";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({ openOffcanvas, setOpenOffcanvas }: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="#" aria-label="Go to homepage">
                <Image src={logo} alt="logo-white" style={{ width: "150px", height: "auto" }} />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
                aria-label="Close menu"
              >
                <CloseTwo />
              </button>
            </div>
          </div>

          <div className="tp-offcanvas-main">
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>

            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>
              <ul>
                <li>
                  <a href="tel:+1 771-777-4887" aria-label="Call us">+1 771-777-4887</a>
                </li>
                <li>
                  <a href="mailto:info@funkaar.co" aria-label="Email us">info@funkaar.co</a>
                </li>
              </ul>
            </div>

            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/funkaar_co" aria-label="Instagram">
                    <InstagramTwo />
                  </a>
                </li>
                <li>
                  <a href="https://vimeo.com/funkaar" aria-label="Vimeo">
                    <Vimeo />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/funkaarco" aria-label="LinkedIn">
                    <Linkdin />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@funkaar_co" aria-label="YouTube">
                    <Youtube />
                  </a>
                </li>
              </ul>
            </div>

            <div className="tp-offcanvas-bottom mt-40">
              <a
                href="/contact"
                className="tp-btn tp-btn-white w-100 text-center"
                style={{
                  padding: "12px 24px",
                  borderRadius: "6px",
                  display: "flex",        // Apply flexbox
                  justifyContent: "center", // Centers the content horizontally
                  alignItems: "center",   // Centers the content vertically (if needed)
                  textAlign: "center",    // Ensure text is centered
                }}
                aria-label="Go to contact page"
              >
                Contact Us
              </a>

            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
        aria-label="Close overlay"
      ></div>
    </>
  );
}
