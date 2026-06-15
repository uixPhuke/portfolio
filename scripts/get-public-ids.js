const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function getPublicIds() {
  let nextCursor;
  let publicIds = [];

  do {
    const result = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      max_results: 500,
      next_cursor: nextCursor,
    });

    const laxmiImages = result.resources.filter(
      (asset) => asset.asset_folder === "design-imgs"
    );

    publicIds.push(...laxmiImages.map((asset) => asset.public_id));

    nextCursor = result.next_cursor;
  } while (nextCursor);

  console.log(
    `images: ${JSON.stringify(publicIds, null, 2)},`
  );
}

getPublicIds().catch(console.error);