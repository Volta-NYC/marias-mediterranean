import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="bg-[#fffaf1] text-[#17211c]">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#b6402d]">
          Contact
        </p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <h1 className="text-5xl font-semibold leading-tight">
            Book dinner, place an order, or ask about catering.
          </h1>
          <p className="text-lg leading-8 text-[#4f574f]">
            Maria&apos;s is open daily for lunch and dinner with indoor seating,
            outdoor dining, online pickup, and free parking nearby.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 sm:px-8 lg:grid-cols-3 lg:px-10">
        <div className="rounded-md bg-[#173f37] p-6 text-white">
          <h2 className="text-2xl font-semibold">Restaurant</h2>
          <p className="mt-5 leading-8 text-[#dce8df]">
            38-11 Bell Blvd
            <br />
            Bayside, NY 11361
          </p>
          <Link
            href="https://www.google.com/maps/search/?api=1&query=38-11+Bell+Blvd+Bayside+NY+11361"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-12 items-center rounded-md bg-white px-5 text-sm font-bold uppercase tracking-[0.18em] text-[#173f37] transition hover:bg-[#f7c66b]"
          >
            Directions
          </Link>
        </div>

        <div className="rounded-md border border-[#e8dcc4] bg-white p-6">
          <h2 className="text-2xl font-semibold">Hours</h2>
          <p className="mt-5 leading-8 text-[#4f574f]">
            Monday - Thursday 11 am to 10 pm
            <br />
            Friday & Saturday 11 am to 11 pm
            <br />
            Sunday 11:30 am to 10 pm
          </p>
        </div>

        <div className="rounded-md border border-[#e8dcc4] bg-white p-6">
          <h2 className="text-2xl font-semibold">Reach Us</h2>
          <p className="mt-5 leading-8 text-[#4f574f]">
            Manager@mariasonbell.com
            <br />
            (718) 279-1606
            <br />
            Fax: (718) 279-1497
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="tel:17182791606"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#d8452f] px-5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b93625]"
            >
              Call Now
            </Link>
            <Link
              href="mailto:Manager@mariasonbell.com"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#173f37] px-5 text-sm font-bold uppercase tracking-[0.18em] text-[#173f37] transition hover:bg-[#173f37] hover:text-white"
            >
              Email
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-md border border-[#e8dcc4] bg-[#fffaf1] p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b6402d]">
              Parking
            </p>
            <p className="mt-4 max-w-3xl text-2xl font-semibold leading-snug">
              Free parking is available in the lot on 213th Street between 38th
              and 39th Avenue, behind the church.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
