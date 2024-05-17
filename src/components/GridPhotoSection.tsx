import { getPhoto } from "@/lib/api";
import LoadMore from "./LoadMore";
import { notFound } from "next/navigation";

export default async function GridPhotoSection() {
  const { contents } = await getPhoto();

  if (!contents) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl">
      <LoadMore contents={contents} />
    </div>
  );
}
