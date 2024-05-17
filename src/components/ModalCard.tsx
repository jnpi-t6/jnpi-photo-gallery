import Image from "next/image";
import type { PhotoProps } from "../../type/type";

export default function ModalCard({ post }: { post: PhotoProps }) {
  return (
    <div>
      <Image
        alt={post.id}
        className="mx-auto my-8 max-w-7xl rounded-lg object-cover"
        src={post.photo.url}
        width={800}
        height={800}
      />
    </div>
  );
}
