import { navLinks, site } from "@/src/data/candidate";

export function Footer() {
  return (
    <footer className="bg-white px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-slate-200 pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-2xl font-black text-ink">
              {site.name} <span className="text-dem-blue">{site.ballotLabel}</span>
            </p>
            <p className="mt-2 text-sm font-bold text-slate-600">
              {site.party} {site.district} {site.neighborhood}
            </p>
            <p className="mt-4 text-xs font-bold leading-6 text-slate-500">
              본 페이지의 후보 정보, 공약, 연락처는 캠프 원문 및 중앙선거관리위원회 후보자 명부 기준으로 업데이트합니다.
            </p>
            <p className="mt-3 text-xs font-semibold text-slate-500">
              Produced by <span className="font-black text-ink">Jitmarketing</span>
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-black text-slate-600 md:justify-end" aria-label="하단 메뉴">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-dem-blue">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="transition hover:text-dem-blue">
              개인정보처리방침
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
