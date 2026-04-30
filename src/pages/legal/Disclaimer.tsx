import { Layout } from "@/components/site/Layout";
import { SEO, breadcrumbSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { Link } from "react-router-dom";

const Disclaimer = () => (
  <Layout crumbs={[{ name: "Disclaimer", url: "/disclaimer" }]}>
    <SEO title="Disclaimer — YaarWin" description="Important disclosures about YaarWin's services, responsible play and the limits of platform guarantees." path="/disclaimer" schema={breadcrumbSchema([{ name: "Disclaimer", url: "/disclaimer" }])} />
    <PageHero eyebrow="Legal" title={<><span className="text-gradient">Disclaimer</span></>} subtitle="Important information every member should read before participating." />
    <section className="container py-12">
      <article className="prose-content max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground">Last updated: April 30, 2026</p>
        <h2>1. Informational purpose</h2>
        <p>The content on the YaarWin website is provided for informational purposes. While we maintain accuracy, no guarantee is made that information is complete, current or applicable to a particular situation.</p>
        <h2>2. No outcome guarantees</h2>
        <p>YaarWin offers games of skill and prediction. Outcomes are influenced by variance and individual decision-making. <strong>No outcome is guaranteed</strong>. Members should never commit funds they cannot afford to lose.</p>
        <h2>3. Responsible play</h2>
        <p>YaarWin actively encourages responsible play. Set personal time and spending limits, take breaks and seek support if play affects your finances or wellbeing. Help is available from professional support organisations in your region.</p>
        <h2>4. Third-party content</h2>
        <p>Where the platform or website links to third parties — including the official Telegram <strong>prediction community</strong> — we do so as a convenience. We do not control third-party content and are not responsible for it.</p>
        <h2>5. Jurisdiction</h2>
        <p>Members are responsible for confirming that their use of YaarWin is legal in their jurisdiction. Where prohibited, the platform must not be used.</p>
        <h2>6. Changes</h2>
        <p>This disclaimer may be updated. The most current version is always available on this page.</p>
        <h2>7. No financial or legal advice</h2>
        <p>Nothing on the YaarWin website constitutes financial, tax or legal advice. Members should consult qualified professionals in their jurisdiction for advice specific to their situation, especially in relation to taxation of any winnings.</p>
        <h2>8. Personal limits and self-exclusion</h2>
        <p>YaarWin strongly encourages every member to set personal time and spending limits before participating. Members can request a temporary or permanent self-exclusion through support, and the platform honours these requests immediately. Self-exclusion is a sign of strength and discipline, not weakness.</p>
        <h2>9. Recognising problem play</h2>
        <p>Common warning signs include playing for longer than intended, spending more than budgeted, chasing losses, hiding play from family or feeling anxious between sessions. If any of these apply, take a break, talk to a trusted person and consider reaching out to a professional support organisation in your region.</p>
        <h2>10. Variance and expected outcomes</h2>
        <p>Even disciplined, skilled play involves variance. Short streaks of wins or losses do not necessarily reflect long-term expectations. Members should evaluate performance over reasonable time horizons rather than reacting to individual sessions.</p>
        <h2>11. Tax responsibilities</h2>
        <p>Members are responsible for understanding and complying with the tax rules that apply to gaming winnings in their jurisdiction. YaarWin does not provide tax advice, and any tax-related questions should be directed to a qualified professional.</p>
        <h2>12. Account integrity expectations</h2>
        <p>This disclaimer reinforces the expectation that members maintain a single verified account, do not share credentials and do not attempt to manipulate game outcomes through automated tools or coordinated activity. Violations result in suspension and forfeiture of rewards.</p>
        <h2>13. Communications and announcements</h2>
        <p>Important announcements — including rule changes, security alerts and program updates — are published on the platform and the official <Link to="/blog">blog</Link>. Members are responsible for staying informed by checking these sources regularly.</p>
        <h2>14. Help resources</h2>
        <p>If you need help with responsible play, contact a professional support organisation in your region. YaarWin support can also assist with platform-side measures such as cooling-off periods and self-exclusion. Reaching out is always the right choice when something does not feel right.</p>
        <h2>15. Questions</h2>
        <p>If anything here is unclear, please reach out via the <Link to="/contact-us">Contact</Link> page. We treat every question seriously and respond within a reasonable timeframe.</p>
      </article>
    </section>
  </Layout>
);

export default Disclaimer;
