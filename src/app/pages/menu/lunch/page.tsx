import Link from "next/link"

type MenuItem = {
  name: string
  price?: string
  description?: string
}

type MenuSection = {
  title: string
  note?: string
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: "Platters",
    note: "Choice of side: lemon potatoes, fresh cut fries, steamed vegetables, white rice, or vegetable rice.",
    items: [
      {
        name: "Grilled Chicken Breast",
        price: "20",
        description: "Marinated char grilled chicken breast.",
      },
      {
        name: "Souvlaki Platter",
        price: "22",
        description: "Choice of chicken or pork souvlaki.",
      },
      {
        name: "Bifteki",
        price: "22",
        description: "Choice of traditional pork, beef, and lamb patties or chicken patties.",
      },
      {
        name: "Shrimp",
        price: "22",
        description: "Fried or grilled shrimp.",
      },
      {
        name: "Stuffed Portobello",
        price: "20",
        description: "Portobello mushroom stuffed with spinach and feta.",
      },
    ],
  },
  {
    title: "Greek Specialties",
    note: "Served with Greek salad.",
    items: [
      {
        name: "Mousaka",
        price: "25",
        description: "Layered potatoes, eggplants, and ground beef topped with bechamel.",
      },
      {
        name: "Vegetarian Mousaka",
        price: "25",
        description: "Layered potatoes, eggplants, zucchini, and lentils topped with bechamel.",
      },
      {
        name: "Pastichio",
        price: "23",
        description: "Layered casserole of pasta and ground beef topped with bechamel.",
      },
    ],
  },
  {
    title: "Salads",
    note: "Add chicken 10/17, shrimp 10, salmon or octopus 15.",
    items: [
      { name: "Greek", price: "13" },
      { name: "Prasini", price: "12" },
      { name: "Maria's", price: "14" },
      { name: "Horiatiki", price: "16" },
    ],
  },
]

export default function LunchMenuPage() {
  return (
    <div className="bg-[#fffaf1] text-[#17211c]">
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
                Monday - Saturday 11am - 3pm
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                Lunch Menu
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#d8dfd8] sm:text-lg">
                Midday Greek platters, specialties, and salads served with
                Maria&apos;s fresh Mediterranean hospitality.
              </p>
            </div>
            <div className="accent-card-dark rounded-md border bg-white/8 p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#f7c66b]">
                Lunch Details
              </p>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#f7f0df]">
                Platters include a choice of side. Ask the staff about
                gluten-free and allergy-friendly options before ordering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {menuSections.map((section) => (
            <a
              key={section.title}
              href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="accent-card rounded-md border bg-white p-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#24564a]"
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <div className="space-y-8">
          {menuSections.map((section) => (
            <section
              key={section.title}
              id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="accent-card scroll-mt-36 rounded-md border bg-white p-6 sm:p-8"
            >
              <div className="mb-6 flex flex-col gap-3 border-b border-[#e8dcc4] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
                    Lunch
                  </p>
                  <h2 className="text-4xl font-semibold leading-none sm:text-5xl">
                    {section.title}
                  </h2>
                </div>
                {section.note ? (
                  <p className="max-w-xl text-sm font-semibold leading-6 text-[#4f574f]">
                    {section.note}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={`${section.title}-${item.name}`}
                    className="rounded-md border border-[#e8dcc4] bg-[#fffaf1] p-4"
                  >
                    <div className="flex gap-4">
                      <h3 className="flex-1 text-xl font-semibold leading-tight">
                        {item.name}
                      </h3>
                      {item.price ? (
                        <div className="font-serif text-2xl font-semibold leading-none text-[#b6402d]">
                          {item.price}
                        </div>
                      ) : null}
                    </div>
                    {item.description ? (
                      <p className="mt-3 text-sm leading-6 text-[#4f574f]">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

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
