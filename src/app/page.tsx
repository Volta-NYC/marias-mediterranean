import Link from "next/link"

const menuHighlights = [
  {
    name: "Whole Fish",
    detail: "Greek orata, pink sea bream, and daily market selections grilled simply.",
  },
  {
    name: "Greek Specials",
    detail: "Moussaka, pastichio, lemon potatoes, souvlaki, and homestyle plates.",
  },
  {
    name: "Seafood",
    detail: "Scallops, salmon, shrimp saganaki, calamari, and fresh coastal favorites.",
  },
  {
    name: "Gluten Free",
    detail: "A broad gluten-free menu supported by a staff trained on ingredients.",
  },
]

const serviceCards = [
  "Indoor and outdoor dining seven days a week",
  "Pickup ordering with a 10% online discount",
  "Catering for family gatherings and off-premise events",
  "Free parking behind the church on 213th Street",
]

export default function HomePage() {
  return (
    <div className="bg-[#fffaf1] text-[#17211c]">
      <section className="relative min-h-[86vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85"
          alt="Grilled Mediterranean seafood and vegetables"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111d18]/90 via-[#111d18]/60 to-[#111d18]/25" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-6 pb-10 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-4xl pb-8 text-white">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#f7c66b] sm:text-sm">
              Bayside Greek Seafood
            </p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              Maria&apos;s Mediterranean
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#f7f0df] sm:text-xl">
              Homestyle Greek cooking, fresh whole fish, and generous family
              hospitality on Bell Boulevard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://www.mariasonbell.com/online-ordering"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#d8452f] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#b93625]"
              >
                Order Online
              </Link>
              <Link
                href="/pages/menu"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#17211c]"
              >
                View Menus
              </Link>
            </div>
          </div>
          <div className="grid gap-3 border-t border-white/25 pt-5 text-sm font-semibold leading-6 text-white sm:grid-cols-3">
            <div>38-11 Bell Blvd, Bayside, NY 11361</div>
            <div>(718) 279-1606</div>
            <div>Lunch and dinner daily</div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8dcc4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {serviceCards.map((item) => (
            <div key={item} className="border-[#e8dcc4] py-4 sm:px-5 lg:border-l">
              <p className="text-sm font-bold leading-6 text-[#24564a]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
            From Skoutari to Bayside
          </p>
          <h2 className="mt-4 max-w-xl text-5xl font-semibold leading-[1.04] text-[#17211c]">
            A kitchen built on memory, freshness, and a modern Greek point of view.
          </h2>
        </div>
        <div className="space-y-5 text-[17px] leading-8 text-[#4f574f] sm:text-lg">
          <p>
            Chef Maria Petridis grew up in Serres, Greece, learning the details
            of Mediterranean cooking by watching her mother. At Maria&apos;s, those
            recipes meet New York energy through grilled fish, bright herbs,
            lemon potatoes, and daily specials.
          </p>
          <p>
            The restaurant opened in Bayside on January 10, 2011, with a clear
            promise: fresh ingredients, generous plates, and a table where
            families with different dietary needs can all eat well.
          </p>
        </div>
      </section>

      <section className="bg-[#173f37] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f7c66b]">
                Menu
              </p>
              <h2 className="mt-4 text-5xl font-semibold leading-[1.04]">What to come hungry for</h2>
            </div>
            <Link
              href="/pages/menu"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#173f37] transition hover:bg-[#f7c66b]"
            >
              Explore Menu
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {menuHighlights.map((item) => (
              <article key={item.name} className="rounded-md border border-white/18 bg-white/8 p-6">
                <h3 className="text-3xl font-semibold leading-none">{item.name}</h3>
                <p className="mt-5 text-[15px] leading-7 text-[#dce8df]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="min-h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=85"
            alt="Mediterranean dinner with grilled meat, vegetables, and lemon"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
        <div className="bg-white px-6 py-16 sm:px-8 lg:px-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
            Visit
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-[1.04] text-[#17211c]">
            Easy dinner plans on Bell Boulevard.
          </h2>
          <div className="mt-8 grid gap-6 text-[#4f574f] sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-[#17211c]">Hours</h3>
              <p className="mt-3 text-[15px] leading-7">
                Monday - Thursday 11 am to 10 pm
                <br />
                Friday & Saturday 11 am to 11 pm
                <br />
                Sunday 11:30 am to 10 pm
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#17211c]">Contact</h3>
              <p className="mt-3 text-[15px] leading-7">
                Manager@mariasonbell.com
                <br />
                (718) 279-1606
                <br />
                38-11 Bell Blvd
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="tel:17182791606"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#173f37] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#24564a]"
            >
              Call
            </Link>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=38-11+Bell+Blvd+Bayside+NY+11361"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#173f37] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#173f37] transition hover:bg-[#173f37] hover:text-white"
            >
              Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
