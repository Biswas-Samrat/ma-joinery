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
    image: "/projects/1600607687939-ce8a6c25118c.jpg",
    hasBeforeAfter: true,
  },
  {
    id: "bespoke-garden-room-airdrie",
    title: "Bespoke Garden Room, Airdrie",
    category: "Garden Rooms",
    description:
      "7.5m × 5m, fully insulated, dark grey composite cladding, EPDM roof with a 20-year guarantee.",
    image: "/projects/1600585154340-be6161a56a0c.jpg",
    hasBeforeAfter: false,
  },
  {
    id: "log-cabin-home-gym",
    title: "Log Cabin Home Gym",
    category: "Garden Rooms",
    description: "5.5m × 4.5m tongue-and-groove interlocking cabin.",
    image: "/projects/1600585154526-990dced4db0d.jpg",
    hasBeforeAfter: false,
  },
  {
    id: "garden-room-cladding-refresh",
    title: "Garden Room Cladding Refresh",
    category: "Exterior",
    description:
      "New composite cladding, Moondust Grey soffit, and a new felt roof.",
    image: "/projects/1600566753190-17f0baa2a6c3.jpg",
    hasBeforeAfter: false,
  },
  {
    id: "staircase-transformation-airdrie",
    title: "Staircase Transformation, Airdrie",
    category: "Interiors",
    description: "Oak balustrade with crisp white spindles.",
    image: "/projects/1600607687920-4e2a09cf159d.jpg",
    hasBeforeAfter: false,
  },
  {
    id: "dado-picture-rail",
    title: "Dado & Picture Rail",
    category: "Interiors",
    description: "Dado and picture rail fitted for a clean interior finish.",
    image: "/projects/1600210492486-724fe5c67fb0.jpg",
    hasBeforeAfter: true,
  },
  {
    id: "room-split-shaker-panelling",
    title: "Room Split with Shaker Panelling",
    category: "Interiors",
    description:
      "A room divided for extra living space, with shaker panelling in the bedroom and a living room feature wall.",
    image: "/projects/1600566753086-00f18fb6b3ea.jpg",
    hasBeforeAfter: true,
  },
  {
    id: "black-feature-wall",
    title: "Black Feature Wall",
    category: "Interiors",
    description: "A black feature wall finished as part of an interior refresh.",
    image: "/projects/1600566752355-35792bedcfea.jpg",
    hasBeforeAfter: false,
  },
  {
    id: "lvt-flooring-fitted-wardrobes",
    title: "LVT Flooring & Fitted Wardrobes",
    category: "Interiors",
    description:
      "LVT flooring throughout a bungalow plus sliding-door wardrobes.",
    image: "/projects/1600585152915-d208bec867a1.jpg",
    hasBeforeAfter: false,
  },
  {
    id: "new-garden-fencing",
    title: "New Garden Fencing",
    category: "Exterior",
    description: "40 metres of green-treated 4ft fencing.",
    image: "/projects/garden-fence.jpg",
    hasBeforeAfter: false,
  },
];
