export const site = {
  name: "M.A Joinery",
  tagline: "Quality workmanship, modern finishes.",
  taglineAlt: "Quality built around you.",
  phoneDisplay: "07857 645534",
  phoneTel: "+447857645534",
  email: "marcadams97@icloud.com",
  instagramUrl: "https://www.instagram.com/m.a.joinery",
  instagramHandle: "@m.a.joinery",
  facebookName: "M.A Joinery",
  // TODO: replace with the real M.A Joinery Facebook page URL when it is known.
  facebookUrl: "https://www.facebook.com/",
  facebookRecommend: "100% recommend (8 reviews)",
  areas: ["Airdrie", "Glasgow", "Edinburgh", "& surrounding areas"] as const,
  locality: "Airdrie",
} as const;

export type Site = typeof site;
