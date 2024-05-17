import Link from "next/link";
import { Menu } from "./Menu";
import { ModeToggle } from "./mode-toggle";
import { getTags } from "@/lib/api";

export async function Header() {
  const { contents } = await getTags();

  return (
    <header className="flex h-16 items-center border-b-2 bg-white px-2 dark:bg-gray-950 sm:px-4">
      <nav className="ml-2 flex-1">
        <Link className="p-1 text-xl font-bold" href="/">
          jnpi-photo-gallery
        </Link>
      </nav>
      <nav className="flex space-x-4">
        <Menu tagsSlug={contents} />
        <ModeToggle />
      </nav>
    </header>
  );
}
