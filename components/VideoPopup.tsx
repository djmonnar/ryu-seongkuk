"use client";

import { useEffect, useState } from "react";

const popupStorageKey = "ryu-video-popup-hidden-date";
const videoId = "_9ftYhY6DhQ";

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
    const hiddenDate = window.localStorage.getItem(popupStorageKey);
    if (hiddenDate !== todayKey()) setIsOpen(true);
  }, []);

  function close() {
    setIsOpen(false);
  }

  function hideToday() {
    window.localStorage.setItem(popupStorageKey, todayKey());
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/72 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="류성국 후보 영상">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-[0_30px_120px_rgba(0,20,60,0.42)]">
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-10 grid h-14 w-14 place-items-center rounded-full bg-white text-3xl font-black text-ink shadow-civic transition duration-500 hover:scale-[1.04] hover:bg-dem-blue hover:text-white active:scale-[0.98]"
          aria-label="팝업 닫기"
        >
          ×
        </button>

        <div className="bg-dem-deep px-5 pb-4 pt-5 text-white sm:px-7">
          <p className="text-xs font-black uppercase text-dem-sky">Ryu Seongguk TV</p>
          <h2 className="mt-2 pr-14 text-2xl font-black leading-snug sm:text-3xl">류성국 후보 영상</h2>
        </div>

        <div className="aspect-video bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="류성국 후보 영상"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col gap-2 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <button type="button" onClick={hideToday} className="civic-button-outline min-h-12 justify-center">
            오늘 하루 보지 않기
          </button>
          <button type="button" onClick={close} className="civic-button-primary min-h-12 justify-center">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
