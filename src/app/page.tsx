// app/page.js
import LoadMoreByFetch from "@/components/LoadMoreByFetch";
import { getPhoto } from "@/lib/api";

export default async function Page() {
  const initialContents = await getPhoto(undefined, 8, 0);

  return (
    <div className="mx-auto max-w-7xl">
      <LoadMoreByFetch initialContents={initialContents.contents} />
    </div>
  );
}
