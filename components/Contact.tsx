import { site } from "@/src/data/candidate";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Join Us"
              title={`${site.neighborhood}의 제안을 기다립니다`}
              description="공식 연락처와 선거사무소 정보는 캠프 확인 후 공개합니다. 개인정보는 필요한 최소 범위만 수집하는 방향으로 설계했습니다."
            />
            <div className="mt-6 rounded-lg border border-dem-blue/20 bg-white p-5 text-sm font-bold leading-6 text-slate-600 shadow-civic-soft">
              선거사무소 주소, 공식 연락처, 선거사무장·회계책임자 정보는 확인 전까지 표시하지 않습니다.
            </div>
          </div>

          <form className="civic-card p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-ink">
                이름
                <input className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 font-bold outline-none transition focus:border-dem-blue focus:bg-white" placeholder="홍길동" />
              </label>
              <label className="grid gap-2 text-sm font-black text-ink">
                연락처
                <input className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 font-bold outline-none transition focus:border-dem-blue focus:bg-white" placeholder="010-0000-0000" />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-black text-ink">
              문의 내용
              <textarea className="min-h-32 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-bold outline-none transition focus:border-dem-blue focus:bg-white" placeholder="동네 제안이나 문의를 남겨주세요." />
            </label>

            <label className="mt-4 flex items-start gap-3 rounded-lg bg-dem-pale p-4 text-sm font-bold leading-6 text-slate-700">
              <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-dem-blue" />
              <span>개인정보 수집·이용에 동의합니다. 수집 항목은 이름, 연락처, 문의내용이며 목적 달성 후 지체 없이 파기합니다.</span>
            </label>

            <button type="button" className="civic-button-primary mt-5 w-full">
              문의 접수 준비 중
            </button>
            <p className="mt-3 text-xs font-bold leading-5 text-slate-500">
              실제 접수 기능은 개인정보처리방침과 수신 관리 절차 확인 후 활성화하세요.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
