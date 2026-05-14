import Link from "next/link"

const menuSections = [
  {
    title: "Dinner & Children's Menu",
    description: "The full dinner menu, family plates, seafood, meats, sides, and children's options.",
    items: ["Traditional Greek spreads", "Appetizers", "Soups & salads", "Kreata meats"],
  },
  {
    title: "Seafood & Whole Fish",
    description: "Fresh fish and seafood served with lemon potatoes, rice, fries, vegetables, or horta.",
    items: ["Thalassina seafood", "Whole grilled fish", "Salmon fillet", "Shrimp saganaki"],
  },
  {
    title: "Lunch",
    description: "Monday through Saturday lunch plates from 11 am to 3 pm.",
    items: ["Platters", "Greek specialties", "Salads", "Fresh sides"],
  },
  {
    title: "Catering",
    description: "Off-premise catering for gatherings, office meals, holidays, and family events.",
    items: ["Greek salad trays", "Spanakopitakia", "Souvlaki", "Lemon potatoes"],
  },
  {
    title: "Wine & Spirits",
    description: "Bottles, cocktails, and pours chosen to sit naturally with bright Greek food.",
    items: ["Greek wines", "Seafood pairings", "Classic cocktails", "Dinner bottles"],
  },
  {
    title: "Specials",
    description: "Ask about the daily specials from Maria's kitchen.",
    items: ["Seasonal seafood", "Homestyle dishes", "Chef favorites", "Desserts"],
  },
]

export default function MenuPage() {
  return (
    <div className="bg-[#fffaf1] text-[#17211c]">
      <section className="relative min-h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1800&q=85"
          alt="Mediterranean table with salad, vegetables, bread, and shared plates"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111d18]/68" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-6 pb-14 pt-32 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#f7c66b]">
            Menus
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-white">
            Fresh Greek seafood, lunch plates, catering, wine, and daily specials.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://www.mariasonbell.com/online-ordering"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#d8452f] px-6 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b93625]"
            >
              Order Online
            </Link>
            <Link
              href="tel:17182791606"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#17211c]"
            >
              Call Restaurant
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {menuSections.map((section) => (
            <article key={section.title} className="rounded-md border border-[#e8dcc4] bg-white p-6">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-4 leading-7 text-[#4f574f]">{section.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-[#eef4ef] px-3 py-2 text-sm font-semibold text-[#24564a]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#173f37] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f7c66b]">
              Pickup
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Order online for a 10% pickup discount.
            </h2>
          </div>
          <Link
            href="https://www.mariasonbell.com/online-ordering"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-bold uppercase tracking-[0.18em] text-[#173f37] transition hover:bg-[#f7c66b]"
          >
            Start Order
          </Link>
        </div>
      </section>
    </div>
  )
}
