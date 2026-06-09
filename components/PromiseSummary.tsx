import type { CSSProperties } from "react";
import { promises } from "@/src/data/candidate";
import { SectionHeading } from "@/components/SectionHeading";

export function PromiseSummary() {
  return (
    <section className="civic-section bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_100%)]">
      <div className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Promise Tracker"
            title="약속 이행 현황"
            description="선거 때 드린 약속을 준비, 검토, 협의, 추진, 완료의 과정으로 공개하겠습니다."
          />
          <a href="/policies/" className="civic-button-primary w-fit">
            <span>전체 보기</span>
            <span className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-white/[0.16]">→</span>
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {promises.map((promise, index) => (
            <article
              key={promise.title}
              className="civic-card civic-card-hover flex min-h-[250px] flex-col p-5"
              data-reveal
              style={{ "--index": index + 1 } as CSSProperties & Record<"--index", number>}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-dem-pale px-3 py-1 text-[11px] font-black text-dem-blue">{promise.category}</span>
                <span className="text-xs font-black text-dem-sky">{promise.lastUpdated}</span>
              </div>
              <h3 className="mt-5 text-xl font-black leading-7 text-ink">{promise.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{promise.currentAction}</p>
              <p className="mt-auto rounded-lg bg-slate-50 px-3 py-2 text-sm font-black text-slate-700">{promise.phase}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
