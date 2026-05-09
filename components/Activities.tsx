import type { CSSProperties } from "react";
import { activities } from "@/src/data/candidate";

export function Activities() {
  return (
    <section id="activities" className="civic-section bg-ink text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl" data-reveal>
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase text-dem-sky">Activity</p>
            <h2 className="mt-4 text-4xl font-black leading-snug text-white sm:text-5xl">동네에서 시작하는 변화</h2>
            <p className="mt-5 max-w-[65ch] text-base font-semibold leading-8 text-white/[0.68] md:text-lg">
              공식 SNS, 카드뉴스, 현장 일정은 캠프 원본 확인 후 연결합니다.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {activities.map((item, index) => (
              <div
                key={item}
                className="rounded-lg border border-white/[0.12] bg-white/[0.08] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                data-reveal
                style={{ "--index": index + 1 } as CSSProperties & Record<"--index", number>}
              >
                <p className="text-base font-black leading-6">{item}</p>
                <p className="mt-3 text-xs font-bold text-white/[0.58]">준비 중</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[1.12fr_0.88fr]">
          <a href="#contact" className="rounded-lg bg-white p-7 text-ink shadow-civic transition duration-500 hover:-translate-y-1 active:translate-y-0" data-reveal style={{ "--index": 1 } as CSSProperties & Record<"--index", number>}>
            <p className="text-sm font-black text-dem-blue">Instagram</p>
            <h3 className="mt-3 text-2xl font-black">공식 계정 연결 예정</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-slate-600">계정 URL 확인 후 카드뉴스와 현장 소식을 연결합니다.</p>
          </a>
          <a href="#contact" className="rounded-lg bg-dem-blue p-7 text-white shadow-civic transition duration-500 hover:-translate-y-1 active:translate-y-0 md:mt-10" data-reveal style={{ "--index": 2 } as CSSProperties & Record<"--index", number>}>
            <p className="text-sm font-black text-white/70">YouTube</p>
            <h3 className="mt-3 text-2xl font-black">영상 영역 준비 중</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-white/[0.72]">영상 원본 또는 채널 링크를 받으면 바로 교체할 수 있습니다.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
