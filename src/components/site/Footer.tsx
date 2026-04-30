import { Link } from "react-router-dom";
import { Send, Mail, Shield } from "lucide-react";
import logo from "@/assets/yaarwin-logo.jpg";

const cols = [
  {
    title: "Platform",
    links: [
      { to: "/games", label: "Games" },
      { to: "/how-to-play", label: "How to Play" },
      { to: "/gift-code", label: "Gift Code" },
      { to: "/gift-code-guide", label: "Gift Code Guide" },
      { to: "/download-app", label: "Download App" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about-us", label: "About Us" },
      { to: "/contact-us", label: "Contact Us" },
      { to: "/blog", label: "Blog" },
      { to: "/yaarwin-login", label: "Login" },
      { to: "/yaarwin-register", label: "Register" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms-and-conditions", label: "Terms & Conditions" },
      { to: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/40 mt-20">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="YaarWin logo" className="h-10 w-10 rounded-full ring-2 ring-primary/30" width={40} height={40} loading="lazy" />
              <span className="font-display text-2xl font-extrabold">Yaar<span className="text-gradient">Win</span></span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              YaarWin is a community-driven colour prediction and skill gaming destination focused on fair play, transparent rewards and responsible participation.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://t.me/yaarrwin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
                <Send className="h-4 w-4" /> Prediction community on Telegram
              </a>
              <a href="mailto:support@yaarwin.example.com" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
                <Mail className="h-4 w-4" /> support@yaarwin.example.com
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Shield className="h-4 w-4" /> 18+ only · Play responsibly
              </span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">{c.title}</h3>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} YaarWin. All rights reserved.</p>
          <p>
            Site developed by{" "}
            <a href="https://t.me/veeranjan_solutions" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary">
              Veeranjan Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
