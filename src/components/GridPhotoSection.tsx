import { PhotoCards } from "./PhotoCards";
import { getPhoto } from "@/lib/api";

export default async function GridPhotoSection() {
  const { contents } = await getPhoto();

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
