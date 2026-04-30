import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/yaarwin-logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/how-to-play", label: "How to Play" },
  { to: "/gift-code", label: "Gift Code" },
  { to: "/download-app", label: "Download" },
  { to: "/blog", label: "Blog" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all ${scrolled ? "bg-background/85 backdrop-blur-md border-b shadow-soft" : "bg-background/60 backdrop-blur-sm"}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="YaarWin home">
          <img src={logo} alt="YaarWin logo" className="h-9 w-9 rounded-full ring-2 ring-primary/30" width={36} height={36} loading="eager" />
          <span className="font-display text-xl font-extrabold tracking-tight">
            Yaar<span className="text-gradient">Win</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? "text-primary" : "text-foreground/75 hover:text-primary"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm"><Link to="/yaarwin-login">Login</Link></Button>
          <Button asChild variant="default" size="sm" className="bg-gradient-primary hover:opacity-95 shadow-soft">
            <Link to="/yaarwin-register">Register</Link>
          </Button>
        </div>
        <button className="lg:hidden p-2 rounded-md hover:bg-muted" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-background animate-fade-in">
          <nav className="container py-3 flex flex-col">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => `py-2.5 text-sm font-medium ${isActive ? "text-primary" : "text-foreground/80"}`}>
                {n.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-3">
              <Button asChild variant="outline" size="sm" className="flex-1"><Link to="/yaarwin-login">Login</Link></Button>
              <Button asChild size="sm" className="flex-1 bg-gradient-primary"><Link to="/yaarwin-register">Register</Link></Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
