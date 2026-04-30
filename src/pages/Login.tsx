import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/site/Layout";
import { SEO, faqSchema, breadcrumbSchema } from "@/components/site/SEO";
import { FAQ } from "@/components/site/FAQ";
import { toast } from "sonner";

const faqs = [
  { q: "How do I log in to YaarWin?", a: "Open the YaarWin Login page, choose phone number or email, enter your registered credentials and submit. You will be redirected to your member dashboard once authentication completes." },
  { q: "I forgot my YaarWin password — what should I do?", a: "Use the Customer Service link from the login screen. The support team will guide you through identity verification before resetting access on your bound account." },
  { q: "Why is my login failing?", a: "Most login issues are caused by a typo, a different country code or a deactivated session. Re-enter your details, check the country code and clear cached data if the issue persists." },
  { q: "Is YaarWin Login secure?", a: "All YaarWin sessions are protected with encrypted transport, device-level checks and rate limiting on authentication endpoints to deter brute-force attempts." },
];

const Login = () => {
  const [show, setShow] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Authentication is not connected yet. This is a presentation page.");
  };
  return (
    <Layout crumbs={[{ name: "YaarWin Login", url: "/yaarwin-login" }]}>
      <SEO
        title="YaarWin Login — Access Your Verified Member Account"
        description="Securely log in to your YaarWin account using your registered phone number or email. Trusted authentication for the YaarWin gaming community."
        path="/yaarwin-login"
        schema={[faqSchema(faqs), breadcrumbSchema([{ name: "YaarWin Login", url: "/yaarwin-login" }])]}
      />
      <section className="container py-16 grid gap-12 lg:grid-cols-2 items-start">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            <ShieldCheck className="h-3.5 w-3.5" /> Secure access
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-gradient">YaarWin Login</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg">Sign in to your verified account to access games, wallet and the YaarWin community in one secure session.</p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Phone number or email login", "Encrypted session protection", "Rate-limited authentication", "Bank-bound identity verification"].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t}</li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">New here? <Link to="/yaarwin-register" className="text-primary font-medium hover:underline">Create your YaarWin account →</Link></p>
        </div>

        <div className="rounded-3xl border bg-card p-7 md:p-9 shadow-elegant">
          <h2 className="font-display text-2xl font-bold mb-1">Log in to YaarWin</h2>
          <p className="text-sm text-muted-foreground mb-6">Use your registered phone number or email.</p>
          <Tabs defaultValue="phone">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="phone"><Phone className="h-4 w-4 mr-2" /> Phone</TabsTrigger>
              <TabsTrigger value="email"><Mail className="h-4 w-4 mr-2" /> Email</TabsTrigger>
            </TabsList>
            <TabsContent value="phone">
              <form className="space-y-4 mt-5" onSubmit={onSubmit}>
                <div className="space-y-1.5">
                  <Label>Phone number</Label>
                  <div className="flex gap-2">
                    <Input className="w-20" defaultValue="+91" />
                    <Input type="tel" placeholder="Enter phone number" required />
                  </div>
                </div>
                <PasswordField show={show} setShow={setShow} />
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-95">Log in</Button>
              </form>
            </TabsContent>
            <TabsContent value="email">
              <form className="space-y-4 mt-5" onSubmit={onSubmit}>
                <div className="space-y-1.5">
                  <Label>Email address</Label>
                  <Input type="email" placeholder="you@example.com" required />
                </div>
                <PasswordField show={show} setShow={setShow} />
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-95">Log in</Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <Link to="/contact-us" className="text-center rounded-lg border py-2.5 hover:border-primary/40 hover:text-primary">Forgot password</Link>
            <Link to="/contact-us" className="text-center rounded-lg border py-2.5 hover:border-primary/40 hover:text-primary">Customer support</Link>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>Logging in to YaarWin the safe way</h2>
          <p>The <strong>YaarWin Login</strong> page is the only place you should ever enter your credentials. Bookmark this URL and avoid links shared in unofficial channels. If a friend forwards a login link, double-check the domain before typing your password.</p>
          <h3>What to do if you cannot log in</h3>
          <p>If your password no longer works, do not create a duplicate account. Duplicates risk your existing balance and bonuses. Instead, reach out from the <Link to="/contact-us">Contact</Link> page so the support team can verify your identity and restore access.</p>
          <h3>Protecting your YaarWin account</h3>
          <p>Use a unique password, never share verification codes and avoid public Wi-Fi when logging in. If anything unusual happens — for example an unexpected logout or a foreign session — change your password immediately and notify support.</p>
        </article>
      </section>
      <section className="container py-12 border-t">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>YaarWin Login: a complete reference</h2>
          <p>The <strong>YaarWin Login</strong> page is the front door to your verified account, and like every front door it deserves to be treated with respect. This long-form reference walks through the technical, behavioural and security dimensions of logging in, with the goal of helping members avoid the small mistakes that occasionally cause unnecessary trouble.</p>
          <h3>Bookmark the official URL</h3>
          <p>The single most effective security habit for any platform is to bookmark the official URL and only ever log in from the bookmark. Phishing sites that look almost identical to YaarWin are occasionally circulated through messaging apps and unofficial channels, and members who click those links and enter their credentials lose access to their accounts. A bookmark eliminates this entire class of attack.</p>
          <h3>Choose a unique password</h3>
          <p>Your YaarWin password should be unique to YaarWin. Reusing a password from another site means that a breach of that other site can compromise your YaarWin account. A password manager is the simplest way to maintain unique, strong passwords across every site you use. The password should be at least twelve characters long and combine letters, numbers and symbols.</p>
          <h3>Phone-number versus email login</h3>
          <p>YaarWin supports both phone-number and email login. The two methods are equally secure, and most members choose based on personal preference. Phone-number login is convenient on mobile devices, while email login is convenient on desktops where typing a long email is faster than switching between input fields. Whichever method you choose, the underlying account is the same — you can switch between them at any time.</p>
          <h3>Session management</h3>
          <p>Each successful YaarWin Login creates an encrypted session bound to the device. Sessions expire automatically after a period of inactivity, and members can review active sessions inside the account settings. If you ever see a session you do not recognise, terminate it immediately, change your password and contact <Link to="/contact-us">support</Link>. The compliance team can investigate the suspicious session and take additional protective measures if needed.</p>
          <h3>What to do if login fails</h3>
          <p>The most common login failures are typos, the wrong country code on the phone-number method and recent password changes. Re-enter the credentials carefully, double-check the country code and try again. If you have forgotten your password, reach out from the <Link to="/contact-us">Contact</Link> page rather than creating a duplicate account — duplicates risk your existing balance, bonuses and referral team.</p>
          <h3>Two-factor authentication and biometric login</h3>
          <p>YaarWin's authentication system supports rate limiting, device-level checks and biometric login on the native app. Combined with a unique strong password, these protections make it extremely difficult for an attacker to gain access to your account. The team continues to invest in additional authentication factors and will announce new protections on the <Link to="/blog">blog</Link> as they ship.</p>
          <h3>Logging in from a shared device</h3>
          <p>If you must log in from a shared device — a friend's phone, a public computer — make sure to log out at the end of the session and clear cached credentials before leaving. Better yet, avoid shared devices altogether for any session that involves financial actions. The convenience is rarely worth the risk.</p>
          <h3>Why login matters more than members realise</h3>
          <p>The discipline of careful login behaviour protects not just your account but also the wider community. A compromised account can be used to abuse the referral system, redeem gift codes fraudulently or interact with other members in misleading ways. By treating <strong>YaarWin Login</strong> as a sensitive action — and not just a quick form to fill out — you are participating in the security culture that keeps the platform trustworthy for everyone.</p>
        </article>
      </section>
      <FAQ faqs={faqs} />
    </Layout>
  );
};

const PasswordField = ({ show, setShow }: { show: boolean; setShow: (v: boolean) => void }) => (
  <div className="space-y-1.5">
    <Label>Password</Label>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input type={show ? "text" : "password"} placeholder="Password" className="pl-9 pr-9" required />
      <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle password visibility">
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  </div>
);

export default Login;
