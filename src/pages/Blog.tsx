import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { SEO, breadcrumbSchema, faqSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { ArrowRight, Calendar } from "lucide-react";
import featuresImg from "@/assets/yaarwin-features.jpg";
import bonusImg from "@/assets/yaarwin-deposit-bonus.jpg";
import referralImg from "@/assets/yaarwin-referral.jpg";
import salaryImg from "@/assets/yaarwin-salary.jpg";
import adsImg from "@/assets/yaarwin-ads-fee.jpg";

const posts = [
  { slug: "yaarwin-platform-overview", t: "A complete overview of the YaarWin platform", d: "Inside the YaarWin gaming experience: catalogue, rewards, community and the philosophy behind every decision.", img: featuresImg, date: "April 12, 2026" },
  { slug: "deposit-bonus-explained", t: "Deposit bonus, explained without the jargon", d: "How the YaarWin deposit bonus tiers work, who qualifies and the conditions that protect every member.", img: bonusImg, date: "April 4, 2026" },
  { slug: "referral-jackpot-strategy", t: "Building a healthy YaarWin referral team", d: "Practical advice for members who want to grow a verified, active referral team without breaking the rules.", img: referralImg, date: "March 22, 2026" },
  { slug: "daily-salary-system", t: "Understanding the YaarWin daily salary system", d: "What 'salary' means inside YaarWin, how the tiers are structured and the conduct rules that keep them sustainable.", img: salaryImg, date: "March 9, 2026" },
  { slug: "ads-fee-supervisor-program", t: "How the YaarWin ads-fee support program works", d: "A clear breakdown of the supervisor-led ads support framework and the documentation members should keep." , img: adsImg, date: "February 26, 2026" },
];

const faqs = [
  { q: "How often is the YaarWin blog updated?", a: "We publish new YaarWin blog articles whenever a program changes, a new feature ships or the community asks for clarification on a specific topic." },
  { q: "Can I suggest a topic?", a: "Yes. Send your idea through Contact and the editorial team will consider it for an upcoming post." },
  { q: "Do blog posts get revised?", a: "Yes. Whenever rules or programs change, we update the relevant article and add a revision note." },
];

const Blog = () => (
  <Layout crumbs={[{ name: "Blog", url: "/blog" }]}>
    <SEO
      title="YaarWin Blog — Guides, Updates and Community Stories"
      description="The official YaarWin blog: deep guides on bonuses, referrals, gameplay and the YaarWin community. Written by the team, revised when programs change."
      path="/blog"
      schema={[faqSchema(faqs), breadcrumbSchema([{ name: "Blog", url: "/blog" }])]}
    />
    <PageHero eyebrow="Blog" title={<>Insights from the <span className="text-gradient">YaarWin team</span></>} subtitle="Editorial deep dives into gameplay, rewards and the community — published with named contributors and revised whenever rules change." />

    <section className="container py-16">
      <div className="grid gap-7 lg:grid-cols-2">
        {posts.map((p, i) => (
          <article key={p.slug} className={`rounded-3xl border bg-card overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all ${i === 0 ? "lg:col-span-2" : ""}`}>
            <div className={`grid ${i === 0 ? "md:grid-cols-2" : ""} gap-0`}>
              <img src={p.img} alt={p.t} loading="lazy" className={`w-full ${i === 0 ? "h-full max-h-80 md:max-h-none" : "h-56"} object-cover`} />
              <div className="p-7 md:p-9 flex flex-col justify-center">
                <p className="inline-flex items-center gap-2 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {p.date}</p>
                <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold leading-tight">{p.t}</h2>
                <p className="mt-3 text-muted-foreground">{p.d}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Read article <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="container py-12 border-t">
      <article className="prose-content max-w-3xl mx-auto">
        <h2>What the YaarWin blog is for</h2>
        <p>The <strong>YaarWin blog</strong> is the platform's public editorial channel. It exists for one reason: to give members and prospective members an honest, well-organised place to read about how the platform actually works. Posts are written by named contributors from the YaarWin team, and they are revised whenever the underlying rules or programs change. We do not publish anonymous opinions, we do not run native-advertising disguised as editorial and we do not chase clicks with sensational headlines.</p>
        <h3>Editorial standards</h3>
        <p>Every post on the YaarWin blog goes through a short editorial review focused on three questions: is the information accurate, is it explained in plain language and would a newcomer understand it without prior context. When the answer to any of those questions is no, the post is revised before publication. This editorial discipline is one of the small reasons the YaarWin blog reads like documentation rather than marketing.</p>
        <h3>How to use the blog</h3>
        <p>Bookmark the blog, check it weekly and read the posts that match your current questions. The platform's most consequential changes — new bonus structures, new game formats, updated community guidelines — are always announced here first. Members who follow the blog tend to be the first to take advantage of new opportunities and the last to be surprised by changes.</p>
        <h3>Topic coverage</h3>
        <p>Blog topics fall into four broad categories. <strong>Platform overviews</strong> introduce new features and explain how they fit into the existing experience. <strong>Reward deep dives</strong> explain bonus, referral, salary and gift code programs in detail, often with worked examples. <strong>Strategy pieces</strong> share insights from experienced members about how to approach specific game formats. <strong>Community stories</strong> highlight tournaments, member milestones and moderation case studies that illustrate the platform's values in practice.</p>
        <h3>Suggesting topics</h3>
        <p>If there is a topic you would like to see covered, send the suggestion through <Link to="/contact-us">Contact</Link>. The editorial team reviews suggestions weekly and frequently turns reader questions into posts. Many of the platform's most-read articles started as a single member's question that turned out to apply to hundreds of others.</p>
        <h3>Revisions and corrections</h3>
        <p>Whenever an underlying rule or program changes, the relevant blog post is revised and a revision note is appended at the top. We treat the historical record as important — readers should be able to see what a post said when it was first published and how it has changed since. This transparency is unusual in the industry and is one of the things long-term members tell us they value most.</p>
        <h3>Combining the blog with other resources</h3>
        <p>The blog complements the FAQs across the site, the <Link to="/how-to-play">How to Play</Link> guide and the <Link to="/gift-code-guide">Gift Code Guide</Link>. The FAQs answer quick questions in a sentence or two, the guides cover entire topics end-to-end and the blog goes deep on specific changes, strategies and stories. Together, they form a complete documentation set for the platform.</p>
      </article>
    </section>
    <FAQ faqs={faqs} />
    <CTASection title="Want updates straight to your inbox?" subtitle="The YaarWin blog publishes new articles whenever a program changes or the community needs a clarification." primary={{ to: "/contact-us", label: "Contact us" }} secondary={{ to: "/yaarwin-register", label: "Register" }} />
  </Layout>
);

export default Blog;
