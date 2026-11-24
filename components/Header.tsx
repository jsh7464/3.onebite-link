import Logo from "./Logo";
import NewLinkButton from "./NewLinkButton";

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/10 px-6 dark:border-white/15">
      <Logo />
      <NewLinkButton />
    </header>
  );
}
