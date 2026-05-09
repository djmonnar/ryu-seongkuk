import type { CSSProperties } from "react";
import { site } from "@/src/data/candidate";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="civic-section bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Join Us"
              title={`${site.neighborhood}의 제안을 기다립니다`}
              description="생활 속 불편, 바라는 변화, 우리 동네에 필요한 일을 편하게 남겨주세요."
            />
            <div className="mt-6 rounded-lg border border-dem-blue/20 bg-white p-5 text-sm font-bold leading-6 text-slate-600 shadow-civic-soft" data-reveal style={{ "--index": 1 } as CSSProperties & Record<"--index", number>}>
              남겨주신 제안은 명곡·봉림 생활 공약을 다듬는 데 소중히 참고하겠습니다.
            </div>
          </div>

          <form className="civic-card p-5 sm:p-7" data-reveal style={{ "--index": 2 } as CSSProperties & Record<"--index", number>}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-ink">
                이름
                <input className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 font-bold outline-none transition duration-500 focus:border-dem-blue focus:bg-white" placeholder="홍길동" />
              </label>
              <label className="grid gap-2 text-sm font-black text-ink">
                연락처
                <input className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 font-bold outline-none transition duration-500 focus:border-dem-blue focus:bg-white" placeholder="010-0000-0000" />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-black text-ink">
              문의 내용
              <textarea className="min-h-32 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-bold outline-none transition duration-500 focus:border-dem-blue focus:bg-white" placeholder="동네 제안이나 문의를 남겨주세요." />
            </label>

            <label className="mt-4 flex items-start gap-3 rounded-lg bg-dem-pale p-4 text-sm font-bold leading-6 text-slate-700">
              <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-dem-blue" />
              <span>개인정보 수집·이용에 동의합니다. 수집 항목은 이름, 연락처, 문의내용이며 목적 달성 후 지체 없이 파기합니다.</span>
            </label>

            <button type="button" className="civic-button-primary mt-5 w-full">
              <span>동네 제안 남기기</span>
              <span className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-white/[0.16]">→</span>
            </button>
            <p className="mt-3 text-xs font-bold leading-5 text-slate-500">
              개인정보는 제안 확인과 회신 목적에 한해 필요한 범위에서만 사용합니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
