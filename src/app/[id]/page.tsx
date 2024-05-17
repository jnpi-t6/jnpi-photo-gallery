import { notFound } from "next/navigation";
import { getTags, getTagsPhoto } from "@/lib/api";
import LoadMore from "@/components/LoadMore";

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
      <LoadMore contents={contents} />
    </>
  );
}
