import Link from "next/link"

type MenuItem = {
  name: string
  price?: string
  description?: string
  origin?: string
}

type MenuSection = {
  title: string
  eyebrow?: string
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: "Red Wines",
    items: [
      { name: "Cabernet Sauvignon Domaine Bousquet", price: "10/40", description: "Organic, fresh and clean with berry aromas and flavors. Medium body.", origin: "Mendoza, Argentina" },
      { name: "Merlot Domaine Bousquet", price: "10/40", description: "Organic, red fruit and spicy aromas. Medium body with ripe fruit and velvety tannins.", origin: "Mendoza, Argentina" },
      { name: "Malbec Domaine Bousquet", price: "10/40", description: "Organic, mushrooms, figs, and berry aromas. Medium body and round velvety tannins.", origin: "Mendoza, Argentina" },
      { name: "Pinot Noir Le Grand", price: "10/40", description: "Unique French pedigree. Spiced cherry flavor and aromas. Pairs beautifully with fish.", origin: "Limoux, Southern France" },
      { name: "Syrah 'The Black Sheep' Nico Lazaridi", price: "10/40", description: "Mature red fruits, plum, hints of pepper, soft tannins, and fruity aftertaste.", origin: "Pangeon, Greece" },
      { name: "Merlot 'Elias' Estate Andriopoulos", price: "30", description: "Soft, fruity, and smooth wine with plum undertones.", origin: "Long Island" },
      { name: "Merlot Hatzimichalis", price: "70", description: "Vibrant deep red color with mocha and vanilla aromas. Medium body.", origin: "Atlanti Valley, Greece" },
      { name: "Chianti", price: "40", description: "Aged 12 months in oak barrels. Intense lingering aroma and dry velvety flavor.", origin: "Italy" },
      { name: "Pinot Noir Papaioannou", price: "60", description: "Oak matured for 12 months. Earth driven layers, cedar, strawberry, cherry, and savory finish.", origin: "Xerocambos private vineyards, Greece" },
      { name: "Refosco Domaine Merkouri", price: "50", description: "Red fruits, chocolate, coffee, vanilla, and cinnamon. Medium structure with fine tannins.", origin: "Letrini, Peloponese region, Greece" },
      { name: "Cabernet Sauvignon Hatzimichalis", price: "45", description: "Blackberry and blackcurrant fruit with a long savory finish.", origin: "Drama, Greece" },
      { name: "Cabernet Franc 'Cava' Amethystos", price: "90", description: "Domaine Costa Lazaridi. Blackberry and blackcurrant fruit with a long savory finish.", origin: "Drama, Greece" },
      { name: "Cabernet Sauvignon 'Kapnias' Hatzimichalis", price: "65", description: "Matured 24 months in new French oak barrels with blackcurrants, dark berries, and vanilla.", origin: "Atlanti Valley, Greece" },
      { name: "Amethystos Rouge", price: "45", description: "Cabernet Sauvignon, Agiorgitiko, and Merlot. Red forest fruit, cherry jam, spices, and oak.", origin: "Drama, Greece" },
      { name: "Oenotria Land", price: "75", description: "Cabernet Sauvignon and Agiorgitiko with black fruit, vanilla, chocolate, spices, and long finish.", origin: "Drama, Greece" },
      { name: "Agiorgitiko 'Feast' Semeli Winery", price: "30", description: "Cherry and blueberry aromas. Balanced acidity and light body.", origin: "Chrisohou, Naossa, Greece" },
    ],
  },
  {
    title: "White Wines",
    items: [
      { name: "Pinot Grigio", price: "9/25", description: "Light, crisp, and dry with lime and pear notes.", origin: "Italy" },
      { name: "Rhoditis Kouros", price: "9/32", description: "Floral nose, orange, lemon, and kiwi. Medium body and light finish.", origin: "Patra, Greece" },
      { name: "Riesling Starling Castle", price: "9/32", description: "Semi-sweet with citrus, pear, fruity mid palate, and crisp acidity.", origin: "Mosel, Germany" },
      { name: "Chardonnay Le Grand", price: "10/40", description: "Lime, mango, toasted vanilla, lemon-lime palate, subtle oak, and long finish.", origin: "Languedoc-Roussillon, France" },
      { name: "Pinot Noir Rose Maison Nicolas", price: "9/36", description: "Herbal and ripe fruit scents with plum and cherry tones. Medium palate.", origin: "Protegee, France" },
      { name: "Sauvignon Blanc Overstone", price: "9/36", description: "Aromatic nose, crisp dry wine with zesty gooseberry and balanced finish.", origin: "Malborough, New Zealand" },
      { name: "Chardonnay Hatzimichalis", price: "46", description: "Fresh, crisp, subtle oak, citrus, white peach, tropical fruit, honey, vanilla, and long finish.", origin: "Atlanti Valley, Greece" },
      { name: "Chardonnay Elias", price: "30", description: "Cool climate buttery Chardonnay with medium body and citrus flavors.", origin: "Long Island" },
      { name: "Pinot Grigio Santa Margherita", price: "65", description: "Clean and crisp with intense aroma, bone-dry taste, and Golden Delicious apple flavor.", origin: "Alto Adige, Italy" },
      { name: "Pinot Grigio San Angelo", price: "49", description: "Pear, peach, anise, and honey. Fruity, crisp, and refreshing.", origin: "Tuscany, Italy" },
      { name: "Sauvignon Blanc 'Magic Mountain' Nico Lazaridi", price: "80", description: "White peach, mirabel, jasmine, lily, butter, citrus tone, medium body, and long finish.", origin: "Drama, Greece" },
      { name: "Malagouzia Domaine Costa Lazaridi", price: "50", description: "White flowers, peach, apricot, round body, refreshing acidity, and long finish.", origin: "Drama, Macedonia, Greece" },
      { name: "Moschofilero 'Feast' Semeli Winery", price: "40", description: "Rose petals, lemon blossom, citrus, fruit-driven balance, and medium acidity.", origin: "Chrisohou, Naossa, Greece" },
      { name: "Assyrtiko", price: "55", description: "Santorini grape with minerality, exuberant palate, crisp acidity, and long finish.", origin: "Santorini, Greece" },
      { name: "Prosecco", price: "12/36", description: "Fresh pear, pineapple, bright citrus, creaminess, and a touch of sparkle.", origin: "Italy" },
      { name: "White Zinfandel", price: "10", description: "Floral and tropical aromas with strawberry, peach, raspberry, and sweetness.", origin: "California" },
      { name: "Moscato", price: "12", description: "Delicately sweet with peach, pear, apricot, white petals, and sage." },
    ],
  },
  {
    title: "Spirits",
    items: [
      "Grey Goose", "Kettle One", "Titos", "Nue", "Tanqueray", "Bombay Sapphire", "Hendricks", "Grace Gin", "Jose Cuervo: Silver & Gold", "Patron Silver", "Heraduras", "Don Julio", "The Macallan: 15 year, Double Cask & 12 year", "Chivas Regal", "Johnnie Walker: Black, Green & Red", "Glen Levit", "Dewars: 15 year, 12 year & White Label", "Jack Daniels", "Knob Creek", "Bulliet Bourbon", "Maker's Mark", "Jameson", "Hennessy", "Seagrams 7 Crown", "Metaxa 7 Star", "Disaronno Amaretto", "Remy Martin", "Courvoisier Cognac", "Bacardi: Silver & Gold", "Sailor Jerry's Spiced", "And Many More",
    ].map((name) => ({ name })),
  },
  {
    title: "Greek Spirits",
    items: [
      { name: "Sambuca: White & Black" },
      { name: "CiVidina Grappa" },
      { name: "Limoncello" },
      { name: "Tsipouro" },
      { name: "Idoniko", price: "7/19" },
      { name: "Katsaros Family", price: "8" },
      { name: "Tsilili Muscat", price: "30" },
      { name: "Tsilili Family", price: "22" },
      { name: "Agioneri (Meteora)", price: "12", description: "Aged 1 year in oak barrel." },
      { name: "Methexis Cigar", price: "16", description: "Aged 10 years in smoked aged barrel." },
    ],
  },
  {
    title: "Ouzo",
    items: [
      { name: "Plomari", price: "6/16" },
      { name: "Kazanisto", price: "7/18" },
    ],
  },
  {
    title: "Regional",
    items: [
      { name: "Tsikoudia Haraki (Cretan)", price: "8" },
      { name: "Kretaraki (Cretan)", price: "8" },
      { name: "Rakomelo (Cretan)", price: "8" },
      { name: "Zavania (Cyprus)", price: "9" },
      { name: "Masticha (Chios)", price: "6/10" },
    ],
  },
]

export default function WineSpiritsMenuPage() {
  return (
    <div className="bg-[#fffaf1] text-[#17211c]">
      <section className="relative overflow-hidden bg-[#10251f] px-5 pb-16 pt-40 text-white sm:px-8 sm:pt-44 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(247,198,107,0.22),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(216,69,47,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/pages/menu" className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f7c66b] hover:text-white">
            Back to Menus
          </Link>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f7c66b]">
                Maria&apos;s Menu
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                Wines & Spirits
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#d8dfd8] sm:text-lg">
                Greek bottles, international wines, cocktails, spirits, ouzo,
                and regional pours selected for Mediterranean food.
              </p>
            </div>
            <div className="accent-card-dark rounded-md border bg-white/8 p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#f7c66b]">
                Pairing Friendly
              </p>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#f7f0df]">
                Ask the staff for bottle and glass recommendations with seafood,
                Greek specialties, and grilled meats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  Wines & Spirits
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
                    {item.origin ? (
                      <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#24564a]">
                        {item.origin}
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
