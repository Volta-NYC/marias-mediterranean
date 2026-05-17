export default function AboutPage() {
  return (
    <div className="bg-[#fffaf1] text-[#17211c]">
      <section className="relative min-h-[64vh] overflow-hidden">
        <img
          src="/img/abouthero.avif"
          alt="Maria's Mediterranean restaurant dining room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111d18]/70" />
        <div className="relative mx-auto flex min-h-[64vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-40 sm:px-8 sm:pt-44 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f7c66b] sm:text-sm">
            About Maria
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
            Greek tradition, shaped by family, travel, and a Bayside dining room.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="space-y-8">
          <div className="overflow-hidden rounded-md border border-[#e8dcc4] bg-white p-3 shadow-[0_18px_50px_rgba(23,33,28,0.10)]">
            <img
              src="/img/owner.avif"
              alt="Maria Petridis, owner and chef of Maria's Mediterranean"
              className="h-[360px] w-full rounded-sm object-cover object-top sm:h-[520px]"
            />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b6402d]">
            The Chef
          </p>
          <h2 className="text-4xl font-semibold leading-tight">
            Maria Petridis cooks from experience, not formulas.
          </h2>
        </div>
        <div className="space-y-5 text-[16px] leading-8 text-[#4f574f] sm:text-lg">
          <p>
            Maria grew up in Skoutari, a village in Serres, Greece, learning
            Mediterranean cooking by watching her mother work with seasonal
            ingredients, herbs, and patient technique.
          </p>
          <p>
            After moving to New York, she kept refining those dishes for her
            family, bringing a modern touch to the food she knew best. Maria
            and Kiriakos Petridis opened the restaurant in Bayside after years
            of testing, serving, and building the kind of place they wanted to
            welcome people into.
          </p>
          <p>
            Maria&apos;s talent later brought her to Food Network&apos;s Chopped, where
            she won. The spirit is still the same at the restaurant: bright,
            fresh, generous Greek cooking made for the table.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
          {[
            ["Opened", "January 10, 2011 in Bayside"],
            ["Known for", "Whole grilled fish and homestyle Greek specials"],
            ["Care", "A wide gluten-free menu and allergy-aware service"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-[#e8dcc4] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b6402d]">
                {label}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
