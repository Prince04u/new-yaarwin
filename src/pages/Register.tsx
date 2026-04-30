import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Lock, User, Eye, EyeOff, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/site/Layout";
import { SEO, faqSchema, breadcrumbSchema } from "@/components/site/SEO";
import { FAQ } from "@/components/site/FAQ";
import { toast } from "sonner";

const faqs = [
  { q: "How do I sign up for YaarWin?", a: "Open the YaarWin Register page, choose phone number or email, set a secure password and confirm your details. Your account is ready in under a minute." },
  { q: "Is YaarWin Signup free?", a: "Yes. Creating a YaarWin account is completely free. Optional deposits unlock additional reward programs but are never required to register." },
  { q: "Can I refer friends after I register?", a: "Yes. Every YaarWin account ships with a unique referral code that you can share to earn referral bonuses when friends register and recharge." },
  { q: "What information is required to register?", a: "A working phone number or email and a secure password. Verified bank or UPI details are required only when you choose to deposit or withdraw." },
];

const Register = () => {
  const [show, setShow] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Registration is not connected yet. This is a presentation page.");
  };
  return (
    <Layout crumbs={[{ name: "YaarWin Register", url: "/yaarwin-register" }]}>
      <SEO
        title="YaarWin Register — Create Your Free YaarWin Signup Account"
        description="YaarWin signup is fast and free. Register a verified account using your phone number or email and unlock the full YaarWin gaming platform."
        path="/yaarwin-register"
        schema={[faqSchema(faqs), breadcrumbSchema([{ name: "YaarWin Register", url: "/yaarwin-register" }])]}
      />
      <section className="container py-16 grid gap-12 lg:grid-cols-2 items-start">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            <BadgeCheck className="h-3.5 w-3.5" /> Free to join
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-gradient">YaarWin Register</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg">Create a verified YaarWin account in under a minute and unlock the full game catalogue, reward programs and the official prediction community.</p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Free YaarWin signup", "Unique referral code for every member", "Eligible for deposit & first-recharge bonuses", "Access to skill, card and tournament games"].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t}</li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">Already a member? <Link to="/yaarwin-login" className="text-primary font-medium hover:underline">YaarWin Login →</Link></p>
        </div>

        <div className="rounded-3xl border bg-card p-7 md:p-9 shadow-elegant">
          <h2 className="font-display text-2xl font-bold mb-1">Create your account</h2>
          <p className="text-sm text-muted-foreground mb-6">Use your phone number or email to begin.</p>
          <Tabs defaultValue="phone">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="phone"><Phone className="h-4 w-4 mr-2" /> Phone</TabsTrigger>
              <TabsTrigger value="email"><Mail className="h-4 w-4 mr-2" /> Email</TabsTrigger>
            </TabsList>
            <TabsContent value="phone">
              <form className="space-y-4 mt-5" onSubmit={onSubmit}>
                <Field icon={User} label="Full name" placeholder="Your name" />
                <div className="space-y-1.5">
                  <Label>Phone number</Label>
                  <div className="flex gap-2">
                    <Input className="w-20" defaultValue="+91" />
                    <Input type="tel" placeholder="Enter phone number" required />
                  </div>
                </div>
                <PasswordField show={show} setShow={setShow} />
                <Field label="Referral code (optional)" placeholder="Enter referral code" />
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-95">Create account</Button>
              </form>
            </TabsContent>
            <TabsContent value="email">
              <form className="space-y-4 mt-5" onSubmit={onSubmit}>
                <Field icon={User} label="Full name" placeholder="Your name" />
                <Field icon={Mail} label="Email address" type="email" placeholder="you@example.com" />
                <PasswordField show={show} setShow={setShow} />
                <Field label="Referral code (optional)" placeholder="Enter referral code" />
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-95">Create account</Button>
              </form>
            </TabsContent>
          </Tabs>
          <p className="mt-4 text-xs text-muted-foreground text-center">By registering, you agree to our <Link to="/terms-and-conditions" className="underline">Terms</Link> and <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.</p>
        </div>
      </section>

      <section className="container pb-12">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>Why YaarWin signup is different</h2>
          <p><strong>YaarWin Register</strong> is intentionally simple. You only share what is needed to create a secure, identity-bound account — and nothing else. Bank or UPI details are requested later, and only when you choose to deposit or withdraw.</p>
          <h3>The benefits start immediately</h3>
          <p>From the moment your account is active, you are eligible for first-recharge bonuses, the referral jackpot and access to every game format. Read the <Link to="/how-to-play">How to Play</Link> guide to plan your first session.</p>
          <h3>Account safety from day one</h3>
          <p>Choose a unique password, enable session alerts and keep your verification codes private. The <Link to="/privacy-policy">Privacy Policy</Link> explains exactly what data we keep and how it is protected.</p>
        </article>
      </section>
      <section className="container py-12 border-t">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>YaarWin Register: everything new members should know</h2>
          <p>The <strong>YaarWin Register</strong> flow is intentionally short — a phone number or email, a strong password, and you are in. But behind that short flow is a deliberate philosophy about how a new member should be onboarded: ask only for what is necessary, defer financial details until they are actually needed and treat the first session as a chance to learn rather than a pressure to deposit.</p>
          <h3>What you actually need to start</h3>
          <p>Registration requires only a working phone number or email and a strong password. Bank or UPI binding is requested later, and only when you decide to make your first deposit or withdrawal. This separation matters: it means that curious newcomers can explore YaarWin's catalogue, read the rules and even play in free entry pools without sharing any financial information.</p>
          <h3>Choosing a strong password during registration</h3>
          <p>The strongest possible time to set a strong password is the moment you create the account. Choose a unique password that you do not use on any other site. Combine letters, numbers and symbols. A password manager makes this trivial. Do not write your password on a piece of paper next to your computer, and never share it with anyone — not even support, who will never ask for it.</p>
          <h3>Using a referral code at sign-up</h3>
          <p>If a friend introduced you to YaarWin, enter their referral code during registration. Doing so credits the friend with a referral bonus once you complete the standard activation steps, and it also makes you eligible for a small newcomer bonus tied to the same referral program. The referral structure is documented in detail inside the <Link to="/how-to-play">How to Play</Link> guide.</p>
          <h3>Verifying your phone number or email</h3>
          <p>After registration, the platform sends a verification message to confirm that the contact you used belongs to you. Complete this step immediately. Verified contacts are required for password recovery, security alerts and high-value tournament participation. An unverified account is functional for browsing but limited for serious play.</p>
          <h3>What happens after you register</h3>
          <p>The moment your account is active, you are eligible for the first-recharge bonus, the referral jackpot, gift code redemptions and the daily salary system. You can browse the full <Link to="/games">game catalogue</Link>, watch the result feed, follow tournament leaderboards and join the verified prediction community. We strongly recommend reading the <Link to="/how-to-play">How to Play</Link> guide and the <Link to="/disclaimer">Disclaimer</Link> before your first deposit.</p>
          <h3>Avoiding duplicate accounts</h3>
          <p>Each member should maintain exactly one YaarWin account. Duplicate accounts violate the terms, are detectable through the platform's compliance tooling and lead to forfeiture of bonuses across all related accounts. If you forget your password, contact <Link to="/contact-us">support</Link> from the registered contact rather than creating a new account.</p>
          <h3>The first-week mindset</h3>
          <p>The most successful YaarWin members treat their first week as a learning period. They explore multiple game formats, read the rules pages, review their own session history and ask questions in the moderated prediction community. Members who treat the first week as a sprint to maximise short-term gains often miss the structural bonuses — referral, salary, gift codes — that drive long-term value. Patience compounds.</p>
          <h3>Privacy and data protection during sign-up</h3>
          <p>YaarWin's <Link to="/privacy-policy">Privacy Policy</Link> describes exactly what data we collect during registration, how it is stored and how it is protected. The summary: we collect only what is necessary, we encrypt sensitive data and we never sell personal information to third parties. If you have specific privacy concerns, the support team is happy to walk through the details with you before you finish registering.</p>
        </article>
      </section>
      <FAQ faqs={faqs} />
    </Layout>
  );
};

const Field = ({ icon: Icon, label, ...rest }: any) => (
  <div className="space-y-1.5">
    <Label>{label}</Label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />}
      <Input className={Icon ? "pl-9" : ""} {...rest} />
    </div>
  </div>
);

const PasswordField = ({ show, setShow }: { show: boolean; setShow: (v: boolean) => void }) => (
  <div className="space-y-1.5">
    <Label>Password</Label>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input type={show ? "text" : "password"} placeholder="Create a strong password" className="pl-9 pr-9" required />
      <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle password visibility">
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  </div>
);

export default Register;
