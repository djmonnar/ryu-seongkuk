import Image from "next/image";
import { district, site } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";

const quickStats = [
  { label: "지역구", value: site.neighborhood },
  { label: "합산 인구", value: district.total.population },
  { label: "합산 세대", value: district.total.households }
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dem-deep text-white">
      <div className="relative min-h-[calc(100svh-68px)] overflow-hidden md:min-h-[760px]">
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
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-dem-deep via-dem-deep/58 to-transparent md:h-56 md:from-white md:via-white/55" />

        <div className="section-shell relative z-10 flex min-h-[calc(100svh-68px)] flex-col justify-end pb-7 pt-8 md:min-h-[760px] md:pb-8">
          <div className="sr-only">
            <h1>
              {site.name} {site.ballotLabel}
            </h1>
            <p>
              {site.party} {site.district} {site.neighborhood}. {site.slogan}
            </p>
          </div>

          <div className="ml-auto hidden max-w-[420px] rounded-lg border border-white/40 bg-white/92 p-5 text-ink shadow-civic-strong backdrop-blur md:block">
            <p className="civic-eyebrow">Changwon · Myunggok Bongnim</p>
            <h2 className="mt-2 text-2xl font-black leading-tight">{site.secondMessage}</h2>
            <p className="mt-3 text-sm font-bold leading-6 text-slate-600">{site.message}</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a href="#policies" className="civic-button-primary min-h-11 px-4 text-xs">
                공약 보기
              </a>
              <a href="#profile" className="civic-button-outline min-h-11 px-4 text-xs">
                후보 소개
              </a>
            </div>
          </div>

          <div className="grid gap-2 md:absolute md:bottom-8 md:left-10 md:right-10 md:grid-cols-3 lg:left-1/2 lg:max-w-7xl lg:-translate-x-1/2">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/24 bg-white/92 p-4 text-ink shadow-[0_18px_60px_rgba(0,43,94,0.22)] backdrop-blur-md">
                <p className="text-xs font-black text-dem-blue">{stat.label}</p>
                <p className="mt-1 text-xl font-black">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
