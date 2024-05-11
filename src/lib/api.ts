import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { PhotoDataProps, TagsProps } from "../../type/type";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

// コンテンツを取得
export async function getPhoto(id?: string, queries?: MicroCMSQueries) {
  const photoData = await client.get<PhotoDataProps>({
    endpoint: "photo",
    queries,
  });
  return photoData;
}

// タグの名前を取得
export async function getTags(queries?: MicroCMSQueries) {
  const photoTags = await client.getList<TagsProps>({
    endpoint: "tags",
    queries,
  });
  return photoTags;
}

// タグ別にコンテンツを取得
export async function getTagsPhoto(id: string) {
  const photoData = await client.get<PhotoDataProps>({
    endpoint: "photo",
    queries: {
      filters: `tags[contains]${id}`,
    },
  });
  return photoData;
}
