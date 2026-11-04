import fs from "fs";
import path from "path";

const CLOUD_NAME = "djruawkhq";
const API_KEY = "424836826463571";
const API_SECRET = "GXC9eWWArTdUNNt6kSImO20Ylio";

interface UploadItem {
  localRelPath: string;
  folder: string;
  publicId: string;
}

// Function to get mime type
function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  if (ext === ".svg") return "image/svg+xml";
  return "image/jpeg";
}

async function uploadFile(fullPath: string, folder: string, publicId: string) {
  const fileBuffer = fs.readFileSync(fullPath);
  const mime = getMimeType(fullPath);
  const base64Data = `data:${mime};base64,${fileBuffer.toString("base64")}`;

  const formData = new FormData();
  formData.append("file", base64Data);
  formData.append("public_id", publicId);
  formData.append("folder", folder);

  const authHeader = "Basic " + Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: "POST",
    headers: {
      Authorization: authHeader,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Upload failed for ${publicId}: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.secure_url;
}

export async function uploadAllPhotos() {
  const publicDir = path.join(process.cwd(), "public");
  const results: Record<string, string> = {};

  // List of photos to upload:
  const filesToUpload: UploadItem[] = [
    // Hero images
    { localRelPath: "hero/hero (1).png", folder: "ma-joinery/hero", publicId: "hero_1" },
    { localRelPath: "hero/hero (2).png", folder: "ma-joinery/hero", publicId: "hero_2" },
    { localRelPath: "hero/hero (3).png", folder: "ma-joinery/hero", publicId: "hero_3" },

    // Project images
    { localRelPath: "projects/1600607687939-ce8a6c25118c.jpg", folder: "ma-joinery/projects", publicId: "kitchen-renovation" },
    { localRelPath: "projects/1600585154340-be6161a56a0c.jpg", folder: "ma-joinery/projects", publicId: "bespoke-garden-room" },
    { localRelPath: "projects/1600585154526-990dced4db0d.jpg", folder: "ma-joinery/projects", publicId: "log-cabin-home-gym" },
    { localRelPath: "projects/1600566753190-17f0baa2a6c3.jpg", folder: "ma-joinery/projects", publicId: "garden-room-cladding" },
    { localRelPath: "projects/1600607687920-4e2a09cf159d.jpg", folder: "ma-joinery/projects", publicId: "staircase-transformation" },
    { localRelPath: "projects/1600210492486-724fe5c67fb0.jpg", folder: "ma-joinery/projects", publicId: "dado-picture-rail" },
    { localRelPath: "projects/1600566753086-00f18fb6b3ea.jpg", folder: "ma-joinery/projects", publicId: "room-split-panelling" },
    { localRelPath: "projects/1600566752355-35792bedcfea.jpg", folder: "ma-joinery/projects", publicId: "black-feature-wall" },
    { localRelPath: "projects/1600585152915-d208bec867a1.jpg", folder: "ma-joinery/projects", publicId: "lvt-flooring-wardrobes" },
    { localRelPath: "projects/garden-fence.jpg", folder: "ma-joinery/projects", publicId: "new-garden-fencing" },

    // Services
    // Kitchen Renovations
    { localRelPath: "service/Kitchen Renovations/Kitchen Renovations (1).jpg", folder: "ma-joinery/services/kitchen", publicId: "kitchen_1" },
    { localRelPath: "service/Kitchen Renovations/Kitchen Renovations (2).jpg", folder: "ma-joinery/services/kitchen", publicId: "kitchen_2" },
    { localRelPath: "service/Kitchen Renovations/Kitchen Renovations (3).jpg", folder: "ma-joinery/services/kitchen", publicId: "kitchen_3" },
    { localRelPath: "service/Kitchen Renovations/Kitchen Renovations (4).jpg", folder: "ma-joinery/services/kitchen", publicId: "kitchen_4" },

    // Garden Rooms & Log Cabins
    { localRelPath: "service/Garden Rooms  Log Cabins/Garden Rooms  Log Cabins (1).jpg", folder: "ma-joinery/services/garden-rooms", publicId: "garden_rooms_1" },
    { localRelPath: "service/Garden Rooms  Log Cabins/Garden Rooms  Log Cabins (2).jpg", folder: "ma-joinery/services/garden-rooms", publicId: "garden_rooms_2" },
    { localRelPath: "service/Garden Rooms  Log Cabins/Garden Rooms  Log Cabins (3).jpg", folder: "ma-joinery/services/garden-rooms", publicId: "garden_rooms_3" },
    { localRelPath: "service/Garden Rooms  Log Cabins/Garden Rooms  Log Cabins (4).jpg", folder: "ma-joinery/services/garden-rooms", publicId: "garden_rooms_4" },

    // Flooring
    { localRelPath: "service/Flooring/Flooring (1).jpg", folder: "ma-joinery/services/flooring", publicId: "flooring_1" },
    { localRelPath: "service/Flooring/Flooring (2).jpg", folder: "ma-joinery/services/flooring", publicId: "flooring_2" },
    { localRelPath: "service/Flooring/Flooring (3).jpg", folder: "ma-joinery/services/flooring", publicId: "flooring_3" },
    { localRelPath: "service/Flooring/Flooring (4).jpg", folder: "ma-joinery/services/flooring", publicId: "flooring_4" },

    // Staircases
    { localRelPath: "service/Staircases/Staircases Balustrades (1).jpg", folder: "ma-joinery/services/staircases", publicId: "staircases_1" },
    { localRelPath: "service/Staircases/Staircases Balustrades (2).jpg", folder: "ma-joinery/services/staircases", publicId: "staircases_2" },
    { localRelPath: "service/Staircases/Staircases Balustrades (3).jpg", folder: "ma-joinery/services/staircases", publicId: "staircases_3" },

    // Wall Panelling
    { localRelPath: "service/Wall Panelling/Wall Panelling  (1).jpg", folder: "ma-joinery/services/wall-panelling", publicId: "wall_panelling_1" },
    { localRelPath: "service/Wall Panelling/Wall Panelling  (2).jpg", folder: "ma-joinery/services/wall-panelling", publicId: "wall_panelling_2" },
    { localRelPath: "service/Wall Panelling/Wall Panelling  (3).jpg", folder: "ma-joinery/services/wall-panelling", publicId: "wall_panelling_3" },
    { localRelPath: "service/Wall Panelling/Wall Panelling  (4).jpg", folder: "ma-joinery/services/wall-panelling", publicId: "wall_panelling_4" },

    // Fitted Wardrobes
    { localRelPath: "service/Fitted Wardrobes/Fitted Wardrobes (1).jpg", folder: "ma-joinery/services/fitted-wardrobes", publicId: "wardrobes_1" },
    { localRelPath: "service/Fitted Wardrobes/Fitted Wardrobes (2).jpg", folder: "ma-joinery/services/fitted-wardrobes", publicId: "wardrobes_2" },
    { localRelPath: "service/Fitted Wardrobes/Fitted Wardrobes (3).jpg", folder: "ma-joinery/services/fitted-wardrobes", publicId: "wardrobes_3" },
    { localRelPath: "service/Fitted Wardrobes/Fitted Wardrobes (4).jpg", folder: "ma-joinery/services/fitted-wardrobes", publicId: "wardrobes_4" },

    // Cladding Exterior Refresh
    { localRelPath: "service/Cladding  Exterior Refresh/Cladding  Exterior Refresh (1).jpg", folder: "ma-joinery/services/cladding", publicId: "cladding_1" },
    { localRelPath: "service/Cladding  Exterior Refresh/Cladding  Exterior Refresh (2).jpg", folder: "ma-joinery/services/cladding", publicId: "cladding_2" },
    { localRelPath: "service/Cladding  Exterior Refresh/Cladding  Exterior Refresh (3).jpg", folder: "ma-joinery/services/cladding", publicId: "cladding_3" },
    { localRelPath: "service/Cladding  Exterior Refresh/Cladding  Exterior Refresh (4).jpg", folder: "ma-joinery/services/cladding", publicId: "cladding_4" },

    // Fencing
    { localRelPath: "service/Fencing/Fencing (1).jpg", folder: "ma-joinery/services/fencing", publicId: "fencing_1" },
    { localRelPath: "service/Fencing/Fencing (2).jpg", folder: "ma-joinery/services/fencing", publicId: "fencing_2" },
    { localRelPath: "service/Fencing/Fencing (3).jpg", folder: "ma-joinery/services/fencing", publicId: "fencing_3" },
  ];

  for (const item of filesToUpload) {
    const fullPath = path.join(publicDir, item.localRelPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File does not exist: ${fullPath}`);
      continue;
    }
    const secureUrl = await uploadFile(fullPath, item.folder, item.publicId);
    results[item.localRelPath] = secureUrl;
  }

  return results;
}

