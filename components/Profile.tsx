import type { CSSProperties } from "react";
import { profile, site } from "@/src/data/candidate";
import { SectionHeading } from "@/components/SectionHeading";

const profileDescription =
  "우리동네 젊은 일꾼 류성국은 명곡과 봉림의 오늘을 가까이에서 듣고, 주민의 일상에 필요한 변화를 빠르게 찾는 후보입니다. 작은 민원도 생활의 문제로 보고, 교육·교통·행정·예산을 젊은 감각과 성실한 실행력으로 챙기겠습니다.";

export function Profile() {
  return (
    <section id="profile" className="civic-section bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading eyebrow="Candidate" title={`${site.name}을 소개합니다`} description={profileDescription} />

          <div className="grid gap-4 lg:grid-cols-6">
            <article className="civic-card civic-card-hover p-6 lg:col-span-6" data-reveal style={{ "--index": 1 } as CSSProperties & Record<"--index", number>}>
              <p className="text-sm font-black text-dem-blue">학력</p>
              <h3 className="mt-3 text-2xl font-black leading-snug text-ink md:text-3xl">{profile.education}</h3>
            </article>

            <article className="civic-card civic-card-hover p-6 lg:col-span-4" data-reveal style={{ "--index": 2 } as CSSProperties & Record<"--index", number>}>
              <p className="text-sm font-black text-dem-blue">경력</p>
              <ul className="mt-4 grid gap-3 text-base font-bold leading-7 text-slate-700">
                {profile.careers.map((career) => (
                  <li key={career} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-dem-sky" />
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-dem-blue/20 bg-dem-pale p-6 shadow-civic-soft lg:col-span-2" data-reveal style={{ "--index": 3 } as CSSProperties & Record<"--index", number>}>
              <p className="text-sm font-black text-dem-blue">공개자료 기준 안내</p>
              <ul className="mt-4 grid gap-2 text-sm font-bold leading-6 text-slate-700">
                {profile.disclosure.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
