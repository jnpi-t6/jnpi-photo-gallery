// app/api/photos/route.js
import { NextResponse } from "next/server";
import { getPhoto } from "@/lib/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 8; // 一度にフェッチするデータの数

  const offset = (page - 1) * limit;
  const data = await getPhoto(undefined, limit, offset);

  console.log(`Fetched page ${page} with offset ${offset}`); // デバッグログ
  return NextResponse.json(data);
}
