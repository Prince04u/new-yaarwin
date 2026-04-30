import { Layout } from "@/components/site/Layout";
import { SEO, faqSchema, breadcrumbSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Link } from "react-router-dom";

const steps = [
  { n: "01", t: "Register a verified account", d: "Create your YaarWin account with a phone number or email, set a strong password and verify your details. A verified account unlocks every format on the platform." },
  { n: "02", t: "Bind a bank or UPI method", d: "A bound bank or UPI account is required for both deposits and withdrawals. This single step protects you and the wider community from fraudulent activity." },
  { n: "03", t: "Make your first recharge", d: "Pick any amount from the deposit table to qualify for first-recharge bonuses. The platform credits the bonus instantly to your wallet." },
  { n: "04", t: "Pick a game format", d: "Browse card, skill, arcade or tournament categories. Every format has a transparent rules page and example rounds inside the app." },
  { n: "05", t: "Play, learn and improve", d: "Use the in-app history view to review your decisions. Skill games include rating progression and matchmaking explanations." },
  { n: "06", t: "Withdraw or reinvest", d: "Eligible winnings can be withdrawn instantly to your bound account, or reinvested into higher tournaments and rewards programs." },
];

const faqs = [
  { q: "How long does it take to start playing?", a: "Most members complete the registration and verification flow in under five minutes and start their first session immediately afterwards." },
  { q: "Do I need a deposit to try YaarWin?", a: "Several skill and arcade formats include free entry pools so that new members can try the platform before making any deposit." },
  { q: "How are winnings credited?", a: "Winnings are credited to your YaarWin wallet automatically when each round resolves. Withdrawals are processed to your bound bank or UPI account." },
  { q: "Can I switch between game formats?", a: "Yes. A single YaarWin account works across the entire catalogue, with one shared wallet for deposits, winnings and bonuses." },
];

const HowToPlay = () => (
  <Layout crumbs={[{ name: "How to Play", url: "/how-to-play" }]}>
    <SEO
      title="How to Play on YaarWin — Step-by-step Guide for New Members"
      description="Learn how to register, verify and start playing on YaarWin. A clear step-by-step guide to deposits, gameplay, rewards and withdrawals."
      path="/how-to-play"
      schema={[faqSchema(faqs), breadcrumbSchema([{ name: "How to Play", url: "/how-to-play" }])]}
    />
    <PageHero
      eyebrow="Member guide"
      title={<>Your first <span className="text-gradient">YaarWin session</span>, explained</>}
      subtitle="A clear, ordered walkthrough of everything from account creation to your first withdrawal — written for newcomers."
    />

    <section className="container py-16">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border bg-card p-7 shadow-soft hover:shadow-elegant transition-all">
            <span className="font-display text-3xl font-extrabold text-gradient">{s.n}</span>
            <h2 className="mt-2 font-display text-xl font-bold">{s.t}</h2>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container pb-12">
      <article className="prose-content max-w-3xl mx-auto">
        <h2>Understanding the YaarWin reward system</h2>
        <p>Beyond gameplay, <strong>YaarWin</strong> runs three structured programs that members can opt into: a <strong>deposit bonus</strong>, a <strong>referral jackpot</strong> and a <strong>daily salary</strong> framework. Each program publishes a clear table so members know exactly what to expect.</p>
        <h3>Deposit bonus</h3>
        <p>The deposit bonus rewards your first recharge with a fixed credit, scaled to the size of the recharge. Conditions — like binding a bank card and avoiding duplicate accounts — are listed on the program page itself.</p>
        <h3>Referral jackpot</h3>
        <p>Active members who refer verified friends earn jackpot bonuses based on the number of qualifying referrals. The referral page details the recharge requirement that activates each milestone.</p>
        <h3>Daily salary</h3>
        <p>The daily salary program supports members who consistently grow and maintain a healthy referral team. It documents the team size, deposit volume and conduct rules required to qualify.</p>
        <h3>Responsible play</h3>
        <p>YaarWin asks every member to play responsibly. Set personal limits, take breaks and never play with funds you cannot afford to lose. The <Link to="/disclaimer">Disclaimer</Link> and <Link to="/terms-and-conditions">Terms & Conditions</Link> describe these expectations in detail.</p>
        <h3>Where to get help</h3>
        <p>If anything is unclear, the YaarWin support team is reachable from the <Link to="/contact-us">Contact</Link> page. The official <strong>prediction community</strong> on Telegram is also a great place to learn from experienced members in a moderated environment.</p>
      </article>
    </section>

    <section className="container py-16 border-t">
      <article className="prose-content max-w-3xl mx-auto">
        <h2>A complete walkthrough for new YaarWin members</h2>
        <p>The <strong>How to Play guide</strong> is the most important document on this website for newcomers, because most mistakes that cost members money or time are caused by skipping a step in the onboarding flow. This long-form walkthrough expands on the six numbered steps above and explains the reasoning behind each requirement. Read it once before your first session and you will avoid almost every common pitfall.</p>
        <h3>Why verification matters before you deposit</h3>
        <p>YaarWin requires every member to bind a phone number or email and a bank or UPI method before processing withdrawals. This is not bureaucracy — it is a deliberate fraud prevention measure that protects every member of the community. A verified account cannot be hijacked and cashed out by an attacker, and a verified deposit chain prevents bad actors from laundering funds through the platform. The verification step takes less than a minute and only needs to be completed once.</p>
        <h3>Reading the deposit table before you recharge</h3>
        <p>The deposit table inside your wallet shows the available recharge amounts and the bonus percentages associated with each tier. Before your first deposit, read this table carefully. Smaller deposits often qualify for the highest percentage bonuses, which means new members do not need to commit large amounts of money to feel the benefit of the platform's bonus structure. Choose an amount that is comfortable for you and matches your budget for the week.</p>
        <h3>Understanding the four reward programs</h3>
        <p>YaarWin runs four overlapping reward programs: the <strong>first-recharge bonus</strong>, the <strong>deposit bonus</strong> for subsequent recharges, the <strong>referral jackpot</strong> for members who introduce verified friends, and the <strong>daily salary system</strong> for members who maintain a healthy referral team. Each program has its own rules page inside the platform, and you should read all four before deciding how to allocate your time. Members who focus on referrals tend to outperform members who focus on raw recharge volume, because the referral jackpot and salary tiers compound over time.</p>
        <h3>Picking the right game format for your style</h3>
        <p>If you enjoy memory and pattern recognition, start with <strong>Rummy</strong> or <strong>Teen Patti</strong>. If you enjoy strategy and long planning horizons, start with <strong>Chess</strong> or <strong>Sudoku</strong>. If you only have a few minutes at a time, start with arcade titles. If you want the biggest prize pools, head straight to tournaments. The platform is intentionally diverse so that members can match the format to their mood, time budget and skill level.</p>
        <h3>Reading your session history</h3>
        <p>Every game format on YaarWin produces a detailed session history. After your first few sessions, spend ten minutes reading your history. Look at the decisions that led to wins and the decisions that led to losses. Members who treat session history as a study tool improve faster than members who ignore it. The history view is also where you can verify result feeds, deal logs and rating changes — features that the platform invests in specifically to support this kind of self-review.</p>
        <h3>Withdrawing your first winnings</h3>
        <p>When you are ready to withdraw, open the wallet page, choose the amount and confirm. The platform processes withdrawals to your bound bank or UPI account within the published window, which is visible inside the wallet itself. If a withdrawal takes longer than expected, the support team can trace the request and explain any delay. There are no hidden processing rules and no surprise charges.</p>
        <h3>Pacing yourself</h3>
        <p>The most successful YaarWin members are those who pace themselves. They set personal time and spending limits, take breaks between sessions, and treat the platform as a long-term partnership rather than a short-term gamble. The <Link to="/disclaimer">Disclaimer</Link> page goes into detail about responsible play, and we strongly encourage every member to read it. If you ever feel that play is affecting your finances or wellbeing, contact support and request a cooling-off period — it will be honoured immediately, no questions asked.</p>
        <h3>Where to learn more</h3>
        <p>For deeper reading, browse the <Link to="/blog">blog</Link>, where the YaarWin team publishes editorial deep-dives into specific topics. The verified Telegram <strong>prediction community</strong> is another good place to learn from experienced members in a moderated environment. And of course, the <Link to="/contact-us">Contact</Link> page is always open if you need direct support.</p>
      </article>
    </section>
    <FAQ faqs={faqs} />
    <CTASection title="You're ready to play YaarWin" subtitle="Create your account and start your first session in minutes." />
  </Layout>
);

export default HowToPlay;
