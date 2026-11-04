/**
 * Upload the before & after photos to Cloudinary.
 *
 * Run from the project root:
 *   node scripts/upload-before-after.mjs
 */

import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

cloudinary.config({
  cloud_name: 'djruawkhq',
  api_key:    '424836826463571',
  api_secret: 'GXC9eWWArTdUNNt6kSImO20Ylio',
});

const UPLOAD_MAP = {
  'thebeforandafter/the befor.jpg': 'ma-joinery/featured/before',
  'thebeforandafter/the after.jpg': 'ma-joinery/featured/after',
};

async function main() {
  console.log('\n🚀  Uploading before & after photos to Cloudinary…\n');

  for (const [relPath, publicId] of Object.entries(UPLOAD_MAP)) {
    const localFile = path.join(PUBLIC_DIR, relPath);
    try {
      await cloudinary.uploader.upload(localFile, {
        public_id: publicId,
        overwrite: true,
        resource_type: 'image',
      });
      console.log(`  ✅  ${publicId}`);
    } catch (err) {
      console.error(`  ❌  FAILED ${publicId}: ${err?.message ?? err}`);
    }
  }

  console.log('\n✨  Done!\n');
}

main().catch((err) => { console.error(err); process.exit(1); });

