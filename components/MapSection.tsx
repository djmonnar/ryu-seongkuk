"use client";

import { useMemo, useState } from "react";
import { mapFilters, mapPins, type MapCategory, type MapPin } from "@/src/data/candidate";
import { NaverMap } from "@/components/NaverMap";
import { SectionHeading } from "@/components/SectionHeading";

function PinDetail({ pin }: { pin: MapPin }) {
  return (
    <article className="civic-card p-5 shadow-civic">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-dem-blue px-3 py-1 text-xs font-black text-white">{pin.category}</span>
        <span className="rounded-full bg-dem-pale px-3 py-1 text-xs font-black text-dem-blue">{pin.status}</span>
      </div>
      <h3 className="mt-4 text-xl font-black leading-7 text-ink">{pin.title}</h3>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="font-black text-slate-500">지역</dt>
          <dd className="mt-1 font-bold text-ink">{pin.district}</dd>
        </div>
        <div>
          <dt className="font-black text-slate-500">좌표</dt>
          <dd className="mt-1 font-bold text-ink">
            {pin.lat.toFixed(4)}, {pin.lng.toFixed(4)}
          </dd>
        </div>
      </dl>
      <p className="mt-4 text-sm font-bold leading-6 text-slate-600">{pin.summary}</p>
    </article>
  );
}

export function MapSection() {
  const [filter, setFilter] = useState<(typeof mapFilters)[number]>("전체");
  const [selectedId, setSelectedId] = useState(mapPins[0]?.id ?? "");

  const filteredPins = useMemo(() => {
    if (filter === "전체") return mapPins;
    return mapPins.filter((pin) => pin.category === filter);
  }, [filter]);

  const selectedPin = filteredPins.find((pin) => pin.id === selectedId) ?? filteredPins[0] ?? mapPins[0];

  function updateFilter(nextFilter: (typeof mapFilters)[number]) {
    setFilter(nextFilter);
    const nextPin = nextFilter === "전체" ? mapPins[0] : mapPins.find((pin) => pin.category === (nextFilter as MapCategory));
    if (nextPin) setSelectedId(nextPin.id);
  }

  return (
    <section id="map" className="bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_100%)] py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Communication Map"
            title="명곡·봉림 소통지도"
            description="류성국 후보의 동네 거점과 공약 활동을 네이버 지도 위에서 한눈에 확인할 수 있도록 정리했습니다."
          />
          <p className="rounded-lg border border-dem-blue/20 bg-white p-4 text-sm font-black leading-6 text-dem-blue shadow-civic-soft">
            현재 핀은 캠프 확인 전 초안입니다. 실제 활동 좌표와 사진을 받으면 바로 교체할 수 있습니다.
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="지도 핀 필터">
          {mapFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => updateFilter(item)}
              className={
                filter === item
                  ? "min-h-10 shrink-0 rounded-full bg-dem-blue px-4 text-sm font-black text-white shadow-[0_10px_24px_rgba(0,78,162,0.18)] focus:outline-none focus:ring-2 focus:ring-dem-blue focus:ring-offset-2"
                  : "min-h-10 shrink-0 rounded-full border border-slate-300 bg-white px-4 text-sm font-black text-slate-700 transition hover:border-dem-blue hover:text-dem-blue focus:outline-none focus:ring-2 focus:ring-dem-blue focus:ring-offset-2"
              }
              aria-pressed={filter === item}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <NaverMap pins={filteredPins} selectedPin={selectedPin} onSelectPin={setSelectedId} />

          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start" aria-label="선택한 지도 핀 상세">
            {selectedPin ? <PinDetail pin={selectedPin} /> : null}
            <div className="civic-card mt-4 p-5">
              <h3 className="text-base font-black text-ink">업데이트 예정</h3>
              <p className="mt-3 text-sm font-bold leading-6 text-slate-600">
                현장 활동 사진, 카드뉴스 링크, 실제 활동 좌표를 받으면 이 지도에서 바로 연결해 보여줄 수 있습니다.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
