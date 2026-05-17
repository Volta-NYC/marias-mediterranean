import Link from "next/link"
import GoogleMap from "@/lib/components/google-map"

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

const carouselImages = Array.from({ length: 8 }, (_, index) => ({
  src: `/img/carousal/${index + 1}.avif`,
  alt: `Maria's Mediterranean dish ${index + 1}`,
}))

const spaceImages = Array.from({ length: 5 }, (_, index) => ({
  src: `/img/space/${index + 1}.avif`,
  alt: `Maria's Mediterranean dining room ${index + 1}`,
}))

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
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-5 pb-10 pt-40 sm:px-8 sm:pt-44 lg:px-10">
          <div className="max-w-4xl pb-8 text-white">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#f7c66b] sm:text-sm">
              Bayside Greek Seafood
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
              Maria&apos;s Mediterranean
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#f7f0df] sm:text-xl">
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
          <div className="grid gap-3 border-t border-white/25 pt-5 text-xs font-semibold leading-6 text-white sm:grid-cols-3 sm:text-sm">
            <div>38-11 Bell Blvd, Bayside, NY 11361</div>
            <div>(718) 279-1606</div>
            <div>Lunch and dinner daily</div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8dcc4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {serviceCards.map((item) => (
            <div key={item} className="border-[#e8dcc4] py-4 sm:px-5 lg:border-l">
              <p className="text-sm font-bold leading-6 text-[#24564a]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#101714] py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(247,198,107,0.36),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(216,69,47,0.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <figure className="overflow-hidden rounded-md bg-[#fffaf1] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <img
              src="/img/chopped.jpg"
              alt="Maria Petridis featured on Food Network's Chopped"
              className="h-auto w-full rounded-sm object-contain"
            />
          </figure>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f7c66b]">
              Food Network Winner
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl">
              Maria Petridis won{" "}
              <span className="font-bold text-[#f7c66b]">CHOPPED</span>.
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#d8dfd8] sm:text-lg">
              The chef behind Maria&apos;s Mediterranean brought her Greek cooking
              instincts to Food Network&apos;s competition kitchen and came home a
              champion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Champion chef", "Greek seafood", "Bayside dining"].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[#f7c66b]/35 bg-white/8 px-4 py-2 text-sm font-bold text-[#f7f0df]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
            From Skoutari to Bayside
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.06] text-[#17211c] sm:text-5xl">
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

      <section className="bg-[#10251f] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f7c66b]">
                The Space
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.06] text-white sm:text-5xl">
                A warm room for seafood dinners, family tables, and easy nights out.
              </h2>
            </div>
            <p className="max-w-2xl text-[16px] leading-8 text-[#d8dfd8] sm:text-lg">
              Step inside Maria&apos;s for a relaxed Bayside dining room with the
              polish of a special occasion and the comfort of a neighborhood
              restaurant.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[220px_220px]">
            <figure className="group relative min-h-[280px] overflow-hidden rounded-md bg-[#173f37] shadow-[0_18px_50px_rgba(23,33,28,0.12)] sm:col-span-2 lg:row-span-2 lg:min-h-0">
              <img
                src={spaceImages[0].src}
                alt={spaceImages[0].alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101714]/30 to-transparent" />
            </figure>

            {spaceImages.slice(1).map((image) => (
              <figure
                key={image.src}
                className="group relative min-h-[220px] overflow-hidden rounded-md bg-[#173f37] shadow-[0_18px_42px_rgba(23,33,28,0.10)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#173f37] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f7c66b]">
                Menu
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.06] sm:text-5xl">What to come hungry for</h2>
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

        <div className="mt-14">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#173f37] to-transparent sm:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#173f37] to-transparent sm:w-32" />
            <div className="carousel-track flex w-max gap-4 px-5 sm:gap-5 sm:px-8 lg:px-10">
              {[...carouselImages, ...carouselImages].map((image, index) => (
                <figure
                  key={`${image.src}-${index}`}
                  className="group relative h-56 w-[82vw] max-w-[330px] shrink-0 overflow-hidden rounded-md bg-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.22)] ring-1 ring-white/15 sm:h-72 sm:w-[340px] lg:h-80 lg:w-[410px]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1915]/35 via-transparent to-transparent" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="min-h-[320px] bg-[#173f37] p-3 sm:min-h-[420px] sm:p-4">
          <div className="h-full min-h-[320px] overflow-hidden rounded-md border border-white/15 shadow-[0_18px_50px_rgba(23,33,28,0.18)] sm:min-h-[420px]">
            <GoogleMap className="min-h-[320px] sm:min-h-[420px]" />
          </div>
        </div>
        <div className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
            Visit
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.06] text-[#17211c] sm:text-5xl">
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
