type PosterType = {
  id: number;
  name: string;
  image: string;
  tagColor: string;
};

export const data: PosterType[] = [
  {
    id: 1,
    name: "Product Design",
    image: require("@/assets/images/product-design.jpeg"),
    tagColor: "#A0522D",
  },
  {
    id: 2,
    name: "Promotion",
    image: require("@/assets/images/promotions.jpeg"),
    tagColor: "#D3D3D3",
  },
  {
    id: 3,
    name: "Branding",
    image: require("@/assets/images/branding.jpeg"),
    tagColor: "#4B4B4B",
  },
  {
    id: 4,
    name: "Announcement",
    image: require("@/assets/images/announcement.jpeg"),
    tagColor: "#87CEFA",
  },
  {
    id: 5,
    name: "Email Marketing",
    image: require("@/assets/images/email-marketing.jpeg"),
    tagColor: "#FFB347",
  },
];
