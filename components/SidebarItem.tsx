type Props = { label: string; count?: number; active?: boolean };

export default function SidebarItem({ label, count, active = false }: Props) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors ${
        active
          ? "bg-black/[.07] font-semibold dark:bg-white/[.12]"
          : "hover:bg-black/[.04] dark:hover:bg-white/[.08]"
      }`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className="text-xs text-zinc-500">{count}</span>
      )}
    </button>
  );
}
