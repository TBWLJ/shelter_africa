import type { ComponentType } from "react";
import {
  FileCheck2,
  FileText,
  ShieldCheck,
  TrendingUp,
  Waves,
} from "lucide-react";

export interface EstateFeature {
  id: string;
  title: string;
  description: string;
icon: ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
}

export const estateFeatures: EstateFeature[] = [
  {
    id: "registered-survey",
    title: "Registered Survey",
    description:
      "The property comes with a registered survey as part of the available documentation.",
    icon: FileCheck2,
  },
  {
    id: "deed-of-assignment",
    title: "Deed of Assignment",
    description:
      "A Deed of Assignment is included among the documentation provided for the property.",
    icon: FileText,
  },
  {
    id: "secure-environment",
    title: "Secure Environment",
    description:
      "A secure environment designed to give property owners confidence in their land ownership journey.",
    icon: ShieldCheck,
  },
  {
    id: "investment-opportunity",
    title: "Investment Opportunity",
    description:
      "An opportunity to secure land for your future plans and long-term property goals.",
    icon: TrendingUp,
  },
  {
    id: "dry-well-drained",
    title: "Dry & Well Drained",
    description:
      "The estate is described as dry and well drained, providing a suitable foundation for future development.",
    icon: Waves,
  },
];