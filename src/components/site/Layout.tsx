import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Breadcrumbs, Crumb } from "./Breadcrumbs";

export const Layout = ({ children, crumbs }: { children: ReactNode; crumbs?: Crumb[] }) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    {crumbs && crumbs.length > 0 && <Breadcrumbs items={crumbs} />}
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
