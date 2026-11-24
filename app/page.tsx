import Header from "@/components/Header";
import LinkGrid from "@/components/LinkGrid";
import Sidebar from "@/components/Sidebar";
import { folders, links } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar folders={folders} total={links.length} />
        <LinkGrid links={links} />
      </div>
    </div>
  );
}
