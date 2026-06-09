import type { CSSProperties } from "react";
import { site } from "@/src/data/candidate";
import { SectionHeading } from "@/components/SectionHeading";

const areas = ["명곡동", "봉림동", "기타"];
const categories = ["교통", "주차", "안전", "교육", "복지", "환경", "예산", "기타"];

export function Contact() {
  return (
    <section id="contact" className="civic-section bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Resident Proposal"
              title={`${site.neighborhood}의 불편을 남겨주세요`}
              description="작은 불편이 의정의 출발점입니다. 보내주신 제안은 검토해 의정활동과 현장점검에 반영하겠습니다."
            />
            <div className="mt-6 rounded-lg border border-dem-blue/20 bg-white p-5 text-sm font-bold leading-6 text-slate-600 shadow-civic-soft" data-reveal style={{ "--index": 1 } as CSSProperties & Record<"--index", number>}>
              현재 별도 접수 시스템을 준비 중입니다. 이 화면은 주민 제안 접수 항목을 안내하기 위한 정적 양식이며, 실제 전송은 되지 않습니다.
            </div>
          </div>

          <form className="civic-card p-5 sm:p-7" data-reveal style={{ "--index": 2 } as CSSProperties & Record<"--index", number>}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-ink">
                이름
                <input className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 font-bold outline-none transition duration-500 focus:border-dem-blue focus:bg-white" placeholder="이름" />
              </label>
              <label className="grid gap-2 text-sm font-black text-ink">
                연락처
                <input className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 font-bold outline-none transition duration-500 focus:border-dem-blue focus:bg-white" placeholder="연락 가능한 번호" />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-ink">
                지역
                <select className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 font-bold outline-none transition duration-500 focus:border-dem-blue focus:bg-white" defaultValue="">
                  <option value="" disabled>선택</option>
                  {areas.map((area) => <option key={area}>{area}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-black text-ink">
                제안 분야
                <select className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 font-bold outline-none transition duration-500 focus:border-dem-blue focus:bg-white" defaultValue="">
                  <option value="" disabled>선택</option>
                  {categories.map((category) => <option key={category}>{category}</option>)}
                </select>
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-black text-ink">
              제안 내용
              <textarea className="min-h-36 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-bold outline-none transition duration-500 focus:border-dem-blue focus:bg-white" placeholder="생활 속 불편이나 바라는 변화를 적어주세요." />
            </label>

            <label className="mt-4 flex items-start gap-3 rounded-lg bg-dem-pale p-4 text-sm font-bold leading-6 text-slate-700">
              <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-dem-blue" />
              <span>입력해주신 개인정보는 주민 제안 확인 및 소통을 위해서만 사용하며, 목적 달성 후 지체 없이 파기합니다.</span>
            </label>

            <button type="button" className="civic-button-primary mt-5 w-full opacity-70" aria-disabled="true">
              <span>제안 접수 기능 준비 중</span>
            </button>
            <p className="mt-3 text-xs font-bold leading-5 text-slate-500">
              백엔드 접수 기능이 연결되기 전까지는 이 양식으로 내용이 전송되지 않습니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
