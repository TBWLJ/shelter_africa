import type { ComponentType } from "react";

export interface PropertyOption {
  id: string;
  size: string;
  price: string;
  description: string;
  featured?: boolean;
}

export interface PropertyFeature {
  id: string;
  label: string;
}

export interface PropertyDevelopment {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  features: PropertyFeature[];
  plotOptions: PropertyOption[];
}