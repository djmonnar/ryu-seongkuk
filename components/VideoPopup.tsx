"use client";

import { useEffect, useState } from "react";
import { featuredVideo } from "@/src/data/candidate";

function todayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!featuredVideo.enabled || !featuredVideo.youtubeId) return;
    const hiddenDate = window.localStorage.getItem(featuredVideo.storageKey);
    if (hiddenDate !== todayKey()) setIsOpen(true);
  }, []);

  function close() {
    setIsOpen(false);
  }

  function hideToday() {
    window.localStorage.setItem(featuredVideo.storageKey, todayKey());
    setIsOpen(false);
  }

  if (!featuredVideo.enabled || !featuredVideo.youtubeId || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/72 px-3 py-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={featuredVideo.title}>
      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-[0_30px_120px_rgba(0,20,60,0.42)]">
        <div className="bg-dem-deep px-4 py-3 text-white sm:px-6 sm:py-4">
          <p className="text-[11px] font-black uppercase text-dem-sky">{featuredVideo.label}</p>
          <h2 className="mt-1 text-lg font-black leading-snug sm:text-2xl">{featuredVideo.title}</h2>
        </div>

        <div className="aspect-video bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`}
            title={featuredVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="grid grid-cols-2 gap-2 bg-white p-3 sm:p-4">
          <button type="button" onClick={hideToday} className="civic-button-outline min-h-11 justify-center px-3 text-xs sm:text-sm">
            오늘 하루 보지 않기
          </button>
          <button type="button" onClick={close} className="civic-button-primary min-h-11 justify-center px-3 text-xs sm:text-sm">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
