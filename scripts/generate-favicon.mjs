// Generates a proper favicon.ico (32x32 PNG renamed) and apple-touch-icon.png from logo.webp
import sharp from "sharp";

const input = "./public/images/logo.webp";

// Generate 32x32 favicon
await sharp(input)
  .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile("./public/favicon.ico");

// Generate 180x180 apple touch icon
await sharp(input)
  .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile("./public/apple-touch-icon.png");

// Generate 192x192 for android
await sharp(input)
  .resize(192, 192, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile("./public/icon-192.png");

console.log("✅ favicon.ico, apple-touch-icon.png, icon-192.png generated!");
