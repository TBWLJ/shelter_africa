import {
  BadgeCheck,
  FileCheck2,
  HandCoins,
  MapPinned,
} from "lucide-react";
import type { ComponentType } from "react";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
}

export const propertyPurchaseProcess: ProcessStep[] = [
  {
    id: "choose-your-plot",
    number: "01",
    title: "Choose Your Plot",
    description:
      "Explore the available plot sizes and select the option that best suits your plans and budget.",
    icon: MapPinned,
  },
  {
    id: "make-your-deposit",
    number: "02",
    title: "Make Your Initial Deposit",
    description:
      "Begin your property ownership journey with the required initial deposit for your selected plot.",
    icon: HandCoins,
  },
  {
    id: "receive-your-allocation",
    number: "03",
    title: "Receive Your Allocation",
    description:
      "Proceed through the allocation process for your selected plot after completing the required steps.",
    icon: BadgeCheck,
  },
  {
    id: "complete-documentation",
    number: "04",
    title: "Complete Your Documentation",
    description:
      "Complete the relevant documentation associated with your land purchase and ownership process.",
    icon: FileCheck2,
  },
];