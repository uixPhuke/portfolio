import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function getImagesByAssetFolder(folder: string) {
  let images: string[] = [];
  let nextCursor;

  do {
    const result = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      max_results: 500,
      next_cursor: nextCursor,
    });

    const filtered = result.resources.filter(
      (asset: any) => asset.asset_folder === folder
    );

    images.push(
      ...filtered.map((asset: any) => asset.public_id)
    );

    nextCursor = result.next_cursor;
  } while (nextCursor);

  return images;
}