import { getPhoto, getContents } from "@/lib/api";
import { notFound } from "next/navigation";
import Modal from "@/components/Modal";
import ModalCard from "@/components/ModalCard";

interface ModalImageProps {
  params: {
    id: string;
  };
}

interface PostProps {
  id: string;
}

export async function generateStaticParams() {
  const { contents } = await getContents();

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
      <Modal>
        <ModalCard post={post} />
      </Modal>
    </>
  );
}
