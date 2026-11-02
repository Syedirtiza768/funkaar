'use client';
import React from "react";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";
import AutoLazy from "@/components/LazyVideo";
import SoundButton from "@/components/common/sound-button";


const HeroBannerOne = () => {
  useGSAP(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        fadeAnimation();
      }, 100);
    }
  }, {});

  return (
    <div
      className="tp-hero-area tp-hero-ptb main-slider"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      {/* ✅ Video Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden"
        }}
      >
        <video
          src="/assets/img/videos/Website.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />


        {/* Optional overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1
          }}
        />
      </div>

      <SoundButton bottom={24} right={24} />

      {/* ✅ Centered Text Content */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
        }}
      >
        <h1 className="tp-hero-title tp_fade_bottom text-white mb-3">
          <span>
            Crafting Stories, <br /> Fueling Growth
          </span>
        </h1>

        {/* Uncomment if needed */}
        {/* <p className="text-white tp_fade_bottom max-w-3xl">
          Funkaar is a full-service marketing agency crafting high-impact content that drives growth.
          Our powerful narratives cut through the noise, turning your brand’s story into a compelling message
          that engages and delivers results.
        </p> */}
      </div>
    </div>
  );
};

export default HeroBannerOne;
