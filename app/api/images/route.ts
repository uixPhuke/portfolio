import { NextRequest, NextResponse } from "next/server";
import { getImagesByAssetFolder } from "@/app/lib/cloudinary-admin";

export async function GET(req: NextRequest) {
  const folder = req.nextUrl.searchParams.get("folder");

  if (!folder) {
    return NextResponse.json([]);
  }

  const images = await getImagesByAssetFolder(folder);

  return NextResponse.json(images);
}