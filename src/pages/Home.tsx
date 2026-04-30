import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Sparkles, Users, Zap, Trophy, Gift, Smartphone, BookOpen, Send, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { SEO, orgSchema, websiteSchema, faqSchema, breadcrumbSchema } from "@/components/site/SEO";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import logo from "@/assets/yaarwin-logo.jpg";
import features from "@/assets/yaarwin-features.jpg";

const trust = [
  { icon: ShieldCheck, title: "Verified accounts", text: "Identity-bound accounts and bank verification protect every member of the community." },
  { icon: Zap, title: "Real-time gameplay", text: "Low-latency rounds, instant result publishing and a transparent prediction history." },
  { icon: Award, title: "Daily reward system", text: "Structured deposit bonuses, referral rewards and a salary system designed for active members." },
  { icon: Users, title: "Active community", text: "An organised prediction community with supervisors, mentors and fair-play moderation." },
];

const games = [
  { title: "Card Games", desc: "Classic skill-based card formats including Rummy, Poker and Teen Patti.", icon: Trophy },
  { title: "Skill Games", desc: "Chess, Sudoku and Ludo with structured matchmaking.", icon: Sparkles },
  { title: "Arcade Games", desc: "Casual puzzle and reflex challenges for short play sessions.", icon: Zap },
  { title: "Tournaments", desc: "Scheduled competitive events with bigger prize pools.", icon: Award },
];

const faqs = [
  { q: "What is YaarWin?", a: "YaarWin is a colour prediction and skill-gaming platform that combines card games, arcade titles and competitive tournaments inside one account, with a transparent reward system and an active community." },
  { q: "Is YaarWin safe to use?", a: "Yes. Every account is bound to a verified identity and bank account. The platform uses encrypted sessions, audited result feeds and clear policies covering responsible play." },
  { q: "How do I create a YaarWin account?", a: "Visit the YaarWin Register page, enter your phone number or email, set a strong password and verify your details. You can then log in from any device using the same credentials." },
  { q: "Are gift codes really free?", a: "Promotional gift codes are distributed during specific events. They unlock bonus credits inside your account when redeemed before expiry. See the Gift Code Guide for the latest rules." },
  { q: "Can I play YaarWin on mobile?", a: "Yes. The web platform is mobile-first and an Android app is available from the Download App page for a faster, app-like experience." },
  { q: "Where can I follow predictions and updates?", a: "The official prediction community is hosted on Telegram and provides verified updates, schedules and announcements. Always rely on official channels only." },
];

const Home = () => {
  return (
    <Layout>
      <SEO
        title="YaarWin Login & Register | Play & Earn Online"
        description="Login or register on YaarWin to play colour prediction games and earn money online. Fast withdrawal, bonuses and a secure platform."
        path="/"
        schema={[orgSchema, websiteSchema, faqSchema(faqs), breadcrumbSchema([{ name: "Home", url: "/" }])]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-radial-soft">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-80 w-[70rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        </div>
        <div className="container py-20 md:py-28 grid gap-12 lg:grid-cols-2 items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              <BadgeCheck className="h-3.5 w-3.5" /> Play · Win · Earn
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              <span className="text-gradient">YaarWin Login & Register</span> — the trusted home for colour prediction & skill gaming
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              <strong className="text-foreground">YaarWin</strong> brings card games, arcade titles, tournaments and a transparent reward system into a single, professionally managed platform — built for players who value fairness and clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-95 shadow-glow">
                <Link to="/yaarwin-register">Create free account <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/how-to-play">How it works</Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "50K+", v: "Members" },
                { k: "20+", v: "Game formats" },
                { k: "24/7", v: "Support" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border bg-card p-4 text-center shadow-soft">
                  <dt className="font-display text-2xl font-extrabold text-gradient">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground mt-0.5">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border bg-card p-8 shadow-elegant">
              <div className="flex items-center gap-4">
                <img src={logo} alt="YaarWin brand mark" className="h-20 w-20 rounded-full ring-4 ring-primary/20 animate-float" width={80} height={80} />
                <div>
                  <p className="font-display text-2xl font-extrabold">YaarWin</p>
                  <p className="text-sm text-muted-foreground">Play · Win · Earn</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {["Verified bank-bound accounts", "Transparent daily salary system", "Structured deposit & referral bonuses", "Active prediction community"].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary"><BadgeCheck className="h-3.5 w-3.5" /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button asChild variant="outline" size="sm"><Link to="/yaarwin-login">Login</Link></Button>
                <Button asChild size="sm" className="bg-gradient-primary"><Link to="/gift-code">Gift Code</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="container py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Why members choose <span className="text-gradient">YaarWin</span></h2>
          <p className="mt-3 text-muted-foreground">A platform engineered around trust, transparency and an organised community — not hype.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><t.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-bold">{t.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GAMES */}
      <section className="bg-soft border-y">
        <div className="container py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">Game catalogue</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">A full library, one verified account</h2>
            <p className="mt-3 text-muted-foreground max-w-lg">Switch between skill games, arcade titles and tournaments without juggling multiple platforms or wallets. Every format follows the same fair-play standard.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {games.map((g) => (
                <div key={g.title} className="rounded-xl border bg-card p-4 shadow-soft">
                  <g.icon className="h-5 w-5 text-primary" />
                  <p className="mt-2 font-semibold">{g.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{g.desc}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="link" className="mt-4 px-0 text-primary"><Link to="/games">Browse the full game catalogue <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
          <div className="relative">
            <img src={features} alt="YaarWin platform features overview" loading="lazy" className="rounded-2xl shadow-elegant border w-full" />
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="container py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">Everything you need, in one place</h2>
        <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">Quick access to the most-used sections of the YaarWin platform.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/yaarwin-login", icon: ShieldCheck, t: "YaarWin Login", d: "Access your verified account securely." },
            { to: "/yaarwin-register", icon: Users, t: "YaarWin Register", d: "Create a new account in under a minute." },
            { to: "/gift-code", icon: Gift, t: "Gift Code", d: "Redeem promotional rewards inside your wallet." },
            { to: "/download-app", icon: Smartphone, t: "Download App", d: "Get the YaarWin mobile experience." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group rounded-2xl border bg-card p-6 shadow-soft hover:shadow-elegant hover:border-primary/40 transition-all">
              <c.icon className="h-6 w-6 text-primary" />
              <p className="mt-4 font-display text-lg font-bold group-hover:text-primary transition-colors">{c.t}</p>
              <p className="text-sm text-muted-foreground mt-1">{c.d}</p>
              <span className="mt-3 inline-flex items-center text-sm text-primary font-medium">Open <ArrowRight className="ml-1 h-3.5 w-3.5" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* AUTHORITY CONTENT */}
      <section className="container py-16">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>The YaarWin approach to colour prediction gaming</h2>
          <p>
            <strong>YaarWin</strong> exists to solve a problem most prediction platforms ignore: clarity. Players want a destination where rules are visible, rewards are documented and the community is led by people who answer to a code of conduct. Every section of this site — from <Link to="/games">Games</Link> to the <Link to="/how-to-play">How to Play</Link> guide — is designed around that promise.
          </p>
          <h3>Built for skill, not luck alone</h3>
          <p>
            Our catalogue mixes pure skill formats such as Chess and Sudoku with classic card games like Rummy, Poker and Teen Patti, and finishes with arcade and tournament play. The result is a balanced experience where members can choose the depth of decision-making they want in any given session.
          </p>
          <h3>A reward system designed for active members</h3>
          <p>
            YaarWin publishes its <strong>deposit bonus</strong>, <strong>referral jackpot</strong> and <strong>daily salary</strong> structures openly. Active members who introduce verified friends, recharge consistently and play within the rules earn a predictable income on top of their game winnings. The framework is enforced by supervisors to keep the system fair for everyone.
          </p>
          <h3>Community first, marketing second</h3>
          <p>
            The official YaarWin <strong>prediction community</strong> on Telegram is where members discuss schedules, share educational predictions and receive verified updates. We do not chase viral promotions — we invest in moderators, FAQ resources and a public <Link to="/blog">blog</Link> so that newcomers can learn before they play.
          </p>
        </article>
      </section>

      {/* DEEP AUTHORITY CONTENT */}
      <section className="container py-16 border-t">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>What makes YaarWin Login & Register the trusted home for colour prediction</h2>
          <p>The phrase <strong>YaarWin Login & Register</strong> is more than a navigation label on this website. It is the gateway through which every member enters a fully audited gaming environment that has been engineered around three non-negotiable promises: identity-bound accounts, transparent rewards and a moderated community. Most colour prediction sites collapse under one of these three pillars within months of launch. YaarWin was built specifically to hold all three at once, and the platform's daily operations reflect that priority.</p>
          <p>When a new member visits our <Link to="/yaarwin-register">YaarWin Register</Link> page, they are guided through a sign-up flow that asks only for the information required to create a secure account — a phone number or email and a strong password. Bank or UPI binding is requested only when the member chooses to deposit or withdraw, which means a curious newcomer can explore the platform without committing financial details upfront. Returning members visit <Link to="/yaarwin-login">YaarWin Login</Link>, which uses encrypted session tokens, rate-limited authentication endpoints and device-level checks to keep accounts safe even on shared networks.</p>
          <h3>Colour prediction, reframed as a skill discipline</h3>
          <p>Colour prediction is often dismissed as a pure game of chance. The YaarWin team disagrees with that framing. While individual rounds carry variance — as every honest game does — long-term performance correlates strongly with discipline, bankroll management, pattern observation and the willingness to study published result feeds. In other words, players who treat the platform as a craft tend to outperform players who treat it as a slot machine. We have built every interface decision around supporting that mindset, from the way history pages display past rounds to the way the rules section explains payout tables.</p>
          <p>This philosophy also shapes the rest of the catalogue. Card games such as <strong>Rummy</strong>, <strong>Poker</strong>, <strong>Teen Patti</strong> and <strong>Andar Bahar</strong> reward memory and patient decision-making. Pure skill titles like <strong>Chess</strong>, <strong>Sudoku</strong>, <strong>Ludo</strong> and <strong>Carrom</strong> use rating-based matchmaking so that beginners are never thrown into rooms full of seasoned veterans. Arcade titles offer relaxed sessions for short windows of free time. Tournaments tie everything together with bigger prize pools, structured payout tables and live leaderboards.</p>
          <h3>The four reward programs every member should understand</h3>
          <p>YaarWin maintains four reward structures, all of which are published openly on the platform. The <strong>first-recharge bonus</strong> rewards members for their initial deposit with a percentage credit that scales by amount. The <strong>deposit bonus</strong> applies to subsequent recharges and is documented in a clear table. The <strong>referral jackpot</strong> pays members for introducing verified friends who recharge and play within the rules. Finally, the <strong>daily salary system</strong> recognises active members who maintain a healthy referral team — a structure that turns the platform into a long-term partnership rather than a one-off transaction.</p>
          <p>Read the <Link to="/how-to-play">How to Play guide</Link> for the operational details of each program, including conduct rules, payout windows and conditions that protect every participant. The platform's compliance team audits these programs on a rolling basis, and supervisors have the authority to investigate suspicious activity, freeze suspect bonuses and reverse rewards earned through abuse. This level of oversight is unusual in the colour prediction industry and is one of the main reasons members choose YaarWin over louder, less disciplined alternatives.</p>
          <h3>Trust signals you can verify yourself</h3>
          <p>You should never take a gaming platform at its word. YaarWin gives members the tools to verify trust independently. The result feed for prediction rounds is published in real time and archived for review. Card game sessions are backed by tamper-resistant deal logs that members can request through support. Skill game ratings follow a published Elo-derived formula and are visible inside member profiles. Withdrawal processing windows are documented inside the wallet, not buried in fine print. Even the editorial process for our <Link to="/blog">blog</Link> is transparent — every article is attributed and revised whenever underlying rules change.</p>
          <p>The verified Telegram <strong>prediction community</strong> adds another layer of accountability. It is where members discuss schedules, share educational analyses and receive announcements directly from the team. It is also where senior moderators answer general questions in public, which keeps the team honest. Account-specific issues are handled privately through <Link to="/contact-us">Contact</Link>, but the public channel ensures that the platform's voice is consistent and visible.</p>
          <h3>Designed for India, built for serious players</h3>
          <p>YaarWin's primary audience is in India, where colour prediction and skill gaming have grown into a legitimate digital pastime. Every feature, from UPI deposits to Hindi-friendly support, has been designed with that audience in mind. At the same time, the rules and standards we apply are international: encrypted transport, audited result feeds and a published code of conduct that applies equally to a brand-new member and a long-standing high-volume player.</p>
          <p>If you are weighing whether to create an account, we encourage you to read our <Link to="/about-us">About Us</Link> page, browse a few <Link to="/blog">blog</Link> posts and skim the <Link to="/terms-and-conditions">Terms & Conditions</Link> before signing up. The most successful YaarWin members are those who arrive informed. Once you are ready, the <Link to="/yaarwin-register">YaarWin Register</Link> page takes less than a minute to complete, and your first verified session can begin immediately afterwards.</p>
          <h3>Mobile-first, but not mobile-only</h3>
          <p>Most members play YaarWin on a phone, which is why the platform is mobile-first by design. The web experience is responsive across every screen size, and the official Android app on the <Link to="/download-app">Download App</Link> page provides faster lobby loads, native push notifications for tournament starts and a lighter data footprint. The desktop experience remains fully featured for members who prefer larger screens for tournament play or who like to research before each session.</p>
          <p>Whichever device you prefer, your <strong>YaarWin Login</strong> credentials are the same. Your wallet, history, bonus eligibility and referral team carry across devices automatically. There is nothing to migrate, nothing to recreate and no parallel account to maintain. This single-account discipline is one of the small details that distinguishes a serious platform from a hobby project.</p>
          <h3>Responsible play is not a footnote</h3>
          <p>YaarWin treats responsible play as a first-class principle, not a legal disclaimer. The <Link to="/disclaimer">Disclaimer</Link> page documents our position in detail, but the short version is simple: never play with money you cannot afford to lose, set personal time and spending limits, take regular breaks, and seek help if play begins to affect your finances or wellbeing. Members who feel they need a cooling-off period can request a temporary lock through support, and the platform honours these requests immediately.</p>
          <p>The combination of <strong>verified accounts</strong>, <strong>transparent rewards</strong>, <strong>moderated community</strong> and <strong>responsible-play culture</strong> is what makes YaarWin the trusted home for colour prediction and skill gaming. The <Link to="/yaarwin-login">Login</Link> and <Link to="/yaarwin-register">Register</Link> pages are simply the doors. What you find inside is a platform that treats you like a long-term partner.</p>
        </article>
      </section>

      <FAQ faqs={faqs} title="YaarWin frequently asked questions" />

      <CTASection />

      {/* COMMUNITY */}
      <section className="container pb-20">
        <div className="rounded-3xl border bg-card p-8 md:p-12 shadow-soft flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Send className="h-6 w-6" /></div>
            <div>
              <h2 className="font-display text-2xl font-bold">Join the official prediction community</h2>
              <p className="text-muted-foreground mt-1.5 max-w-xl">Verified updates, fair-play discussions and educational content — moderated by the YaarWin team.</p>
            </div>
          </div>
          <Button asChild size="lg" variant="outline">
            <a href="https://t.me/yaarrwin" target="_blank" rel="noopener noreferrer">Open on Telegram <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
