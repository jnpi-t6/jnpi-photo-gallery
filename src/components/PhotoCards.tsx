import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import type { PhotoProps } from "../../type/type";
import Link from "next/link";

type ContentsProps = {
  contents: PhotoProps[];
};

export async function PhotoCards({ contents }: ContentsProps) {
  return (
    <>
      {contents.map((photo) => (
        <div key={photo.id} className="overflow-hidden rounded-lg">
          <Card>
            <Link href={`/photo/${photo.id}`}>
              <Image
                alt={photo.id}
                className="object-cover "
                height={300}
                src={photo.photo.url ?? "/placeholder.svg"}
                width={400}
              />
            </Link>
            <CardContent className="flex flex-wrap gap-2 p-4">
              {photo.tags.map((tag) => (
                <div className="flex flex-wrap gap-2" key={tag.id}>
                  <Link href={`/${tag.id}`}>
                    <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm hover:bg-slate-400 dark:bg-gray-800">
                      {tag.name}
                    </span>
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
}
