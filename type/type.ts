import type { MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

export type PhotoProps = {
  id: string;
  photo: MicroCMSImage;
  tags: TagsProps[];
} & MicroCMSDate;

export type PhotoDataProps = {
  contents: PhotoProps[];
};

export type TagsProps = {
  id: string;
  name: string;
  slug: string;
} & MicroCMSDate;
