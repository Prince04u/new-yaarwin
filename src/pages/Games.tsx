import { Layout } from "@/components/site/Layout";
import { SEO, faqSchema, breadcrumbSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Link } from "react-router-dom";
import { Trophy, Sparkles, Zap, Award, Spade, Brain, Gamepad2, Crown } from "lucide-react";
import features from "@/assets/yaarwin-features.jpg";

const groups = [
  { icon: Spade, title: "Card Games", items: ["Rummy", "Poker", "Teen Patti", "Andar Bahar"], desc: "Classic card formats balancing strategy and quick decision-making." },
  { icon: Brain, title: "Skill Games", items: ["Chess", "Sudoku", "Ludo", "Carrom"], desc: "Pure skill challenges with structured matchmaking and rating systems." },
  { icon: Gamepad2, title: "Arcade Games", items: ["Puzzle quests", "Reflex challenges", "Casual rounds", "Time trials"], desc: "Short, satisfying sessions for relaxed play." },
  { icon: Crown, title: "Tournaments", items: ["Daily ladders", "Weekly cups", "Seasonal events", "Invitationals"], desc: "Competitive events with bigger prize pools and live leaderboards." },
];

const faqs = [
  { q: "How many games does YaarWin offer?", a: "The YaarWin catalogue includes more than twenty active formats spread across card, skill, arcade and tournament categories — all available from a single verified account." },
  { q: "Are YaarWin games fair?", a: "Game outcomes follow audited result feeds. Skill games rely on transparent matchmaking and a public rating system, while card games use independent shuffling backed by session logs." },
  { q: "Can I play YaarWin tournaments for free?", a: "Several entry-level tournaments are free for verified members. Higher-tier events require a configurable buy-in published on the tournament page itself." },
  { q: "Do I need to download anything to play?", a: "No. The full YaarWin web platform runs in a modern browser. The optional Android app provides a faster, app-like experience." },
];

const Games = () => (
  <Layout crumbs={[{ name: "Games", url: "/games" }]}>
    <SEO
      title="YaarWin Games — Card, Skill, Arcade & Tournament Catalogue"
      description="Explore the full YaarWin game catalogue: card games, skill games, arcade titles and competitive tournaments — all inside one verified account."
      path="/games"
      schema={[faqSchema(faqs), breadcrumbSchema([{ name: "Games", url: "/games" }])]}
    />
    <PageHero
      eyebrow="Game catalogue"
      title={<>One account. <span className="text-gradient">Every game format.</span></>}
      subtitle="Card classics, pure skill formats, arcade fun and structured tournaments — all running on the same verified YaarWin account and wallet."
    />

    <section className="container py-16">
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border bg-card p-7 shadow-soft hover:shadow-elegant transition-all">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><g.icon className="h-5 w-5" /></span>
              <h2 className="font-display text-2xl font-bold">{g.title}</h2>
            </div>
            <p className="mt-3 text-muted-foreground">{g.desc}</p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-lg border bg-background px-3 py-2 text-sm font-medium">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-soft border-y">
      <div className="container py-16 grid gap-10 lg:grid-cols-2 items-center">
        <img src={features} alt="YaarWin game catalogue overview" loading="lazy" className="rounded-2xl border shadow-elegant w-full" />
        <article className="prose-content">
          <h2>How the YaarWin catalogue is organised</h2>
          <p>The YaarWin game library is intentionally built around <strong>four pillars</strong> — card, skill, arcade and tournament — so players can pick the depth and pace of a session without leaving the platform.</p>
          <h3>Card games</h3>
          <p>Card formats such as <strong>Rummy</strong>, <strong>Poker</strong> and <strong>Teen Patti</strong> are perennial favourites for a reason: they reward pattern recognition, memory and disciplined decision-making. YaarWin pairs every card session with a tamper-resistant deal log so that members can review hands after the fact.</p>
          <h3>Skill games</h3>
          <p>Skill titles like <strong>Chess</strong>, <strong>Sudoku</strong>, <strong>Ludo</strong> and <strong>Carrom</strong> rely on rating-based matchmaking. New members are paired with players of comparable strength, making each match meaningful while keeping competitive integrity.</p>
          <h3>Arcade games</h3>
          <p>Short-form arcade titles fit between meetings and commutes. They are designed for low-friction sessions while still feeding into the platform-wide reward system.</p>
          <h3>Tournaments</h3>
          <p>Tournaments are where YaarWin shines. Daily ladders, weekly cups and seasonal events carry larger prize pools, transparent payout tables and live leaderboards. Read the full schedule inside the platform after you <Link to="/yaarwin-register">register</Link>.</p>
          <h3>Why this structure works</h3>
          <p>By concentrating every format behind a single wallet, YaarWin removes the friction of juggling multiple accounts and balances. Members can carry winnings between formats, redeem <Link to="/gift-code">gift codes</Link> universally and follow community schedules without confusion.</p>
        </article>
      </div>
    </section>

    <section className="container py-16 border-t">
      <article className="prose-content max-w-3xl mx-auto">
        <h2>A deeper look at the YaarWin game catalogue</h2>
        <p>The <strong>YaarWin games library</strong> is engineered for variety, depth and fairness. Every format is hosted inside the same verified account so that a member's wallet, history, bonuses and referral progress travel with them as they switch genres. This single-account architecture is one of the most underappreciated features of the platform, and it changes how members approach a typical session: instead of bouncing between disconnected apps, players can flow naturally from a card hand into a tournament round into a quick arcade challenge without losing context.</p>
        <h3>Card games — discipline meets pattern recognition</h3>
        <p>Card games on YaarWin balance familiar Indian classics with internationally recognised formats. <strong>Rummy</strong> rewards memory and disciplined sequencing. <strong>Poker</strong> punishes overconfidence and rewards patient bankroll management. <strong>Teen Patti</strong> sits between the two, blending bluff with probability. <strong>Andar Bahar</strong> offers fast-paced rounds for members who want a shorter session. Each card format publishes its rules in plain language, and every session is paired with a tamper-resistant deal log so that members can review hands afterwards. New members should start with low-stakes tables and graduate slowly — the platform's matchmaking is designed to make that progression natural.</p>
        <h3>Skill games — rating-based matchmaking</h3>
        <p>Pure skill formats — <strong>Chess</strong>, <strong>Sudoku</strong>, <strong>Ludo</strong> and <strong>Carrom</strong> — use rating-based matchmaking to ensure competitive integrity. A new player begins with a provisional rating that converges quickly toward their true strength, and the matchmaking engine pairs members with opponents of comparable ability. This protects newcomers from being demolished by veterans, and it also protects veterans from frustrating mismatches. Ratings are visible inside member profiles, and the platform publishes the formula it uses to update them after each match.</p>
        <h3>Arcade titles — short, satisfying sessions</h3>
        <p>Arcade games on YaarWin are designed for low-friction sessions. They include puzzle quests, reflex challenges, casual rounds and time trials that fit between meetings, during commutes or in the small windows of free time that punctuate a busy day. While arcade titles are lighter on the strategic side, they still feed into the platform-wide reward system, so casual players are not excluded from the bonus structure that benefits more dedicated members.</p>
        <h3>Tournaments — where the catalogue comes alive</h3>
        <p>Tournaments are the centrepiece of the YaarWin experience. <strong>Daily ladders</strong> let members earn ranking-based rewards through consistent participation. <strong>Weekly cups</strong> offer larger prize pools and structured brackets. <strong>Seasonal events</strong> celebrate festivals, anniversaries and community milestones with themed rewards. <strong>Invitationals</strong> bring together top performers for high-stakes matches with the largest prize pools on the platform. Every tournament publishes its rules, payout table and entry conditions before registration opens, and live leaderboards keep the experience transparent.</p>
        <h3>Game integrity and audit trails</h3>
        <p>Across every category, YaarWin treats game integrity as a first-class concern. Card games use independent shuffling backed by session logs. Skill games use deterministic rule engines and rating updates that members can verify. Tournaments use payout tables that are locked at the start of an event so that no one can change them mid-tournament. Result feeds for prediction-style rounds are published in real time and archived for later review. If a member ever suspects an irregularity, the support team can pull session logs and walk through the evidence with them.</p>
        <h3>Picking your first game</h3>
        <p>If you are new to YaarWin, we recommend picking one card format and one skill format to start. The dual focus helps you experience the strategic depth of card play and the matchmaking discipline of skill games at the same time. From there, expand into arcade titles for short breaks and tournaments for serious competition. Read the <Link to="/how-to-play">How to Play</Link> guide for a step-by-step walkthrough, and use the <Link to="/yaarwin-register">YaarWin Register</Link> page to get started.</p>
        <h3>Cross-format bonuses</h3>
        <p>Because every format runs on a single wallet, bonuses earned in one corner of the catalogue work everywhere else. A <Link to="/gift-code">gift code</Link> redeemed during a card session can be spent on a tournament entry. A first-recharge bonus credited at sign-up can be used in arcade rounds. This universality is one of the most player-friendly features of the platform, and it is one of the reasons long-term members rarely feel the urge to maintain accounts elsewhere.</p>
      </article>
    </section>
    <FAQ faqs={faqs} />
    <CTASection title="Pick your first game on YaarWin" subtitle="Every format is unlocked the moment your account is verified." primary={{ to: "/yaarwin-register", label: "Register now" }} secondary={{ to: "/how-to-play", label: "How to play" }} />
  </Layout>
);

export default Games;
