// app/api/photos-by-tag/route.ts
import { NextResponse } from "next/server";
import { getTagsPhoto } from "@/lib/api";
import { PhotoDataProps } from "../../../../type/type";

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 8; // 一度にフェッチするデータの数

  if (!id) {
    return NextResponse.json({ error: "Id is required" }, { status: 400 });
  }

  const offset = (page - 1) * limit;
  const data: PhotoDataProps = await getTagsPhoto(id, limit, offset);

  console.log(`Fetched page ${page} with id ${id} and offset ${offset}`); // デバッグログ
  return NextResponse.json(data);
}
