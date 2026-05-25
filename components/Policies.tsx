import Image from "next/image";
import type { CSSProperties } from "react";
import { assets, policies, sections } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";
import { SectionHeading } from "@/components/SectionHeading";

export function Policies() {
  return (
    <section id="policies" className="civic-section bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_100%)]">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_0.58fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Pledges"
              title={sections.policiesTitle}
              description={sections.policiesDescription}
            />
            <div className="mt-6 rounded-lg border border-dem-blue/20 bg-white p-5 text-sm font-black leading-6 text-dem-blue shadow-civic-soft" data-reveal style={{ "--index": 1 } as CSSProperties & Record<"--index", number>}>
              {sections.policiesNote}
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-white bg-white shadow-civic" data-reveal style={{ "--index": 2 } as CSSProperties & Record<"--index", number>}>
            <Image
              src={assetPath(assets.policyVisual)}
              alt="공약 섹션 대표 이미지"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {policies.map((policy, index) => (
            <article
              key={policy.title}
              className="civic-card civic-card-hover flex min-h-[310px] flex-col overflow-hidden p-6 md:p-8"
              data-reveal
              style={{ "--index": index + 1 } as CSSProperties & Record<"--index", number>}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-dem-pale px-3 py-1 text-xs font-black text-dem-blue">{policy.tag}</span>
                <span className="text-sm font-black text-dem-sky">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-3xl font-black leading-snug text-ink">{policy.title}</h3>
              <p className="mt-4 text-base font-semibold leading-8 text-slate-600">{policy.summary}</p>
              <div className="mt-auto pt-6">
                <p className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-black text-slate-600">{policy.status}</p>
                {policy.videoUrl ? (
                  <a
                    href={policy.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center rounded-full bg-dem-blue px-5 text-sm font-black text-white shadow-civic-soft transition hover:-translate-y-0.5 hover:bg-[#003f86]"
                  >
                    공약 영상 보기
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
