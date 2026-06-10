"use client";

import { useEffect, useState } from "react";
import { assetPath } from "@/src/data/paths";

const popupStorageKey = "ryu-thanks-popup-hidden-until";
const dayInMs = 24 * 60 * 60 * 1000;

export function ThanksPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hiddenUntil = Number(window.localStorage.getItem(popupStorageKey) || 0);
    if (!hiddenUntil || hiddenUntil <= Date.now()) setIsOpen(true);
  }, []);

  function close() {
    setIsOpen(false);
  }

  function hideToday() {
    window.localStorage.setItem(popupStorageKey, String(Date.now() + dayInMs));
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="popup-backdrop fixed inset-0 z-[80] grid place-items-center bg-ink/76 px-4 py-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="thanks-popup-title"
      aria-describedby="thanks-popup-description"
    >
      <div className="popup-card w-[min(92vw,520px)] overflow-hidden rounded-lg bg-white shadow-[0_30px_120px_rgba(0,20,60,0.42)]">
        <div className="sr-only">
          <h2 id="thanks-popup-title">당선에 감사드립니다</h2>
          <p id="thanks-popup-description">
            명곡·봉림 주민 여러분의 선택을 무겁게 받겠습니다. 선거 때 드린 약속을 말로 끝내지 않고 의정활동으로 하나씩 증명하겠습니다. 창원시의원 당선인 류성국.
          </p>
        </div>

        <img
          src={assetPath("/images/thanks-popup.webp")}
          alt="창원시의원 당선인 류성국 당선 감사 메시지"
          className="max-h-[68dvh] w-full bg-white object-contain"
        />

        <div className="grid grid-cols-2 gap-2 border-t border-slate-100 bg-white p-3 sm:grid-cols-[1fr_1fr_0.72fr] sm:p-4">
          <a href="/policies/" onClick={close} className="civic-button-primary col-span-2 min-h-11 justify-center px-3 text-xs sm:col-span-1 sm:text-sm">
            약속 이행 보기
          </a>
          <button type="button" onClick={hideToday} className="civic-button-outline min-h-11 justify-center px-3 text-xs sm:text-sm">
            오늘 하루 보지 않기
          </button>
          <button type="button" onClick={close} className="min-h-11 rounded-full border border-slate-200 bg-slate-50 px-3 text-xs font-black text-slate-700 transition hover:border-dem-blue hover:text-dem-blue sm:text-sm">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
