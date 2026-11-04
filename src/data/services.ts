import type { LucideIcon } from "lucide-react";
import {
  CookingPot,
  DoorOpen,
  Fence,
  House,
  Layers,
  LayoutPanelLeft,
  PanelsTopLeft,
  AlignVerticalSpaceAround,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  images: string[];
}

export const services: Service[] = [
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    description:
      "Supply and fit a complete kitchen renovation, from strip-out through to modern finishes.",
    icon: CookingPot,
    images: [
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/kitchen/kitchen_1",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/kitchen/kitchen_2",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/kitchen/kitchen_3",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/kitchen/kitchen_4",
    ],
  },
  {
    slug: "garden-rooms-log-cabins",
    title: "Garden Rooms & Log Cabins",
    description:
      "Insulated garden rooms and log cabins, built for extra living space at home.",
    icon: House,
    images: [
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/garden-rooms/garden_rooms_1",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/garden-rooms/garden_rooms_2",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/garden-rooms/garden_rooms_3",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/garden-rooms/garden_rooms_4",
    ],
  },
  {
    slug: "flooring",
    title: "Flooring",
    description:
      "LVT flooring supplied and fitted for a durable, modern finish throughout the home.",
    icon: Layers,
    images: [
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/flooring/flooring_1",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/flooring/flooring_2",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/flooring/flooring_3",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/flooring/flooring_4",
    ],
  },
  {
    slug: "staircases-balustrades",
    title: "Staircases & Balustrades",
    description:
      "Staircase and balustrade work, including oak rails and crisp white spindles.",
    icon: AlignVerticalSpaceAround,
    images: [
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/staircases/staircases_1",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/staircases/staircases_2",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/staircases/staircases_3",
    ],
  },
  {
    slug: "wall-panelling",
    title: "Wall Panelling & Feature Walls",
    description:
      "Shaker panelling, dado and picture rails, and feature walls for a clean, modern look.",
    icon: PanelsTopLeft,
    images: [
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/wall-panelling/wall_panelling_1",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/wall-panelling/wall_panelling_2",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/wall-panelling/wall_panelling_3",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/wall-panelling/wall_panelling_4",
    ],
  },
  {
    slug: "fitted-wardrobes-storage",
    title: "Fitted Wardrobes & Storage",
    description:
      "Fitted wardrobes and storage, including sliding-door units made around your space.",
    icon: DoorOpen,
    images: [
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/fitted-wardrobes/wardrobes_1",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/fitted-wardrobes/wardrobes_2",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/fitted-wardrobes/wardrobes_3",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/fitted-wardrobes/wardrobes_4",
    ],
  },
  {
    slug: "cladding-exterior",
    title: "Cladding & Exterior Refresh",
    description:
      "Composite cladding and exterior refreshes, including soffits and roofing where needed.",
    icon: LayoutPanelLeft,
    images: [
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/cladding/cladding_1",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/cladding/cladding_2",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/cladding/cladding_3",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/cladding/cladding_4",
    ],
  },
  {
    slug: "fencing",
    title: "Fencing",
    description:
      "Garden fencing supplied and fitted, including treated timber runs around the home.",
    icon: Fence,
    images: [
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/fencing/fencing_1",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/fencing/fencing_2",
      "https://res.cloudinary.com/djruawkhq/image/upload/f_auto,q_auto,w_800,c_fill/ma-joinery/services/fencing/fencing_3",
    ],
  },
];
