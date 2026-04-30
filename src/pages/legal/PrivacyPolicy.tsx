import { Layout } from "@/components/site/Layout";
import { SEO, breadcrumbSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <Layout crumbs={[{ name: "Privacy Policy", url: "/privacy-policy" }]}>
    <SEO title="Privacy Policy — YaarWin" description="How YaarWin collects, uses, stores and protects your personal data, and the rights you have over that data." path="/privacy-policy" schema={breadcrumbSchema([{ name: "Privacy Policy", url: "/privacy-policy" }])} />
    <PageHero eyebrow="Legal" title={<><span className="text-gradient">Privacy Policy</span></>} subtitle="A clear explanation of how we handle your information." />
    <section className="container py-12">
      <article className="prose-content max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground">Last updated: April 30, 2026</p>
        <h2>1. Overview</h2>
        <p>This Privacy Policy describes how <strong>YaarWin</strong> (the "platform", "we", "us") collects, uses and safeguards information when you visit this website, register an account or interact with our services. By using YaarWin you agree to the practices described here.</p>
        <h2>2. Information we collect</h2>
        <p>We collect information that you knowingly provide — such as your phone number, email, name and bank or UPI details when you choose to deposit or withdraw — as well as technical data automatically captured by our infrastructure, including IP address, device identifiers, browser fingerprint and session timestamps.</p>
        <h2>3. How we use your information</h2>
        <p>Information is used to operate the platform, verify identities, prevent fraud, manage rewards, comply with applicable law and improve the YaarWin experience. We do not sell personal data to third parties.</p>
        <h2>4. Cookies and analytics</h2>
        <p>YaarWin uses essential cookies to keep your session active and analytics cookies to understand aggregate usage patterns. You can control cookies through your browser settings; disabling essential cookies may affect functionality.</p>
        <h2>5. Sharing of information</h2>
        <p>We share data only with infrastructure providers acting on our behalf under strict confidentiality, with payment partners required to process deposits and withdrawals, and with authorities where compelled by law.</p>
        <h2>6. Data retention</h2>
        <p>We retain account data for as long as your account is active and for a reasonable period thereafter to comply with audit and legal obligations. You can request deletion subject to applicable law.</p>
        <h2>7. Security</h2>
        <p>We use encryption in transit, restricted internal access, monitored sessions and continuous security reviews. No system is perfectly secure, but we treat protection of your data as a core platform responsibility.</p>
        <h2>8. Your rights</h2>
        <p>You may request access, correction or deletion of your personal data, withdraw certain consents and ask questions about how your information is used. Reach us via the <Link to="/contact-us">Contact</Link> page.</p>
        <h2>9. Children</h2>
        <p>YaarWin is restricted to users who are 18 years or older. We do not knowingly collect data from minors and will delete any such data brought to our attention.</p>
        <h2>10. Changes to this policy</h2>
        <p>We update this policy whenever practices change. Material updates are highlighted on the platform and dated at the top of this page.</p>
        <h2>11. International transfers</h2>
        <p>Where data is processed by infrastructure providers located outside your country, we apply contractual safeguards designed to maintain a level of protection consistent with this policy. Members can request information about the specific safeguards by contacting support.</p>
        <h2>12. Marketing communications</h2>
        <p>YaarWin sends operational messages — security alerts, transaction confirmations, important rule changes — to all members. Promotional messages, including announcements about new bonuses or gift code campaigns, are opt-in and can be disabled at any time from your account settings.</p>
        <h2>13. Automated decision-making</h2>
        <p>Some platform processes — for example fraud detection and rating updates — use automated systems. Members can request human review of any automated decision that materially affects their account by contacting support with the relevant transaction or session identifiers.</p>
        <h2>14. Account closure and data deletion</h2>
        <p>Members can request account closure at any time through the support channel. Upon closure, personal data is deleted within a reasonable period, except where retention is required by applicable law for audit, tax or compliance purposes.</p>
        <h2>15. Detailed cookie categories</h2>
        <p>Cookies on YaarWin fall into three categories: essential cookies that maintain authenticated sessions and prevent fraud, analytics cookies that help us understand aggregate usage patterns, and preference cookies that remember settings such as language and notification choices. Members can manage non-essential cookies through their browser, though doing so may affect the user experience.</p>
        <h2>16. Vendor and third-party processors</h2>
        <p>YaarWin uses a small set of vetted vendors for hosting, analytics, payment processing and customer support. Each vendor operates under a written data-processing agreement that requires confidentiality, restricted access and timely deletion of data when a contract ends. We update the list of processors when material changes occur.</p>
        <h2>17. Children and minors</h2>
        <p>YaarWin services are not intended for users under 18. We do not knowingly collect data from minors, and we will delete any data identified as belonging to a minor as soon as the situation is brought to our attention. Parents or guardians who believe a minor has registered should contact support immediately.</p>
        <h2>18. Reporting privacy concerns</h2>
        <p>If you believe your privacy has been compromised, write to the support channel with as much detail as possible. The compliance team investigates every privacy report and responds with a documented explanation of the findings and any corrective actions taken.</p>
        <h2>19. Contact</h2>
        <p>For privacy questions, write to support@yaarwin.example.com or use the <Link to="/contact-us">Contact</Link> form. The team aims to acknowledge privacy enquiries within one business day and to provide a substantive response within five business days.</p>
      </article>
    </section>
  </Layout>
);

export default PrivacyPolicy;
