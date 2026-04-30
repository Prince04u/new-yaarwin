import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { SEO, faqSchema, breadcrumbSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, Clock } from "lucide-react";
import { toast } from "sonner";

const faqs = [
  { q: "How fast does YaarWin support reply?", a: "Most queries receive a first response within a few hours during working windows. Complex account or compliance reviews can take 24–48 hours." },
  { q: "What information should I include?", a: "Share your registered identifier, a clear description of the issue and any screenshots. Never include passwords or one-time codes." },
  { q: "Can I reach support on Telegram?", a: "Yes. The verified prediction community handles general questions, while account-specific issues should always go through the Contact form or email." },
  { q: "Do you handle media or partnership requests?", a: "Yes. Mention the topic in the subject line and we will route the message to the relevant team." },
];

const ContactUs = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message captured locally. Connect a backend to deliver it.");
  };
  return (
    <Layout crumbs={[{ name: "Contact Us", url: "/contact-us" }]}>
      <SEO
        title="Contact YaarWin — Customer Support & Partnership Enquiries"
        description="Reach the YaarWin team for account, gameplay or partnership questions. Verified support channels and clear response times."
        path="/contact-us"
        schema={[faqSchema(faqs), breadcrumbSchema([{ name: "Contact Us", url: "/contact-us" }])]}
      />
      <PageHero eyebrow="Support" title={<>We're here to <span className="text-gradient">help</span></>} subtitle="Tell us what you need. Most members hear back within hours, often sooner." />

      <section className="container py-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          {[
            { icon: Mail, t: "Email", d: "support@yaarwin.example.com", sub: "Account, gameplay and compliance" },
            { icon: MessageSquare, t: "Telegram community", d: "t.me/yaarrwin", sub: "Verified prediction community" },
            { icon: Clock, t: "Response window", d: "Within hours", sub: "Faster during weekday business hours" },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border bg-card p-5 shadow-soft flex items-start gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><c.icon className="h-5 w-5" /></span>
              <div>
                <p className="font-display text-lg font-bold">{c.t}</p>
                <p className="text-sm font-medium text-foreground">{c.d}</p>
                <p className="text-xs text-muted-foreground">{c.sub}</p>
              </div>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">For account issues, please <Link to="/yaarwin-login" className="text-primary underline">log in</Link> first so we can verify your identity safely.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border bg-card p-7 md:p-9 shadow-elegant space-y-4">
          <h2 className="font-display text-2xl font-bold">Send us a message</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5"><Label>Name</Label><Input placeholder="Your name" required /></div>
            <div className="space-y-1.5"><Label>Email</Label><Input type="email" placeholder="you@example.com" required /></div>
          </div>
          <div className="space-y-1.5"><Label>Subject</Label><Input placeholder="Account, gameplay, partnership…" required /></div>
          <div className="space-y-1.5"><Label>Message</Label><Textarea rows={6} placeholder="How can we help?" required /></div>
          <Button type="submit" className="w-full bg-gradient-primary hover:opacity-95"><Send className="h-4 w-4 mr-2" /> Send message</Button>
        </form>
      </section>

      <section className="container pb-12">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>How to get the fastest help</h2>
          <p>For most questions, the <Link to="/blog">YaarWin blog</Link> and the FAQs across each page already contain the answer. If you still need help, write to support with as much context as possible — registered identifier, what you tried, and any screenshots. We will never ask you for your password or one-time codes.</p>
          <h3>Account integrity</h3>
          <p>If you suspect your YaarWin account has been compromised, change your password immediately and write to support with a description of the incident. The compliance team will review the session history and take action when needed.</p>
          <h3>Partnership and media</h3>
          <p>For partnerships, content collaborations or media questions, mention the topic in the subject line. The relevant team will respond directly.</p>
        </article>
      </section>

      <section className="container py-12 border-t">
        <article className="prose-content max-w-3xl mx-auto">
          <h2>How YaarWin support actually works</h2>
          <p>Customer support at most colour prediction platforms is a black box: members send messages into a generic inbox and hope for a reply. YaarWin support is structured differently. The team is organised into three queues — gameplay, account and compliance — and every incoming message is routed to the relevant queue based on the subject line and the description. Most queries are resolved within hours, and even complex compliance reviews are completed within a single business day in the vast majority of cases.</p>
          <h3>What information to include</h3>
          <p>The single biggest factor in fast support resolution is the quality of the initial message. A clear subject line, your registered identifier (phone number or email — never your password), a description of the issue and any relevant screenshots make it possible for the team to investigate immediately. Vague messages — "my account is not working" — slow everything down because the team has to ask several follow-up questions before they can begin an investigation.</p>
          <h3>What never to share</h3>
          <p>Never share your password, your one-time codes or your full bank details over any support channel. The legitimate YaarWin team will never ask for these. If anyone claiming to be from YaarWin asks for them, treat the request as fraudulent and report the conversation to <Link to="/contact-us">support</Link> through the form on this page.</p>
          <h3>Account integrity issues</h3>
          <p>If you suspect that your account has been compromised, change your password immediately and write to support with a description of the incident. The compliance team will review the session history, identify any unauthorised actions and take corrective measures. In serious cases, the team can lock the account temporarily to prevent further damage while the investigation is in progress.</p>
          <h3>Disputes and fairness reviews</h3>
          <p>If you believe a game outcome was incorrect, a bonus was miscalculated or a withdrawal was processed incorrectly, contact support with the relevant transaction or session identifiers. The team can pull the underlying logs and walk through the evidence with you. YaarWin's audit trails are designed to make this kind of review possible, and most disputes are resolved transparently within a single support cycle.</p>
          <h3>Partnership and media enquiries</h3>
          <p>For partnerships, content collaborations, sponsorships or media questions, mention the topic in the subject line. The relevant team — usually the community or product team — will respond directly. We are open to thoughtful collaborations and decline polite the kind of generic "promotional packages" that flood most public inboxes.</p>
          <h3>What we will not do</h3>
          <p>YaarWin support will never guarantee a specific game outcome, never reverse a transaction that complies with the published rules and never share another member's information with you. These are deliberate boundaries that protect everyone on the platform. If you ever feel that a support response was unfair, the <Link to="/about-us">About Us</Link> page describes the escalation path through the compliance team.</p>
          <h3>Self-service first</h3>
          <p>Before opening a ticket, please check the FAQs on the relevant page and the <Link to="/blog">blog</Link>. A surprising fraction of common questions — bonus rules, withdrawal windows, gift code redemption — are already answered in detail. Self-service usually returns an answer in seconds, while a support ticket takes hours. Both work; the first is faster.</p>
        </article>
      </section>
      <FAQ faqs={faqs} />
    </Layout>
  );
};

export default ContactUs;
