import { Link } from "react-router-dom";
import { Smartphone, Download, ShieldCheck, Zap, Bell, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { SEO, faqSchema, breadcrumbSchema } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import logo from "@/assets/yaarwin-logo.jpg";

const perks = [
  { icon: Zap, t: "Faster sessions", d: "Native rendering and reduced load times for game lobbies and result feeds." },
  { icon: Bell, t: "Push notifications", d: "Instant alerts for tournament starts, payouts and verified gift codes." },
  { icon: Wifi, t: "Lighter on data", d: "Optimised asset bundles save bandwidth on mobile networks." },
  { icon: ShieldCheck, t: "Same secure account", d: "Login is identical to the web — your wallet, history and bonuses sync seamlessly." },
];

const faqs = [
  { q: "How do I download the YaarWin app?", a: "Use the official download link on this page to get the latest YaarWin Android APK. Future iOS availability will be announced on the blog." },
  { q: "Is the YaarWin app safe to install?", a: "Yes. The build is signed and distributed only from official YaarWin URLs. Avoid third-party mirrors that may bundle modified code." },
  { q: "Do I need to register again inside the app?", a: "No. Use the same YaarWin Login credentials. Your wallet, bonuses and history sync automatically." },
  { q: "What are the device requirements?", a: "Android 7.0 or newer with at least 120 MB of free storage. The app runs smoothly on most modern devices." },
];

const DownloadApp = () => (
  <Layout crumbs={[{ name: "Download App", url: "/download-app" }]}>
    <SEO
      title="Download YaarWin App — Official YaarWin Mobile Experience"
      description="Download the official YaarWin app for a faster, lighter and more secure mobile gaming experience. Same account, same wallet, native performance."
      path="/download-app"
      schema={[faqSchema(faqs), breadcrumbSchema([{ name: "Download App", url: "/download-app" }])]}
    />
    <PageHero
      eyebrow="Mobile app"
      title={<>The full <span className="text-gradient">YaarWin experience</span> on your phone</>}
      subtitle="Get the official YaarWin Android app for faster gameplay, instant notifications and a smoother session-to-session experience."
    />

    <section className="container py-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
      <div className="relative mx-auto max-w-xs w-full">
        <div className="aspect-[9/19] rounded-[3rem] border-8 border-foreground/80 bg-hero shadow-elegant overflow-hidden flex flex-col items-center justify-center text-primary-foreground p-6">
          <img src={logo} alt="YaarWin app icon" className="h-24 w-24 rounded-3xl ring-4 ring-white/30 animate-float" loading="lazy" />
          <p className="mt-6 font-display text-3xl font-extrabold">YaarWin</p>
          <p className="text-sm opacity-80 mt-1">Play · Win · Earn</p>
          <div className="mt-8 grid grid-cols-3 gap-2 w-full">
            {Array.from({ length: 6 }).map((_, i) => <div key={i} className="aspect-square rounded-xl bg-white/15" />)}
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Download the official app</h2>
        <p className="mt-3 text-muted-foreground max-w-lg">Available for Android. The iOS build is in progress and will be announced through the official channels.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="lg" className="bg-gradient-primary hover:opacity-95 shadow-glow"><Download className="mr-2 h-4 w-4" /> Android APK</Button>
          <Button size="lg" variant="outline" disabled><Smartphone className="mr-2 h-4 w-4" /> iOS — coming soon</Button>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {perks.map((p) => (
            <div key={p.t} className="rounded-xl border bg-card p-4">
              <p.icon className="h-5 w-5 text-primary" />
              <p className="mt-2 font-semibold">{p.t}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container pb-12">
      <article className="prose-content max-w-3xl mx-auto">
        <h2>Why members prefer the YaarWin mobile app</h2>
        <p>The YaarWin app is engineered for daily players. It loads game lobbies in fewer milliseconds, keeps you informed with native push notifications and uses fewer mobile data resources than the browser experience.</p>
        <h3>Same account, same security</h3>
        <p>The app uses the same <Link to="/yaarwin-login">YaarWin Login</Link> system as the web. Your wallet, transaction history and bonus eligibility carry over instantly. There is nothing to migrate, recreate or re-verify.</p>
        <h3>Always download from official sources</h3>
        <p>Only install builds linked from this page or the official Telegram <strong>prediction community</strong>. Modified APKs distributed elsewhere may compromise your device or account integrity.</p>
        <h3>Future updates</h3>
        <p>Updates roll out through the in-app updater. Major releases are announced on the YaarWin <Link to="/blog">Blog</Link> with full changelogs.</p>
      </article>
    </section>

    <section className="container py-12 border-t">
      <article className="prose-content max-w-3xl mx-auto">
        <h2>Why a native app matters for serious YaarWin members</h2>
        <p>The web version of YaarWin is fast, responsive and feature-complete. So why bother with the native app? The honest answer is that a native experience does several small things slightly better than a browser, and those small differences add up across hundreds of sessions. The Android app loads game lobbies in fewer milliseconds, delivers push notifications instantly when tournaments start, uses less mobile data per session and integrates with the device's biometric authentication for an extra layer of account security.</p>
        <h3>Installation and security</h3>
        <p>The official YaarWin Android APK is signed by the YaarWin team and distributed only from official URLs — this page, the verified Telegram community and in-app upgrade prompts. Members should never install YaarWin builds from third-party mirrors, file-sharing sites or message-forwarded download links, because modified APKs can compromise both your device and your account. The official build runs an integrity check on first launch and refuses to start if any tampering is detected.</p>
        <h3>Same account, same wallet</h3>
        <p>The app uses the same <Link to="/yaarwin-login">YaarWin Login</Link> as the web. Your wallet, transaction history, bonus eligibility, referral team and tournament progress carry across instantly. There is nothing to migrate, recreate or re-verify. Members who play primarily on mobile can switch to desktop for tournament play and back again without any disruption.</p>
        <h3>Notifications and live updates</h3>
        <p>One of the most underrated features of the native app is its push-notification system. Members receive instant alerts when tournaments start, when payouts arrive, when verified gift codes are released and when the platform publishes a major update. These notifications are opt-in and granular — you can choose exactly which categories to receive, so the app never becomes noisy.</p>
        <h3>Battery and data efficiency</h3>
        <p>The app's optimised asset bundles and native rendering pipeline mean that a typical session uses noticeably less battery and data than the equivalent browser session. For members on metered mobile data plans, the savings add up quickly. The app also caches frequently-used assets locally so that returning to the app after a short break is essentially instant.</p>
        <h3>Updates and changelogs</h3>
        <p>Updates roll out through the in-app updater. Major releases are announced on the <Link to="/blog">YaarWin blog</Link> with full changelogs, and the team publishes screenshots and short videos of new features so that members can prepare for the changes before installing them. This rhythm gives members confidence that the app is actively maintained and improved rather than left to age.</p>
        <h3>iOS roadmap</h3>
        <p>An iOS build is in active development and will be announced through the official channels when it is ready. In the meantime, iOS members enjoy the full web experience, which is fully responsive and feature-complete on iPhones and iPads. iOS members can save the YaarWin web experience to their home screen for an app-like icon and full-screen launch behaviour.</p>
        <h3>Troubleshooting common issues</h3>
        <p>If the app fails to launch, the most common causes are an outdated Android version, insufficient free storage or a corrupted install. Update Android to 7.0 or newer, free up at least 120 MB of storage and reinstall the latest APK from this page. If the issue persists, contact <Link to="/contact-us">support</Link> with the device model and Android version. The team can usually identify the cause within a single support cycle.</p>
        <h3>Why we recommend the app for daily players</h3>
        <p>Members who play daily — especially those who participate in tournaments and the referral program — almost always prefer the native app within the first week of trying it. The faster lobby loads matter more during a busy tournament evening, the push notifications make sure you never miss a verified gift code release, and the lighter data footprint matters when you are playing on the go. For casual members, the web experience is more than enough; for serious players, the app is a clear upgrade.</p>
      </article>
    </section>
    <FAQ faqs={faqs} />
  </Layout>
);

export default DownloadApp;
