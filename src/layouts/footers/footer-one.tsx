"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { footerOneAnimation } from "@/utils/footer-anim";
import { FaYoutube, FaInstagram, FaVimeo, FaLinkedin } from "react-icons/fa";

const footer_links = [
  { link: "/blog", title: "Blog" },
  { link: "/contact", title: "Contact" },
  { link: "/privacy-policy", title: "Privacy Policy" },
  { link: "/terms-and-conditions", title: "Terms & Conditions" },
];

export default function FooterOne() {
  const [isActive, setIsActive] = React.useState(false);

  useEffect(() => {
    footerOneAnimation();
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <footer>
        <div className="tp-footer-area black-bg pt-90 pb-60">
          <div className="container" style={{ maxWidth: "1320px" }}>
            <div className="row justify-content-between">
              {/* Left Column */}
              <div className="col-md-4">
                <ul className="list-unstyled">
                  {footer_links.map((item, i) => (
                    <li
                      key={i}
                      onMouseEnter={() => setIsActive(true)}
                      onMouseLeave={() => setIsActive(false)}
                      className={`mb-3 ${isActive ? "" : "active"}`}
                    >
                      <a
                        href={item.link}
                        className="text-white text-decoration-none"
                        style={{ fontSize: "18px", fontWeight: 500 }}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="col-md-7">
                <h4 className="tp-footer-big-title text-white mb-4">Talk To Us!</h4>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h5 className="text-white mb-2">Say hello at:</h5>
                    <p className="mb-1">
                      <a
                        href="mailto:info@funkaar.co"
                        className="text-white text-decoration-none"
                      >
                        E: info@funkaar.co
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+17717774887"
                        className="text-white text-decoration-none"
                      >
                        P: +1 771-777-4887
                      </a>
                    </p>
                  </div>

                  {/* Vertical Social Icons */}
                  <div className="col-md-6 mb-4">
                    <h5 className="text-white mb-2">Stalk us</h5>
                    <div className="flex flex-col gap-6 text-white text-3xl">
                      <a
                        href="https://www.youtube.com/@funkaar_co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-600 transition-colors duration-200"
                      >
                        <FaYoutube size={44} />
                      </a>
                      <a
                        href="https://www.instagram.com/funkaar_co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors duration-200"
                      >
                        <FaInstagram size={36} />
                      </a>
                      <a
                        href="https://vimeo.com/funkaar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors duration-200"
                      >
                        <FaVimeo size={36} />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/funkaarco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        <FaLinkedin size={36} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Logo */}
            <div className="row pt-4 mt-4 border-top border-secondary">
              <div className="col-md-12 text-start">
                <Link href="/">
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "36px",
                      fontWeight: "bold",
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: "-1px",
                    }}
                  >
                    Funkaar
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
