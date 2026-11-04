export const projectCategories = [
  "All",
  "Kitchens",
  "Garden Rooms",
  "Interiors",
  "Exterior",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image?: string;
  beforeImage?: string;
  afterImage?: string;
  hasBeforeAfter: boolean;
}

export const projects: Project[] = [
  {
    id: "kitchen-renovation",
    title: "Kitchen Renovation",
    category: "Kitchens",
    description: "A complete kitchen renovation from strip-out to finish.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/kitchen-renovation",
    beforeImage: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_1200,c_fill/ma-joinery/featured/before",
    afterImage: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_1200,c_fill/ma-joinery/featured/after",
    hasBeforeAfter: true,
  },
  {
    id: "bespoke-garden-room-airdrie",
    title: "Bespoke Garden Room, Airdrie",
    category: "Garden Rooms",
    description:
      "7.5m × 5m, fully insulated, dark grey composite cladding, EPDM roof with a 20-year guarantee.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/bespoke-garden-room",
    hasBeforeAfter: false,
  },
  {
    id: "log-cabin-home-gym",
    title: "Log Cabin Home Gym",
    category: "Garden Rooms",
    description: "5.5m × 4.5m tongue-and-groove interlocking cabin.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/log-cabin-home-gym",
    hasBeforeAfter: false,
  },
  {
    id: "garden-room-cladding-refresh",
    title: "Garden Room Cladding Refresh",
    category: "Exterior",
    description:
      "New composite cladding, Moondust Grey soffit, and a new felt roof.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/garden-room-cladding",
    hasBeforeAfter: false,
  },
  {
    id: "staircase-transformation-airdrie",
    title: "Staircase Transformation, Airdrie",
    category: "Interiors",
    description: "Oak balustrade with crisp white spindles.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/staircase-transformation",
    hasBeforeAfter: false,
  },
  {
    id: "dado-picture-rail",
    title: "Dado & Picture Rail",
    category: "Interiors",
    description: "Dado and picture rail fitted for a clean interior finish.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/dado-picture-rail",
    hasBeforeAfter: true,
  },
  {
    id: "room-split-shaker-panelling",
    title: "Room Split with Shaker Panelling",
    category: "Interiors",
    description:
      "A room divided for extra living space, with shaker panelling in the bedroom and a living room feature wall.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/room-split-panelling",
    hasBeforeAfter: true,
  },
  {
    id: "black-feature-wall",
    title: "Black Feature Wall",
    category: "Interiors",
    description: "A black feature wall finished as part of an interior refresh.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/black-feature-wall",
    hasBeforeAfter: false,
  },
  {
    id: "lvt-flooring-fitted-wardrobes",
    title: "LVT Flooring & Fitted Wardrobes",
    category: "Interiors",
    description:
      "LVT flooring throughout a bungalow plus sliding-door wardrobes.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/lvt-flooring-wardrobes",
    hasBeforeAfter: false,
  },
  {
    id: "new-garden-fencing",
    title: "New Garden Fencing",
    category: "Exterior",
    description: "40 metres of green-treated 4ft fencing.",
    image: "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/projects/new-garden-fencing",
    hasBeforeAfter: false,
  },
];
