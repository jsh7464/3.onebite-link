import type { LinkItem } from "@/lib/mock-data";
import LinkCard from "./LinkCard";

export default function LinkGrid({ links }: { links: LinkItem[] }) {
  return (
    <section className="grid flex-1 grid-cols-1 content-start gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((l) => (
        <LinkCard key={l.id} link={l} />
      ))}
    </section>
  );
}
