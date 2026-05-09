import type { CSSProperties } from "react";
import { district, site } from "@/src/data/candidate";
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
          title={`우리동네 ${site.neighborhood}`}
          description="명곡과 봉림의 생활권 정보를 한눈에 확인할 수 있도록 정리했습니다."
          align="center"
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
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
