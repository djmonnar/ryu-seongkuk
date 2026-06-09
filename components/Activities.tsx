import Image from "next/image";
import type { CSSProperties } from "react";
import { activityRecords, instagramUrl, youtubeUrl } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";
import { SectionHeading } from "@/components/SectionHeading";

export function Activities() {
  return (
    <section id="activities" className="civic-section bg-ink text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.65fr] lg:items-end">
          <SectionHeading
            eyebrow="Council Archive"
            title="말보다 기록으로 보여드리겠습니다"
            description="발언, 질문, 조례, 현장활동을 모아 류성국의 의정활동을 투명하게 공개합니다."
            tone="dark"
          />
          <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-civic" data-reveal style={{ "--index": 1 } as CSSProperties & Record<"--index", number>}>
            <Image
              src={assetPath("/images/activities-square.png")}
              alt="류성국 의정활동과 주민소통 이미지"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {activityRecords.map((activity, index) => (
            <article
              key={activity.title}
              className="rounded-lg border border-white/[0.12] bg-white/[0.08] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
              data-reveal
              style={{ "--index": index + 1 } as CSSProperties & Record<"--index", number>}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-dem-sky">{activity.category}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white/70">{activity.status}</span>
              </div>
              <h3 className="mt-5 text-2xl font-black leading-snug text-white">{activity.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/65">{activity.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-white p-7 text-ink shadow-civic transition duration-500 hover:-translate-y-1 active:translate-y-0">
            <p className="text-sm font-black text-dem-blue">Instagram</p>
            <h3 className="mt-3 text-2xl font-black">카드뉴스와 현장 소식</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-slate-600">약속 이행과 의정활동 기록을 짧고 정확한 콘텐츠로 전하겠습니다.</p>
          </a>
          <a href={youtubeUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-dem-blue p-7 text-white shadow-civic transition duration-500 hover:-translate-y-1 active:translate-y-0">
            <p className="text-sm font-black text-white/70">YouTube</p>
            <h3 className="mt-3 text-2xl font-black">현장의 목소리</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-white/[0.72]">주민의 이야기를 듣고 의정 과제로 연결하는 과정을 담겠습니다.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
