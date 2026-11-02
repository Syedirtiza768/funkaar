"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * Small speaker button. Place it inside the same positioned (position: relative)
 * container as a <video>. Clicking it unmutes that video (and mutes any other
 * video on the page); clicking again mutes it.
 */
const EVENT = "funkaar-video-sound";

const SoundButton = ({ bottom = 14, right = 14 }: { bottom?: number; right?: number }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [on, setOn] = useState(false);

  const getVideo = () =>
    ref.current?.parentElement?.querySelector("video") as HTMLVideoElement | null;

  useEffect(() => {
    const handler = (e: Event) => {
      const active = (e as CustomEvent).detail as HTMLVideoElement | null;
      if (active !== getVideo()) setOn(false);
    };
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = getVideo();
    if (!video) return;
    const next = !on;
    if (next) {
      document.querySelectorAll("video").forEach((v) => {
        if (v !== video) v.muted = true;
      });
    }
    video.muted = !next;
    if (next && video.paused) video.play().catch(() => {});
    setOn(next);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: next ? video : null }));
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={toggle}
      aria-label={on ? "Mute video" : "Unmute video"}
      style={{
        position: "absolute",
        right,
        bottom,
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
        padding: 0,
      }}
    >
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
    </button>
  );
};

export default SoundButton;
