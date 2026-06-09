import { site } from "@/src/data/candidate";
import { SectionHeading } from "@/components/SectionHeading";

export function ThanksMessage() {
  return (
    <section id="profile" className="civic-section bg-white">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Thank You"
            title="보내주신 선택의 무게를 잊지 않겠습니다"
            description={`${site.neighborhood} 주민 여러분께서 보내주신 믿음을 무겁게 받아들입니다. 선거 때 드린 약속은 말로 끝내지 않고, 의회 안에서 하나씩 확인하고 기록하겠습니다.`}
            align="center"
          />
          <div className="mt-8 rounded-lg border border-dem-blue/15 bg-dem-pale p-6 shadow-civic-soft md:p-8" data-reveal>
            <p className="text-lg font-black leading-8 text-ink md:text-2xl">
              다른 생각을 가진 분들께도 함께 이웃인 생활정치로 보답하겠습니다.
            </p>
            <p className="mt-4 text-base font-semibold leading-8 text-slate-600">
              주민의 제안, 현장의 불편, 약속 이행 과정을 차분히 공개하며 명곡·봉림의 변화를 만들어가겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
