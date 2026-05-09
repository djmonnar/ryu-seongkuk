import Image from "next/image";
import type { CSSProperties } from "react";
import { district, site } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";

const quickStats = [
  { label: "지역구", value: site.neighborhood },
  { label: "인구", value: district.total.population },
  { label: "세대", value: district.total.households }
];

export function Hero() {
  return (
    <section id="top" className="relative -mt-[80px] overflow-hidden bg-dem-deep pt-[80px] text-white">
      <div className="relative min-h-[calc(100dvh-80px)] overflow-hidden md:min-h-[760px]">
        <Image
          src={assetPath("/images/hero-wide.png")}
          alt="우리동네 젊은 일꾼 류성국 후보"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
        <Image
          src={assetPath("/images/hero-mobile.png")}
          alt="우리동네 젊은 일꾼 류성국 후보"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:hidden"
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-dem-deep via-dem-deep/[0.46] to-transparent md:h-56 md:from-white md:via-white/[0.58]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,52,118,0.18)_0%,rgba(255,255,255,0)_42%,rgba(255,255,255,0)_100%)]" />

        <div className="section-shell relative z-10 flex min-h-[calc(100dvh-80px)] flex-col justify-end pb-5 pt-8 md:min-h-[760px] md:pb-8">
          <div className="sr-only">
            <h1>
              {site.name} {site.ballotLabel}
            </h1>
            <p>
              {site.party} {site.district} {site.neighborhood}. {site.slogan}
            </p>
          </div>

          <div className="civic-panel hidden max-w-[420px] p-5 text-ink backdrop-blur lg:absolute lg:bottom-8 lg:right-10 lg:block" data-reveal>
            <p className="civic-eyebrow">Changwon · Myunggok Bongnim</p>
            <h2 className="mt-3 text-3xl font-black leading-snug">{site.secondMessage}</h2>
            <p className="mt-3 text-sm font-bold leading-6 text-slate-600">{site.message}</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a href="/policies/" className="civic-button-primary min-h-12 px-4 text-xs">
                <span>공약 보기</span>
                <span className="ml-2 grid h-7 w-7 place-items-center rounded-full bg-white/[0.16]">→</span>
              </a>
              <a href="/#profile" className="civic-button-outline min-h-12 px-4 text-xs">
                후보 소개
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 md:absolute md:bottom-8 md:left-10 md:right-10 md:gap-2 lg:right-[470px] xl:right-[500px]">
            {quickStats.map((stat, index) => (
              <div
                key={stat.label}
                className="civic-stat !p-2.5 text-center backdrop-blur-md md:!p-4 md:text-left"
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
