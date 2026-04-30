import { Layout } from "@/components/site/Layout";
import { SEO, breadcrumbSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { Link } from "react-router-dom";

const Terms = () => (
  <Layout crumbs={[{ name: "Terms & Conditions", url: "/terms-and-conditions" }]}>
    <SEO title="Terms & Conditions — YaarWin" description="The rules that govern the use of YaarWin, including account, gameplay, rewards and dispute terms." path="/terms-and-conditions" schema={breadcrumbSchema([{ name: "Terms & Conditions", url: "/terms-and-conditions" }])} />
    <PageHero eyebrow="Legal" title={<><span className="text-gradient">Terms & Conditions</span></>} subtitle="The framework that keeps YaarWin fair for everyone." />
    <section className="container py-12">
      <article className="prose-content max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground">Last updated: April 30, 2026</p>
        <h2>1. Acceptance</h2>
        <p>By accessing the YaarWin platform you agree to these Terms & Conditions. If you do not agree, please discontinue use immediately.</p>
        <h2>2. Eligibility</h2>
        <p>YaarWin is restricted to users who are at least 18 years old and reside in jurisdictions where the platform's services are legally permitted. Members are responsible for confirming local laws before participating.</p>
        <h2>3. Account responsibilities</h2>
        <p>Each member is responsible for the security of their credentials, the accuracy of submitted information and the lawful use of their account. Duplicate accounts, shared identities or credential sharing are prohibited.</p>
        <h2>4. Gameplay & fair play</h2>
        <p>All gameplay is bound by published rules. Use of automated tools, exploitation of bugs or any conduct that compromises platform integrity will result in immediate suspension and potential forfeiture of rewards.</p>
        <h2>5. Rewards and bonuses</h2>
        <p>Bonuses, gift codes, deposit rewards, referral jackpots and salary tiers follow rules published on the platform. Conditions include account verification, bank binding and clean activity history. We reserve the right to revoke rewards earned through abuse.</p>
        <h2>6. Deposits and withdrawals</h2>
        <p>Deposits are credited to your YaarWin wallet upon confirmation. Withdrawals are processed to bound bank or UPI methods after verification. Processing windows are published inside the wallet section.</p>
        <h2>7. Suspension and termination</h2>
        <p>YaarWin may suspend or terminate accounts that violate these terms, applicable law or community guidelines. Members will be notified through their registered contact information.</p>
        <h2>8. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, YaarWin is not liable for indirect, incidental or consequential damages arising from platform use, third-party services or events outside our control.</p>
        <h2>9. Dispute resolution</h2>
        <p>Disputes are first addressed through the YaarWin support team. Unresolved disputes follow the binding arbitration mechanism described inside the platform.</p>
        <h2>10. Modifications</h2>
        <p>YaarWin may revise these terms. Material changes are announced on the platform. Continued use after revisions constitutes acceptance of the updated terms.</p>
        <h2>11. Anti-fraud and anti-money-laundering</h2>
        <p>YaarWin enforces strict anti-fraud and anti-money-laundering controls. Suspicious deposits, withdrawals or gameplay patterns trigger compliance reviews. Members are required to cooperate with reasonable verification requests during these reviews, and accounts that fail to cooperate may be suspended.</p>
        <h2>12. Intellectual property</h2>
        <p>The YaarWin name, logo, content, code and assets are the intellectual property of the platform. Members may not copy, reproduce, modify, distribute or create derivative works from these assets without explicit written permission.</p>
        <h2>13. Member-generated content</h2>
        <p>Where members post content inside the platform — for example chat messages or community contributions — they grant YaarWin a worldwide, royalty-free licence to display and moderate that content for the purposes of operating the service. Members retain ownership of the underlying content.</p>
        <h2>14. Indemnification</h2>
        <p>Members agree to indemnify and hold YaarWin harmless from claims arising out of misuse of the platform, breach of these terms or violation of applicable law. This clause does not limit any rights members have under mandatory consumer protection laws.</p>
        <h2>15. Force majeure</h2>
        <p>YaarWin is not liable for delays or failures caused by circumstances beyond its reasonable control, including natural disasters, infrastructure outages, government actions and similar events. The platform will work to restore normal service as soon as practicable after such events.</p>
        <h2>16. Severability</h2>
        <p>If any provision of these terms is found to be unenforceable, the remaining provisions continue in full effect. The unenforceable provision will be replaced with one that most closely reflects the original intent within the bounds of applicable law.</p>
        <h2>17. Assignment</h2>
        <p>Members may not assign their rights or obligations under these terms without YaarWin's prior written consent. YaarWin may assign its rights and obligations to a successor entity as part of a merger, acquisition or restructuring.</p>
        <h2>18. Governing law</h2>
        <p>These terms are governed by the laws of the jurisdiction in which YaarWin is established, without regard to conflict-of-law principles. Members retain rights provided by mandatory local consumer protection laws.</p>
        <h2>19. Detailed dispute process</h2>
        <p>Disputes proceed through three stages: initial support review, compliance team escalation and binding arbitration. Each stage has a published timeline, and members are kept informed of the status throughout. The platform's audit trails are designed to make this process transparent and evidence-based.</p>
        <h2>20. Contact</h2>
        <p>For legal queries, reach us through the <Link to="/contact-us">Contact</Link> page. Mark the subject line as "Legal" so the message is routed to the compliance team.</p>
      </article>
    </section>
  </Layout>
);

export default Terms;
