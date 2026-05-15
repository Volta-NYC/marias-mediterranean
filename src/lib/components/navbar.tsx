"use client"

import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/pages/menu", label: "Menus" },
  { href: "/pages/about", label: "About" },
  { href: "/pages/contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-[#10251f]/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-[#f7c66b]/45 bg-[#fffaf1] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.22)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)]"
          aria-label="Maria's Mediterranean home"
        >
          <img
            src="/img/logo.jpg"
            alt="Maria's Mediterranean"
            className="h-20 w-20 rounded-full object-contain"
          />
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#f7f0df]">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#f7c66b]">
              {link.label}
            </Link>
          ))}
          <Link
            href="https://www.mariasonbell.com/online-ordering"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#d8452f] px-4 py-2 text-white transition hover:bg-[#b93625]"
          >
            Order
          </Link>
        </div>
      </div>
    </nav>
  )
}
