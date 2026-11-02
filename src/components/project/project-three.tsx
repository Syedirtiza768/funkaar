"use client";
import React from "react";
import ClickToPlayVideo from "@/components/ClickToPlayVideo";
import SoundButton from "@/components/common/sound-button";

export default function ProjectThree() {
  return (
    <div
      className="tp-project-4-area pb-120 project-panel-area"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            {/* Video 1 */}
            <div className="tp-project-4-bg project-panel">
              <div style={{ width: "90vw", position: "relative" }}>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="none"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <source src="/assets/img/videos//Oppo-F17 PRO.mp4" type="video/mp4" />
                </video>
                <SoundButton middle right={20} />
              </div>
            </div>

            {/* Video 2 */}
            <div className="tp-project-4-bg project-panel">
              <div style={{ width: "90vw", position: "relative" }}>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="none"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <source src="/assets/img/videos/Oppo-DVC.mp4" type="video/mp4" />
                </video>
                <SoundButton middle right={20} />
              </div>
            </div>

            {/* Video 3 */}
            <div className="tp-project-4-bg project-panel">
              <div style={{ width: "90vw", position: "relative" }}>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="none"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <source src="/assets/img/videos/abacus.mp4" type="video/mp4" />
                </video>
                <SoundButton middle right={20} />
              </div>
            </div>

            {/* Video 4 */}
            <div className="tp-project-4-bg project-panel">
              <div style={{ width: "90vw", position: "relative" }}>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="none"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <source src="/assets/img/videos/Nilofer Shahid.mp4" type="video/mp4" />
                </video>
                <SoundButton middle right={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
