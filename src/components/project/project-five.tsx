import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";

// images
import p_img_2 from "@/assets/img/inner-project/masonary/masonary-1.jpg";

// video-enabled project data
const project_data: Project[] = [
  {
    id: 1,
    title: "Bhegum Innayat Welfare Society",
    category: "Branding",
    img: "p_img_2",
    video: "/assets/img/videos/Bhegum Inayat Welfare Society.mp4",
    year: 2024,
  },
  {
    id: 2,
    title: "Nilofer Shahid",
    category: "Branding",
    video: "/assets/img/videos/Nilofer Shahid.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 3,
    title: "Oppo",
    category: "Branding",
    video: "/assets/img/videos/Oppo-DVC.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 4,
    title: "Oppo",
    category: "Branding",
    video: "/assets/img/videos/Oppo-F17 PRO.mp4", 
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 5,
    title: "Abacus consulting",
    category: "Branding",
    video: "/assets/img/videos/abacus.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 6,
    title: "Yamaha",
    category: "Branding",
    video: "/assets/img/videos/yamaha.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 7,
    title: "Swyft",
    category: "Branding",
    video: "/assets/img/videos/Swyft.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 8,
    title: "SOS Children's Villages",
    category: "Branding",
    video: "/assets/img/videos/SOS.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 9,
    title: "SOS Children's Villages",
    category: "Branding",
    youtube: "dpCtjhYa8z8",
    year: 2024,
  },
  {
    id: 10,
    title: "Seed Out",
    category: "Branding",
    video: "/assets/img/videos/seed_out.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 11,
    title: "Seed Out",
    category: "Branding",
    youtube: "hvlLXwVG8Kg",
    start: 25,
    year: 2024,
  },
  {
    id: 12,
    title: "Oppo",
    category: "Branding",
    video: "/assets/img/videos/Oppo - Corporate.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 13,
    title: "Monsanto",
    category: "Branding",
    video: "/assets/img/videos/monsanto.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 14,
    title: "Karandaaz",
    category: "Branding",
    video: "/assets/img/videos/karandaaz.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 15,
    title: "Human Capital Index Pakistan",
    category: "Branding",
    video: "/assets/img/videos/human.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 16,
    title: "ADB (Asian Development Bank)",
    category: "Branding",
    video: "/assets/img/videos/adb.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 17,
    title: "GreenBrilliance",
    category: "Branding",
    video: "/assets/img/home-01/hero/port-3_cygauz.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 18,
    title: "Lums",
    category: "Branding",
    video: "/assets/img/videos/lums.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 19,
    title: "Riphah University",
    category: "Branding",
    youtube: "KbI_sSjTRU4",
    year: 2024,
  },
  {
    id: 20,
    title: "Select & Airlink",
    category: "Branding",
    video: "/assets/img/videos/Select.mp4",
    img: "p_img_2",
    year: 2024,
  },
];

// type IProps = {
//   style_2?: boolean;
// };


const ITEMS_PER_PAGE = 6;

type Project = {
  id: number;
  title: string;
  category: string;
  video?: string;
  youtube?: string;
  start?: number;
  img?: string;
  year: number;
};

type IProps = {
  style_2?: boolean;
};

const SpeakerIcon = ({ on }: { on: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
    {on ? (
      <>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </>
    ) : (
      <>
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </>
    )}
  </svg>
);

function VideoCard({
  item,
  soundOn,
  onToggle,
}: {
  item: Project;
  soundOn: boolean;
  onToggle: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = !soundOn;
    if (frameRef.current && !firstRun.current) {
      frameRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: soundOn ? "unMute" : "mute",
          args: "",
        }),
        "*"
      );
    }
    firstRun.current = false;
  }, [soundOn]);

  const ytSrc = item.youtube
    ? `https://www.youtube.com/embed/${item.youtube}?autoplay=1&mute=1&loop=1&playlist=${item.youtube}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1${item.start ? `&start=${item.start}` : ""}`
    : "";

  return (
    <div className="tp-project-5-2-thumb fix mb-140 p-relative">
      <div className="tp_img_reveal" style={{ position: "relative" }}>
        {item.youtube ? (
          <iframe
            ref={frameRef}
            src={ytSrc}
            title={item.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              border: 0,
              borderRadius: "12px",
              display: "block",
            }}
          />
        ) : (
          <video
            ref={videoRef}
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        )}
        <button
          type="button"
          onClick={onToggle}
          aria-label={soundOn ? "Mute video" : "Unmute video"}
          style={{
            position: "absolute",
            right: 12,
            bottom: 12,
            zIndex: 5,
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.5)",
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <SpeakerIcon on={soundOn} />
        </button>
      </div>
      <div className="tp-project-5-2-content tp_fade_anim">
        <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
      </div>
    </div>
  );
}

export default function ProjectFive({ style_2 = false }: IProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [soundId, setSoundId] = useState<number | null>(null);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = project_data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(project_data.length / ITEMS_PER_PAGE);

  return (
    <div className="p-project-5-2-area pb-130">
      <div className="container">
        <div className="row gx-140">
          {paginatedProjects.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <VideoCard
                item={item}
                soundOn={soundId === item.id}
                onToggle={() =>
                  setSoundId((cur) => (cur === item.id ? null : item.id))
                }
              />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center gap-4">
  <button
    className="tp-btn-circle"
    disabled={currentPage === 1}
    onClick={() => {
      setSoundId(null);
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" }); // 🔹 Scroll to top
    }}
  >
    Prev
  </button>

  <span className="text-white">
    Page {currentPage} of {totalPages}
  </span>

  <button
    className="tp-btn-circle"
    disabled={currentPage === totalPages}
    onClick={() => {
      setSoundId(null);
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" }); // 🔹 Scroll to top
    }}
  >
    Next
  </button>
</div>

      </div>
    </div>
  );
}