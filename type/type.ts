import type { MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

export interface PhotoProps {
  id: string;
  photo: MicroCMSImage;
  tags: TagsProps[];
}

export interface PhotoDataProps extends PhotoProps {
  contents: PhotoProps[];
}

export type TagsProps = {
  id: string;
  name: string;
  slug: string;
} & MicroCMSDate;
