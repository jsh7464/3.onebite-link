import type { Folder } from "@/lib/mock-data";
import SidebarItem from "./SidebarItem";

export default function FolderList({ folders }: { folders: Folder[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {folders.map((f) => (
        <li key={f.id}>
          <SidebarItem label={f.name} count={f.count} />
        </li>
      ))}
    </ul>
  );
}
