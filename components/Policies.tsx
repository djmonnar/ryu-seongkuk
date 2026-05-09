import { policies } from "@/src/data/candidate";
import { SectionHeading } from "@/components/SectionHeading";

export function Policies() {
  return (
    <section id="policies" className="bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_100%)] py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Pledges"
            title="확인된 약속부터 정확하게"
            description="공약은 후보 측 원문과 실행계획 확인이 끝난 항목부터 순차적으로 업데이트합니다."
          />
          <div className="rounded-lg border border-dem-blue/20 bg-white p-4 text-sm font-black leading-6 text-dem-blue shadow-civic-soft">
            공약 Part1·Part2 원문 확인 후 세부 내용 반영 예정
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {policies.map((policy, index) => (
            <article key={policy.title} className="civic-card civic-card-hover overflow-hidden p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-dem-pale px-3 py-1 text-xs font-black text-dem-blue">{policy.tag}</span>
                <span className="text-sm font-black text-dem-sky">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-black leading-8 text-ink">{policy.title}</h3>
              <p className="mt-4 text-base font-bold leading-7 text-slate-600">{policy.summary}</p>
              <p className="mt-6 rounded-lg bg-slate-50 px-4 py-3 text-sm font-black text-slate-600">{policy.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
