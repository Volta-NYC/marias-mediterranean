import Link from "next/link"
import GoogleMap from "@/lib/components/google-map"

export default function Footer() {
  return (
    <footer className="bg-[#101714] text-[#d8dfd8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-[1.1fr_0.8fr_0.7fr_1fr] lg:px-10">
        <div>
          <div className="text-2xl font-semibold text-white">Maria&apos;s Mediterranean</div>
          <p className="mt-4 max-w-md leading-7">
            Fresh Greek seafood, homestyle specials, and family hospitality in
            Bayside, Queens.
          </p>
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
            <Link href="/pages/about" className="hover:text-white">
              Chef Story
            </Link>
            <Link href="/pages/contact" className="hover:text-white">
              Hours & Contact
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-md border border-white/10 bg-white/5 p-2">
          <GoogleMap className="min-h-[190px] rounded-sm" />
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-[#aeb8ae]">
        (c) {new Date().getFullYear()} Maria&apos;s Mediterranean. Website made by VoltaNYC.
      </div>
    </footer>
  )
}
