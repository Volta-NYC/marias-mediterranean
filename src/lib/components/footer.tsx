import Link from "next/link"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/marias_mediterranean/",
    icon: (
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.2-2.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/MariasMediterranean",
    icon: (
      <path d="M14 8.2V6.6c0-.8.35-1.25 1.35-1.25H17V2.2A21.9 21.9 0 0 0 14.6 2C12.2 2 10.55 3.45 10.55 6.1v2.1H8v3.55h2.55V22H14V11.75h2.85l.45-3.55H14Z" />
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCIHIrCyLnxVj0BH48I0lyRg",
    icon: (
      <path d="M21.55 7.1a3 3 0 0 0-2.1-2.15C17.6 4.45 12 4.45 12 4.45s-5.6 0-7.45.5A3 3 0 0 0 2.45 7.1 31.4 31.4 0 0 0 2 12a31.4 31.4 0 0 0 .45 4.9 3 3 0 0 0 2.1 2.15c1.85.5 7.45.5 7.45.5s5.6 0 7.45-.5a3 3 0 0 0 2.1-2.15A31.4 31.4 0 0 0 22 12a31.4 31.4 0 0 0-.45-4.9ZM10 15.45v-6.9L15.75 12 10 15.45Z" />
    ),
  },
  {
    name: "Google Maps",
    href: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x89c28a753a4e9c85:0x7c1c887ba658583c?source=g.page.default",
    icon: (
      <path d="M12 2a7.1 7.1 0 0 0-7.1 7.1c0 5.2 7.1 12.9 7.1 12.9s7.1-7.7 7.1-12.9A7.1 7.1 0 0 0 12 2Zm0 9.65a2.65 2.65 0 1 1 0-5.3 2.65 2.65 0 0 1 0 5.3Z" />
    ),
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/marias-mediterranean-bayside",
    icon: (
      <path d="M11.15 2.1c-.7.15-1.15.85-.95 1.55l1.25 5.05c.15.6.9.75 1.25.25l2.85-4.35c.4-.6.2-1.45-.45-1.8a7.55 7.55 0 0 0-3.95-.7Zm6.25 7.05-4.2 1.55c-.55.2-.6.95-.05 1.22l4.05 2.05c.65.32 1.45 0 1.72-.68.35-.9.5-1.85.42-2.85-.05-.75-1.22-1.55-1.94-1.29Zm-5.25 4.1c-.42-.42-1.12-.15-1.18.45l-.5 4.9c-.08.72.5 1.35 1.22 1.35 1.18 0 2.35-.28 3.35-.82.62-.35.78-1.2.32-1.75l-3.21-4.13Zm-2.8-.8c.5-.32.35-1.08-.22-1.28L4.6 9.65c-.7-.25-1.45.2-1.6.92a7.2 7.2 0 0 0 .2 3.65c.22.68 1 1.03 1.65.72l4.5-2.49Zm.25-1.95c.58.08.95-.6.58-1.05L7 5.55c-.48-.58-1.38-.58-1.85 0a7.3 7.3 0 0 0-1.5 3.22c-.12.73.5 1.37 1.23 1.27l4.72-.54Z" />
    ),
  },
  {
    name: "Tripadvisor",
    href: "https://www.tripadvisor.com/Restaurant_Review-g47289-d10768610-Reviews-Maria_s_Mediterranean-Bayside_Queens_New_York.html",
    icon: (
      <path d="M7.2 9.1a3.7 3.7 0 1 0 3.42 5.12L12 16.05l1.38-1.83A3.7 3.7 0 1 0 16.8 9.1a3.66 3.66 0 0 0-2.95 1.48L12 8.1l-1.85 2.48A3.66 3.66 0 0 0 7.2 9.1Zm0 2a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4Zm9.6 0a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM2 7.75h4.1A9.7 9.7 0 0 1 12 6a9.7 9.7 0 0 1 5.9 1.75H22l-2.15 2.35A5.73 5.73 0 0 1 16.8 18a5.65 5.65 0 0 1-4.8-2.62A5.65 5.65 0 0 1 7.2 18a5.73 5.73 0 0 1-3.05-7.9L2 7.75Z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#101714] text-[#d8dfd8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <div className="text-2xl font-semibold text-white">Maria&apos;s Mediterranean</div>
          <p className="mt-4 max-w-md leading-7">
            Fresh Greek seafood, homestyle specials, and family hospitality in
            Bayside, Queens.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-[#f7f0df] transition hover:-translate-y-0.5 hover:border-[#f7c66b] hover:bg-[#f7c66b] hover:text-[#101714]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  {social.icon}
                </svg>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-[#f7c66b]">
            Visit
          </h2>
          <p className="mt-4 leading-7">
            38-11 Bell Blvd
            <br />
            Bayside, NY 11361
            <br />
            (718) 279-1606
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-[#f7c66b]">
            Explore
          </h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/pages/menu" className="hover:text-white">
              Menus
            </Link>
            <Link href="/pages/loyalty" className="hover:text-white">
              Loyalty
            </Link>
            <Link href="/pages/about" className="hover:text-white">
              Chef Story
            </Link>
            <Link href="/pages/contact" className="hover:text-white">
              Hours & Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-[#aeb8ae]">
        ©2026 M. Petridis Productions ·{" "}
        <Link
          href="https://www.novusnyc.org/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[#F6B78D] hover:text-[#F6B78D]"
        >
          Made by Novus
        </Link>
      </div>
    </footer>
  )
}
