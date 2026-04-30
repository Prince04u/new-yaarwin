import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { name: string; url: string };

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="container pt-4">
    <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      <li>
        <Link to="/" className="inline-flex items-center gap-1 hover:text-primary"><Home className="h-3.5 w-3.5" /> Home</Link>
      </li>
      {items.map((c, i) => (
        <li key={c.url} className="inline-flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5" />
          {i === items.length - 1 ? (
            <span className="text-foreground font-medium" aria-current="page">{c.name}</span>
          ) : (
            <Link to={c.url} className="hover:text-primary">{c.name}</Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
