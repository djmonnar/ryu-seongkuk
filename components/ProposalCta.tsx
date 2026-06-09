import { site } from "@/src/data/candidate";

export function ProposalCta() {
  return (
    <section className="bg-dem-blue px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase text-white/70">Resident Proposal</p>
          <h2 className="mt-3 text-3xl font-black leading-snug md:text-4xl">{site.neighborhood}의 불편을 남겨주세요</h2>
          <p className="mt-4 text-base font-semibold leading-8 text-white/72">
            작은 불편이 의정의 출발점입니다. 보내주신 제안은 검토해 의정활동과 현장점검에 반영하겠습니다.
          </p>
        </div>
        <a href="/contact/" className="inline-flex min-h-12 w-fit items-center rounded-full bg-white px-6 text-sm font-black text-dem-blue shadow-civic-soft transition hover:-translate-y-0.5">
          주민 제안하기
        </a>
      </div>
    </section>
  );
}
