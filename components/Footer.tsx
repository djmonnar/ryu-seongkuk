import { menuLinks, site } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";

export function Footer() {
  return (
    <footer className="bg-white px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-slate-200 pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <img src={assetPath("/images/minjoo-logo.svg")} alt="더불어민주당" className="mb-4 h-10 w-auto" />
            <p className="text-2xl font-black text-ink">
              {site.domain} <span className="text-dem-blue">{site.currentStatus}</span>
            </p>
            <p className="mt-2 text-sm font-bold text-slate-600">
              {site.party} {site.name} · {site.district} {site.neighborhood}
            </p>
            <p className="mt-4 text-xs font-bold leading-6 text-slate-500">
              이 홈페이지는 명곡·봉림 주민과의 약속 이행과 의정활동 기록을 위해 운영합니다.
            </p>
            <p className="mt-3 text-xs font-semibold text-slate-500">
              Copyright © <span className="font-black text-ink">짓마케팅</span>. 대표 서효승. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-black text-slate-600 md:justify-end" aria-label="하단 메뉴">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-dem-blue">
                {link.label}
              </a>
            ))}
            <a href="/contact/" className="transition hover:text-dem-blue">
              개인정보처리방침
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
