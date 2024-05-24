import { notFound } from "next/navigation";
import { getTags, getTagsPhoto } from "@/lib/api";
import LoadMoreByFetch from "@/components/LoadMoreByFetch";

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
  const { contents } = await getTagsPhoto(id, 8, 0);
  if (!contents) {
    notFound();
  }

  return (
    <>
      <LoadMoreByFetch initialContents={contents} id={id} />
    </>
  );
}
