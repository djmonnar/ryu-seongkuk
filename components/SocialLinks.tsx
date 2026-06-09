import { instagramUrl, youtubeUrl } from "@/src/data/candidate";

export function SocialLinks() {
  return (
    <section className="civic-section bg-white">
      <div className="section-shell">
        <div className="grid gap-4 md:grid-cols-2">
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="civic-card civic-card-hover p-7">
            <p className="text-sm font-black text-dem-blue">Instagram</p>
            <h2 className="mt-3 text-2xl font-black text-ink">카드뉴스와 현장 소식</h2>
            <p className="mt-3 text-sm font-bold leading-6 text-slate-600">약속 이행 과정과 주민 소통 기록을 짧고 정확하게 전하겠습니다.</p>
          </a>
          <a href={youtubeUrl} target="_blank" rel="noreferrer" className="civic-card civic-card-hover p-7">
            <p className="text-sm font-black text-dem-blue">YouTube</p>
            <h2 className="mt-3 text-2xl font-black text-ink">현장의 목소리</h2>
            <p className="mt-3 text-sm font-bold leading-6 text-slate-600">주민의 이야기를 듣고 의정활동으로 연결하는 과정을 담겠습니다.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
