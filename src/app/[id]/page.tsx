import { notFound } from "next/navigation";
import { PhotoCards } from "@/components/PhotoCards";
import { getTags, getTagsPhoto } from "@/lib/api";

interface TagsPageProps {
  params: { id: string };
}

interface PostProps {
  id: string;
}

export async function generateStaticParams() {
  const tags = await getTags();
  const paths = tags.contents.map((post: PostProps) => {
    return {
      id: post.id,
    };
  });
  return [...paths];
}

export default async function TagsPage({ params: { id } }: TagsPageProps) {
  const { contents } = await getTagsPhoto(id);
  if (!contents) {
    notFound();
  }

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          <PhotoCards contents={contents} />
        </section>
      </div>
    </>
  );
}
