import type { LinkItem } from "@/lib/mock-data";

export default function LinkCard({ link }: { link: LinkItem }) {
  const host = new URL(link.url).hostname;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 rounded-xl border border-black/10 p-4 transition-shadow hover:shadow-md dark:border-white/15"
    >
      <h3 className="font-semibold">{link.title}</h3>
      <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
        {link.description}
      </p>
      <span className="mt-auto text-xs text-zinc-500">{host}</span>
    </a>
  );
}
