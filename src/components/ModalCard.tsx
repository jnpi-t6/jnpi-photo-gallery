import Image from "next/image";
import type { PhotoProps } from "../../type/type";

export default function ModalCard({ post }: { post: PhotoProps }) {
  return (
    <div className="grid grid-cols-1 gap-1 py-4">
      <Image
        alt={post.id}
        className="mx-auto size-full rounded-lg object-cover"
        height={800}
        src={post.photo.url}
        width={800}
      />
    </div>
  );
}
