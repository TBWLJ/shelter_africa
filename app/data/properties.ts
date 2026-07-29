import type {
  PropertyDevelopment,
  PropertyOption,
} from "../types/property";

export const shelterAfricaPlotOptions: PropertyOption[] = [
  {
    id: "300sqm",
    size: "300 sqm",
    price: "₦1,200,000",
    description:
      "A practical plot size for buyers looking to secure land for future development.",
  },
  {
    id: "500sqm",
    size: "500 sqm",
    price: "₦2,000,000",
    description:
      "A larger plot option offering more space for your future building plans.",
    featured: true,
  },
];

export const shelterAfrica2: PropertyDevelopment = {
  id: "shelter-africa-2",
  name: "Shelter Africa 2",
  location: "Abogunde Road, Ogbomoso",
  description:
    "Shelter Africa 2 offers an opportunity to secure a plot of land in Ogbomoso with available options designed to give buyers flexibility in choosing the space that fits their plans.",
  image: "/images/properties/shelter-africa-2-entrance.jpg",
  imageAlt:
    "Entrance gate of Shelter Africa 2 estate on Abogunde Road, Ogbomoso",
  features: [
    {
      id: "registered-survey",
      label: "Registered Survey",
    },
    {
      id: "deed-of-assignment",
      label: "Deed of Assignment",
    },
    {
      id: "secure-environment",
      label: "Secure Environment",
    },
    {
      id: "dry-well-drained",
      label: "Dry & Well Drained",
    },
  ],
  plotOptions: shelterAfricaPlotOptions,
};