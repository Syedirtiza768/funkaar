import React from "react";
import SoundButton from "@/components/common/sound-button";

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-xl-6 col-lg-6 mx-auto text-center">
            {/* Icon */}
            <div className="d-flex justify-content-center align-items-center mb-3">
              {/* <img
                src="/assets/img/home-01/service/service-icon-2.png"
                alt="Creative Icon"
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              /> */}
            </div>

            {/* Heading + Description */}
            <div
              className="tp-service-title-box p-relative mx-auto"
              style={{ maxWidth: "700px" }}
            >
              <h4 className="tp-section-title tp_fade_bottom mb-4 text-black">
                DIGITAL MARKETING
              </h4>

              <p
                className="tp-section-subtitle tp_fade_bottom text-black"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                Data-driven strategies to maximize reach, engagement, and ROI across all platforms.
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
                <source src="/assets/img/videos/Oppo-DVC.mp4" type="video/mp4" />
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
