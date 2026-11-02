"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// project images
import p_1 from "@/assets/img/inner-about/about/about-8.jpeg";
import p_2 from "@/assets/img/inner-about/about/about-3.jpg";
import p_3 from "@/assets/img/inner-about/about/port-3.jpg";
import p_4 from "@/assets/img/inner-about/about/shape-1.jpeg";
import p_5 from "@/assets/img/inner-about/about/about-7.jpg";
import p_6 from "@/assets/img/inner-about/about/about-6.jpeg";
import p_7 from "@/assets/img/inner-about/about/about-9.jpeg";
import p_8 from "@/assets/img/inner-about/about/about-10.jpg";
import p_9 from "@/assets/img/inner-about/about/about-11.jpg";
import SoundButton from "@/components/common/sound-button";

// type
type IProject = {
  id: number;
  cls: string;
  cls_2: string;
  img: StaticImageData;
};

function ProjectItem({ item }: { item: IProject }) {
  return (
    <div className={`tp-project-item ${item.cls} mb-100`}>
      <div
        className={`tp-project-img ${item.cls_2} fix not-hide-cursor`}
        data-cursor="View<br>Demo"
      >
        <Link className="cursor-hide" href="/portfolio-details-3">
          <Image
            data-speed=".8"
            src={item.img}
            alt="project-img"
            style={{
              width: "150%",
              height: "400px",          // adjust size as needed
              objectFit: "cover",
              borderRadius: "12px",     // optional rounded edges
            }}
          />
        </Link>
      </div>
    </div>
  );
}


const project_data: IProject[] = [
  { id: 1, cls: "tp-project-mr", cls_2: "height-1", img: p_1 },
  { id: 2, cls: "text-end", cls_2: "height-2 d-inline-flex justify-content-end", img: p_2 },
  { id: 3, cls: "tp-project-mr", cls_2: "height-3", img: p_3 },
  { id: 4, cls: "", cls_2: "height-4", img: p_4 },
  { id: 5, cls: "tp-project-ml", cls_2: "height-5", img: p_5 },
  { id: 6, cls: "", cls_2: "height-6", img: p_6 },
  { id: 7,  cls: "w-100", cls_2: "height-7 d-inline-flex justify-content-end", img: p_7 },
  // { id: 8, cls: "", cls_2: "height-8", img: p_8 },
  { id: 9, cls: "", cls_2: "height-9", img: p_9 },
];

// ⬆️ ProjectItem already updated above

// prop type
type IProps = {
  style_2?: boolean;
};

const ProjectOne = ({ style_2 = false }: IProps) => {
  return (
    <>
      <div className="">
        <div className="row">
          {/* Column 1 */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="tp-project-left-wrap">
              {[0, 3, 6].map((i) => (
                <ProjectItem key={project_data[i].id} item={project_data[i]} />
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="tp-project-center-wrap">
              {[1, 4, 7].map((i) => (
                <ProjectItem key={project_data[i].id} item={project_data[i]} />
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="tp-project-right-wrap">
              {[2, 5].map((i) => (
                <ProjectItem key={project_data[i].id} item={project_data[i]} />
              ))}
            </div>
          </div>

          <div className="col-xl-12 col-lg-12">
            <div className="tp-hero-bottom-img" style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
              <video
                loop
                muted
                autoPlay
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              >
                <source src="/assets/img/videos/Rohma.mp4" type="video/mp4" />
              </video>
              <SoundButton />
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default ProjectOne;
