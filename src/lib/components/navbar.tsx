"use client"

import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/pages/menu", label: "Menus" },
  { href: "/pages/loyalty", label: "Loyalty" },
  { href: "/pages/about", label: "About" },
  { href: "/pages/contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-[#10251f]/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center rounded-full border border-[#f7c66b]/45 bg-[#fffaf1] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.22)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)] lg:p-2"
          aria-label="Maria's Mediterranean home"
        >
          <img
            src="/img/logo.jpg"
            alt="Maria's Mediterranean"
            className="h-14 w-14 rounded-full object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />
        </Link>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-4 overflow-x-auto whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#f7f0df] sm:gap-6 lg:overflow-visible lg:text-xs lg:tracking-[0.12em]">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="shrink-0 transition hover:text-[#f7c66b]">
              {link.label}
            </Link>
          ))}
          <Link
            href="https://www.mariasonbell.com/online-ordering"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-md bg-[#d8452f] px-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#b93625] lg:min-h-11"
          >
            Order
          </Link>
        </div>
      </div>
    </nav>
  )
}
