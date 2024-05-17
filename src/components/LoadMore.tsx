"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { LoadMoreButton } from "./load-more-button";
import { PhotoProps } from "../../type/type";

type ContentsProps = {
  contents: PhotoProps[];
};

export default function LoadMore({ contents }: ContentsProps) {
  const [visibleItems, setVisibleItems] = useState(8);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {contents?.slice(0, visibleItems).map((photo) => (
            <div key={photo.id} className="overflow-hidden rounded-lg">
              <Card>
                <Link href={`/photo/${photo.id}`}>
                  <Image
                    alt={photo.id}
                    className="object-cover "
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
        {visibleItems < contents.length && (
          <LoadMoreButton onClick={loadMore} />
        )}
      </div>
    </>
  );
}
