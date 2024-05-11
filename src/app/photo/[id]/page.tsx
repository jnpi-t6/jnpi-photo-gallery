import { getPhoto } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ModalImageProps {
  params: {
    id: string;
  };
}

interface PostProps {
  id: string;
}

export async function generateStaticParams() {
  const { contents } = await getPhoto();

  const paths = contents.map((post: PostProps) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

export default async function ModalImage({ params: { id } }: ModalImageProps) {
  const post = await getPhoto(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-1 py-4">
        <Image
          alt={post.id}
          className="mx-auto size-full rounded-lg object-cover"
          height={800}
          src={post.photo.url}
          width={800}
        />
      </div>
    </>
  );
}
