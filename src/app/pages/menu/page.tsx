import Link from "next/link"

const menuSections = [
  {
    title: "Dinner & Children's Menu",
    image: "/img/menu/dinnerchildren.avif",
    href: "/pages/menu/dinner-children",
    description: "The full dinner menu, family plates, seafood, meats, sides, and children's options.",
    items: ["Greek spreads", "Whole fish", "Seafood", "Children's plates"],
  },
  {
    title: "Lunch",
    image: "/img/menu/lunch.avif",
    href: "/pages/menu/lunch",
    description: "Monday through Saturday lunch plates from 11 am to 3 pm.",
    items: ["Platters", "Greek specialties", "Salads", "Fresh sides"],
  },
  {
    title: "Catering",
    image: "/img/menu/catering.avif",
    href: "/pages/menu/catering",
    description: "Off-premise catering for gatherings, office meals, holidays, and family events.",
    items: ["Greek salad trays", "Spanakopitakia", "Souvlaki", "Lemon potatoes"],
  },
  {
    title: "Wine & Spirits",
    image: "/img/menu/wine.avif",
    href: "/pages/menu/wine-spirits",
    description: "Bottles, cocktails, and pours chosen to sit naturally with bright Greek food.",
    items: ["Greek wines", "Seafood pairings", "Classic cocktails", "Dinner bottles"],
  },
  {
    title: "Specials",
    image: "/img/menu/specials.avif",
    href: "/pages/menu/specials",
    description: "Ask about the daily specials from Maria's kitchen.",
    items: ["Seasonal seafood", "Homestyle dishes", "Chef favorites", "Desserts"],
  },
]

export default function MenuPage() {
  return (
    <div className="bg-[#fffaf1] text-[#17211c]">
      <section className="relative min-h-[60vh] overflow-hidden">
        <img
          src="/img/menuhero.avif"
          alt="Maria's Mediterranean menu spread"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111d18]/68" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-40 sm:px-8 sm:pt-44 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f7c66b] sm:text-sm">
            Menus
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
            Fresh Greek seafood, lunch plates, catering, wine, and daily specials.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://www.mariasonbell.com/online-ordering"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#d8452f] px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#b93625]"
            >
              Order Online
            </Link>
            <Link
              href="tel:17182791606"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#17211c]"
            >
              Call Restaurant
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="space-y-6 sm:space-y-8">
          {menuSections.map((section, index) => (
            <article
              key={section.title}
              className="accent-card grid overflow-hidden rounded-md border bg-white shadow-[0_18px_50px_rgba(23,33,28,0.08)] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div
                className={`relative min-h-[320px] overflow-hidden bg-[#f8efe0] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,198,107,0.28),transparent_38%)]" />
                <div className="relative flex h-full min-h-[320px] items-center justify-center p-4 sm:p-8">
                  <img
                    src={section.image}
                    alt={`${section.title} menu`}
                    className="max-h-[360px] w-auto max-w-[94%] rounded-sm border border-[#e8dcc4] bg-white object-contain shadow-[0_18px_36px_rgba(23,33,28,0.18)] sm:max-h-[420px] sm:max-w-[88%]"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
                  Maria&apos;s Menu
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-[1.04] sm:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#4f574f]">
                  {section.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-[#eef4ef] px-3 py-2 text-sm font-bold text-[#24564a]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {section.href ? (
                  <Link
                    href={section.href}
                    className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-[#173f37] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#24564a]"
                  >
                    View Full Menu
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#173f37] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f7c66b]">
              Pickup
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              Order online for a 10% pickup discount.
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
