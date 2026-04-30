import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { SEO, faqSchema, breadcrumbSchema, orgSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Heart, Target, Users, ShieldCheck } from "lucide-react";

const values = [
  { icon: ShieldCheck, t: "Trust by design", d: "Every account is identity- and bank-bound. We invest in audits, not in hype." },
  { icon: Heart, t: "Community first", d: "A moderated prediction community, supervisors and a code of conduct keep our space healthy." },
  { icon: Target, t: "Transparent rewards", d: "Deposit bonuses, salary tiers and referrals are documented in tables — no fine-print surprises." },
  { icon: Users, t: "Player-led growth", d: "We grow when our members grow. Programs are built to reward consistent, fair-play participation." },
];

const faqs = [
  { q: "Who runs YaarWin?", a: "YaarWin is operated by an independent team of gaming, product and community professionals committed to fair play and responsible participation." },
  { q: "Is YaarWin a brand or just a website?", a: "YaarWin is a brand encompassing the platform, the prediction community and the public-facing content hub. Every touchpoint follows the same editorial and security standards." },
  { q: "How does YaarWin make money?", a: "Like most game operators, YaarWin earns a small platform margin from gameplay. The exact economics are documented in the platform's terms and visible inside member statements." },
  { q: "Where is YaarWin available?", a: "YaarWin operates in jurisdictions where colour prediction and skill gaming are permitted by law. Members are responsible for confirming local regulations before participating." },
];

const AboutUs = () => (
  <Layout crumbs={[{ name: "About Us", url: "/about-us" }]}>
    <SEO
      title="About YaarWin — Our Mission, Values and Story"
      description="Learn the story behind YaarWin: a colour prediction and skill-gaming platform built around trust, transparency and a player-first community."
      path="/about-us"
      schema={[orgSchema, faqSchema(faqs), breadcrumbSchema([{ name: "About Us", url: "/about-us" }])]}
    />
    <PageHero
      eyebrow="About"
      title={<>Building a <span className="text-gradient">trustworthy home</span> for colour prediction gaming</>}
      subtitle="YaarWin exists to provide a clear, fair and community-driven gaming destination — built by people who have spent years inside this industry."
    />

    <section className="container py-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div key={v.t} className="rounded-2xl border bg-card p-6 shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><v.icon className="h-5 w-5" /></span>
            <h2 className="mt-4 font-display text-lg font-bold">{v.t}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container pb-12">
      <article className="prose-content max-w-3xl mx-auto">
        <h2>Our story</h2>
        <p><strong>YaarWin</strong> began as a simple observation: most prediction platforms treat their members as numbers, not people. Rules change without notice, support is anonymous and rewards arrive on no schedule at all. We wanted to build the opposite.</p>
        <h3>What we believe</h3>
        <p>We believe that a sustainable gaming platform is built on three pillars — clarity, fairness and community. <strong>Clarity</strong> means publishing every rule, table and condition in plain language. <strong>Fairness</strong> means that the same rules apply to a brand-new member and a long-standing one. <strong>Community</strong> means that members shape the platform through feedback, and that the team listens.</p>
        <h3>How we work</h3>
        <p>The YaarWin team operates in three groups: a product team that maintains gameplay and infrastructure, a community team that runs the verified Telegram <strong>prediction community</strong>, and a compliance team that audits rewards and reviews disputes. Every member eventually interacts with all three.</p>
        <h3>Editorial transparency</h3>
        <p>The content on this website — including the <Link to="/blog">blog</Link>, FAQs and guides — is written by the YaarWin team or by named contributors. We do not publish anonymous opinions, and we revise pages whenever rules or programs change.</p>
        <h3>Responsible participation</h3>
        <p>YaarWin is for adults who understand that any game involves variance. We do not guarantee outcomes, and we publicly encourage members to set personal limits and take breaks. Read the <Link to="/disclaimer">Disclaimer</Link> for details.</p>
        <h3>Get in touch</h3>
        <p>For brand inquiries, partnership questions or feedback, write to us via <Link to="/contact-us">Contact</Link>. We reply to every message that follows our community guidelines.</p>
      </article>
    </section>

    <section className="container py-12 border-t">
      <article className="prose-content max-w-3xl mx-auto">
        <h2>The longer version of the YaarWin story</h2>
        <p>The short version of our story is on the page above. The longer version starts with a frustration. Several members of the founding YaarWin team had spent years inside the colour prediction industry — as players, as moderators and as operators of community channels. Across that time, we watched a depressingly consistent pattern repeat itself: a new platform would launch with bold marketing, attract a wave of members through aggressive bonuses, then quietly degrade its rules, withdraw its rewards and disappear. The members who stayed loyal lost the most. We wanted to build the opposite of that.</p>
        <h3>The three commitments behind YaarWin</h3>
        <p>YaarWin is organised around three commitments that take precedence over every other consideration, including short-term growth. First, <strong>identity-bound accounts</strong>: every member is verified, every withdrawal is bound to a real bank or UPI account and the platform has zero tolerance for duplicate identities. Second, <strong>transparent rewards</strong>: every bonus, jackpot and salary tier is published in a readable table, with conditions stated in plain language. Third, <strong>moderated community</strong>: the verified Telegram <strong>prediction community</strong> is run by named moderators who follow a code of conduct, and supervisors have the authority to investigate and resolve disputes.</p>
        <h3>How the team is organised</h3>
        <p>YaarWin's day-to-day operations are divided across three groups. The <strong>product team</strong> maintains gameplay, infrastructure and the user experience. The <strong>community team</strong> runs the prediction community, moderates discussions and supports newcomers. The <strong>compliance team</strong> audits rewards, reviews disputes and enforces the platform's code of conduct. Members eventually interact with all three teams, and each team is empowered to make decisions in its own area without escalating every minor issue to a single bottleneck.</p>
        <h3>What we publish, and why</h3>
        <p>The YaarWin <Link to="/blog">blog</Link>, the FAQ sections across this site and the long-form guides for the <Link to="/how-to-play">How to Play</Link> and <Link to="/gift-code-guide">Gift Code Guide</Link> pages are part of a deliberate editorial program. We publish because members deserve to understand the platform before they commit money to it. We publish under named contributors because anonymous opinions are too easy to walk back when they become inconvenient. And we revise published content whenever underlying rules change, with revision notes that document what was updated.</p>
        <h3>How we make decisions</h3>
        <p>Big decisions at YaarWin — changes to bonus structures, new game formats, new community guidelines — are guided by member feedback, supported by data from the platform itself and finalised by the relevant team. We do not chase trends for their own sake, and we do not change rules retroactively in ways that disadvantage members who joined under earlier terms. When a change is necessary, we announce it ahead of time, explain the reasoning and give members the opportunity to ask questions in the verified community.</p>
        <h3>Our position on responsible play</h3>
        <p>YaarWin is for adults who understand that any game involves variance. We do not guarantee outcomes, we do not pretend that the platform is a get-rich-quick scheme and we publicly encourage members to set personal limits and take regular breaks. The <Link to="/disclaimer">Disclaimer</Link> page goes into detail. We honour cooling-off requests immediately, and we treat responsible play as a first-class principle rather than a legal footnote.</p>
        <h3>Looking forward</h3>
        <p>The YaarWin roadmap focuses on three areas: deepening the existing game catalogue with formats that members ask for, expanding the iOS experience and continuing to invest in the moderation and compliance teams that keep the community healthy. We do not plan to chase aggressive growth at the cost of quality, and we are happy to grow more slowly than less disciplined competitors if that is what it takes to remain a platform members can trust. Reach us through <Link to="/contact-us">Contact</Link> with questions, partnership ideas or feedback.</p>
      </article>
    </section>
    <FAQ faqs={faqs} />
    <CTASection />
  </Layout>
);

export default AboutUs;
