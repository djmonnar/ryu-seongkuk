import Image from "next/image";
import type { CSSProperties } from "react";
import { district, site } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";
import { SectionHeading } from "@/components/SectionHeading";

const totalStats = [
  { label: "합산 인구", value: district.total.population },
  { label: "합산 세대", value: district.total.households },
  { label: "합산 면적", value: district.total.area }
];

export function District() {
  return (
    <section id="district" className="civic-section bg-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="District"
          title={`${site.neighborhood}, 류성국의 의정 출발점`}
          description="주거, 교육, 교통, 행정, 돌봄이 이어지는 명곡·봉림 생활권의 작은 불편부터 살피겠습니다."
          align="center"
        />

        <div className="relative mt-10 min-h-[280px] overflow-hidden rounded-lg border border-white bg-dem-pale shadow-civic md:min-h-[420px]" data-reveal>
          <Image
            src={assetPath("/images/district-hero.png")}
            alt="명곡·봉림 생활권 소개 이미지"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {totalStats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-lg bg-dem-deep p-5 text-white shadow-civic ring-1 ring-white/10"
              data-reveal
              style={{ "--index": index } as CSSProperties & Record<"--index", number>}
            >
              <p className="text-sm font-black text-white/70">{stat.label}</p>
              <p className="mt-2 text-3xl font-black">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2" aria-label="생활권 주요 의제">
          {district.agendas.map((agenda) => (
            <span key={agenda} className="min-h-10 shrink-0 rounded-full border border-dem-blue/20 bg-white px-4 py-2 text-sm font-black text-dem-blue shadow-civic-soft">
              {agenda}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          {district.towns.map((town, index) => (
            <article
              key={town.name}
              className={`civic-card civic-card-hover p-6 ${index === 1 ? "lg:mt-10" : ""}`}
              data-reveal
              style={{ "--index": index + 1 } as CSSProperties & Record<"--index", number>}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-black text-ink">{town.name}</h3>
                <span className="rounded-full bg-dem-pale px-3 py-1 text-xs font-black text-dem-blue">{town.units}</span>
              </div>
              <dl className="mt-6 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs font-black text-slate-500">면적</dt>
                  <dd className="mt-1 text-sm font-black text-ink">{town.area}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs font-black text-slate-500">인구</dt>
                  <dd className="mt-1 text-sm font-black text-ink">{town.population}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs font-black text-slate-500">세대</dt>
                  <dd className="mt-1 text-sm font-black text-ink">{town.households}</dd>
                </div>
              </dl>
              <p className="mt-5 text-sm font-bold leading-6 text-slate-600">{town.note}</p>
              <p className="mt-4 text-xs font-bold text-slate-400">2026년 4월말 기준 공개자료</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
