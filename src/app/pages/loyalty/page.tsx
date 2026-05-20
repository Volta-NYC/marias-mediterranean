import Link from "next/link"

const rewardSteps = [
  {
    number: "01",
    title: "Join the table",
    body: "Become a Maria's rewards member and start earning every time you order.",
  },
  {
    number: "02",
    title: "Earn points",
    body: "Get 1 point for every $1 spent, plus 50 points when you sign up.",
  },
  {
    number: "03",
    title: "Redeem rewards",
    body: "Use 200 points for a $5 discount on your next Maria's order.",
  },
]

const highlights = [
  ["50", "bonus points when you sign up"],
  ["1x", "point for every dollar spent"],
  ["$5", "discount for every 200 points"],
]

export default function LoyaltyPage() {
  return (
    <div className="bg-[#fffaf1] text-[#17211c]">
      <section className="relative overflow-hidden bg-[#10251f] px-5 pb-16 pt-40 text-white sm:px-8 sm:pb-20 sm:pt-44 lg:px-10">
        <img
          src="/img/loyalty2.avif"
          alt="A restaurant table set with Mediterranean food and wine"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#07120f]/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(247,198,107,0.22),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(216,69,47,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#f7c66b] sm:text-sm">
              Maria&apos;s Loyalty
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Earn points toward your next Mediterranean feast.
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[#e6eee7] sm:text-lg">
              Join Maria&apos;s rewards program, collect points when you order, and
              turn them into savings on the Greek dishes you already love.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://www.mariasonbell.com/online-ordering"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#d8452f] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#b93625]"
              >
                Become a Member
              </Link>
              <Link
                href="#rewards"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:border-[#f7c66b] hover:text-[#f7c66b]"
              >
                See Rewards
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-5 rounded-full bg-[#f7c66b]/20 blur-3xl" />
            <div className="accent-card-dark relative rounded-md border border-white/15 bg-white/10 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.26)] backdrop-blur">
              <div className="rounded-md bg-[#fffaf1] p-5 text-[#17211c]">
                <div className="flex items-start justify-between gap-4 border-b border-[#eadbc0] pb-5">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#b6402d]">
                      Rewards Card
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-none">
                      Maria&apos;s
                    </h2>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#f7c66b] bg-[#10251f] text-xl font-extrabold text-[#f7c66b]">
                    M
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {highlights.map(([value, label]) => (
                    <div key={value} className="rounded-md bg-white p-3 shadow-sm">
                      <div className="text-2xl font-extrabold text-[#d8452f]">
                        {value}
                      </div>
                      <p className="mt-2 text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-[#5d665e]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-md bg-[#10251f] p-5 text-white">
                  <p className="text-sm font-semibold text-[#f7c66b]">
                    Current reward
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    200 points = $5 off
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rewards" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {rewardSteps.map((step) => (
            <article
              key={step.number}
              className="accent-card rounded-md border bg-white p-6 text-center sm:p-8"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#f7c66b] bg-[#fff4d8] text-sm font-extrabold text-[#b6402d]">
                {step.number}
              </div>
              <h2 className="mt-7 text-3xl font-semibold">{step.title}</h2>
              <p className="mt-4 text-[15px] leading-7 text-[#4f574f]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-md border border-[#eadbc0] bg-[#fffaf1] p-6 shadow-[0_18px_55px_rgba(23,33,28,0.08)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#b6402d]">
              Simple Rewards
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Good food should come with something back.
            </h2>
          </div>
          <p className="text-[16px] leading-8 text-[#4f574f] sm:text-lg">
            Sign up once, order your favorites, and let your points build in
            the background. It is an easy way to make pickup nights, family
            dinners, and catering orders feel even better.
          </p>
        </div>
      </section>
    </div>
  )
}
