import Link from "next/link"

type Special = {
  name: string
  category: string
  description: string
}

const specials: Special[] = [
  {
    name: "Summer Salad",
    category: "Salad",
    description:
      "Watermelon tossed with diced onions, cucumber and mint, served over baby arugula & drizzled with a honey balsamic.",
  },
  {
    name: "Berry on the Blvd",
    category: "Cocktail",
    description:
      "Cocktail of muddled strawberries, Rakomelo (Greek honey liqueur) & lemonade.",
  },
]

export default function SpecialsPage() {
  return (
    <div className="bg-[#fffaf1] text-[#17211c]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#10251f] px-5 pb-16 pt-40 text-white sm:px-8 sm:pt-44 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(247,198,107,0.22),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(216,69,47,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/pages/menu"
            className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f7c66b] hover:text-white"
          >
            Back to Menus
          </Link>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f7c66b]">
                Maria&apos;s Menu
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                Specials
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#d8dfd8] sm:text-lg">
                Seasonal dishes and handcrafted cocktails, available for a
                limited time.
              </p>
            </div>
            <div className="accent-card-dark rounded-md border bg-white/8 p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#f7c66b]">
                Ask Your Server
              </p>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#f7f0df]">
                Specials are available while supplies last. Ask your server
                about today&apos;s additional offerings and seasonal
                ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specials Grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-10 border-b border-[#e8dcc4] pb-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
            Featured
          </p>
          <h2 className="mt-2 text-4xl font-semibold leading-none sm:text-5xl">
            Today&apos;s Specials
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {specials.map((special) => (
            <div
              key={special.name}
              className="accent-card rounded-md border border-[#e8dcc4] bg-white p-6 sm:p-8"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b6402d]">
                {special.category}
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                {special.name}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#4f574f]">
                {special.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#173f37] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f7c66b]">
              Pickup Special
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              Order online for 10% off pickup.
            </h2>
          </div>
          <Link
            href="https://www.mariasonbell.com/online-ordering"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-bold uppercase tracking-[0.12em] text-[#173f37] transition hover:bg-[#f7c66b]"
          >
            Start Order
          </Link>
        </div>
      </section>
    </div>
  )
}