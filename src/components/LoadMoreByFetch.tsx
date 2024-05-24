"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { LoadMoreButton } from "./load-more-button";
import { PhotoProps } from "../../type/type";

type initialContentsProps = {
  initialContents: PhotoProps[];
  id?: string;
};

export default function LoadMoreByFetch({
  initialContents,
  id,
}: initialContentsProps) {
  const [contents, setContents] = useState(initialContents);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    const nextPage = page + 1;
    try {
      console.log(`Fetching page ${nextPage}`); // デバッグログ

      const url = id
        ? `/api/photos-by-tag?id=${id}&page=${nextPage}`
        : `/api/photos?page=${nextPage}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
      const newContents = await res.json();
      setContents((prevContents) => [...prevContents, ...newContents.contents]);
      setPage(nextPage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {contents.map((photo) => (
            <div key={photo.id} className="overflow-hidden rounded-lg">
              <Card>
                <Link href={`/photo/${photo.id}`}>
                  <Image
                    alt={photo.id}
                    className="object-cover"
                    width={400}
                    height={300}
                    src={photo.photo.url ?? "/placeholder.svg"}
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
        </section>
        {contents.length % 8 === 0 && <LoadMoreButton onClick={loadMore} />}
      </div>
    </>
  );
}
