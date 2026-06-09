import Image from "next/image";
import type { CSSProperties } from "react";
import { site } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";

const quickStats = [
  { label: "지역구", value: site.neighborhood },
  { label: "역할", value: site.currentStatus },
  { label: "방향", value: "약속 이행 공개" }
];

export function Hero() {
  return (
    <section id="top" className="relative -mt-[80px] overflow-hidden bg-white pt-[80px] text-ink">
      <div className="relative min-h-[calc(100dvh-80px)] overflow-hidden md:min-h-[760px]">
        <Image
          src={assetPath("/images/hero-wide.png")}
          alt="창원시의원 당선인 류성국 메인 비주얼"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[center_right] md:block"
        />
        <Image
          src={assetPath("/images/hero-mobile.png")}
          alt="창원시의원 당선인 류성국 모바일 메인 비주얼"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_top] md:hidden"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.72)_34%,rgba(255,255,255,0.08)_58%,rgba(255,255,255,0)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_28%,rgba(255,255,255,0.44)_48%,rgba(255,255,255,0)_68%)]" />

        <div className="section-shell relative z-10 flex min-h-[calc(100dvh-80px)] flex-col justify-start pb-6 pt-10 md:min-h-[760px] md:justify-center md:pb-16 md:pt-16">
          <div className="max-w-[620px]" data-reveal>
            <p className="civic-eyebrow">Changwon · Myunggok Bongnim</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
              {site.mainMessage}
            </h1>
            <p className="mt-5 text-base font-black leading-7 text-dem-blue md:text-xl">
              {site.district} {site.neighborhood}
              <br />
              {site.currentStatus} {site.name}
            </p>
            <p className="mt-5 max-w-[52ch] text-base font-semibold leading-8 text-slate-600 md:text-lg">
              {site.subMessage}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/policies/" className="civic-button-primary min-h-12 px-5 text-sm">
                <span>약속 이행 보기</span>
                <span className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-white/[0.16]">→</span>
              </a>
              <a href="/contact/" className="civic-button-outline min-h-12 px-5 text-sm">
                주민 제안하기
              </a>
            </div>
          </div>

          <div className="mt-8 grid max-w-[620px] grid-cols-3 gap-1.5 md:gap-2">
            {quickStats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/80 bg-white/[0.88] p-3 text-center shadow-civic-soft backdrop-blur-md md:p-4 md:text-left"
                data-reveal
                style={{ "--index": index } as CSSProperties & Record<"--index", number>}
              >
                <p className="text-[10px] font-black text-dem-blue md:text-xs">{stat.label}</p>
                <p className="mt-0.5 whitespace-nowrap text-[clamp(15px,4vw,20px)] font-black leading-tight md:mt-1 md:text-xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
