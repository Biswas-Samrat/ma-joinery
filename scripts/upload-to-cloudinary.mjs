/**
 * Upload all project images to Cloudinary.
 *
 * Run from the project root:
 *   node scripts/upload-to-cloudinary.mjs
 */

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

cloudinary.config({
  cloud_name: 'djruawkhq',
  api_key: '424836826463571',
  api_secret: 'GXC9eWWArTdUNNt6kSImO20Ylio',
});

// Left side  = actual file path inside public/ (from list-public-images output)
// Right side = Cloudinary public_id (this is what the URLs in the code use)
const UPLOAD_MAP = {
  // ── Hero ───────────────────────────────────────────────────────────────────
  'hero/hero (1).png': 'ma-joinery/hero/hero_1',
  'hero/hero (2).png': 'ma-joinery/hero/hero_2',
  'hero/hero (3).png': 'ma-joinery/hero/hero_3',

  // ── Service: Kitchen Renovations ──────────────────────────────────────────
  'service/Kitchen Renovations/Kitchen Renovations (1).jpg': 'ma-joinery/services/kitchen/kitchen_1',
  'service/Kitchen Renovations/Kitchen Renovations (2).jpg': 'ma-joinery/services/kitchen/kitchen_2',
  'service/Kitchen Renovations/Kitchen Renovations (3).jpg': 'ma-joinery/services/kitchen/kitchen_3',
  'service/Kitchen Renovations/Kitchen Renovations (4).jpg': 'ma-joinery/services/kitchen/kitchen_4',

  // ── Service: Garden Rooms & Log Cabins ────────────────────────────────────
  'service/Garden Rooms  Log Cabins/Garden Rooms  Log Cabins (1).jpg': 'ma-joinery/services/garden-rooms/garden_rooms_1',
  'service/Garden Rooms  Log Cabins/Garden Rooms  Log Cabins (2).jpg': 'ma-joinery/services/garden-rooms/garden_rooms_2',
  'service/Garden Rooms  Log Cabins/Garden Rooms  Log Cabins (3).jpg': 'ma-joinery/services/garden-rooms/garden_rooms_3',
  'service/Garden Rooms  Log Cabins/Garden Rooms  Log Cabins (4).jpg': 'ma-joinery/services/garden-rooms/garden_rooms_4',

  // ── Service: Flooring ──────────────────────────────────────────────────────
  'service/Flooring/Flooring (1).jpg': 'ma-joinery/services/flooring/flooring_1',
  'service/Flooring/Flooring (2).jpg': 'ma-joinery/services/flooring/flooring_2',
  'service/Flooring/Flooring (3).jpg': 'ma-joinery/services/flooring/flooring_3',
  'service/Flooring/Flooring (4).jpg': 'ma-joinery/services/flooring/flooring_4',

  // ── Service: Staircases & Balustrades ─────────────────────────────────────
  'service/Staircases/Staircases Balustrades (1).jpg': 'ma-joinery/services/staircases/staircases_1',
  'service/Staircases/Staircases Balustrades (2).jpg': 'ma-joinery/services/staircases/staircases_2',
  'service/Staircases/Staircases Balustrades (3).jpg': 'ma-joinery/services/staircases/staircases_3',

  // ── Service: Wall Panelling ────────────────────────────────────────────────
  'service/Wall Panelling/Wall Panelling  (1).jpg': 'ma-joinery/services/wall-panelling/wall_panelling_1',
  'service/Wall Panelling/Wall Panelling  (2).jpg': 'ma-joinery/services/wall-panelling/wall_panelling_2',
  'service/Wall Panelling/Wall Panelling  (3).jpg': 'ma-joinery/services/wall-panelling/wall_panelling_3',
  'service/Wall Panelling/Wall Panelling  (4).jpg': 'ma-joinery/services/wall-panelling/wall_panelling_4',

  // ── Service: Fitted Wardrobes ──────────────────────────────────────────────
  'service/Fitted Wardrobes/Fitted Wardrobes (1).jpg': 'ma-joinery/services/fitted-wardrobes/wardrobes_1',
  'service/Fitted Wardrobes/Fitted Wardrobes (2).jpg': 'ma-joinery/services/fitted-wardrobes/wardrobes_2',
  'service/Fitted Wardrobes/Fitted Wardrobes (3).jpg': 'ma-joinery/services/fitted-wardrobes/wardrobes_3',
  'service/Fitted Wardrobes/Fitted Wardrobes (4).jpg': 'ma-joinery/services/fitted-wardrobes/wardrobes_4',

  // ── Service: Cladding & Exterior Refresh ──────────────────────────────────
  'service/Cladding  Exterior Refresh/Cladding  Exterior Refresh (1).jpg': 'ma-joinery/services/cladding/cladding_1',
  'service/Cladding  Exterior Refresh/Cladding  Exterior Refresh (2).jpg': 'ma-joinery/services/cladding/cladding_2',
  'service/Cladding  Exterior Refresh/Cladding  Exterior Refresh (3).jpg': 'ma-joinery/services/cladding/cladding_3',
  'service/Cladding  Exterior Refresh/Cladding  Exterior Refresh (4).jpg': 'ma-joinery/services/cladding/cladding_4',

  // ── Service: Fencing ──────────────────────────────────────────────────────
  'service/Fencing/Fencing (1).jpg': 'ma-joinery/services/fencing/fencing_1',
  'service/Fencing/Fencing (2).jpg': 'ma-joinery/services/fencing/fencing_2',
  'service/Fencing/Fencing (3).jpg': 'ma-joinery/services/fencing/fencing_3',

  // ── Projects (hashed filenames mapped to clean slugs) ─────────────────────
  'projects/1600210492486-724fe5c67fb0.jpg':  'ma-joinery/projects/kitchen-renovation',
  'projects/1600566752355-35792bedcfea.jpg':  'ma-joinery/projects/bespoke-garden-room',
  'projects/1600566753086-00f18fb6b3ea.jpg':  'ma-joinery/projects/log-cabin-home-gym',
  'projects/1600566753190-17f0baa2a6c3.jpg':  'ma-joinery/projects/garden-room-cladding',
  'projects/1600585152915-d208bec867a1.jpg':  'ma-joinery/projects/staircase-transformation',
  'projects/1600585154340-be6161a56a0c.jpg':  'ma-joinery/projects/dado-picture-rail',
  'projects/1600585154526-990dced4db0d.jpg':  'ma-joinery/projects/room-split-panelling',
  'projects/1600607687920-4e2a09cf159d.jpg':  'ma-joinery/projects/black-feature-wall',
  'projects/1600607687939-ce8a6c25118c.jpg':  'ma-joinery/projects/lvt-flooring-wardrobes',
  'projects/garden-fence.jpg':                'ma-joinery/projects/new-garden-fencing',
};

async function main() {
  const entries = Object.entries(UPLOAD_MAP);
  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`\n🚀  Uploading ${entries.length} images to Cloudinary (djruawkhq)…\n`);

  for (const [relPath, publicId] of entries) {
    const localFile = path.join(PUBLIC_DIR, relPath);

    if (!fs.existsSync(localFile)) {
      console.error(`  ❌  NOT FOUND: public/${relPath}`);
      failed++;
      continue;
    }

    try {
      await cloudinary.uploader.upload(localFile, {
        public_id: publicId,
        overwrite: true,          // re-upload if already exists
        resource_type: 'image',
      });
      console.log(`  ✅  ${publicId}`);
      uploaded++;
    } catch (err) {
      console.error(`  ❌  FAILED ${publicId}: ${err?.message ?? err}`);
      failed++;
    }
  }

  console.log(`\n✨  Done!  ${uploaded} uploaded · ${skipped} skipped · ${failed} failed\n`);
}

main().catch((err) => { console.error(err); process.exit(1); });
