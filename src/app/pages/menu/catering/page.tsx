import Link from "next/link"

type MenuItem = {
  name: string
  price: string
  description?: string
}

type MenuSection = {
  title: string
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: "Salads",
    items: [
      { name: "Greek Salad", price: "39" },
      { name: "Mixed Greens", price: "39", description: "With cranberry and feta." },
      { name: "Politiki", price: "39", description: "Cabbage, carrots, celery, and roasted red peppers." },
      { name: "Prasini", price: "34" },
      { name: "Mediterranean Cold Bean Salad", price: "39" },
    ],
  },
  {
    title: "Starters",
    items: [
      { name: "Spanakopitakia", price: "2.25 pc", description: "10 pc. 21, 20 pc. 38, 40 pc. 74." },
      {
        name: "Dips & Chips",
        price: "34 / 49",
        description:
          "Traditional spreads with fried pita chips. 3 spreads for 6-8 people 34. 5 spreads for 10-14 people 49.",
      },
      { name: "Fried Calamari", price: "49" },
    ],
  },
  {
    title: "Entrees",
    items: [
      { name: "Chicken Souvlaki", price: "69", description: "10 skewers." },
      { name: "Pork Souvlaki", price: "69", description: "10 skewers." },
      { name: "Beef Souvlaki", price: "95", description: "8 flank steak skewers." },
      { name: "Grilled Chicken Breast", price: "64" },
      {
        name: "Voreio Chicken",
        price: "75",
        description:
          "Grilled chicken breast topped with sauteed vegetables, olives, and feta cheese. Served over hilopites, Greek egg noodles.",
      },
      { name: "Chicken Bifteki", price: "69", description: "10 Greek style chicken patties." },
      { name: "Bifteki", price: "69", description: "10 Greek style lamb, pork, and beef patties." },
      { name: "Fried Shrimp", price: "74" },
      { name: "Grilled Shrimp", price: "74" },
      { name: "Shrimp Saganaki", price: "99", description: "Sauteed shrimp with fresh tomatoes, peppers, and feta over rice." },
      { name: "Salmon Fillet", price: "90", description: "4 fillets topped with lemon butter sauce." },
      { name: "Fillet of Sole", price: "80", description: "5 fillets topped with garlic cream sauce." },
      { name: "Pastichio", price: "70", description: "8-10 portions." },
      { name: "Mousaka", price: "80", description: "8-10 portions." },
      { name: "Vegetarian Mousaka", price: "80", description: "8-10 portions." },
      {
        name: "Keftedes",
        price: "69",
        description: "Fried meatballs. Available in traditional pork, beef, and lamb, or chicken.",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Fresh Cut Fries", price: "30" },
      { name: "Lemon Potatoes", price: "30" },
      { name: "Mixed Vegetable Rice", price: "30" },
      { name: "Grilled Vegetables", price: "54" },
      { name: "Steamed Vegetables", price: "44" },
      { name: "White Rice", price: "25" },
    ],
  },
]

export default function CateringMenuPage() {
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
                Maria&apos;s Menu
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                Catering Menu
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#d8dfd8] sm:text-lg">
                Greek salads, starters, entrees, and sides prepared for family
                gatherings, holidays, and off-premise events.
              </p>
            </div>
            <div className="accent-card-dark rounded-md border bg-white/8 p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#f7c66b]">
                Plan an Event
              </p>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#f7f0df]">
                Call the restaurant to confirm portions, availability, timing,
                and allergy details for your catering order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="mb-6 border-b border-[#e8dcc4] pb-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
                  Catering
                </p>
                <h2 className="text-4xl font-semibold leading-none sm:text-5xl">
                  {section.title}
                </h2>
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
                      <div className="font-serif text-2xl font-semibold leading-none text-[#b6402d]">
                        {item.price}
                      </div>
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
