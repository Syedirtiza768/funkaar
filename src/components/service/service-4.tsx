import React from "react";
import Image from "next/image";
import Link from "next/link";
import ClickToPlayVideo from "@/components/ClickToPlayVideo";
// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";
import SoundButton from "@/components/common/sound-button";

// service data
const service_data = [
  {
    id: 1,
    title: "CAPABILITIES",
    desc: "We create with purpose, strategize with intent, and execute with impact.",
    icon: s_1,
  },
  {
    id: 2,
    title: "CREATIVE & CONTENT LAB",
    desc: "We craft compelling visuals, stories, and branding that captivate and convert.",
    icon: s_2,
  },
  {
    id: 3,
    title: "DIGITAL MARKETING",
    desc: "Data-driven strategies to maximize reach, engagement, and ROI across all platforms.",
    icon: s_3,
  },
  {
    id: 4,
    title: "STRATEGY",
    desc: "Research-backed roadmaps that drive growth, impact, and long-term success.",
    icon: s_4,
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-xl-6 col-lg-6 mx-auto text-center">
            {/* Icon */}
            {/* <div className="d-flex justify-content-center align-items-center mb-3">
              <img
                src="/assets/img/home-01/service/service-icon-4.png"
                alt="Creative Icon"
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div> */}

            {/* Title & Text */}
            <div
              className="tp-service-title-box p-relative mx-auto"
              style={{ maxWidth: "700px" }}
            >
              <h4 className="tp-section-title tp_fade_bottom mb-4 text-black">
                STRATEGY
              </h4>

              <p
                className="tp-section-subtitle tp_fade_bottom text-black"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                Research-backed roadmaps that drive growth, impact, and long-term success.
              </p>
            </div>
          </div>


          {/* Right Column */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-hero-bottom-img" style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
              <video
                loop
                muted
                autoPlay
                playsInline
                preload="none"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px' // optional for soft corners
                }}
              >
                <source src="/assets/img/home-01/hero/Select_Airlink_lzrk4n.mp4" type="video/mp4" />
              </video>
              <SoundButton />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
