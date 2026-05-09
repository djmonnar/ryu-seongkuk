import type { CSSProperties } from "react";
import { activities, instagramUrl } from "@/src/data/candidate";

export function Activities() {
  return (
    <section id="activities" className="civic-section bg-ink text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl" data-reveal>
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase text-dem-sky">Activity</p>
            <h2 className="mt-4 text-4xl font-black leading-snug text-white sm:text-5xl">동네에서 시작하는 변화</h2>
            <p className="mt-5 max-w-[65ch] text-base font-semibold leading-8 text-white/[0.68] md:text-lg">
              현장에서 듣고, 카드뉴스로 설명하고, 주민 제안으로 다시 다듬겠습니다.
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
                <p className="mt-3 text-xs font-bold text-white/[0.58]">명곡·봉림</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[1.12fr_0.88fr]">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white p-7 text-ink shadow-civic transition duration-500 hover:-translate-y-1 active:translate-y-0"
            data-reveal
            style={{ "--index": 1 } as CSSProperties & Record<"--index", number>}
          >
            <p className="text-sm font-black text-dem-blue">Instagram</p>
            <h3 className="mt-3 text-2xl font-black">카드뉴스와 현장 소식</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-slate-600">짧고 정확한 콘텐츠로 공약과 동네 소식을 전하겠습니다.</p>
          </a>
          <a
            href="https://youtu.be/_9ftYhY6DhQ?si=mFfAgZzi8ihBRlee"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-dem-blue p-7 text-white shadow-civic transition duration-500 hover:-translate-y-1 active:translate-y-0 md:mt-10"
            data-reveal
            style={{ "--index": 2 } as CSSProperties & Record<"--index", number>}
          >
            <p className="text-sm font-black text-white/70">YouTube</p>
            <h3 className="mt-3 text-2xl font-black">현장의 목소리</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-white/[0.72]">주민의 이야기를 듣고 정책으로 연결하는 과정을 담겠습니다.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
