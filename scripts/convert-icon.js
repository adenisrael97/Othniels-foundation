const sharp = require('sharp');
const fs = require('fs');

async function convertIcons() {
  const inputpath = 'public/images/logo.webp';
  if (!fs.existsSync(inputpath)) {
    console.error('Logo not found!');
    return;
  }

  // Create app/icon.png (general favicon/icon, Next.js can read this and generate variants)
  await sharp(inputpath)
    .resize({ width: 512, height: 512, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile('app/icon.png');
    
  console.log('Generated app/icon.png');

  // Create app/apple-icon.png (for iOS)
  // Apple icons shouldn't have transparency typically so let's add white bg if needed, or just contain
  await sharp(inputpath)
    .resize({ width: 180, height: 180, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile('app/apple-icon.png');

  console.log('Generated app/apple-icon.png');
}

convertIcons();
