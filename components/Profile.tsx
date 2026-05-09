import { profile, site } from "@/src/data/candidate";
import { SectionHeading } from "@/components/SectionHeading";

export function Profile() {
  return (
    <section id="profile" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Candidate"
            title={`${site.name}을 소개합니다`}
            description={profile.intro}
          />

          <div className="grid gap-4">
            <article className="civic-card p-6">
              <p className="text-sm font-black text-dem-blue">학력</p>
              <h3 className="mt-3 text-2xl font-black leading-8 text-ink">{profile.education}</h3>
            </article>

            <article className="civic-card p-6">
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

            <article className="rounded-lg border border-dem-blue/20 bg-dem-pale p-6">
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
