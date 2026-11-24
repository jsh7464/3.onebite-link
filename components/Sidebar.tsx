import type { Folder } from "@/lib/mock-data";
import FolderList from "./FolderList";
import SidebarItem from "./SidebarItem";

export default function Sidebar({
  folders,
  total,
}: {
  folders: Folder[];
  total: number;
}) {
  return (
    <aside className="hidden w-60 shrink-0 flex-col gap-4 border-r border-black/10 p-4 dark:border-white/15 md:flex">
      <SidebarItem label="All" count={total} active />
      <div>
        <h2 className="mb-2 px-3 text-xs font-semibold uppercase text-zinc-500">
          폴더
        </h2>
        <FolderList folders={folders} />
      </div>
    </aside>
  );
}
