import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

import { TagsProps } from "../../type/type";

type Props = {
  tagsSlug: TagsProps[];
};

export async function Menu(props: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Tags</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          {props.tagsSlug.map((tag) => (
            <Link href={`/${tag.id}`} key={tag.id}>
              <DropdownMenuRadioItem value={`${tag.name}`}>
                {tag.slug}
              </DropdownMenuRadioItem>
            </Link>
          ))}
          <Link href={"/unsplash"}>
            <DropdownMenuRadioItem value={"unsplash"}>
              unsplash
            </DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
