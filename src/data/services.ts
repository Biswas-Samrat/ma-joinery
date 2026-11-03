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
      "/service/Kitchen%20Renovations/Kitchen%20Renovations%20(1).jpg",
      "/service/Kitchen%20Renovations/Kitchen%20Renovations%20(2).jpg",
      "/service/Kitchen%20Renovations/Kitchen%20Renovations%20(3).jpg",
      "/service/Kitchen%20Renovations/Kitchen%20Renovations%20(4).jpg",
    ],
  },
  {
    slug: "garden-rooms-log-cabins",
    title: "Garden Rooms & Log Cabins",
    description:
      "Insulated garden rooms and log cabins, built for extra living space at home.",
    icon: House,
    images: [
      "/service/Garden%20Rooms%20%20Log%20Cabins/Garden%20Rooms%20%20Log%20Cabins%20(1).jpg",
      "/service/Garden%20Rooms%20%20Log%20Cabins/Garden%20Rooms%20%20Log%20Cabins%20(2).jpg",
      "/service/Garden%20Rooms%20%20Log%20Cabins/Garden%20Rooms%20%20Log%20Cabins%20(3).jpg",
      "/service/Garden%20Rooms%20%20Log%20Cabins/Garden%20Rooms%20%20Log%20Cabins%20(4).jpg",
    ],
  },
  {
    slug: "flooring",
    title: "Flooring",
    description:
      "LVT flooring supplied and fitted for a durable, modern finish throughout the home.",
    icon: Layers,
    images: [
      "/service/Flooring/Flooring%20(1).jpg",
      "/service/Flooring/Flooring%20(2).jpg",
      "/service/Flooring/Flooring%20(3).jpg",
      "/service/Flooring/Flooring%20(4).jpg",
    ],
  },
  {
    slug: "staircases-balustrades",
    title: "Staircases & Balustrades",
    description:
      "Staircase and balustrade work, including oak rails and crisp white spindles.",
    icon: AlignVerticalSpaceAround,
    images: [
      "/service/Staircases/Staircases%20Balustrades%20(1).jpg",
      "/service/Staircases/Staircases%20Balustrades%20(2).jpg",
      "/service/Staircases/Staircases%20Balustrades%20(3).jpg",
    ],
  },
  {
    slug: "wall-panelling",
    title: "Wall Panelling & Feature Walls",
    description:
      "Shaker panelling, dado and picture rails, and feature walls for a clean, modern look.",
    icon: PanelsTopLeft,
    images: [
      "/service/Wall%20Panelling/Wall%20Panelling%20%20(1).jpg",
      "/service/Wall%20Panelling/Wall%20Panelling%20%20(2).jpg",
      "/service/Wall%20Panelling/Wall%20Panelling%20%20(3).jpg",
      "/service/Wall%20Panelling/Wall%20Panelling%20%20(4).jpg",
    ],
  },
  {
    slug: "fitted-wardrobes-storage",
    title: "Fitted Wardrobes & Storage",
    description:
      "Fitted wardrobes and storage, including sliding-door units made around your space.",
    icon: DoorOpen,
    images: [
      "/service/Fitted%20Wardrobes/Fitted%20Wardrobes%20(1).jpg",
      "/service/Fitted%20Wardrobes/Fitted%20Wardrobes%20(2).jpg",
      "/service/Fitted%20Wardrobes/Fitted%20Wardrobes%20(3).jpg",
      "/service/Fitted%20Wardrobes/Fitted%20Wardrobes%20(4).jpg",
    ],
  },
  {
    slug: "cladding-exterior",
    title: "Cladding & Exterior Refresh",
    description:
      "Composite cladding and exterior refreshes, including soffits and roofing where needed.",
    icon: LayoutPanelLeft,
    images: [
      "/service/Cladding%20%20Exterior%20Refresh/Cladding%20%20Exterior%20Refresh%20(1).jpg",
      "/service/Cladding%20%20Exterior%20Refresh/Cladding%20%20Exterior%20Refresh%20(2).jpg",
      "/service/Cladding%20%20Exterior%20Refresh/Cladding%20%20Exterior%20Refresh%20(3).jpg",
      "/service/Cladding%20%20Exterior%20Refresh/Cladding%20%20Exterior%20Refresh%20(4).jpg",
    ],
  },
  {
    slug: "fencing",
    title: "Fencing",
    description:
      "Garden fencing supplied and fitted, including treated timber runs around the home.",
    icon: Fence,
    images: [
      "/service/Fencing/Fencing%20(1).jpg",
      "/service/Fencing/Fencing%20(2).jpg",
      "/service/Fencing/Fencing%20(3).jpg",
    ],
  },
];
