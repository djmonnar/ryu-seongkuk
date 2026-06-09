import Image from "next/image";
import type { CSSProperties } from "react";
import { activityRecords } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";
import { SectionHeading } from "@/components/SectionHeading";

export function RecentActivities() {
  return (
    <section className="civic-section bg-ink text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Council Archive"
              title="최근 의정활동·현장활동"
              description="발언, 질문, 조례, 현장활동을 모아 류성국의 의정활동을 투명하게 공개하겠습니다."
              tone="dark"
            />
            <a href="/activities/" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-white px-5 text-sm font-black text-ink shadow-civic-soft transition hover:-translate-y-0.5">
              의정활동 보기
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-white/10 bg-white/10">
              <Image
                src={assetPath("/images/activities-square.png")}
                alt="류성국 의정활동과 주민 소통 이미지"
                fill
                sizes="(min-width: 768px) 32vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-3">
              {activityRecords.slice(0, 4).map((activity, index) => (
                <article
                  key={activity.title}
                  className="rounded-lg border border-white/[0.12] bg-white/[0.08] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                  data-reveal
                  style={{ "--index": index + 1 } as CSSProperties & Record<"--index", number>}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black text-dem-sky">{activity.category}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black text-white/70">{activity.status}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-black leading-6">{activity.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/65">{activity.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
