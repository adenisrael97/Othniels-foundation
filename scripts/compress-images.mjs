import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const FOLDERS = [
  "./public/images",
  "./public/outreach",
  "./public/Staff",
];

const SKIP_ALREADY_WEBP = true; // skip files already .webp
const QUALITY = 75; // 0-100, 75 is great quality/size balance
const MAX_WIDTH = 1920; // never upscale, only downscale if larger

async function compressFolder(folder) {
  let files;
  try {
    files = await readdir(folder);
  } catch {
    console.log(`Skipping ${folder} (not found)`);
    return;
  }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;

    const inputPath = join(folder, file);
    const nameWithoutExt = basename(file, ext);
    const outputPath = join(folder, `${nameWithoutExt}.webp`);

    // Skip if already a small webp
    if (ext === ".webp" && SKIP_ALREADY_WEBP) {
      const s = await stat(inputPath);
      if (s.size < 200 * 1024) {
        console.log(`  ✓ Already small: ${file} (${(s.size/1024).toFixed(0)}KB)`);
        continue;
      }
    }

    const inputStat = await stat(inputPath);
    const inputSizeKB = (inputStat.size / 1024).toFixed(0);

    try {
      const img = sharp(inputPath).rotate(); // auto-rotate based on EXIF
      const meta = await img.metadata();
      const width = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : undefined;

      await img
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const outputStat = await stat(outputPath);
      const outputSizeKB = (outputStat.size / 1024).toFixed(0);

      // Remove original non-webp file if we created a new webp
      if (ext !== ".webp" && outputPath !== inputPath) {
        await unlink(inputPath);
      }

      console.log(`  ✅ ${file} → ${nameWithoutExt}.webp  (${inputSizeKB}KB → ${outputSizeKB}KB)`);
    } catch (err) {
      console.error(`  ❌ Failed: ${file}`, err.message);
    }
  }
}

console.log("🔧 Compressing images...\n");
for (const folder of FOLDERS) {
  console.log(`📁 ${folder}`);
  await compressFolder(folder);
  console.log();
}
console.log("✅ Done!");
