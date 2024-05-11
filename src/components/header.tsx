import Link from "next/link";
import { Menu } from "./Menu";
import { ModeToggle } from "./mode-toggle";
import { getTags } from "@/lib/api";

export async function Header() {
  const { contents } = await getTags();

  return (
    <header className="flex h-16 items-center border-b-2 bg-white px-4 dark:bg-gray-950 sm:px-6">
      <nav className="ml-4 flex-1">
        <Link className="text-2xl font-bold" href="/">
          jnpi-photo-gallery
        </Link>
      </nav>
      <nav className="hidden space-x-4 md:flex">
        <Menu tagsSlug={contents} />
        <ModeToggle />
      </nav>
    </header>
  );
}
