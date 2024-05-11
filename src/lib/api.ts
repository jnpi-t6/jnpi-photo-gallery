import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { PhotoDataProps, TagsProps } from "../../type/type";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

// ルーティングのためにリストを取得
export async function getContents(queries?: MicroCMSQueries) {
  const photoData = await client.getList<PhotoDataProps>({
    endpoint: "photo",
    queries,
  });
  return photoData;
}

// コンテンツを取得
export async function getPhoto(contentId?: string, queries?: MicroCMSQueries) {
  const photoData = await client.get<PhotoDataProps>({
    endpoint: "photo",
    contentId,
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
