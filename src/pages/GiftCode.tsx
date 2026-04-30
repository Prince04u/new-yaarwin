import { useState } from "react";
import { Link } from "react-router-dom";
import { Gift, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/site/Layout";
import { SEO, faqSchema, breadcrumbSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { toast } from "sonner";
import bonus from "@/assets/yaarwin-deposit-bonus.jpg";

const faqs = [
  { q: "What is a YaarWin gift code?", a: "A YaarWin gift code is a short alphanumeric code that unlocks bonus credits inside your account when redeemed before its expiry. Codes are issued during events, milestones and community campaigns." },
  { q: "How do I redeem a YaarWin free gift code?", a: "Log in to YaarWin, open the Gift Code page, paste the code into the redeem box and submit. The bonus is credited to your wallet instantly when the code is valid." },
  { q: "Where can I find official YaarWin gift codes?", a: "Official codes are announced on the YaarWin Blog and inside the verified Telegram prediction community. Avoid unofficial sources that promise unrealistic rewards." },
  { q: "Why did my gift code fail?", a: "Codes can fail because they are expired, already used, or restricted to a specific account tier. Confirm the source and validity, then contact support if the code should still work." },
];

const GiftCode = () => {
  const [code, setCode] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    toast.info("Redemption is not connected yet. Please log in to your account to redeem real codes.");
  };
  return (
    <Layout crumbs={[{ name: "Gift Code", url: "/gift-code" }]}>
      <SEO
        title="YaarWin Gift Code — Redeem Free YaarWin Giftcode Rewards"
        description="Redeem your YaarWin gift code to claim bonus credits. Discover how YaarWin free giftcode rewards work, where to find official codes and how to use them safely."
        path="/gift-code"
        schema={[faqSchema(faqs), breadcrumbSchema([{ name: "Gift Code", url: "/gift-code" }])]}
      />
      <PageHero
        eyebrow="Rewards"
        title={<><span className="text-gradient">YaarWin Gift Code</span> redemption</>}
        subtitle="Unlock bonus credits inside your wallet using official YaarWin giftcode rewards distributed during events and community milestones."
      />

      <section className="container py-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
        <div className="rounded-3xl border bg-card p-7 md:p-9 shadow-elegant">
          <h2 className="font-display text-2xl font-bold">Redeem a gift code</h2>
          <p className="text-sm text-muted-foreground mt-1">Paste your YaarWin giftcode below and click redeem.</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <Label>Gift code</Label>
              <Input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="EX: YAAR-WELCOME-2025" className="font-mono tracking-wider" />
            </div>
            <Button type="submit" className="w-full bg-gradient-primary hover:opacity-95">Redeem code</Button>
            <p className="text-xs text-muted-foreground text-center">You must be logged in to your YaarWin account to redeem real codes. <Link to="/yaarwin-login" className="text-primary hover:underline">Login</Link> or <Link to="/yaarwin-register" className="text-primary hover:underline">Register</Link>.</p>
          </form>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: Gift, t: "Instant credit" },
              { icon: ShieldCheck, t: "Safe & verified" },
              { icon: Clock, t: "Time-limited" },
            ].map((b) => (
              <div key={b.t} className="rounded-xl border p-3 text-center text-xs font-medium">
                <b.icon className="mx-auto h-4 w-4 text-primary mb-1" />
                {b.t}
              </div>
            ))}
          </div>
        </div>
        <img src={bonus} alt="YaarWin deposit bonus structure preview" loading="lazy" className="rounded-2xl border shadow-elegant w-full" />
      </section>

      <section className="container pb-12">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>How <strong>YaarWin gift codes</strong> work</h2>
          <p>YaarWin issues gift codes during specific moments — platform anniversaries, festival events, milestone celebrations and community contests. Each code is short, alphanumeric and bound to clear redemption rules published alongside the announcement.</p>
          <h3>Where to find official codes</h3>
          <p>The most reliable sources are the official YaarWin <Link to="/blog">Blog</Link>, in-app banners and the verified Telegram <strong>prediction community</strong>. Codes shared on unofficial websites are frequently expired or fraudulent.</p>
          <h3>Common gift code rules</h3>
          <ul>
            <li>One redemption per verified account.</li>
            <li>Codes are time-limited — redeem before expiry.</li>
            <li>Some codes require a minimum deposit or recharge.</li>
            <li>Bonuses credited follow the same fair-play conditions as the rest of the wallet.</li>
          </ul>
          <h3>YaarWin free giftcode etiquette</h3>
          <p>Even a <strong>YaarWin free giftcode</strong> follows account-level rules. Sharing your account, using duplicate identities or attempting to redeem the same code on multiple accounts is the fastest way to lose access to the rewards system entirely.</p>
          <h3>Need help?</h3>
          <p>Read the full <Link to="/gift-code-guide">Gift Code Guide</Link> for advanced examples, or visit <Link to="/contact-us">Contact</Link> to reach support.</p>
        </article>
      </section>

      <section className="container py-12 border-t">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>The complete guide to YaarWin gift code rewards</h2>
          <p>YaarWin issues gift codes throughout the year as part of its community engagement programs. These codes are short alphanumeric strings that, when redeemed inside an authenticated YaarWin account, credit bonus rupees, free entries or special tournament passes directly to the member's wallet. Although the mechanic is simple, there is a surprising amount of nuance behind how codes are designed, distributed and enforced — and members who understand that nuance get more value from the program.</p>
          <h3>Why YaarWin runs gift code campaigns</h3>
          <p>Gift code campaigns serve three purposes. First, they reward existing members for ongoing participation, especially during festivals, anniversaries and major sporting events. Second, they help the team announce new features in a memorable way — a code that unlocks a new tournament format, for example, doubles as a marketing event and a usability test. Third, they create natural moments for the verified prediction community to gather, discuss and celebrate together. Each of these purposes shapes how a specific code is structured.</p>
          <h3>How codes are distributed</h3>
          <p>Official YaarWin gift codes are distributed through three channels only: the official <Link to="/blog">YaarWin blog</Link>, in-app notifications inside the platform itself, and announcements in the verified Telegram <strong>prediction community</strong>. Any other source — random websites, unsolicited messages, screenshots forwarded from unknown numbers — should be treated with extreme suspicion. Even codes that look authentic can be expired, region-restricted or designed to be redeemed only by a specific tier of member.</p>
          <h3>How to redeem safely</h3>
          <p>Redeeming a code on YaarWin requires an authenticated session. Log in through <Link to="/yaarwin-login">YaarWin Login</Link>, navigate to the gift code page, paste the code exactly as shown and submit. The platform validates the code against its central registry, checks your account eligibility and credits the bonus instantly when everything matches. The redemption appears in your transaction history with a clear label so that you can audit it later.</p>
          <h3>Common reasons codes fail</h3>
          <p>Members occasionally see a redemption failure. The most common reasons are: the code has already been redeemed by your account; the code is past its expiry date; the code is restricted to a specific event window; or the code requires a minimum deposit or activity level that the account has not yet reached. The error message will indicate the cause. If you believe the failure is incorrect, take a screenshot and write to <Link to="/contact-us">support</Link> — the team can trace the redemption attempt against the central log.</p>
          <h3>Free giftcode etiquette</h3>
          <p>Even a <strong>YaarWin free giftcode</strong> follows account-level rules. Sharing your account credentials with someone else to redeem a code is a violation of the terms. Attempting to redeem the same code on multiple accounts you control is also a violation. The platform's compliance team has tools to detect duplicate-account abuse, and members caught doing this lose access to the entire reward system, not just the specific code.</p>
          <h3>Avoiding gift code scams</h3>
          <p>YaarWin will never ask for your password, OTP, full bank details or any sensitive credentials in exchange for a gift code. Anyone who does ask for these details is fraudulent, regardless of how legitimate they appear. Block them, report the channel and warn other members. Genuine codes are always public, time-bound and limited to one redemption per verified account.</p>
          <h3>Building a habit around gift code releases</h3>
          <p>Long-term members tend to develop a simple habit: check the YaarWin blog every few days, follow the verified Telegram community for live announcements and enable in-app notifications inside the mobile app. This trio catches almost every legitimate code as soon as it is released, which is important because the highest-value codes are often time-bound and redemption windows can close within hours of release.</p>
          <h3>Where gift codes fit in the broader reward system</h3>
          <p>It is worth remembering that gift codes are only one slice of the YaarWin reward system. The first-recharge bonus, deposit bonus, referral jackpot and daily salary tiers offer larger and more predictable rewards over time. Gift codes are a delightful bonus on top of these structures, but a member who relies exclusively on codes to fund their play is missing the larger picture. Read the <Link to="/how-to-play">How to Play</Link> guide for the full reward landscape.</p>
        </article>
      </section>
      <FAQ faqs={faqs} />
      <CTASection title="Stay first in line for YaarWin gift codes" subtitle="Members on the platform receive event-specific codes via in-app notifications." />
    </Layout>
  );
};

export default GiftCode;
