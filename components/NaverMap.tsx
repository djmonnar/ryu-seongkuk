"use client";

import { useEffect, useRef, useState } from "react";
import { CHANGWON_CENTER, NAVER_MAP_CLIENT_ID } from "@/src/data/naverMap";
import type { MapPin } from "@/src/data/candidate";

type NaverMapProps = {
  pins: MapPin[];
  selectedPin?: MapPin;
  onSelectPin: (id: string) => void;
};

let scriptPromise: Promise<void> | null = null;

function loadNaverMaps() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.naver?.maps) return Promise.resolve();

  if (!scriptPromise) {
    scriptPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAP_CLIENT_ID}`;
      script.async = true;
      script.onload = () => (window.naver?.maps ? resolve() : reject(new Error("Naver Maps SDK namespace missing")));
      script.onerror = () => reject(new Error("Naver Maps SDK failed to load"));
      document.head.appendChild(script);
    });
  }

  return scriptPromise;
}

function markerContent(pin: MapPin, selected: boolean) {
  const bg = selected ? "#E51B35" : pin.pinColor || "#004EA2";
  const shadow = selected ? "0 14px 30px rgba(229,27,53,.34)" : "0 10px 24px rgba(0,43,94,.24)";

  return `
    <button type="button" aria-label="${pin.district} ${pin.title}" style="position:relative;width:36px;height:46px;border:0;background:transparent;padding:0;cursor:pointer;">
      <span style="position:absolute;left:4px;top:0;width:28px;height:28px;border-radius:50% 50% 50% 0;background:${bg};border:4px solid #fff;box-shadow:${shadow};transform:rotate(-45deg);">
        <span style="position:absolute;left:50%;top:50%;width:9px;height:9px;border-radius:9999px;background:#fff;transform:translate(-50%,-50%);"></span>
      </span>
    </button>
  `;
}

export function NaverMap({ pins, selectedPin, onSelectPin }: NaverMapProps) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<InstanceType<NonNullable<typeof window.naver>["maps"]["Map"]> | null>(null);
  const markerRefs = useRef<Array<{ setMap: (map: unknown | null) => void }>>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    loadNaverMaps()
      .then(() => {
        if (cancelled || !mapElementRef.current || !window.naver?.maps) return;

        const naverMaps = window.naver.maps;
        const map = new naverMaps.Map(mapElementRef.current, {
          center: new naverMaps.LatLng(CHANGWON_CENTER.lat, CHANGWON_CENTER.lng),
          zoom: 13,
          minZoom: 10,
          mapTypeId: naverMaps.MapTypeId?.NORMAL,
          mapTypeControl: false,
          scaleControl: true,
          logoControl: true,
          mapDataControl: false,
          zoomControl: true,
          zoomControlOptions: naverMaps.Position?.TOP_RIGHT
        });

        mapRef.current = map;
        setStatus("ready");

        const refreshMap = () => {
          if (cancelled || !mapElementRef.current) return;
          naverMaps.Event.trigger?.(map, "resize");
          map.setCenter(new naverMaps.LatLng(CHANGWON_CENTER.lat, CHANGWON_CENTER.lng));
        };

        window.requestAnimationFrame(refreshMap);
        window.setTimeout(refreshMap, 120);
        window.setTimeout(refreshMap, 500);
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (status !== "ready" || !window.naver?.maps || !mapRef.current) return;

    const naverMaps = window.naver.maps;
    markerRefs.current.forEach((marker) => marker.setMap(null));
    markerRefs.current = [];

    pins.forEach((pin) => {
      const marker = new naverMaps.Marker({
        position: new naverMaps.LatLng(pin.lat, pin.lng),
        map: mapRef.current,
        title: pin.title,
        icon: {
          content: markerContent(pin, selectedPin?.id === pin.id),
          anchor: new naverMaps.Point(18, 34)
        }
      });

      naverMaps.Event.addListener(marker, "click", () => onSelectPin(pin.id));
      markerRefs.current.push(marker);
    });
  }, [onSelectPin, pins, selectedPin?.id, status]);

  useEffect(() => {
    if (!window.naver?.maps || !mapRef.current || !selectedPin) return;

    mapRef.current.setCenter(new window.naver.maps.LatLng(selectedPin.lat, selectedPin.lng));
    mapRef.current.setZoom(14);
  }, [selectedPin]);

  return (
    <div className="relative h-[560px] min-h-[560px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-civic md:h-[520px] md:min-h-[520px]">
      <div ref={mapElementRef} className="h-full w-full" aria-label="네이버 지도 기반 명곡·봉림 소통지도" />

      {status === "loading" ? (
        <div className="absolute inset-0 grid place-items-center bg-dem-pale text-sm font-black text-ink">
          네이버 지도를 불러오는 중입니다.
        </div>
      ) : null}

      {status === "error" ? (
        <div className="absolute inset-0 grid place-items-center bg-dem-pale p-6 text-center">
          <div className="max-w-md rounded-lg border border-slate-200 bg-white p-5 shadow-civic">
            <p className="text-base font-black text-ink">지도를 불러오지 못했습니다.</p>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">
              네이버 클라우드 Maps Application의 Web 서비스 URL에 현재 도메인을 등록해주세요.
            </p>
          </div>
        </div>
      ) : null}

      {selectedPin ? (
        <article className="absolute inset-x-3 bottom-3 rounded-lg border border-white/80 bg-white/[0.96] p-4 shadow-[0_18px_50px_rgba(0,43,94,.22)] backdrop-blur-xl md:hidden">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-dem-blue px-3 py-1 text-xs font-black text-white">{selectedPin.category}</span>
            <span className="rounded-full bg-dem-pale px-3 py-1 text-xs font-black text-dem-blue">{selectedPin.status}</span>
          </div>
          <h3 className="mt-3 text-base font-black leading-6 text-ink">{selectedPin.title}</h3>
          <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{selectedPin.summary}</p>
        </article>
      ) : null}

      <div className="absolute left-4 top-4 rounded-full bg-white/[0.95] px-4 py-2 text-xs font-black text-ink shadow-civic-soft backdrop-blur">
        표시 중인 핀 {pins.length}개
      </div>
    </div>
  );
}
