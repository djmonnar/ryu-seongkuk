import Image from "next/image";
import type { CSSProperties } from "react";
import { policies } from "@/src/data/candidate";
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
              title="동네의 내일을 바꾸는 약속"
              description="교육 기회와 생활 예산부터 시민이 체감하는 변화를 만들겠습니다."
            />
            <div className="mt-6 rounded-lg border border-dem-blue/20 bg-white p-5 text-sm font-black leading-6 text-dem-blue shadow-civic-soft" data-reveal style={{ "--index": 1 } as CSSProperties & Record<"--index", number>}>
              명곡·봉림 주민의 삶에 바로 닿는 생활 공약을 중심에 두겠습니다.
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-white bg-white shadow-civic" data-reveal style={{ "--index": 2 } as CSSProperties & Record<"--index", number>}>
            <Image
              src={assetPath("/images/policy-education-visual.png")}
              alt="교육과 예산 감시 공약을 상징하는 블루톤 일러스트"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.08fr_0.92fr]">
          {policies.map((policy, index) => (
            <article
              key={policy.title}
              className={`civic-card civic-card-hover overflow-hidden p-6 md:p-8 ${index === 0 ? "lg:min-h-[360px]" : "lg:mt-12 lg:min-h-[300px]"}`}
              data-reveal
              style={{ "--index": index + 1 } as CSSProperties & Record<"--index", number>}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-dem-pale px-3 py-1 text-xs font-black text-dem-blue">{policy.tag}</span>
                <span className="text-sm font-black text-dem-sky">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-3xl font-black leading-snug text-ink">{policy.title}</h3>
              <p className="mt-4 text-base font-semibold leading-8 text-slate-600">{policy.summary}</p>
              <p className="mt-6 rounded-lg bg-slate-50 px-4 py-3 text-sm font-black text-slate-600">{policy.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
