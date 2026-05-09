"use client";

import { useState } from "react";
import { menuLinks, site } from "@/src/data/candidate";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-3 z-50 px-3">
      <div className="mx-auto flex h-[68px] w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-white/70 bg-white/[0.88] px-5 shadow-[0_18px_55px_rgba(0,43,94,0.13)] ring-1 ring-dem-blue/5 backdrop-blur-xl sm:px-6">
        <a href="/#top" onClick={closeMenu} className="group flex min-w-0 items-center gap-3" aria-label="류성국 홈페이지 처음으로">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-dem-blue text-lg font-black text-white shadow-[0_10px_26px_rgba(0,78,162,0.22)] transition duration-500 group-hover:scale-[1.04]">
            1가
          </span>
          <span className="min-w-0">
            <span className="block text-base font-black leading-tight text-ink sm:text-lg">{site.name}</span>
            <span className="block truncate text-[11px] font-extrabold text-dem-blue sm:text-xs">
              {site.neighborhood} 더불어민주당
            </span>
          </span>
        </a>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-dem-deep shadow-sm transition duration-500 active:scale-[0.98]"
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

      <div className={`${isOpen ? "block" : "hidden"} mx-auto mt-2 max-w-4xl rounded-lg border border-white/70 bg-white/[0.94] shadow-civic backdrop-blur-xl`}>
        <nav className="grid gap-2 p-4 text-sm font-black text-ink sm:grid-cols-2 lg:grid-cols-3" aria-label="전체 메뉴">
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="group flex min-h-16 items-center justify-between gap-4 rounded-lg bg-slate-50 px-4 transition duration-500 hover:bg-dem-blue hover:text-white"
            >
              <span>
                <span className="block text-base">{link.label}</span>
                <span className="mt-1 block text-xs font-bold text-slate-500 transition group-hover:text-white/70">{link.description}</span>
              </span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
