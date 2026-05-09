import { activities } from "@/src/data/candidate";

export function Activities() {
  return (
    <section id="activities" className="bg-ink py-16 text-white sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-dem-sky">Activity</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">동네에서 시작하는 변화</h2>
            <p className="mt-4 text-base font-bold leading-7 text-white/68">
              공식 SNS, 카드뉴스, 현장 일정은 캠프 원본 확인 후 연결합니다.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {activities.map((item) => (
              <div key={item} className="rounded-lg border border-white/12 bg-white/8 p-5 backdrop-blur">
                <p className="text-base font-black leading-6">{item}</p>
                <p className="mt-3 text-xs font-bold text-white/58">준비 중</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a href="#contact" className="rounded-lg bg-white p-6 text-ink shadow-civic transition hover:-translate-y-1">
            <p className="text-sm font-black text-dem-blue">Instagram</p>
            <h3 className="mt-3 text-2xl font-black">공식 계정 연결 예정</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-slate-600">계정 URL 확인 후 카드뉴스와 현장 소식을 연결합니다.</p>
          </a>
          <a href="#contact" className="rounded-lg bg-dem-blue p-6 text-white shadow-civic transition hover:-translate-y-1">
            <p className="text-sm font-black text-white/70">YouTube</p>
            <h3 className="mt-3 text-2xl font-black">영상 영역 준비 중</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-white/72">영상 원본 또는 채널 링크를 받으면 바로 교체할 수 있습니다.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
