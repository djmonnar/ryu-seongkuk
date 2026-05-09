"use client";

import { useState } from "react";
import { navLinks, site } from "@/src/data/candidate";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <div className="section-shell flex h-[68px] items-center justify-between gap-4">
        <a href="#top" onClick={closeMenu} className="group flex min-w-0 items-center gap-3" aria-label="류성국 홈페이지 처음으로">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-dem-blue text-lg font-black text-white shadow-[0_10px_26px_rgba(0,78,162,0.22)]">
            1가
          </span>
          <span className="min-w-0">
            <span className="block text-base font-black leading-tight text-ink sm:text-lg">{site.name}</span>
            <span className="block truncate text-[11px] font-extrabold text-dem-blue sm:text-xs">{site.neighborhood} 더불어민주당</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm font-black text-slate-700 lg:flex" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-dem-pale hover:text-dem-blue focus:outline-none focus:ring-2 focus:ring-dem-blue focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="civic-button-primary hidden min-h-10 px-4 text-xs sm:inline-flex">
          함께하기
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-dem-deep shadow-sm lg:hidden"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} border-t border-slate-200 bg-white lg:hidden`}>
        <nav className="section-shell grid gap-2 py-4 text-sm font-black text-ink" aria-label="모바일 메뉴">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-between rounded-lg bg-slate-50 px-4 transition hover:bg-dem-blue hover:text-white"
            >
              <span>{link.label}</span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
