import Image from "next/image";
import type { CSSProperties } from "react";
import { promises } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";
import { SectionHeading } from "@/components/SectionHeading";

export function Policies() {
  return (
    <section id="policies" className="civic-section bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_100%)]">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
          <SectionHeading
            eyebrow="Promise Tracker"
            title="선거의 약속을 의정의 실천으로"
            description="주민께 드린 약속을 한 번의 구호로 끝내지 않겠습니다. 준비, 검토, 협의, 추진, 완료의 과정을 공개하겠습니다."
          />
          <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-white bg-white shadow-civic" data-reveal style={{ "--index": 1 } as CSSProperties & Record<"--index", number>}>
            <Image
              src={assetPath("/images/promises-hero.png")}
              alt="약속 이행 페이지 상단 이미지"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {promises.map((promise, index) => (
            <article
              key={promise.title}
              className="civic-card civic-card-hover flex min-h-[340px] flex-col p-6 md:p-7"
              data-reveal
              style={{ "--index": index + 1 } as CSSProperties & Record<"--index", number>}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-dem-pale px-3 py-1 text-xs font-black text-dem-blue">{promise.category}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">{promise.phase}</span>
                <span className="ml-auto text-xs font-black text-dem-sky">{promise.lastUpdated}</span>
              </div>
              <h3 className="mt-6 text-2xl font-black leading-snug text-ink md:text-3xl">{promise.title}</h3>
              <div className="mt-5 grid gap-4">
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-black text-slate-500">선거 당시 약속</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{promise.electionPromise}</p>
                </div>
                <div className="rounded-lg border border-dem-blue/15 bg-white p-4">
                  <p className="text-xs font-black text-dem-blue">현재 계획</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{promise.currentAction}</p>
                </div>
              </div>
              {promise.links.length > 0 ? (
                <div className="mt-auto pt-5">
                  {promise.links.map((link) => (
                    <a key={link.href} href={link.href} className="civic-button-primary min-h-11 px-5 text-sm">
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
