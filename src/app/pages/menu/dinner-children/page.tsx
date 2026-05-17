import Link from "next/link"

type MenuItem = {
  name: string
  price?: string
  description?: string
  glutenFree?: boolean
}

type MenuSection = {
  title: string
  eyebrow?: string
  note?: string
  items: MenuItem[]
}

const sideChoices = [
  "Rice",
  "Vegetable rice",
  "Lemon potatoes",
  "Fresh cut fries",
  "Steamed vegetables",
]

const seafoodSideChoices = [...sideChoices, "Horta"]

const menuSections: MenuSection[] = [
  {
    title: "Dips & Chips",
    items: [
      { name: "Choices of three spreads, pita chips", price: "17" },
      { name: "Six spreads", price: "25" },
      { name: "Pikilia, choices of three spreads", price: "15" },
      { name: "Pikilia, six spreads", price: "22" },
      {
        name: "Individual spreads",
        price: "10",
        description:
          "Tirokafteri, tzatziki, hummus, taramosalata, melitzanosalata, and skordalia.",
      },
      { name: "Dolmades", price: "12", description: "Stuffed grape leaves.", glutenFree: true },
      { name: "Raw bar", price: "MP", description: "Oysters or clams on the half shell.", glutenFree: true },
    ],
  },
  {
    title: "Salads",
    items: [
      {
        name: "Seafood Salad",
        price: "23",
        description: "Shrimp, calamari, octopus, vegetables, beans, and herbs.",
        glutenFree: true,
      },
      {
        name: "Greek",
        price: "16",
        description:
          "Romaine, tomatoes, cucumber, peppers, onions, scallions, dill, kalamata olives, pepperoncini, dolmades, and feta with olive oil vinaigrette.",
        glutenFree: true,
      },
      {
        name: "Horiatiki",
        price: "18",
        description:
          "Tomatoes, cucumber, peppers, onions, kalamata olives, pepperoncini, dolmades, and feta with olive oil vinaigrette.",
        glutenFree: true,
      },
      {
        name: "Beets",
        price: "16",
        description: "Homemade beets over romaine with olive oil vinaigrette and fresh garlic.",
        glutenFree: true,
      },
      {
        name: "Prasini",
        price: "15",
        description: "Romaine, scallions, dill, olives, and feta with olive oil vinaigrette.",
        glutenFree: true,
      },
      {
        name: "Mixed Greens",
        price: "17",
        description: "Baby greens, cranberries, and feta tossed in homemade balsamic vinaigrette.",
        glutenFree: true,
      },
      {
        name: "Politiki",
        price: "17",
        description: "Cabbage, carrots, celery, and roasted peppers with olive oil and lemon dressing. Add beets 21.",
        glutenFree: true,
      },
      {
        name: "Mediterranean Bean Salad",
        price: "16",
        description:
          "Variety of beans, vegetables, and herbs over romaine with homemade olive oil and lemon juice dressing.",
        glutenFree: true,
      },
    ],
    note: "Add chicken 10/17, shrimp 10, salmon 16, or octopus 15 to any salad.",
  },
  {
    title: "Orektika",
    eyebrow: "Starters",
    items: [
      { name: "Spanakopita", price: "11", description: "Spinach pie." },
      { name: "Stuffed Portobello", price: "16", description: "Portobello, spinach, and feta.", glutenFree: true },
      { name: "Kolokithakia", price: "20", description: "Pan fried zucchini." },
      { name: "Gigantes", price: "14", description: "Giant beans oven baked in tomato sauce.", glutenFree: true },
      { name: "Spitiko Loukaniko", price: "18", description: "Homemade spicy or sweet sausage.", glutenFree: true },
      { name: "Saganaki", price: "17", description: "Pan fried kefalograviera cheese." },
      { name: "Feta Saganaki", price: "17", description: "Sesame coated and pan fried, topped with honey and craisins." },
      { name: "Haloumi", price: "13", description: "Grilled goat cheese with grilled tomatoes on pita." },
      { name: "Stuffed Clams", price: "16", description: "Crabmeat and vegetables." },
      { name: "Calamari", price: "20", description: "Fried or grilled.", glutenFree: true },
      { name: "Midia Axnista", price: "25", description: "Mussels, tomato sauce, ouzo, and feta.", glutenFree: true },
      { name: "Spinach Parmesan", price: "25", description: "Sauteed spinach with parmesan cream sauce." },
      { name: "Octopus", price: "28", description: "Charcoal grilled with balsamic glaze.", glutenFree: true },
      { name: "Keftedes", price: "12", description: "Pan fried Greek style meatballs." },
      { name: "Crab Cake", price: "16/29", description: "Crabmeat and vegetables, pan fried and served with homemade sauce." },
      { name: "Loaded Hummus", price: "19", description: "Hummus topped with sauteed meat, diced red onions, tomatoes, and olives. Served with pita chips." },
      { name: "Maridaki", price: "20", description: "Pan fried smelts." },
    ],
  },
  {
    title: "Soups",
    items: [
      { name: "Avgolemono", price: "12", description: "Chicken soup." },
      { name: "Fakes", price: "12", description: "Lentil soup." },
    ],
  },
  {
    title: "Kreatika",
    eyebrow: "Meats",
    note: `Choose one side: ${sideChoices.join(", ")}. Add side salad 5.`,
    items: [
      { name: "Chicken Souvlaki", price: "24", description: "Chargrilled on a skewer.", glutenFree: true },
      { name: "Beef Souvlaki", price: "32", description: "Chargrilled on a skewer.", glutenFree: true },
      { name: "Pork Souvlaki", price: "24", description: "Chargrilled on a skewer.", glutenFree: true },
      { name: "Lamb Souvlaki", price: "32", description: "Chargrilled on a skewer.", glutenFree: true },
      { name: "Traditional Bifteki", price: "24", description: "Beef, pork, and lamb ground with herbs." },
      { name: "Chicken Bifteki", price: "24", description: "Chargrilled chicken." },
      { name: "Grilled Chicken Breast", price: "22" },
      { name: "Gemisto", price: "34", description: "Breast stuffed with spinach and feta, topped with a creamy light garlic sauce." },
      { name: "Voreio", price: "32", description: "Grilled breast topped with sauteed vegetables, olives, and feta cheese over Greek egg noodles." },
      { name: "Kotobacon", price: "30", description: "Cubes of grilled breast wrapped in bacon.", glutenFree: true },
      { name: "Pork Chops", price: "30", description: "Chargrilled." },
      { name: "Baby Lamb Chops", price: "44", description: "Chargrilled." },
      { name: "Surf & Turf", price: "MP", description: "Add grilled shrimp 15 or lobster tail MP to your choice of meat." },
      { name: "Meat Platter", price: "64 / 119", description: "Small or large assortment of meats." },
    ],
  },
  {
    title: "Thalassina",
    eyebrow: "Seafood",
    note: `Choose one side: ${seafoodSideChoices.join(", ")}. Add side salad 5.`,
    items: [
      { name: "Fish of the Day", price: "MP", description: "Chargrilled and dressed with olive oil and lemon juice.", glutenFree: true },
      { name: "Lavraki", price: "MP", description: "Branzino.", glutenFree: true },
      { name: "Orata", price: "MP", description: "Gilt-head bream, European porgy.", glutenFree: true },
      { name: "Bakaliarakia", price: "24", description: "Whole fried whiting." },
      { name: "Sardines", price: "24", description: "Grilled or fried.", glutenFree: true },
      { name: "Shrimp", price: "30", description: "Grilled or fried.", glutenFree: true },
      { name: "Shrimp Scampi", price: "32" },
      { name: "Swordfish Souvlaki", price: "34", glutenFree: true },
      { name: "Swordfish Steak", price: "36", description: "Chargrilled and topped with a creamy scallion sauce.", glutenFree: true },
      { name: "Sole", price: "33", description: "Broiled and topped with creamy parsley and light garlic sauce.", glutenFree: true },
      { name: "Salmon", price: "38", description: "Broiled and topped with lemon, butter, and light garlic sauce." },
      { name: "Gemisto Flounder", price: "38", description: "Stuffed with spinach and feta, topped with a creamy light garlic sauce.", glutenFree: true },
      { name: "Scallops", price: "37", description: "Broiled and topped with lemon, butter, and light garlic sauce." },
      { name: "Shrimp & Scallops", price: "43" },
    ],
  },
  {
    title: "Greek Specialties",
    items: [
      { name: "Pastichio", price: "25", description: "Layered pasta, ground beef, and bechamel. Served with Greek salad." },
      { name: "Mousaka", price: "28", description: "Layered eggplant, potatoes, ground beef, and bechamel. Served with Greek salad." },
      { name: "Vegetarian Mousaka", price: "28", description: "Layered eggplant, potatoes, lentil, zucchini, and bechamel. Served with Greek salad." },
      { name: "Kokkinisto", price: "29", description: "Boneless short rib stew served over rice.", glutenFree: true },
      { name: "Lamb Shank", price: "MP", description: "Slow cooked with vegetables in a light tomato sauce. Served with orzo." },
      { name: "Garides Saganaki", price: "36", description: "Sauteed with vegetables and feta in a light tomato sauce. Served over white or vegetable rice.", glutenFree: true },
    ],
  },
  {
    title: "Children's Menu",
    items: [
      { name: "Chicken Fingers", price: "18" },
      { name: "Hamburger", price: "17" },
      { name: "Cheese Burger", price: "18" },
      { name: "Chicken or Pork Souvlaki", price: "17", glutenFree: true },
      { name: "Fried Shrimp", price: "21" },
      { name: "Pita Pizza", price: "8" },
      { name: "Pasta", price: "12", description: "Choice of parmesan cheese or marinara. Add chicken 9." },
    ],
  },
  {
    title: "For The Table",
    items: [
      { name: "Fresh Cut Fries", price: "10", glutenFree: true },
      { name: "Lemon Potatoes", price: "10", glutenFree: true },
      { name: "White Rice", price: "8", glutenFree: true },
      { name: "Steamed Vegetables", price: "12", glutenFree: true },
      { name: "Vegetable Rice", price: "10", glutenFree: true },
      { name: "Horta", price: "10", glutenFree: true },
      { name: "Grilled Vegetables", price: "20", glutenFree: true },
    ],
  },
]

export default function DinnerChildrenMenuPage() {
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
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f7c66b]">
                Dinner & Children&apos;s Menu
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                Greek seafood, meats, specialties, starters, and children&apos;s plates.
              </h1>
            </div>
            <div className="accent-card-dark rounded-md border bg-white/8 p-5">
              <p className="text-sm font-semibold leading-7 text-[#f7f0df]">
                Items marked with an asterisk on the original menu are shown here
                as gluten-free friendly. Please ask staff about preparation and
                allergies before ordering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Starters", "Meats", "Seafood", "Children's Menu"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
              className="accent-card rounded-md border bg-white p-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#24564a]"
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <div className="space-y-8">
          {menuSections.map((section) => (
            <section
              key={section.title}
              id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
              className="accent-card scroll-mt-36 rounded-md border bg-white p-6 sm:p-8"
            >
              <div className="mb-6 flex flex-col gap-2 border-b border-[#e8dcc4] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  {section.eyebrow ? (
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
                      {section.eyebrow}
                    </p>
                  ) : null}
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
                    {item.glutenFree ? (
                      <span className="mt-4 inline-flex rounded-md bg-[#eef4ef] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#24564a]">
                        Gluten free
                      </span>
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
